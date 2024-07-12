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
    const prompt = `
      Brief about the pdf: ${'userContext'}
      Please provide answers to the following questions using the pdf context which is mentioned below and make sure to give response in JSON format only. There can be either one or more questions, so make sure to start the json response with Ans1 and then Ans2(if more than one question) & so on.
      ${'questionString'}
      -----------------------
      pdf context:-  ${'contexts'}

      `;
  } catch (error) {
    console.log('ERROR: ', error);
    return Response.json({ message: 'Error occurred' }, { status: 500 });
  }
}
