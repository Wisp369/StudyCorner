import { HeaderTitle } from "./HeaderTitle";
import "../css/CourseHeader.css";
import "../css/AddAssignmentPage.css";

export function AddAssignmentPageHeader() {
  return (
    <div className="app-header add-assignment-header">
      <p className="app-header-text">Study Corner</p>
      <HeaderTitle headerText={"Add Assignment"} />
      <nav>
        <a href="/" className="hover:text-slate-700">Home</a>
      </nav>
    </div>
  )
}
