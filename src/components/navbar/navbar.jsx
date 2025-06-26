import React, { useState } from "react";
import "./navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../assets/logo5..jpg"; // Assuming you have
const Navbar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <>
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"  height="110px"/>
            <ul className="nav-list">
                <li className="nav-item"><AnchorLink className="anchor-link" offset={50} href="#home" ><p onClick={()=>setMenu("home")}>HOME</p></AnchorLink></li>
                <li className="nav-item"><AnchorLink className="anchor-link" offset={50} href="#about" ><p onClick={()=>setMenu("about")}>ABOUT</p></AnchorLink></li>
                <li className="nav-item"><AnchorLink className="anchor-link" offset={50} href="#services" ><p onClick={()=>setMenu("services")}>SERVICES</p></AnchorLink></li>
                <li className="nav-item"><AnchorLink className="anchor-link" offset={50} href="#work" ><p onClick={()=>setMenu("content")}>CONTENT</p></AnchorLink></li>
                  <li className="nav-item"><AnchorLink className="anchor-link" offset={50} href="#contact" ><p onClick={()=>setMenu("contact")}>CONTACT</p></AnchorLink></li>
            </ul>
            <div className="nav-connect">
                connect with me
            </div>
            </div>
        </>
    )
}


export default Navbar;