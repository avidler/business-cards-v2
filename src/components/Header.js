import React from "react"
import {Outlet, Link} from "react-router-dom"

export default function Header(){
    return(
    <div>
        <h1>Business Card Manager</h1>
        <nav className="flex flex-row">
            <ul className="flex flex-row">
                <li className="mx-4"><Link to="/">Home</Link></li>
                <li className="mx-4"><Link to="/new">Add New Member</Link></li>
                <li className="mx-4"><Link to="/delete">Delete Member</Link></li>
            </ul>
        </nav>
        <Outlet />
  </div>
    )
}