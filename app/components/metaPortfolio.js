"use client";

import PortfolioImage from "./portfolioImage";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";

export default function MetaPortfolio({ pictures }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <section>
        <AnimatePresence>
          <PhotoAlbum
            layout="masonry"
            photos={pictures}
            renderPhoto={PortfolioImage}
            rowConstraints="maxPhotos"
            // targetRowHeight={120}
            // defaultContainerWidth={568}
            onClick={({ index: current }) => setIndex(current)}
          />
        </AnimatePresence>
      </section>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={pictures}
      />
    </>
  );
}
