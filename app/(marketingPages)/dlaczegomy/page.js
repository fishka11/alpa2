import LeadingImage from "../../components/leadingImage";
import TextBlock from "../../components/textBlock";
import MotionCardsWithIcon from "../../components/motionCardsWithIcon";
import getData from "../../lib/fetchAPI";
import { getMarketingPagesContent } from "../../lib/queries";
import MotionHeading from "../../components/motionHeading";

export async function generateMetadata() {
  const data = await getData(getMarketingPagesContent("dlaczegomy"));
  const metaData = data?.marketingPages[0];
  if (metaData.seo) {
    return {
      title: metaData.seo?.title,
      description: metaData.seo?.description,
      keywords: metaData.seo?.keywords,
    };
  }
}

export default async function WhyUs() {
  const data = await getData(getMarketingPagesContent("dlaczegomy"));
  const content = data?.marketingPages[0];
  return (
    <>
      <LeadingImage img={content?.header} pageTitle={content?.title} />

      <div className="container max-w-7xl py-12 px-3">
        <TextBlock texts={content?.texts} />
        <MotionHeading
          classes="text-2xl mt-8"
          text="Co nas wyróżnia?"
          level="h2"
        />
        <MotionCardsWithIcon cards={content?.cardsWithIcon} />
      </div>
    </>
  );
}
