import MotionHeading from "./motionHeading";
import MotionText from "./motionText";

export default function TextBlock({ texts, classes = "" }) {
  return texts.map((tx) => (
    <section key={tx.id}>
      <MotionHeading classes={classes} text={tx?.subtitle} level="h2" />
      <MotionText text={tx?.text?.markdown} />
    </section>
  ));
}
