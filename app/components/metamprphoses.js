import preProcessPics from "../lib/picturesPreProcess";
import { v4 as uuidv4 } from "uuid";

export default async function Metamorphoses({ metamorphoses }) {
  return (
    <>
      {metamorphoses.map(async (meta) => {
        const before = await preProcessPics(meta.before);
        const after = await preProcessPics(meta.after);
        const beforeAfter = await preProcessPics(meta.beforeAfter);
        return (
          <div key={uuidv4()}>
            <h2>{meta.title}</h2>
          </div>
        );
      })}
    </>
  );
}
