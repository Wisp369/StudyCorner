import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { CoursePageHeader } from "../components/CoursePageHeader"
import type { Course } from "../types/Course"
import { HomeViewModel } from "../viewModels/HomeViewModel"

export function CoursePage() {
  const viewModel = HomeViewModel()
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

  return (
    <div>
      <CoursePageHeader
        courseName={course.courseName}
        courseId={course.courseId}
        onDeleteCourse={viewModel.deleteCourse}
      />
    </div>
  )
}
