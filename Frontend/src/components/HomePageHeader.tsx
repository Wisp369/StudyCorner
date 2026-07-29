import "../css/CourseHeader.css";
import { HeaderTitle } from "./HeaderTitle";

export function HomePageHeader() {

  return (
    <div className="app-header flex">
      <p className="app-header-text">Study Corner</p>
      <HeaderTitle headerText={"Home"} />
      <nav>
        <a href="/addCourse" className="hover:text-slate-700">Add Course</a>
      </nav>
    </div>
  )
}
