import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import { Routes,Route } from "react-router-dom"
import AddUser from "./pages/AddUser"
import AllUser from "./pages/AllUser"
import CustomerReports from "./pages/CustomerReports"
import MainWebsiteHomeSettings from "./pages/MainWebsiteHomeSettings"
import Market from './pages/Market'
function App() {

  return (
    <>
    <Navbar />
    <Sidebar />
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/collab" element={<AddUser />} />
    <Route path="/all-user" element={<AllUser />} />
    <Route path="/customer-report" element={<CustomerReports />} />
    <Route path="/main-home-settings" element={<MainWebsiteHomeSettings />} />
    <Route path="/markets" element={<Market />} />
    </Routes>
    </>
  )
}

export default App
