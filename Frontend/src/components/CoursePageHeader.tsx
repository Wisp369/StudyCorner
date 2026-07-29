import { useNavigate } from "react-router"
import "../css/CourseHeader.css"
import { HeaderTitle } from "./HeaderTitle"

type CoursePageHeaderProps = {
  courseName: string
  courseId?: number
  onDeleteCourse: (courseId: number) => void
}

export function CoursePageHeader({ courseName, courseId, onDeleteCourse }: CoursePageHeaderProps) {
  const navigate = useNavigate()

  return (
    <div className="app-header flex">
      <button
        className="hover:text-slate-700"
        onClick={() => {
          navigate("/")
        }}
      > Home </button>
      <HeaderTitle headerText={courseName} />
      <button
        className="hover:text-slate-700"
        disabled={courseId === undefined}
        onClick={() => {
          if (courseId === undefined) return
          onDeleteCourse(courseId)
          navigate("/")
        }}
      >
        Delete Course
      </button>

    </div>
  )
}
