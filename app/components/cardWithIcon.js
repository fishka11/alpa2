import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";

config.autoAddCss = false;
library.add(fas);

export default function CardWithIcon({ subtitle, texts, fontAwesomeIconName }) {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-gray-100 p-8">
      <div className="md:w-1/6 relative w-full h-full md:border-r border-amber-500 mb-8 md:mb-0 md:mr-10">
        <FontAwesomeIcon
          icon={fontAwesomeIconName}
          className="text-5xl text-amber-500 transition-colors group-hover:text-white "
        />
      </div>
      <div className="md:w-5/6 relative">
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
    </div>
  );
}
