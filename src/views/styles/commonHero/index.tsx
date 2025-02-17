import styled from "styled-components";
import { mobileBreakpoint, smallmobileBreakpoint } from "../../../const";

export const HeroLeft = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    z-index: 2;
    padding-top: 24px;
    padding-bottom: 90px;
    .sidebartop {
    }
    .sidebarbottom {
        .socialiconswrapper {
            display: flex;
            flex-direction: column;
            .sclicon {
                width: 64px;
                height: 64px;
                background: #2e2d2a;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: transform 0.3s ease-in-out;

                margin-top: 5px;
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.3);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                &:hover {
                    svg {
                        transform: scale(1.3);
                        animation: pulse 1s infinite;
                    }
                }
            }
        }
    }
`;
export const HeroRight = styled.div`
    width: calc(100% - 100px);
    padding-top: 20px;
    padding-right: 20px;
    position: relative;
    z-index: 2;
`;
export const StyledHero = styled.main`
    display: flex;
    min-height: 100vh;
    .herobag {
        position: absolute;
        // 20px for side paddding and 100px for left sidebar
        width: calc(100% - 100px - 20px);
        height: calc(100% - 20px);
        top: 20px;
        right: 20px;
        z-index: 0;
        svg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
        margin-top: 0;
        max-width: 100vw;
        overflow: hidden;
        .herobag {
            width: calc(100% - 40px);
            height: calc(100% - 0px);
            top: 20px;
            right: 20px;
        }
        ${HeroLeft} {
            display: none;
        }
        ${HeroRight} {
            width: 100%;
        }
    }
`;

export const HeroContentWrapper = styled.section`
    align-items: center;
    display: flex;
    width: 100%;
    max-width: 1160px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px 0 50px 64px;
    box-sizing: border-box;
    height: calc(100% - 163px);
    .getStartedOuter {
        width: 100px;
        position: Relative;
        cursor: pointer;
        z-index: 6;
        @keyframes rotateIcon {
            from {
                transform: rotate(0deg); /* Starting point */
            }
            to {
                transform: rotate(360deg); /* Full rotation */
            }
        }
        .get_started_arrow {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 37px;
        }
        .get_started {
            width: 100%;
            transition: all 0.3s linear;
            animation: rotateIcon 5s linear infinite;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        margin-top: 40px;
        padding: 50px 64px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        min-height: calc(100vh - 80px);
        margin-top: 0px;
        padding-top: 0;
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        padding: 50px 34px;
    }
`;
export const InvestButtonWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 27.5vw;
    z-index: 5;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        position: relative;
        position: relative;
        width: 100% !important;
        bottom: unset;
        left: unset;
        padding: 0 20px;
        box-sizing: border-box;
    }
`;
