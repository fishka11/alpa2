import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeadingImage from "../../../components/leadingImage";
import getData from "../../../lib/fetchAPI";
import {
  getMarketingPagesContent,
  getMetamorphoses,
  getPortfolio,
} from "../../../lib/queries";
import Link from "next/link";
import MetaPortfolio from "../../../components/metaPortfolio";
import preProcessPics from "../../../lib/picturesPreProcess";

export async function generateStaticParams() {
  const data = await getData(getMetamorphoses);
  return data.metamorphoses.map((meta) => ({
    slug: meta?.slug || "",
  }));
}

export default async function MetamorphosePage({ params }) {
  const { slug } = params;

  const data1 = await getData(getMarketingPagesContent("metamorfozy"));
  const data2 = await getData(getMetamorphoses);
  const data3 = await getData(getPortfolio("metamorphose"));
  const content = data1?.marketingPages[0];
  const metamorphose = data2?.metamorphoses.filter(
    (meta) => meta.slug.toLowerCase() === slug.toLowerCase()
  )[0];
  const pictures = await preProcessPics(data3.assets);

  const beforeIds = metamorphose?.before.map((beforePic) => beforePic.id);
  const afterIds = metamorphose?.after.map((afterPic) => afterPic.id);
  const beforeAfterIds = metamorphose?.beforeAfter.map(
    (beforeAfterPic) => beforeAfterPic.id
  );
  const newBefore = pictures.filter((pic) => beforeIds.includes(pic.public_id));
  const newAfter = pictures.filter((pic) => afterIds.includes(pic.public_id));
  const newBeforeAfter = pictures.filter((pic) =>
    beforeAfterIds.includes(pic.public_id)
  );
  const reducedMetamorphose = {
    ...metamorphose,
    before: newBefore,
    after: newAfter,
    beforeAfter: newBeforeAfter,
  };

  return (
    <>
      <LeadingImage picture={content?.header} pageTitle={content?.title} />
      <div className="container max-w-7xl py-12 px-3">
        <Link href="/metamorfozy">
          <div className="flex flex-row items-center group">
            <FontAwesomeIcon
              className="text-3xl text-amber-500 ml-3 group-hover:ml-0 transform-gpu transition-all"
              icon="fa-solid fa-circle-arrow-left"
            />
            <p className="transform-gpu transition-all ml-3 group-hover:ml-6 mb-0 font-bold text-xl text-indigo-950">
              Powrót
            </p>
          </div>
        </Link>

        <h2 className="mt-6">{metamorphose.title}</h2>
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="w-full md:w-1/2 bg-gray-100 py-4 px-6">
            <h3 className="uppercase text-xl font-bold text-indigo-900 mb-3">
              Przed
            </h3>
            <MetaPortfolio pictures={reducedMetamorphose.before} />
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 py-4 px-6">
            <h3 className="uppercase text-xl font-bold text-indigo-900 mb-3">
              Po
            </h3>
            <MetaPortfolio pictures={reducedMetamorphose.after} />
          </div>
        </div>
        <div className="w-full bg-gray-100 py-4 px-6 mt-5">
          <h3 className="uppercase text-xl font-bold text-indigo-900 mb-3">
            Przed-Po
          </h3>
          <MetaPortfolio pictures={reducedMetamorphose.beforeAfter} />
        </div>
      </div>
    </>
  );
}
