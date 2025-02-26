import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <section className="nav-main">
                <div className="logo">
                    <a href="/">
                        <img src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63fec9eeb8692c4a95dd4ec0_logo.svg" alt="" />
                    </a> </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>


                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li><a href="/">work</a></li>
                        <li><a href="/">service</a></li>
                        <li><a href="/">about</a></li>
                        <li><a href="/">news</a></li>
                        <li><a href="/">pages</a></li>
                        <li><a href="/">( 0 )</a></li>
                        <button>LET'S CREATE</button>
                    </ul>
                </div>
            </section>


            <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Home />} path="/"></Route>
            </Routes>

        </>
    );
};

export default Navbar;
