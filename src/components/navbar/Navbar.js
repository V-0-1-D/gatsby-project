import React from  "react";
import { Link } from "gatsby";
import { navbar } from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={navbar}>
            <ul>
                <li className="NavItem"><Link to="/">Home</Link></li>
                <li className="NavItem"><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;