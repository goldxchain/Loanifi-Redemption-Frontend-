import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDashboard from "./views/MyDashboard";
import SiteVariablesContext from "./contexts/SiteVariablesContext";
import { useWindowSize } from "@react-hook/window-size";
import { useAnimation } from "framer-motion";
import styled from "styled-components";
import { CloseIcon, MultiplyIcon } from "./assets/icons";
// import { loadData, userWalletFormatted, totalPoints, circulatingSupply } from "./data";
const RefRibbon = styled.div`
    background: var(
        --Brand-Gold,
        radial-gradient(
            458.07% 144.86% at 13.25% 21.87%,
            #f4e0a3 0%,
            #dcbc65 37.37%,
            #ca9f43 63.89%,
            #fef0a0 79.39%,
            #8e5f1e 100%
        )
    );
    padding-top: 10px;
    padding-bottom: 10px;
    color: var(--Brand-Dark, #111);
    leading-trim: both;
    text-edge: cap;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Conthrax;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
    text-transform: uppercase;
    position: relative;
    .textbox {
        max-width: 90%;
    }
    .closeicon {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`;

function App() {
    
    const [refribbon, setRefribbon] = useState(true);
    const [width, height] = useWindowSize();
    const [windowDimensions, setWindowDimensions] = useState<any>(null);
    
    
    useEffect(() => {
        setWindowDimensions({
            width: width,
            height: height,
        });
    }, [width, height]);
    const controls = useAnimation();
    const progressRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

        // Animate ProductsGridScroll translation based on scroll position
        controls.start({
            transform: `translateX(-${
                (scrollPosition / maxScroll) *
                ((100 * (windowDimensions?.width ?? 0)) / 5)
            }%)`,
            transition: { type: "spring", stiffness: 100 },
        });

        // Progress bar animation
        if (progressRef.current) {
            const progress = scrollPosition / maxScroll;
            progressRef.current.style.transform = `scaleX(${progress})`;
        }
    };

    useEffect(() => {
        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [windowDimensions]);
    const RefferalRibbon = () => {
        return (
            <RefRibbon className="paddinglayoutx">
                <div className="textbox">
                    {" "}
                    Share your referral link and earn rewards when friends sign
                    up! share link
                </div>
                <div className="closeicon" onClick={() => setRefribbon(false)}>
                    <MultiplyIcon />
                </div>
            </RefRibbon>
        );
    };
    return (
        <SiteVariablesContext.Provider
            value={{ windowDimensions, setWindowDimensions }}
        >
            {/* {refribbon && <RefferalRibbon />} */}
            <ProgressBar ref={progressRef} />
            <Router>
                <Routes>
                    <Route path="/" element={<MyDashboard />} />
                </Routes>
            </Router>
        </SiteVariablesContext.Provider>
    );
}
const ProgressBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 4px;
    background-color: #e2b666;
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.2s ease-out;
    z-index: 1000;
    width: 100vw;
`;
export default App;
