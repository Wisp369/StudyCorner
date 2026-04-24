import { useEffect, useState } from "react"
import { useParams } from "react-router"

export function CoursePage() {
  const { courseId } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8080/data/courses/" + courseId)
      .then(response => response.json())
      .then(data => setCourse(data))
  }, [])

  if (course === null) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>{course.courseName}</h1>
      </div>
    )
  }
}
