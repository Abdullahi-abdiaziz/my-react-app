import React from "react";
import logo from '../logo.svg';

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="" className="nav__logo"/>
            <h3 className="nav__title">ReactFacts</h3>
            <h4 className="nav__subtitle">React Courses - Project 1</h4>
        </nav>
    )
}