"use server";

import { createStreamableValue } from "ai/rsc";
import { ChatMessage } from "@langchain/core/messages";
import { OpenAIEmbeddings } from "@langchain/openai";
import { NeonPostgres } from "@langchain/community/vectorstores/neon";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatOpenAI } from "@langchain/openai";
export interface Message {
  role: "user" | "assistant";
  content: string;
}

const systemTemplate = [
  `You are an assistant created by the FintechX company for question-answering tasks.`,
  `Always answer the question using the language of the question`,
  `Always answer the question using Markdown format`,
  `Use the following pieces of retrieved context to answer `,
  `the question. If you don't know the answer, say that you `,
  `don't know. Use three sentences maximum and keep the `,
  `answer concise.`,
  `\n\n`,
  `{context}`,
].join("");

const prompt = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate],
  ["human", "{input}"],
]);

export async function conversation(messages: ChatMessage[], input: string) {
  const stream = createStreamableValue();

  (async () => {
    const llm = new ChatOpenAI({
      model: "gpt-4o-mini",
      temperature: 0,
    });
    const embeddings = new OpenAIEmbeddings({
      dimensions: 256,
      model: "text-embedding-3-small",
    });
    const vectorStore = await NeonPostgres.initialize(embeddings, {
      connectionString: process.env.POSTGRES_URL as string,
    });
    const retriever = vectorStore.asRetriever();
    const questionAnswerChain = await createStuffDocumentsChain({
      llm,
      prompt,
    });
    const ragChain = await createRetrievalChain({
      retriever,
      combineDocsChain: questionAnswerChain,
    });
    const response = await ragChain.stream({
      input,
    });

    for await (const chunk of response) {
      if (chunk?.answer) {
        stream.update(chunk.answer);
      }
    }

    stream.done();
  })();

  return {
    messages,
    newMessage: stream.value,
  };
}
