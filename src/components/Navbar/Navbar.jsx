import React from 'react';
import menubar from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={menubar.nav}>
        <div className={menubar.item}>
            <div>
                <NavLink activeClassName={menubar.active} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink activeClassName={menubar.active}  to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </div>
    </nav>

}
export default Navbar;

