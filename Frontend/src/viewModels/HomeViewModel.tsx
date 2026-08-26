import { useEffect, useState } from "react"
import type { Course } from "../types/Course"
import type { Assignment } from "../types/Assignment"

export const HomeViewModel = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [assignments, setAssignments] = useState<Assignment[]>([])
  useEffect(() => {
    fetch("http://localhost:8080/data/courses")
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error("Error fetching courses:", error))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/data/assignments")
      .then(response => response.json())
      .then(data => setAssignments(data))
      .catch(error => console.error("Error fetching assignments:", error))
  }, [])


  return {
    courses,
    assignments,
  }
}
