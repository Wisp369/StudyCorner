import { useEffect, useState } from "react"

export const HomeViewModel = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/data/courses")
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error("Error fetching courses:", error))
  }, [])


  return {
    courses,
  }
}
