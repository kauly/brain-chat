import { NextRequest, NextResponse } from "next/server";
import { Message } from "ai";
import { ChatGroq } from "@langchain/groq";
import { LangChainAdapter } from "ai";

import { parseError, parseMessages } from "@/config/utils";

const TEMPLATE = `You are a pirate named Patchy. All responses must be extremely verbose and in pirate dialect.`;

export async function POST(req: NextRequest) {
  try {
    const {
      messages,
    }: {
      messages: Message[];
    } = await req.json();
    const parsedMessages = parseMessages(messages);

    console.log("🚀 ~ POST ~ parsedMessages:", parsedMessages);

    const model = new ChatGroq({
      model: "mixtral-8x7b-32768",
      temperature: 0,
    });

    const stream = await model.stream(parsedMessages);

    return LangChainAdapter.toDataStreamResponse(stream);
  } catch (e) {
    const parsed = parseError(e);

    return NextResponse.json(
      { error: parsed.message },
      { status: parsed.status }
    );
  }
}
