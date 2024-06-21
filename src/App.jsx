import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddCourse from './components/AddCourses'
import { DataProvider } from './context/DataContext'
import { LoginProvider } from './context/LoginContext'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Students from './pages/Students'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'

function App() {
  

  return (
    <>
    <BrowserRouter>
        <LoginProvider>
          <DataProvider>
            <Routes>
              {/* Login route outside of MainLayout */}
              <Route path="/" element={<Login />} />

              {/* Wrap all other routes with MainLayout */}
              <Route path="/" element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/students" element={<Students />} />
                {/* Include AddCourse if needed */}
                <Route path="/add-course" element={<AddCourse />} />
              </Route>
            </Routes>
          </DataProvider>
        </LoginProvider>
      </BrowserRouter>
    
    </>
  )
}

export default App
