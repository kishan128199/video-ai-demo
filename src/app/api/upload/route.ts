import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { dbClient, embeddings } from '@/database';
import { QdrantVectorStore } from '@langchain/qdrant';
// Creating vector index in mongo atlas on pdf uplaod
export async function POST(req: any) {
  try {
    // First clear previous data from  mongodb

    console.log('Audio extraction complete');
    // Loading pdf from request
    const formData = await req.formData();
    const file = formData.get('file');
    const blob: any = new Blob([Buffer.from(await file.arrayBuffer())]);

    // Setting up doc loader to fetch text from pdf
    const loader = new PDFLoader(blob);
    const doc = await loader.load();

    // let text = '';
    // doc.forEach((page: any) => {
    //   text += page.pageContent;
    // });
    // const splitter = new CharacterTextSplitter({
    //   separator: '\n',
    //   chunkSize: 1000,
    //   chunkOverlap: 200,
    // });
    // // // Creating docs for easier embeddings
    // const docs: any = await splitter.createDocuments([text]);

    // // Creating index from generated docs and embeddings
    console.log(doc);
    const responseFromDb = await QdrantVectorStore.fromDocuments(
      doc,
      embeddings,
      {
        url: process.env.NEXT_PUBLIC_QDRANT_API_KEY,
        collectionName: 'a_test_collection',
        client: dbClient,
      }
    );
    return Response.json(
      { message: 'Upload successfully', responseFromDb },
      { status: 200 }
    );
  } catch (error) {
    console.log('ERROR: ', error);
    return Response.json({ message: 'Error occurred', error }, { status: 500 });
  }
}
