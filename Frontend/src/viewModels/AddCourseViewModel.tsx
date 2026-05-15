import { useState } from "react"
import type { Course } from "../types/Course"

export const AddCourseViewModel = () => {
  const [courseName, setCourseName] = useState("")
  const [courseCode, setCourseCode] = useState("")
  const [professorName, setProfessorName] = useState("")

  function addCourse() {
    const newCourse: Course = {
      courseName: courseName,
      courseCode: courseCode,
      professorName: professorName
    }

    fetch("http://localhost:8080/data/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCourse)
    })
  }

  return {
    courseName,
    setCourseName,
    courseCode,
    setCourseCode,
    professorName,
    setProfessorName,
    addCourse,
  }

}
