import { HeaderTitle } from "./HeaderTitle";

export function AddCoursePageHeader() {

  return (
    <div className="app-header flex">
      <p className="app-header-text">Study Corner</p>
      <HeaderTitle headerText={"Add Course"} />
      <nav>
        <a href="/" className="hover:text-slate-700">Home</a>
      </nav>
    </div>
  )
}
