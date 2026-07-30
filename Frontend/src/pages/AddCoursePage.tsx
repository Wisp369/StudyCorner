import { useNavigate } from "react-router"
import { AddCourseViewModel } from "../viewModels/AddCourseViewModel"
import { AddCoursePageHeader } from "../components/AddCoursePageHeader"
import { TextInput } from "../components/TextInput"
import "../css/AddCoursePage.css"

export function AddCoursePage() {
  const viewModel = AddCourseViewModel()
  const navigate = useNavigate()

  return (
    <div>
      <AddCoursePageHeader />
      <div className="flex flex-col rounded-lg p-4 add-course-page" >
        <TextInput label="Course Name" value={viewModel.courseName} onChange={(e) => viewModel.setCourseName(e.target.value)} />
        <TextInput label="Course Code" value={viewModel.courseCode} onChange={(e) => viewModel.setCourseCode(e.target.value)} />
        <TextInput label="Professor Name" value={viewModel.professorName} onChange={(e) => viewModel.setProfessorName(e.target.value)} />

        <button onClick={() => {
          viewModel.addCourse()
          navigate("/")
          console.log("Course added");
        }
        }>Add Course</button>
      </div>
    </div >
  )
}
