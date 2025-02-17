import React from "react";
import styled from "styled-components";
import { mobileBreakpoint, smallmobileBreakpoint } from "../../../const";
import { motion, useAnimation } from "framer-motion";
interface ActionButtonProps {
    label?: string;
    icon?: string;
    height?: number;
    className?: string;
    variant: "primary" | "secondary" | "tertiary";
    onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    label,
    icon,
    height,
    variant,
    className,
    onClick,
}) => {
    return (
        <ButtonWrapper
            variant={variant}
            className={`${className} ${!icon ? "noicon" : ""}`}
            onClick={onClick}
        >
            {variant === "primary" && <ButtonBackground />}
            {label && <ButtonLabel variant={variant}>{label}</ButtonLabel>}
            <IconWrapper variant={variant}>
                <IconInner variant={variant}>{icon}</IconInner>
            </IconWrapper>
        </ButtonWrapper>
    );
};

const ButtonBackground = styled.div`
    border-radius: 32px;
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

    position: absolute;
    z-index: 0;
    display: flex;
    height: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 200px;
`;

const ButtonLabel = styled.span<{ variant: string }>`
    flex: 1;
    // gap: 8px;
    color: ${(props) =>
        props.variant === "primary"
            ? "var(--Brand-Dark, #111)"
            : "var(--Text-Primary, var(--Typography-Primary-white, #fff))"};
    white-space: nowrap;
    text-transform: capitalize;
    // padding: 20px 20px 20px 32px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font: 500 16px Telegraf, sans-serif;
    position: Relative;
    z-index: 1;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding-left: 20px;
        white-space: initial;
    }
`;

const IconWrapper = styled.div<{ variant: string }>`
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    padding: 4px;
    border-radius: 50%;
    overflow: hidden;
`;

const IconInner = styled.div<{ variant: string }>`
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background: ${(props) =>
        props.variant === "primary"
            ? "var(--Typography-Primary-white, #fff)"
            : props.variant === "secondary"
            ? "var(--Brand-Gold, radial-gradient(458.07% 144.86% at 13.25% 21.87%, #f4e0a3 0%, #dcbc65 37.37%, #ca9f43 63.89%, #fef0a0 79.39%, #8e5f1e 100%))"
            : "transparent"};
    border: ${(props) =>
        props.variant === "secondary"
            ? "1.5px solid var(--Lines-Gold, #e2b666)"
            : "none"};
    display: flex;
    width: 56px;
    gap: 8px;
    height: 56px;
    margin: auto 0;
    padding: 0 16px;
`;

const ButtonWrapper = styled.div<{ variant: string }>`
    align-items: center;
    border-radius: 32px;
    border: 1.5px solid
        ${(props) =>
            props.variant === "primary"
                ? "var(--Lines-Gold, #e2b666)"
                : props.variant === "secondary"
                ? "var(--Brand-Gold, #f4e0a3)"
                : "var(--Lines-Divider, #383838)"};
    align-self: stretch;
    position: relative;
    z-index: 1;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    justify-content: flex-start;
    width: ${(props) => (props.variant === "tertiary" ? "64px" : "200px")};
    margin: auto 0;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            75deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
        );
        transition: 0.4s;
        transition-delay: 0.2s;
    }
    &.noicon {
        width: fit-content;
        height: 56px;
        ${IconWrapper} {
            display: none;
        }
        ${ButtonLabel} {
            padding-left: 30px;
            padding-right: 30px;
        }
    }
    &.btnwidth50 {
        ${ButtonBackground} {
            width: 100% !important;
        }
    }
    &.btnwidth100 {
        width: 100% !important;
        box-sizing: border-box !important;
        ${ButtonBackground} {
            width: 100% !important;
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        ${ButtonBackground} {
            height: 54px;
            box-sizing: border-box;
            left: -1px;
        }
        ${IconWrapper} ,${IconInner} {
            width: 48px;
            height: 48px;
            padding: 0;
            // box-sizing: border-box;
        }
        ${ButtonLabel} {
            font-size: 14px;
            line-height: 20px;
        }
    }

    &:hover {
        ${IconWrapper} {
            svg {
                animation: slideAndReset 0.3s ease-in-out forwards;
            }
        }
        &:after {
            left: 100%;
        }
    }
`;

export default ActionButton;
