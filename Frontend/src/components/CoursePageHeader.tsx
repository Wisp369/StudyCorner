import { useNavigate } from "react-router"
import "../css/CourseHeader.css"
import { HeaderTitle } from "./HeaderTitle"
import type { DropdownMenuItem } from "../types/DropdownMenuItem"
import { DropdownMenu } from "./DropdownMenu"

type CoursePageHeaderProps = {
  courseName: string
  courseId: number
  onDeleteCourse: (courseId: number) => void
}

export function CoursePageHeader({ courseName, courseId, onDeleteCourse }: CoursePageHeaderProps) {
  const navigate = useNavigate()
  const dropdownOptions: DropdownMenuItem[] = [
    {
      title: "Delete Course", onClick: () => {
        onDeleteCourse(courseId)
      }
    }
  ]

  return (
    <div className="app-header grid grid-rows-1 grid-cols-3">
      <div className="flex-1 flex items-center" id="primary-content">
        <button
          className="hover:text-slate-700"
          onClick={() => {
            navigate("/")
          }}
        > Home </button>
      </div>
      <div>
        <HeaderTitle headerText={courseName} />
      </div>
      <div className="flex-1 flex items-end justify-end">
        <DropdownMenu options={dropdownOptions} />
      </div>
    </div>
  )
}
