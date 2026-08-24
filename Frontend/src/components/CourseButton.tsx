import { useNavigate } from "react-router";
import "../css/CourseButton.css";

export function CourseButton({ course }: { course: any }) {
  const navigation = useNavigate()
  return (
    <button onClick={() => { navigation("courses/" + course.courseId) }} className="course-button">
      <div className="justify-center flex flex-col items-center">
        <h2 className="course-button-title">{course.courseName}</h2>
      </div>
    </button>
  )
}
