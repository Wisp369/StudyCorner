import "../css/AppHeader.css";
import { HeaderTitle } from "./HeaderTitle";

export function AppHeader({ headerText, isCoursePage }: { headerText?: string, isCoursePage: boolean }) {

  if (isCoursePage) {
    return (
      <div className="app-header flex">
        <HeaderTitle headerText={headerText ? headerText : ""} />
        <nav>
          <a href="/" className="hover:text-slate-700">Home</a>
        </nav>
      </div >
    )
  } else {
    return (
      <div className="app-header flex">
        <HeaderTitle headerText={headerText ? headerText : ""} />
        <nav>
          <a href="/addCourse" className="hover:text-slate-700">Add Course</a>
        </nav>
      </div>
    )
  }
}
