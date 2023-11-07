// import getData from "./fetchAPI";
// import { getPortfolio } from "./queries";

import { v4 as uuidv4 } from "uuid";
import getBase64ImageUrl from "./generateBlurPlaceholder";

export default async function preProcessPics(pictures) {
  // const data = await getData(getPortfolio);
  // const pictures = data?.assets;

  const calculateHeight = (orginalWidth, orginalHeight, width) => {
    let ratio = Number.parseFloat(width / orginalWidth).toFixed(2);
    return Math.round(orginalHeight * ratio);
  };

  const setSources = (handle, width, height) => {
    const srcSet = [];
    if (width > 320) {
      srcSet.push({
        src: `https://media.graphassets.com/resize=fit:scale,width:320/${handle}`,
        width: 320,
        height: calculateHeight(width, height, 320),
      });
    }
    if (width > 640) {
      srcSet.push({
        src: `https://media.graphassets.com/resize=fit:scale,width:640/${handle}`,
        width: 640,
        height: calculateHeight(width, height, 640),
      });
    }
    if (width > 1200) {
      srcSet.push({
        src: `https://media.graphassets.com/resize=fit:scale,width:1200/${handle}`,
        width: 1200,
        height: calculateHeight(width, height, 1200),
      });
    }
    if (width > 2048) {
      srcSet.push({
        src: `https://media.graphassets.com/resize=fit:scale,width:2048/${handle}`,
        width: 2048,
        height: calculateHeight(width, height, 2048),
      });
    }
    srcSet.push({
      src: `https://media.graphassets.com/${handle}`,
      width: width,
      height: height,
    });
    return srcSet;
  };

  const blurImagePromises = pictures.map((image) => {
    return getBase64ImageUrl(image);
  });

  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  const reducedPictures = pictures.map((pic) => {
    return {
      id: uuidv4(),
      height: pic.height,
      width: pic.width,
      public_id: pic.id,
      tags: pic.tags,
      url: pic.url,
      src: pic.url,
      alt: "Realizacja - Alpa Home Design",
      handle: pic.handle,
      srcSet: setSources(pic.handle, pic.width, pic.height),
      placeholder: "blur",
    };
  });

  reducedPictures.forEach(async (pic, index) => {
    pic.blurDataUrl = await imagesWithBlurDataUrls[index];
  });

  return reducedPictures;
}
