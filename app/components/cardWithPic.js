import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";

export default async function CardWithPic({ subtitle, texts, picture }) {
  const imageStyle = {
    objectFit: "cover",
    objectPosition: "center",
  };

  // const reducedPicture = await fetch("zakresuslug/api", {
  //   method: "POST",
  //   body: JSON.stringify({ picture }),
  //   headers: { "content-type": "application/json" },
  // });
  // console.log(await reducedPicture);

  return (
    <div className="flex flex-col md:flex-row justify-between bg-gray-100 p-8 mb-8 gap-8">
      <div className="md:w-3/4 relative md:border-r md:pr-8 md:border-amber-500">
        <h2 className="text-indigo-900 text-xl font-medium">{subtitle}</h2>
        <div>
          {texts.map((tx) => {
            return (
              <div key={uuidv4()}>
                {tx.subtitle && <h3>{tx.subtitle}</h3>}
                <ReactMarkdown>{tx.text.markdown}</ReactMarkdown>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:w-1/4 relative w-full h-24 md:h-auto">
        <Image
          src={picture.url}
          alt="Zdjęcie dekoracyjne"
          fill
          style={imageStyle}
          sizes="100%"
        />
      </div>
    </div>
  );
}
