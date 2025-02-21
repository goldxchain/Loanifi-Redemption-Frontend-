import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../../../../const";
import {
    FaHome,
    FaLeaf,
    FaExclamationCircle,
    FaGavel,
    FaAngleDown,
    FaAngleUp,
} from "react-icons/fa";
import {
    ArrowTransformIcon,
    FarmIconHome,
    MoreIconHome,
    NavIconHome,
    SacrificeIconHome,
    TrovIconHome,
    UserIcon,
} from "../../../../assets/icons";
import ActionButton from "../../../../components/Buttons/ActionButton/ActionButton";

const Sidebar: React.FC = () => {
    const [moreOpen, setMoreOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (windowWidth > 1200) {
            setIsSidebarOpen(true);
        } else {
            setIsSidebarOpen(false);
        }
    }, [windowWidth]);

    return (
        <>
            <SidebarContainer isOpen={isSidebarOpen}>
                {/* Conditionally render the toggle button */}
                {windowWidth <= 1200 && (
                    <SidebarToggleButton onClick={toggleSidebar}>
                        {isSidebarOpen ? "✕" : "☰"}
                    </SidebarToggleButton>
                )}
                <NavList>
                    <Logo>
                        <img src="/images/common/logo.png" alt="" />
                    </Logo>
                    <NavItem active>
                        <NavIconHome />
                        Dashboard
                    </NavItem>
                    <NavItem>
                        <FarmIconHome />
                        Farm
                    </NavItem>
                    <NavItem>
                        <TrovIconHome />
                        Risky Trove
                    </NavItem>
                    <NavItem>
                        <SacrificeIconHome />
                        Sacrifice
                    </NavItem>
                    <MoreSection onClick={() => setMoreOpen(!moreOpen)}>
                        <MoreItem>
                            <MoreIconHome />
                            More
                        </MoreItem>
                        {moreOpen && (
                            <SubNavList>
                                <SubNavItem>Voting</SubNavItem>
                                <SubNavItem>Github</SubNavItem>
                                <SubNavItem>Documents</SubNavItem>
                                <SubNavItem>Blog</SubNavItem>
                            </SubNavList>
                        )}
                    </MoreSection>
                </NavList>

                <RedemptionCard>
                    <p>
                        LOANIFI <br /> REDEMPTION
                    </p>
                    <span>Enter the Phase 2</span>
                    <DetailsButton>
                        <ActionButton
                            label="Details"
                            variant="secondary"
                            className="btnwidth100"
                            // @ts-ignore
                            icon={<ArrowTransformIcon />}
                        />
                    </DetailsButton>
                </RedemptionCard>
            </SidebarContainer>
        </>
    );
};

const SidebarToggleButton = styled.button`
    position: absolute;
    left: 100%;
    top: 20vh;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
    display: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px) {
        display: block;
    }
`;

const SidebarContainer = styled.aside<{ isOpen: boolean }>`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 330px;
    height: 100vh;
    background: #111;
    padding: 0px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid var(--Lines-Divider, #383838);
    transform: ${(props) =>
        props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;

    @media screen and (max-width: 1200px) {
        transform: ${(props) =>
            props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    }
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: gold;
    margin-bottom: 20px;
    margin-top: 40px;
    img {
        height: 24px;
    }
    padding: 0px 20px;

    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 16px;
    }
`;

const NavList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const NavItem = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    gap-y: 0;
    font-size: 16px;
    padding: 16px 20px;
    cursor: pointer;
    background: ${(props) => (props.active ? "#222" : "transparent")};
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
        background: #222;
    }

    svg {
        font-size: 18px;
    }
`;

const MoreSection = styled.div`
    margin-top: 10px;
    cursor: pointer;
`;

const MoreItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    padding: 16px 20px;
    transition: 0.3s;

    &:hover {
        background: #222;
    }

    svg {
        font-size: 14px;
    }
`;

const SubNavList = styled.div`
    padding-left: 45px;
`;

const SubNavItem = styled.div`
    font-size: 14px;
    padding: 5px 0;
    color: #bbb;
    cursor: pointer;

    &:hover {
        color: white;
    }
`;

const RedemptionCard = styled.div`
    background: url(/images/common/loanifi.png);
    background-size: 100% 100%;
    padding: 25px;
    border-radius: 20px;
    margin: 20px;
    font-size: 14px;
    color: white;
    overflow: hidden;

    p {
        color: var(--Text-Primary, #fff);
        font-family: Conthrax;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 5px;
    }

    span {
        color: var(--Text-Secondary, #cfcfcf);

        /* P3/Regular */
        font-family: Telegraf;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
    }
`;

const DetailsButton = styled.div`
    margin-top: 20px;
`;

const Arrow = styled.span`
    margin-left: 5px;
    font-weight: bold;
`;

export default Sidebar;
