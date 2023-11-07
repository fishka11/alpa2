import MotionCardsWithIcon from "./components/motionCardsWithIcon";
import getData from "./lib/fetchAPI";
import { getMarketingPagesContent } from "./lib/queries";
import Cover from "./components/cover";
import { Suspense } from "react";
import TextBlock from "./components/textBlock";

export async function generateMetadata() {
  const data = await getData(getMarketingPagesContent("/"));
  const metaData = data?.marketingPages[0];
  if (metaData.seo) {
    return {
      title: metaData.seo?.title,
      description: metaData.seo?.description,
      keywords: metaData.seo?.keywords,
    };
  }
}

export default async function Home() {
  const data = await getData(getMarketingPagesContent("/"));
  const content = data?.marketingPages[0];
  return (
    <>
      <Suspense>
        <Cover slug={"/"} />
      </Suspense>
      <Suspense>
        <section id="content" className="bg-white">
          <div className="container max-w-5xl py-12 px-3">
            <TextBlock texts={content?.texts} />
            <MotionCardsWithIcon cards={content?.cardsWithIcon} />
          </div>
        </section>
      </Suspense>
    </>
  );
}
