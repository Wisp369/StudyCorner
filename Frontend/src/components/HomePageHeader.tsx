import "../css/CourseHeader.css";
import { HeaderTitle } from "./HeaderTitle";

export function HomePageHeader() {

  return (
    <div className="app-header flex">
      <HeaderTitle headerText={"Home"} />
      <h2 className="app-header-text">Study Corner</h2>
      <nav>
        <a href="/addCourse" className="hover:text-slate-700">Add Course</a>
      </nav>
    </div>
  )
}
