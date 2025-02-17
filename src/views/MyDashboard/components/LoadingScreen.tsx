import React from "react";
import "./Loading.css";  // Import the CSS for the loading animation

const LoadingScreen: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            {/* <div className="loading-text">   Loading...</div> */}
        </div>
    );
};

export default LoadingScreen;
