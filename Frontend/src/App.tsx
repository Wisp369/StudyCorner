import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import { Route } from 'react-router'
import { HomePage } from './components/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
