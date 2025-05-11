import { Outlet } from 'react-router-dom'
import './index.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App