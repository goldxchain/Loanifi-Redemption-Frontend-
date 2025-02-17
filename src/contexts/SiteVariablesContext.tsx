import React from "react";

// Define the shape of the context data
interface WindowDimensions {
    width: number; // Could be null initially or a number later
    height: number; // Could be null initially or a number later
}

interface SiteVariablesContextType {
    windowDimensions: WindowDimensions; // Store both width and height
    setWindowDimensions: React.Dispatch<React.SetStateAction<WindowDimensions>>; // Updater function
}

// Create the context with an initial value matching the interface
const SiteVariablesContext = React.createContext<SiteVariablesContextType>({
    windowDimensions: { width: 0, height: 0 }, // Initial dimensions are null
    setWindowDimensions: () => {}, // Placeholder function
});

export default SiteVariablesContext;
