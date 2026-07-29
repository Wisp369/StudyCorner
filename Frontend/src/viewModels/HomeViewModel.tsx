import { useEffect, useState } from "react"

export const HomeViewModel = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/data/courses")
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error("Error fetching courses:", error))
  }, [])

  const deleteCourse = (courseId: number) => {
    fetch("http://localhost:8080/deleteCourse/" + courseId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(courseId)
    })
  }

  return {
    courses,
    deleteCourse
  }
}
