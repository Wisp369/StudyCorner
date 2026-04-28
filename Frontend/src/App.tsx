import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import { Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { useEffect, useState } from 'react'
import { CoursePage } from './pages/CoursePage'
import { AddCoursePage } from './pages/AddCoursePage'

function App() {

  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/data/courses")
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error("Error fetching courses:", error))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage courses={courses} />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="/addCourse" element={<AddCoursePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
