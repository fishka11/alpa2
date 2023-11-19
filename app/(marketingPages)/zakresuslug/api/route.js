import preProcessPics from "../../../lib/picturesPreProcess";

export async function POST(request) {
  const res = await preProcessPics([request]);
  const data = await res[0];
  console.log(await data);

  return Response.json({ data });
}
