import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}) {
  return (
    <motion.div
      style={{ ...wrapperStyle, position: "relative" }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Image
        fill
        src={photo}
        blurDataURL={photo.blurDataUrl}
        placeholder={"blurDataUrl" in photo ? "blur" : "empty"}
        {...{ alt, title, sizes, className, onClick }}
      />
    </motion.div>
  );
}
