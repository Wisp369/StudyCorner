import { useEffect, useState } from "react"
import { useParams } from "react-router"
import type { Course } from "../types/Course"
import { AppHeader } from "../components/AppHeader"

export function CoursePage() {
  const { courseId } = useParams()
  const [course, setCourse] = useState<Course>()

  useEffect(() => {
    fetch("http://localhost:8080/data/courses/" + courseId)
      .then(response => response.json())
      .then(data => setCourse(data))
  }, [])

  if (course === undefined) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  } else {
    return (
      <div>
        <AppHeader headerText={course.courseName} />
      </div>
    )
  }
}
