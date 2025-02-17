import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import {
    ArrowDownIcon,
    ArrowTransformIcon,
    CloseIcon,
    HamburgerIcon,
    UserIcon,
} from "../../../assets/icons";
import { useWindowSize } from "@react-hook/window-size";
import { mobileBreakpoint, smallmobileBreakpoint } from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface Props {
    boxWidth: number; // Optional prop, defaults to '70px' if not provided
}

const browseitemslist = [
    {
        img: "fuse.gold.svg",
        title: "fuse.gold",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
    {
        img: "Binoculars.svg",
        title: "goldx explorer",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
    {
        img: "TestTube.svg",
        title: "goldx testnet",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
    {
        img: "Storefront.svg",
        title: "goldx dex",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
    {
        img: "ShoppingBag.svg",
        title: "marketplace",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
    {
        img: "ShoppingCartSimple.svg",
        title: "minecart",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
    {
        img: "Bridge.svg",
        title: "xbridge",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
    {
        img: "CurrencyCircleDollar.svg",
        title: "loanifi",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
    {
        img: "SidebarSimple.svg",
        title: "dex.gold",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
    {
        img: "Heart.svg",
        title: "gold.live",
        desc: "Lorem ipsum dolor sit amet, consectetur an adipiscing elit, sed do eiusmod.",
    },
];
interface BrowseItemProps {
    img: string;
    title: string;
    desc: string;
}
const BrowseItem: React.FC<BrowseItemProps> = ({ img, title, desc }) => {
    return (
        <BrowseItemWrapper>
            <div className="itemleft">
                <img src={`/images/common/icons/browse/${img}`} alt="" />
            </div>
            <div className="itemright">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
            </div>
        </BrowseItemWrapper>
    );
};
const BrowseComponent: React.FC = () => {
    return (
        <BrowserWrapperOuter>
            <BrowserWrapper>
                {browseitemslist.map((item, index) => (
                    <BrowseItem
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </BrowserWrapper>
        </BrowserWrapperOuter>
    );
};
const NavBar: React.FC = () => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    const heroWrapperRef = useRef(null);
    const [rightMenuWidth, setRightMenuWidth] = useState(0);
    const [leftMenuWidth, setLeftMenuWidth] = useState(0);
    const [opennav, setOpennav] = useState(false);
    useEffect(() => {
        // Function to update width based on window dimensions
        const updateWidth = () => {
            const width = heroWrapperRef.current
                ? // @ts-ignore
                  heroWrapperRef.current.offsetWidth
                : 0;

            setRightMenuWidth(width / 3.19);
            setLeftMenuWidth(width / 2.27);
        };

        updateWidth();
        if (windowDimensions?.width > mobileBreakpoint) {
            setOpennav(false);
        }
    }, [windowDimensions]);
    useEffect(() => {
        // Disable or enable scroll
        if (opennav) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [opennav]);

    return (
        <FramerNavWrapper
            className={`${opennav ? "hamOpened" : ""}`}
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.4,
                duration: 0.5,
            }}
        >
            <HeaderWrapper ref={heroWrapperRef}>
                {opennav && (
                    <MobileWrapper>
                        <div className="sitelogo">
                            <img src="/images/common/LOGO.svg" alt="" />
                        </div>
                        <div
                            className="hamicon"
                            onClick={() => setOpennav(false)}
                        >
                            <CloseIcon />
                        </div>
                    </MobileWrapper>
                )}
                <Nav boxWidth={leftMenuWidth}>
                    <NavList>
                        <NavItem active>Home</NavItem>
                        <NavItem>About Goldx NFT</NavItem>
                        {windowDimensions?.width > mobileBreakpoint ? (
                            <NavItem className="browse">
                                Browse
                                <ArrowDownIcon />
                                <BrowseComponent />
                            </NavItem>
                        ) : (
                            <NavItem className="browse">
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDownIcon />}
                                        aria-controls="browse-content"
                                        id="browse-header"
                                    >
                                        Browse
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <BrowseComponent />
                                    </AccordionDetails>
                                </Accordion>
                            </NavItem>
                        )}
                        <NavItem>Exchange</NavItem>
                    </NavList>
                </Nav>
                <ButtonGroup boxWidth={rightMenuWidth}>
                    <ContactButton>Contact Us</ContactButton>
                    <SignUpButton>
                        <ActionButton
                            label="Sign Up"
                            variant="primary"
                            className="btnwidth100"
                            // @ts-ignore
                            icon={<UserIcon />}
                        />
                    </SignUpButton>
                </ButtonGroup>
            </HeaderWrapper>

            {windowDimensions?.width < mobileBreakpoint && (
                <MobileWrapper>
                    <div className="sitelogo">
                        <img src="/images/common/LOGO.svg" alt="" />
                    </div>
                    <div className="hamicon" onClick={() => setOpennav(true)}>
                        <HamburgerIcon />
                    </div>
                </MobileWrapper>
            )}
        </FramerNavWrapper>
    );
};

const BrowserWrapperOuter = styled.div`
    display: none;
    position: absolute;
    left: 0;
    top: 20px;
    padding-top: 60px;
    width: 70vw;
`;
const BrowserWrapper = styled.div`
    border-radius: 32px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    background: url("/images/common/navbgblur.png");
    background-size: 100% 100%;
`;

const BrowseItemWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 3;
    width: 33.33%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    transition: all 0.3s ease;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    .itemleft {
        margin-right: 10px;
        img {
            width: 32px;
        }
    }
    .itemright {
        width: calc(100% - 40px);
        .title {
            font-family: Telegraf;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            margin-bottom: 3px;
            text-transform: capitalize;
            color: #fff;
        }
        .desc {
            color: var(--Text-Secondary, #cfcfcf);
            font-family: Telegraf;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
            width: 100%;
            white-space: normal;
            word-wrap: break-word;
            overflow: visible;
            text-transform: none;
        }
    }
`;
const MobileWrapper = styled.header`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 14px 40px 20px;
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        .sitelogo {
            img {
                width: 28vw;
            }
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        padding: 10px 20px 20px;
    }
`;

const HeaderWrapper = styled.header`
    display: flex;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    // flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
`;

const NavItem = styled.li<{ active?: boolean }>`
    align-self: stretch;
    border-radius: 32px;
    gap: 10px;
    margin: auto 0;
    // padding: 16px 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    background: ${(props) =>
        props.active ? "var(--Typography-Primary-white, #fff)" : "transparent"};
    color: ${(props) => (props.active ? "var(--Brand-Dark, #111)" : "inherit")};
    @media screen and (max-width: ${mobileBreakpoint}px) {
        white-space: initial;
        padding: 0 20px;
    }

    img {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        align-self: stretch;
        margin: auto 0;
    }
    &:hover {
        background: #fff;
        color: #111;
        svg {
            path {
                stroke: #111;
            }
        }
        &.browse {
            ${BrowserWrapperOuter} {
                display: block;
            }
        }
    }
    // &.browse:hover {
    //     ${BrowseItemWrapper} {
    //         display: flex;
    //     }
    // }
`;
const Nav = styled.nav<Props>`
    border-radius: 40px;
    background: var(--background-surface-2, #2e2d2a);
    backdrop-filter: blur(32px);
    align-self: start;
    display: flex;
    min-height: 64px;
    flex-direction: column;
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    justify-content: center;
    width: fit-content;
    padding: 4px;
    // width: 41vw;
    width: ${(props) => `${props.boxWidth}px` || "70px"};
    font: 400 16px Telegraf, sans-serif;
    box-sizing: border-box;
    ${NavItem} {
        padding: ${(props) => `16px ${props?.boxWidth / 20}px`};
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
    @media screen and (max-width: 1300px) {
        width: auto;
        border: 10px solid #232323;
        min-height: 58px;
    }
`;
const ContactButton = styled.button`
    align-self: stretch;
    border-radius: 32px;
    border: 1.5px solid var(--Lines-Border, #5d5c5a);
    gap: 8px;
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    text-align: center;
    text-transform: capitalize;
    width: 200px;
    padding: 20px 32px;
    font: 500 16px Telegraf, sans-serif;
    background: none;
    cursor: pointer;
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
    // animation: slideAndReset 0.3s ease-in-out forwards;
    overflow: hidden;
    position: relative;
    &:hover {
        &:after {
            left: 100%;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 0 20px;
    }
`;

const SignUpButton = styled.div`
    width: 200px;
`;
const ButtonGroup = styled.div<Props>`
    align-self: start;
    display: flex;
    min-height: 64px;
    align-items: start;
    gap: 16px;
    justify-content: start;
    // width: 30vw;
    width: ${(props) => `${props.boxWidth}px` || "70px"};
    ${ContactButton} {
        width: 50%;
    }
    ${SignUpButton} {
        width: 50%;
        svg {
            path {
                stroke: var(--Brand-Dark, #111);
            }
        }
    }
    @media screen and (max-width: 1300px) {
        background: #232323;
        border-radius: 53px;
        width: auto;
        border: 10px solid #232323;
        box-sizing: border-box;
    }
`;

const NavWrapper = styled.div`
    .MuiAccordion-root {
        width: 100% !important;
        background: transparent !important;
        box-shadow: none !important;
        color: #fff;
        box-sizing: border-box;
        .MuiAccordionSummary-expandIconWrapper {
            svg {
                path {
                    stroke: #fff !important;
                }
            }
        }
        .MuiAccordionSummary-root {
            min-height: unset !important;
            padding: 0 !important;
            background: Transparent !important;
        }
        .MuiAccordionSummary-content {
            margin: 0 !important;
        }
        .MuiOutlinedInput-notchedOutline {
            border: 0;
        }
        .MuiAccordionDetails-root {
            padding: 0 !important;
            padding-top: 0 !important;
            margin-top: 0px;
        }
    }

    &.hamOpened {
        ${HeaderWrapper} {
            display: block;
        }
    }

    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${HeaderWrapper} {
            z-index: 999;
            display: none;
            // background: #232323;
            flex-direction: column;
            position: fixed;
            width: calc(100% - 28px);
            background: #232323;
            top: 0;
            bottom: 0;
            height: 100vh;
            box-sizing: border-box;
            max-width: 100vw;
            padding: 36px 30px;

            box-sizing: border-box;
            flex-wrap: nowrap;
            ${MobileWrapper} {
                padding: 0;
            }
            ${Nav} {
                box-sizing: border-box;
                width: 100%;
                border: 0;
                background: transparent;
                // height: calc(100vh - 64px);
                // height: 100%;
                max-height: calc(100vh - 250px);
                min-height: calc(100vh - 300px);
                justify-content: flex-start;
                padding-top: 40px;
                ${NavList} {
                    flex-direction: column;
                    overflow: auto;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                    ${NavItem} {
                        border-radius: 0;
                        text-transform: uppercase;
                        font-family: Conthrax;
                        font-size: 20px;
                        font-weight: 600;
                        padding: 0;
                        color: #fff !important;
                        padding-bottom: 20px;
                        margin-bottom: 20px;
                        border-bottom: 1px solid #383838;
                        background: transparent !important;
                    }
                }
            }
            ${ButtonGroup} {
                margin-bottom: 0px;
                flex-direction: column;
                width: 100%;
                box-sizing: border-box;
                border: 0;
                ${SignUpButton},button {
                    width: 100%;
                    min-height: 56px;
                }
            }
        }
        ${BrowserWrapperOuter} {
            display: block;
            position: relative;
            padding-top: 0;
            width: 100%;
            ${BrowserWrapper} {
                background: transparent;
            }
            ${BrowseItemWrapper} {
                width: 100%;
                .itemleft {
                    img {
                        margin-top: 4px;
                    }
                }
                .itemright {
                    .title {
                        font-size: 20px;
                        line-height: 28px;
                    }
                    .desc {
                        font-size: 12px;
                        line-height: 16px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        .hamicon {
            transform: scale(0.7);
        }
        ${HeaderWrapper} {
            padding: 30px 12px;
        }
    }
`;
const FramerNavWrapper = motion(NavWrapper);
export default NavBar;
