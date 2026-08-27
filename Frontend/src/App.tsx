import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import { Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CoursePage } from './pages/CoursePage'
import { AddCoursePage } from './pages/AddCoursePage'
import { AddAssignmentPage } from './pages/AddAssignmentPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="/addCourse" element={<AddCoursePage />} />
        <Route path="addAssignment/:courseId" element={<AddAssignmentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
