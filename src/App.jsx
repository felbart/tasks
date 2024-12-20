import { Outlet } from "react-router-dom"
import Sidebar from "./components/Layout/Sidebar"
import Header from "./components/Layout/Header"

function App() {
  return (
    <>
      <Header />
      <Sidebar/>
      <Outlet />
    </>
  )
}

export default App
