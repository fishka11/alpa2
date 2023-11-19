import LeadingImage from "../../components/leadingImage";
import TextBlock from "../../components/textBlock";
import MotionCardsWithPic from "../../components/motionCardsWithPic";
import getData from "../../lib/fetchAPI";
import { getMarketingPagesContent } from "../../lib/queries";

export async function generateMetadata() {
  const data = await getData(getMarketingPagesContent("zakresuslug"));
  const metaData = data?.marketingPages[0];
  if (metaData.seo) {
    return {
      title: metaData.seo?.title,
      description: metaData.seo?.description,
      keywords: metaData.seo?.keywords,
    };
  }
}

export default async function Services() {
  const data = await getData(getMarketingPagesContent("zakresuslug"));
  const content = data?.marketingPages[0];

  return (
    <>
      <LeadingImage picture={content?.header} pageTitle={content?.title} />
      <div className="container max-w-7xl py-12 px-3">
        <TextBlock texts={content?.texts} />
        <MotionCardsWithPic cards={content?.cardsWithPic} />
      </div>
    </>
  );
}
