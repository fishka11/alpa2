import Cookies from "./components/cookies";
import Header from "./components/header";
import Footer from "./components/footer";
import getData from "./lib/fetchAPI";
import { getLayoutsSEO } from "./lib/queries";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  preload: true,
  display: "block",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

config.autoAddCss = false;
library.add(fas);

export async function generateMetadata() {
  const data = await getData(getLayoutsSEO);
  const metaData = data.layoutsSEO.filter(
    (layout) => layout.name === "rootLayoutSEO"
  );

  return {
    title: {
      default:
        metaData?.seo?.title ||
        "Alpa Home Design - Usługi remontowo-wykończeniowe",
    },
    description:
      metaData?.seo?.description ||
      "Remonty, usługi remontowe, usługi remontowo-wykończeniowe, usługi wykończeniowe, remonty mieszkań, wykończeniówka.",
    keywords:
      metaData?.seo?.keywords ||
      "Remonty, usługi remontowe, usługi remontowo-wykończeniowe, usługi wykończeniowe, remonty mieszkań, wykończeniówka.",
    authors: [{ name: "Rafał Piaśnik", url: "" }],
    formatDetection: {
      email: true,
      address: false,
      telephone: true,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${montserrat.className}`}>
      <body>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <Cookies />
      </body>
    </html>
  );
}
