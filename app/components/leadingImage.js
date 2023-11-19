import Image from "next/image";
import preProcessPics from "../lib/picturesPreProcess";

export default async function LeadingImage({
  picture: leadingPicture,
  pageTitle,
}) {
  const imageStyle = {
    objectFit: "cover",
    objectPosition: `50% ${
      leadingPicture?.verticalPosition ? leadingPicture.verticalPosition : `50%`
    }%`,
  };
  const reducedPicture = await preProcessPics([leadingPicture.picture]);
  return (
    <section id="leading-image">
      <div className="relative h-60 w-full overflow-hidden bg-slate-200 lg:h-96">
        <div className="relative z-30 text-white container max-w-7xl mx-auto h-60 lg:h-96">
          <h1 className="absolute bottom-0 bg-indigo-950 uppercase my-0 py-0 leading-none px-2">
            {pageTitle}
          </h1>
        </div>
        <Image
          src={await reducedPicture[0]?.url}
          blurDataURL={await reducedPicture[0]?.blurDataURL}
          placeholder={
            (await reducedPicture[0]?.blurDataURL) ? "blur" : "empty"
          }
          fill
          alt="Zdjecie w nagłówku"
          style={imageStyle}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
