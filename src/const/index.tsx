import { useEffect, useState } from "react";

export const smscreenBreakpoint = 1300;
export const mobileBreakpoint = 941;
export const smallmobileBreakpoint = 500;

export const useIsTouchscreen = () => {
    const [isTouchscreen, setIsTouchscreen] = useState(false);

    useEffect(() => {
        const checkTouchscreen = () => {
            const isTouch = window.matchMedia("(pointer: coarse)").matches;
            setIsTouchscreen(isTouch);
        };

        checkTouchscreen();
        window.addEventListener("resize", checkTouchscreen);

        return () => {
            window.removeEventListener("resize", checkTouchscreen);
        };
    }, []);

    return isTouchscreen;
};
