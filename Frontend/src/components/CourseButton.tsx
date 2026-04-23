import { useNavigate } from "react-router";
import "../css/CourseButton.css";

export function CourseButton({ course }: { course: any }) {
  const navigation = useNavigate()
  return (
    <button onClick={() => { navigation("course/" + course.courseId) }} className="course-button">
      <div className="grid grid-cols-1 grid-rows-2">
        <div className="course-button-banner bg-amber-50" />
        <div>
          <h2 className="course-button-title">{course.courseName}</h2>
        </div>
      </div>
    </button>
  )
}
