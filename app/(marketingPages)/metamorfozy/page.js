import LeadingImage from "../../components/leadingImage";
import MotionMetamorphoses from "../../components/motionMetamprphoses";
import TextBlock from "../../components/textBlock";
import preProcessPics from "../../lib/picturesPreProcess";
import getData from "../../lib/fetchAPI";
import {
  getMarketingPagesContent,
  getMetamorphoses,
  getPortfolio,
} from "../../lib/queries";

export async function generateMetadata() {
  const data = await getData(getMarketingPagesContent("metamorfozy"));
  const metaData = data?.marketingPages[0];
  if (metaData.seo) {
    return {
      title: metaData.seo?.title,
      description: metaData.seo?.description,
      keywords: metaData.seo?.keywords,
    };
  }
}

export default async function MetamorphosesPage() {
  const data1 = await getData(getMarketingPagesContent("metamorfozy"));
  const data2 = await getData(getMetamorphoses);
  // const data3 = await getData(getPortfolio("metamorphose"));
  const content = data1?.marketingPages[0];
  const metamorphoses = data2?.metamorphoses;
  // const pictures = await preProcessPics(data3.assets);

  // const reducedMetamorphoses = metamorphoses.map((meta) => {
  //   const beforeIds = meta.before.map((beforePic) => beforePic.id);
  //   const afterIds = meta.after.map((afterPic) => afterPic.id);
  //   const beforeAfterIds = meta.beforeAfter.map(
  //     (beforeAfterPic) => beforeAfterPic.id
  //   );
  //   const newBefore = pictures.filter((pic) =>
  //     beforeIds.includes(pic.public_id)
  //   );
  //   const newAfter = pictures.filter((pic) => afterIds.includes(pic.public_id));
  //   const newBeforeAfter = pictures.filter((pic) =>
  //     beforeAfterIds.includes(pic.public_id)
  //   );
  //   const newMeta = {
  //     ...meta,
  //     before: newBefore,
  //     after: newAfter,
  //     beforeAfter: newBeforeAfter,
  //   };
  //   return newMeta;
  // });

  return (
    <>
      <LeadingImage picture={content?.header} pageTitle={content?.title} />
      <div className="container max-w-7xl py-12 px-3">
        <TextBlock texts={content?.texts} />
        <MotionMetamorphoses metamorphoses={metamorphoses} />
      </div>
    </>
  );
}
