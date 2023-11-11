import LeadingImage from "../../components/leadingImage";
import Metamorphoses from "../../components/metamprphoses";
import TextBlock from "../../components/textBlock";
import getData from "../../lib/fetchAPI";
import { getMarketingPagesContent, getMetamorphoses } from "../../lib/queries";

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
  const content = data1?.marketingPages[0];
  const metamorphoses = data2?.metamorphoses;

  return (
    <>
      <LeadingImage picture={content?.header} pageTitle={content?.title} />
      <div className="container max-w-7xl py-12 px-3">
        <TextBlock texts={content?.texts} />
        <Metamorphoses metamorphoses={metamorphoses} />
      </div>
    </>
  );
}
