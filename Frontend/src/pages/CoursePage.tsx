import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { CoursePageHeader } from "../components/CoursePageHeader"
import type { Course } from "../types/Course"
import { CoursePageViewModel } from "../viewModels/CoursePageViewModel"

export function CoursePage() {
  const viewModel = CoursePageViewModel()
  const { courseId } = useParams()
  const [course, setCourse] = useState<Course>()

  useEffect(() => {
    fetch("http://localhost:8080/data/courses/" + courseId)
      .then(response => response.json())
      .then(data => setCourse(data))
  }, [courseId])

  if (course === undefined) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }

  if (course.courseId === undefined) {
    return (
      <div>
        <p>Course ID unavailable...</p>
      </div>
    )
  }

  return (
    <div>
      <CoursePageHeader
        courseName={course.courseName}
        courseId={course.courseId}
        onDeleteCourse={viewModel.deleteCourse}
        onAddAssignment={viewModel.addAssignment}
      />
    </div>
  )
}
