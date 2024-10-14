import { NextRequest, NextResponse } from "next/server";
import { OpenAIEmbeddings } from "@langchain/openai";
import { NeonPostgres } from "@langchain/community/vectorstores/neon";

import { documentFromBlob, parseError } from "@/config/utils";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = (body.file as Blob) || null;

    if (!file) {
      throw { message: "No file provided", status: 400 };
    }
    const embeddings = new OpenAIEmbeddings({
      dimensions: 256,
      model: "text-embedding-3-small",
    });
    const vectorStore = await NeonPostgres.initialize(embeddings, {
      connectionString: process.env.POSTGRES_URL as string,
    });

    const docs = await documentFromBlob(file);
    const ids = await vectorStore.addDocuments(docs);

    return NextResponse.json({ ids });
  } catch (e) {
    const parsed = parseError(e);

    return NextResponse.json(
      { error: parsed.message },
      { status: parsed.status }
    );
  }
}
