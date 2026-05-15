import { useNavigate } from "react-router"
import { AddCourseViewModel } from "../viewModels/AddCourseViewModel"

export function AddCoursePage() {
  const viewModel = AddCourseViewModel()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Add new Course</h1>
      <input type="text" placeholder="Course Name" value={viewModel.courseName} onChange={(e) => viewModel.setCourseName(e.target.value)} />
      <input type="text" placeholder="Course Code" value={viewModel.courseCode} onChange={(e) => viewModel.setCourseCode(e.target.value)} />
      <input type="text" placeholder="Professor Name" value={viewModel.professorName} onChange={(e) => viewModel.setProfessorName(e.target.value)} />
      <button onClick={() => {
        viewModel.addCourse()
        navigate("/")
        console.log("Course added");

      }
      }>Add Course</button>
    </div >
  )
}
