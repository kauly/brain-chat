# Brain App

Brain App is a chat bot specialized in answer question about the fictional company FintechX. It's using LanChain to do RAG on documents embed in a Vercel Postgress database.
I'm using OpenAi models for completions and embedding.

## RAG

I created a PDF, `public/fintechx.pdf`, with info about the company. To generate embeddings and store the file I made an endpoint that receives the file. Requests to this endpoint can be done with Postman and alike. The request will look like this:

```curl
curl --location 'http://localhost:3000/api/embed' \
--form 'file=@"/home/kauly/Downloads/fintechx.pdf"'
```

## Running

To run this project it's necessary to create a Vercel project with a Postgres database. Instructions to connect a local project to the database can be found [here](https://vercel.com/docs/storage/vercel-postgres/quickstart). An OpenAI key is also necessary. All the envs variables necessary can be found on the `.env.example` file.

## Demo

https://brain-chat-iota.vercel.app/
