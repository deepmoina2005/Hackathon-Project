import React from 'react'
import './Sidebar.css'
import { TiUserAdd } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { CiHome } from 'react-icons/ci';
import { IoSettings } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
  <>
  <div className="sideNav">
    <ul>
    <li>
        <CiHome style={{marginRight:"10px",verticalAlign:"middle",fontSize:"20px"}}/>
        <Link to="/">Overview</Link>
        </li>
        <li>
        <TiUserAdd style={{marginRight:"10px",verticalAlign:"middle",fontSize:"20px"}}/>
        <Link to="/collab">Share Super Admin </Link>
        </li>
        <li >
        <FaUser style={{marginRight:"10px",verticalAlign:"middle",fontSize:"20px"}}/>
        <Link to="/all-user">All Users</Link>
        </li>
        <li >
        <MdReport style={{marginRight:"10px",verticalAlign:"middle",fontSize:"20px"}}/>
        <Link to="/customer-report">Customer Reports</Link>
        </li>
        <li >
        <IoSettings style={{marginRight:"10px",verticalAlign:"middle",fontSize:"20px"}}/>
        <Link to="/main-home-settings">Web Home Settings</Link>
        </li>
        {/* <li >
        <IoSettings style={{marginRight:"10px",verticalAlign:"middle",fontSize:"20px"}} />
        <Link to="/user-home-settings">User Home Settings</Link>
        </li> */}
        <li >
        <FaShop style={{marginRight:"10px",verticalAlign:"middle",fontSize:"20px"}}/>
        <Link to="/markets">Markets</Link>
        </li>
    </ul>
  </div>
  </>
  )
}

export default Sidebar
