import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import { Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CoursePage } from './pages/CoursePage'
import { AddCoursePage } from './pages/AddCoursePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="/addCourse" element={<AddCoursePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
