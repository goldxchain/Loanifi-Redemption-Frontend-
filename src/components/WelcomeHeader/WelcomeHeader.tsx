import React from "react";
import styled from "styled-components";
import ActionButton from "../Buttons/ActionButton/ActionButton";
import {
    ClipBoardIconL,
    DollarIcon,
    ThreeDotsIcon,
    TransferIcon,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { mobileBreakpoint } from "../../const";

const HeaderContainer = styled.header`
    align-self: stretch;
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    flex-basis: 0%;
    margin: auto 0;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
`;

const WelcomeMessage = styled.p`
    color: var(--Text-Tertiary, #969696);
    // font: 400 16px Telegraf, sans-serif;
    font-weight: 400;
    font-family: "Telegraf", sans-serif;
    margin: 0;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
`;

const DashboardTitle = styled.h1`
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    font-feature-settings: "liga" off, "clig" off;
    text-transform: uppercase;
    margin: 0;
    // font: 600 40px/1.2 Conthrax, sans-serif;
    font-family: "Conthrax";
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
`;

interface WelcomeHeaderProps {
    heading: string;
    username: string;
    hideActions?: boolean;
}
type ActionButtonType = {
    label?: string;
    icon: any;
    variant: "primary" | "secondary" | "tertiary";
    key?: number;
    onClick?: () => void;
};

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
    heading,
    username,
    hideActions,
}) => {
    const navigate = useNavigate();
    const [showList, setShowList] = React.useState(false);
    const address = "0x5442...be5914"; // Address to copy
    const addressToCopy = "0x54422a0B6c7A010e2D4c0F3B73Dde25fcAbe5914"; // Address to copy

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(addressToCopy)
            .then(() => {
                alert("Copied to clipboard: " + addressToCopy); // Show confirmation (optional)
            })
            .catch((err) => console.error("Failed to copy:", err));
    };
    return (
        <DashboardContainer className={`paddinglayoutx paddinglayouty `}>
            <>
                <HeaderContainer>
                    <WelcomeMessage>Welcome Back</WelcomeMessage>
                    <DashboardTitle>{heading}</DashboardTitle>
                </HeaderContainer>
            </>
            {!hideActions && (
                <ActionButtonsContainer>
                    <div className="wrappedbutton">
                        <div className="left">
                            <h3>The Official Loanifi Sacrifice Address</h3>
                            <h4>{address}</h4>
                        </div>
                        <div className="right" onClick={copyToClipboard}>
                            <ClipBoardIconL />
                        </div>
                    </div>
                </ActionButtonsContainer>
            )}
        </DashboardContainer>
    );
};

const ListBox = styled.div`
    position: absolute;
    top: 80px;
    right: 0;
    border-radius: 16px;
    border: 1px solid var(--Lines-Divider, #383838);
    background: var(--background-surface-2, #2e2d2a);
    min-width: 240px;
    z-index: 5;

    .item {
        padding: 20px 24px;
        color: #fff;
        border-bottom: 1px solid #383838;
        font-weight: 400;
        font-family: "Telegraf", sans-serif;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg {
            path {
                stroke: #fff;
            }
        }
        &:first-child {
            // padding-top: 0;
        }
        &:last-child {
            // padding-bottom: 0;
            border-bottom: 0;
        }
        &:hover {
            background: rgba(0, 0, 0, 0.2);
        }
    }
`;

const DashboardContainer = styled.main`
    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: flex-start;
    flex-wrap: wrap;
    // margin-bottom: 40px;
    background: var(--Brand-Dark, #111);
    ${DashboardTitle} {
        margin-top: 16px;
    }
`;

const ActionButtonsContainer = styled.div`
    align-self: stretch;
    display: flex;
    min-width: 240px;
    align-items: center;
    gap: 16px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: auto 0;
    position: relative;
    .right {
        cursor: pointer;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        .wrappedbutton {
            width: 100%;
        }
    }
`;

export default WelcomeHeader;
