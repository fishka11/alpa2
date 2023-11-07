"use client";

import PortfolioImage from "./portfolioImage";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import NavPills from "./navPills";

export default function Portfolio({ pictures, categories }) {
  const [filteredPictures, setFilteredPictures] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const filteredPhotos = pictures.filter((photo) =>
      photo.tags.includes(activeCategory)
    );
    setFilteredPictures(filteredPhotos);
  }, [activeCategory, pictures]);

  const selectCategory = (category) => {
    setActiveCategory(category);
  };

  const allCategories = pictures
    .map((photo) => photo.tags)
    .flat()
    .filter((item, index, array) => array.indexOf(item) === index);

  const categoriesPl = allCategories.map((category) => {
    let categoryPl =
      categories.find((item) => item.englishTag === category.toLowerCase()) ||
      null;
    return categoryPl ? categoryPl.polishTag : category;
  });
  return (
    <>
      <section>
        <NavPills
          categoriesPl={categoriesPl}
          categories={allCategories}
          activeCategory={activeCategory}
          selectCategory={selectCategory}
        />
      </section>
      <section>
        <AnimatePresence>
          <PhotoAlbum
            layout="masonry"
            photos={filteredPictures}
            renderPhoto={PortfolioImage}
            rowConstraints="minPhotos"
            targetRowHeight={300}
            onClick={({ index: current }) => setIndex(current)}
          />
        </AnimatePresence>
      </section>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={filteredPictures}
      />
    </>
  );
}
