import React from "react";
import "./Preloader.css";

const Preloader = ({ loading }) => {
    return (
        <div className={`preloader ${loading ? "preloader--show" : "preloader--hide"}`}>
            <span className="loader"></span>
        </div>
    );
};

export default Preloader;
