import Image from "next/image";
import Link from "next/link";
import preProcessPics from "../lib/picturesPreProcess";
import getData from "../lib/fetchAPI";
import { getMarketingPagesContent } from "../lib/queries";

export default async function Cover({ slug }) {
  const data = await getData(getMarketingPagesContent(slug));
  const content = data?.marketingPages[0];
  const imageStyle = {
    objectFit: "cover",
    objectPosition: `50% ${
      content?.header?.verticalPosition ? content.header.verticalPosition : `50`
    }%`,
  };

  const reducedPicture = await preProcessPics([content.header.picture]);

  return (
    <div className="relative overflow-clip">
      <div className="aria-hidden fixed top-0 -z-50 flex min-h-screen w-full overflow-clip before:absolute before:h-full before:w-full before:bg-white before:opacity-10">
        {console.log(reducedPicture[0])}
        <Image
          src={reducedPicture[0]?.url}
          width={reducedPicture[0]?.width}
          height={reducedPicture[0]?.height}
          blurDataURL={reducedPicture[0]?.blurDataURL}
          placeholder={reducedPicture[0]?.blurDataURL ? "blur" : "empty"}
          style={imageStyle}
          sizes="100vw"
          className="aria-hidden h-screen w-full"
          alt="Obrazek tła"
        />
      </div>
      <div className="container flex justify-center">
        <div className="flex max-w-screen-xl flex-col justify-center pb-20 pt-24 md:pt-40 md:pb-28 w-screen">
          <div className="to-transpatent bg-opacity-20 bg-gradient-to-r from-transparent from-5% via-black/50 via-50% to-95% px-16 py-12">
            <Image
              className="m-auto"
              src="images/logoAlpa.svg"
              width={300}
              height={200}
              quality={100}
              alt="logo Alpa Home Design"
            />
            <h1 className="m-auto max-w-screen-sm pb-4 pt-8 text-center text-lg  uppercase text-white drop-shadow-2xl md:text-2xl">
              {content?.header?.slogans[0]} <br /> {content?.header?.slogans[1]}
            </h1>
          </div>
          <div className="container mt-10 flex max-w-screen-md md:flex-row md:justify-center flex-col gap-6">
            <Link
              className="transform-gpu rounded bg-indigo-900 w-48 px-4 py-2 text-center uppercase text-white no-underline transition-all hover:bg-indigo-600"
              href={content?.header?.ctaButtons[0]?.url}
            >
              {content?.header?.ctaButtons[0]?.text}
            </Link>
            <Link
              className="transform-gpu rounded bg-indigo-900 w-48 px-4 py-2 text-center uppercase text-white no-underline transition-all hover:bg-indigo-600"
              href={content?.header?.ctaButtons[1]?.url}
            >
              {content?.header?.ctaButtons[1]?.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
