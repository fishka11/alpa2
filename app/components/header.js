import getData from "../lib/fetchAPI";
import { getHeaderContent } from "../lib/queries";
import Menu from "./menu";

export default async function Header() {
  const data = await getData(getHeaderContent);
  const pages = data?.marketingPages.sort(
    (a, b) => a.menuLink.positionInMenu - b.menuLink.positionInMenu
  );
  return (
    <div className="fixed top-0 z-40 backdrop-blur-sm">
      <Menu pages={pages} />
    </div>
  );
}
