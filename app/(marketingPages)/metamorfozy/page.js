import LeadingImage from "../../components/leadingImage";
import Metamorphose from "../../components/metamprphose";
import TextBlock from "../../components/textBlock";
import getData from "../../lib/fetchAPI";
import preProcessPics from "../../lib/picturesPreProcess";
import { getMarketingPagesContent, getPortfolio } from "../../lib/queries";

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

export default async function Metamorphoses() {
  const data1 = await getData(getMarketingPagesContent("metamorfozy"));
  const data2 = await getData(getPortfolio("metamorphose"));
  const content = data1?.marketingPages[0];
  const pictures = await preProcessPics(data2.assets);

  return (
    <>
      <LeadingImage img={content?.header} pageTitle={content?.title} />
      <div className="container max-w-7xl py-12 px-3">
        <TextBlock texts={content?.texts} />
        <Metamorphose
          pictures={pictures}
          metamorphoses={content.metamorphoses}
        />
      </div>
    </>
  );
}
