import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Metamorphose({ meta }) {
  const picturesStrip =
    meta.beforeAfter.length >= 3
      ? meta.beforeAfter.slice(0, 3)
      : meta.beforeAfter;

  return (
    <Link
      href={`metamorfozy/${meta.slug}`}
      className="hover:bg-orange-100 w-full transform-gpu transition-all"
    >
      <div className="flex flex-col p-8">
        <h2 className="text-indigo-900 text-xl font-medium uppercase">
          {meta.title}
        </h2>
        <div className="basis-full">
          {meta.texts.map((tx) => {
            return (
              <div key={uuidv4()}>
                {tx.subtitle && <h3>{tx.subtitle}</h3>}
                <ReactMarkdown>{tx.text.markdown}</ReactMarkdown>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-stretch gap-4">
          {picturesStrip.map((photo) => {
            return (
              <div className="basis-1/3" key={photo.id}>
                <Image
                  width={200}
                  height={150}
                  src={photo.url}
                  blurDataURL={photo.blurDataUrl}
                  placeholder={"blurDataUrl" in photo ? "blur" : "empty"}
                  alt="Zdjęcie do metamorfozy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
