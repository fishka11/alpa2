import Pill from "./pill";

export default function NavPills({
  categoriesPl,
  categories,
  activeCategory,
  selectCategory,
}) {
  return (
    <nav className="flex flex-row justify-center gap-6 mb-10">
      {categories.map((cat, index) => (
        <Pill
          key={index}
          category={cat}
          displayName={categoriesPl[categories.indexOf(cat)]}
          style={`${
            cat === activeCategory
              ? "bg-indigo-900 text-white"
              : "border-indigo-900 border"
          } transform-gpu transition-all px-4 py-1 rounded uppercase text-sm hover:bg-indigo-900 hover:text-white`}
          activeCategory={activeCategory}
          selectCategory={selectCategory}
        />
      ))}
    </nav>
  );
}
