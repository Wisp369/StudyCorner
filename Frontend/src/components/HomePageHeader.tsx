import "../css/AppHeader.css";
import { HeaderTitle } from "./HeaderTitle";

export function HomePageHeader() {

  return (
    <div className="app-header flex">
      <HeaderTitle headerText={"Study Corner"} />
      <h1 className="app-header-text">Study Corner</h1>
      <nav>
        <a href="/addCourse" className="hover:text-slate-700">Add Course</a>
      </nav>
    </div>
  )
}
