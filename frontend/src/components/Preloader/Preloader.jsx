import React from "react";
import "./Preloader.css";

const Preloader = ({ loading, progress }) => {
    return (
        <div className={`preloader ${loading ? "preloader--show" : "preloader--hide"}`}>
            <h1>{progress}</h1>
            <span className="loader"></span>
        </div>
    );
};

export default Preloader;
