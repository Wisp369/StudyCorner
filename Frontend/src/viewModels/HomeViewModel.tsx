import { useEffect, useState } from "react"
import type { Course } from "../types/Course"

export const HomeViewModel = () => {
  const [courses, setCourses] = useState<Course[]>([])
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
