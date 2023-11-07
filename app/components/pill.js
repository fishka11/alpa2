export default function Pill({ displayName, category, style, selectCategory }) {
  const handleActiveCategory = () => selectCategory(category);
  return (
    <button className={style} onClick={() => handleActiveCategory()}>
      {displayName}
    </button>
  );
}
