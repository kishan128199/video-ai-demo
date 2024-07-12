import { QdrantVectorStore } from '@langchain/qdrant';
import { OllamaEmbeddings } from '@langchain/community/embeddings/ollama';
import { QdrantClient } from '@qdrant/js-client-rest';

const dbClient = new QdrantClient({
  url: process.env.NEXT_PUBLIC_QDRANT_API_KEY,
  apiKey: 'Ua4fiyu7jExpvJaz3bn9hCytygHavoraOic8sb9BPn1VpYih3D0BOA',
  port: 6333,
});
const embeddings: any = new OllamaEmbeddings({
  baseUrl: process.env.NEXT_PUBLIC_OLLAMA_URI, // In Node.js defaults to process.env.OPENAI_API_KEY
  model: 'llama3',
});

export { embeddings, dbClient };
