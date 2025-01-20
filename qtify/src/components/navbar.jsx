import React from "react";
import "./navbar.css"; // Ensure this file exists
import Logo from "../asserts/Qtify.png"; // Correct the folder name if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 
function Navbar() {
    return (
        <div className="container">
            <div className="rectangle">
                <div className="Logo">
                    <img src={Logo} alt="Qtify Logo" /> {/* Corrected tag and src */}
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="search a album of your choice"></input>
                    <div className="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} href="#" />
                    </div>
                    
                </div>
                <div className="feedback">
                    <button className="feedback-btn">Give Feedback</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
