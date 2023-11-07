import LeadingImage from "../../components/leadingImage";
import TextBlock from "../../components/textBlock";
import Portfolio from "../../components/portfolio";
import getData from "../../lib/fetchAPI";
import preProcessPics from "../../lib/picturesPreProcess";
import {
  getMarketingPagesContent,
  getPolishTagNames,
  getPortfolio,
} from "../../lib/queries";

export async function generateMetadata() {
  const data = await getData(getMarketingPagesContent("realizacje"));
  const metaData = data?.marketingPages[0];
  if (metaData.seo) {
    return {
      title: metaData.seo?.title,
      description: metaData.seo?.description,
      keywords: metaData.seo?.keywords,
    };
  }
}

export default async function Realisations() {
  const data1 = await getData(getMarketingPagesContent("realizacje"));
  const data2 = await getData(getPolishTagNames);
  const data3 = await getData(getPortfolio("all"));
  const content = data1?.marketingPages[0];
  const categories = data2?.tags;
  const pictures = await preProcessPics(data3.assets);

  return (
    <>
      <LeadingImage img={content?.header} pageTitle={content?.title} />
      <div className="container max-w-7xl py-12 px-3">
        <TextBlock texts={content?.texts} />
        <Portfolio pictures={pictures} categories={categories} />
      </div>
    </>
  );
}
