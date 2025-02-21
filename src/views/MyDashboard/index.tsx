// import React from "react";
import { useMemo } from "react";
import React, { useContext, useEffect, useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import styled from "styled-components";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import GoldXStats from "./components/GoldXStats";
import { useMatch } from "react-router-dom";
import { ArrowTransformIcon } from "../../assets/icons";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import Leaderboard from "./components/Leaderboard";
import Currency from "./components/Currency";
import Sidebar from "./components/Sidebar";
import { loadData, userWalletFormatted, totalPoints, circulatingSupply } from "../../data";
import CoingGeckoMarquee from "./CoingGeckoMarquee";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    className?: string;
}

interface MyNFTProps {}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, className, ...other } = props;

    return (
        <div
            className={className}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const MyDashboard: React.FC<MyNFTProps> = ({}) => {
    const [tabValue, setTabValue] = React.useState(0);
    const [loading, setLoading] = useState(true);
        const [datas, setDatas] = useState<any>(null);
        const [cSupply, setSupply] = useState<any>(null);
        const isFetched = useRef(false); // ✅ Prevent duplicate calls
    
        useEffect(() => {
            if (isFetched.current) return; // ✅ Prevent re-execution
            isFetched.current = true;
    
            const fetchData = async () => {
                try {
                    const result = await loadData();
                    console.log("data is ", result);
                    setDatas(result);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
    
            const fetchCirculatingSupply = async () => {
                try {
                    const supply = await circulatingSupply();
                    console.log("circulating supply is ", supply);
                    setSupply(supply);
                } catch (error) {
                    console.error("Error fetching circulating supply:", error);
                }
            };
    
            const fetchAll = async () => {
                await Promise.all([fetchData(), fetchCirculatingSupply()]); // ✅ Fetch both in parallel
                setLoading(false); // ✅ Mark loading as complete
            };
    
            fetchAll();
        }, []);
    const searchpathvalues = useMatch({
        path: "/search",
    });
    const searchmatch: boolean = searchpathvalues?.pathnameBase === "/search";
    
        const NFTsGOLDXVal = useMemo(() => {
            let units = 0;
            if (datas?.stats?.NFTsCLS) {
              units += datas?.stats.NFTsCLS.Pros * 99;
              units += datas?.stats.NFTsCLS.Miners * 1980;
            }
            return units;
          }, [datas?.stats]); // Runs only when stats change
          
          const totalSac = useMemo(() => {
            return (
              (datas?.stats?.totalGOLDX || 0) +
              (datas?.stats?.totalWGOLDX || 0) +
              (datas?.stats?.totalWGOLDXBsc || 0) +
              NFTsGOLDXVal
            );
          }, [datas?.stats, NFTsGOLDXVal]); 
          
          const totalSacUSD = useMemo(() => {
            return (totalSac * (datas?.stats?.price || 0)).toFixed(0);
          }, [totalSac, datas?.stats]);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <>
            <Layout>
                <LeftWrapper>
                    <Sidebar />
                </LeftWrapper>
                <RightWrapper>
                    <DashboardHeader />
                    {/* //add marquee here */}
                    <CoingGeckoMarquee />

                    <WelcomeHeader heading="Dashboard" username="John" />
                    <div className="paddinglayoutx">
                        <AmountValueBox>
                            <img
                                src="images/common/amountdetails.png"
                                className="bg"
                                alt=""
                            />
                            <div className="content">
                                <div className="row row1">
                                    <div className="col">
                                        <h1>${Number(totalSacUSD).toLocaleString()}</h1>
                                        <p>Total $USDX Value Sacrficed</p>
                                    </div>
                                    <div className="col">
                                        <h1>${Number(datas?.stats?.price).toFixed(5) }</h1>
                                        <p>GOLDX - USDX Price</p>
                                    </div>
                                </div>
                                <div className="row row2">
                                    <div className="col">
                                        <h1>Buy Mining Rights</h1>
                                        <p>
                                        This is where you can Purchase <br />
                                        GOLDX Mining Rights
                                        </p>
                                    </div>
                                    <div className="col">
                                        <ActionButton
                                            label="Buy Mining Rights"
                                            variant="primary"
                                            className="btnwidth100"
                                            // @ts-ignore
                                            icon={<ArrowTransformIcon />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </AmountValueBox>
                    </div>
                    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
                        {!searchmatch && (
                            <Box
                                sx={{
                                    borderBottom: 1,
                                    borderColor: "divider",
                                    background: "var(--Brand-Dark, #111);",
                                }}
                                className="paddinglayoutx"
                            >
                                <Tabs
                                    value={tabValue}
                                    onChange={handleChange}
                                    aria-label="basic tabs example"
                                >
                                    <Tab
                                        label="GOLDX STATS"
                                        {...a11yProps(0)}
                                    />
                                    <Tab label="CURRENCY" {...a11yProps(1)} />
                                    <Tab
                                        label="LEADERBOARD"
                                        {...a11yProps(2)}
                                    />
                                </Tabs>
                            </Box>
                        )}

                        <CustomTabPanelWrapper
                            value={tabValue}
                            index={0}
                            className="paddinglayoutx"
                        >
                            <GoldXStats />
                        </CustomTabPanelWrapper>
                        <CustomTabPanelWrapper
                            value={tabValue}
                            index={1}
                            className=" paddinglayoutx paddinglayouty"
                        >
                            <Currency />
                        </CustomTabPanelWrapper>
                        <CustomTabPanelWrapper
                            value={tabValue}
                            index={2}
                            className=" paddinglayoutx paddinglayouty"
                        >
                            <Leaderboard />
                        </CustomTabPanelWrapper>
                    </Box>
                </RightWrapper>
            </Layout>
        </>
    );
};

const LeftWrapper = styled.div`
    width: 350px;
    position: relative;
`;
const RightWrapper = styled.div`
    width: calc(100% - 350px);
`;
const Layout = styled.section`
    display: flex;
    @media screen and (max-width: 1200px) {
        ${RightWrapper} {
            width: 100%;
        }
        ${LeftWrapper} {
            width: auto;
        }
    }
`;
const CustomTabPanelWrapper = styled(CustomTabPanel)`
    background: #232323;
    // padding: 40px 20px;
    width: 100%;
    box-sizing: border-box;
`;

const AmountValueBox = styled.div`
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    margin-bottom: 40px;
    .bg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
    .content {
        backdrop-filter: blur(60px);
        .row {
            &.row1 {
                display: flex;
                border-bottom: 2px solid rgba(35, 35, 35, 0.58);
                .col {
                    padding: 32px;
                    width: 50%;
                    h1 {
                        margin: 0;
                        font-family: Conthrax;
                        font-size: 40px;
                        font-style: normal;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }
                    p {
                        color: var(--Text-Tertiary, #969696);
                        font-family: Telegraf;
                        font-size: 16px;
                        margin: 0;
                    }
                    &:first-child {
                        border-right: 3px solid rgba(35, 35, 35, 0.58);
                    }
                }
            }
            &.row2 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 32px;
                h1 {
                    margin: 0;
                    font-family: Conthrax;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
                p {
                    color: var(--Text-Tertiary, #969696);
                    font-family: Telegraf;
                    font-size: 12px;
                    margin: 0;
                }
                .col {
                    &:last-child {
                        min-width: 300px;
                        .btnwidth100 {
                            transform: scale(0.8);
                            transform-origin: right;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1200px) {
        .content {
            .row1,
            .row2 {
                flex-direction: column;
                .col {
                    width: 100% !important;
                    &:first-child {
                        border-right: 0;
                        border-bottom: 3px solid rgba(35, 35, 35, 0.58);
                    }
                }
            }
            .row2 {
                .col {
                    &:first-child {
                        border-right: 0;
                        border-bottom: 0;
                    }
                }
                .btnwidth100 {
                    margin-top: 14px;
                    transform: scale(1) !important;
                    transform-origin: left !important;
                }
            }
        }
    }
`;
export default MyDashboard;
