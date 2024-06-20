import './App.css'
import { LoginProvider } from './context/LoginContext'
import Login from './pages/Login'

function App() {
  

  return (
    <>
    <LoginProvider>
      <Login/>
      </LoginProvider>
    </>
  )
}

export default App
