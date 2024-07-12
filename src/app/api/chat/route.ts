// Handling User questions
export async function POST(req: any) {
  try {
    const reqBody: any = await req.json();
    let questions: any[] = [];
    reqBody.data.forEach((item: any, index: any) => {
      for (const key in item) {
        if (key.startsWith('q') && item[key]) {
          questions = [...questions, `${item[key]}`];
        }
      }
    });

    // Creating retriever object with mmr type

    // Fetching contexts related to questions asked from db

    // Main prompt
    const prompt = `Use the following context as your learned knowledge, inside <context></context> XML tags.
		<context>
		  [context]
		</context>
		
		When answer to user:
		- If you don't know, just say that you don't know.
		- If you don't know when you are not sure, ask for clarification.
		Avoid mentioning that you obtained the information from the context.
		And answer according to the language of the user's question.
				
		Given the context information, answer the query.
		Query: [query]`;
  } catch (error) {
    console.log('ERROR: ', error);
    return Response.json({ message: 'Error occurred' }, { status: 500 });
  }
}
