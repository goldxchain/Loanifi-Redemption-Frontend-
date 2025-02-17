import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserIcon, ButonDollarIconL } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { mobileBreakpoint } from "../../const";
import { connectWallet, fetchUSDXBalance, fetchMinePoints } from "../../data";
interface ProfileButtonProps {}
interface DashboardHeaderProps {}

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const [USDX, setUSDX] = useState(0);
    const [minePoints, setMinePoints] = useState(0);
    const [wallet, setWallet] = useState<string | null>(null);
    const [isConnecting, setIsConnecting] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handleConnectWallet = async () => {
        setIsConnecting(true);
        var walletAddress = await connectWallet();
        if (walletAddress) {
            setWallet(walletAddress);
            // Fetch USDX and minePoints after wallet is connected
            const [usdxBalance, mineBalance] = await Promise.all([
                fetchUSDXBalance(walletAddress),
                fetchMinePoints(walletAddress),
            ]);
            setUSDX(usdxBalance);
            setMinePoints(mineBalance);
        }
        setIsConnecting(false);
    };
    return (
        <Header className="paddinglayoutx">
            <HeaderContent>
                <LeftSection>
                    {isMobile ? (
                        <Logo>
                            <img src="/images/common/logo.png" alt="Logo" />
                        </Logo>
                    ) : (
                        <>
                            <ActionButtonsContainer>
                                <div className="wrappedbutton">
                                    <div className="left">
                                        <h3>USDX</h3>
                                        <h4>{Number(USDX.toFixed(0)).toLocaleString() }</h4>
                                    </div>
                                    <div className="right">
                                        <ButonDollarIconL />
                                    </div>
                                </div>
                            </ActionButtonsContainer>
                            <ActionButtonsContainer>
                                <div className="wrappedbutton">
                                    <div className="left">
                                        <h3>MINE</h3>
                                        <h4>{minePoints.toLocaleString() }</h4>
                                    </div>
                                    <div className="right">
                                        <ButonDollarIconL />
                                    </div>
                                </div>
                            </ActionButtonsContainer>
                            <ActionButtonsContainer>
                                <div className="wrappedbutton">
                                    <div className="left">
                                        <h3>Other Assets</h3>
                                        <h4>1,752.13</h4>
                                    </div>
                                    <div className="right">
                                        <ButonDollarIconL />
                                    </div>
                                </div>
                            </ActionButtonsContainer>
                        </>
                    )}
                </LeftSection>
                <RightSection>
                {/* <ProfileWrapper disabled> */}
                    {/* <div className="accounticon"> <UserIcon /> </div> */}
                {/* </ProfileWrapper> */}
                    {/* <ProfileButton></ProfileButton> */}
                {/* <div className="accounticon"> <UserIcon /> </div> */}

                {wallet ? (
                        <ProfileWrapper disabled>
                        <div className="accounticon"> <UserIcon /> </div>
                        {wallet.slice(0, 6)}...{wallet.slice(-4)}
                        </ProfileWrapper>
                    ) : (
                        <ProfileWrapper onClick={handleConnectWallet} disabled={isConnecting}>
                            <div className="accounticon"> <UserIcon /> </div>{isConnecting ? "Connecting..." : "Connect Wallet"}
                        </ProfileWrapper>
                    )}
                </RightSection>
            </HeaderContent>
        </Header>
    );
};

/* Action Buttons Container */
const WalletButton = styled.button`
    background: #4caf50;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    &:disabled {
        background: gray;
        cursor: not-allowed;
    }
`;
const ActionButtonsContainer = styled.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: auto 0;
    margin-right: 14px;
    position: relative;

    .wrappedbutton {
        flex-direction: row-reverse;
        padding: 3px;
        padding-right: 24px;

        .left {
            margin-left: 18px;
            margin-right: 0px;
        }
    }
`;

/* Header Container */
const Header = styled.header`
    border-bottom: 1px solid var(--Lines-Divider, #383838);
    padding-top: 16px;
    padding-bottom: 16px;
    background: var(--Brand-Dark, #111);

    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 16px 20px;
    }
`;

/* Left Section */
const LeftSection = styled.div`
    display: flex;
    align-items: center;
`;

/* Right Section */
const RightSection = styled.div``;

/* Profile Button */
const ProfileButton: React.FC<ProfileButtonProps> = () => {
    const [showList, setShowList] = useState(false);
    const navigate = useNavigate();

    return (
        <ProfileWrapper onClick={() => setShowList(!showList)}>
            <div className="accounticon">
                <UserIcon />
            </div>
        </ProfileWrapper>
    );
};

/* Profile Wrapper */
const ProfileWrapper = styled.button`
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
    border-radius: 32px;
    border: 1.5px solid var(--Lines-Divider, #383838);
    display: flex;
    width: 171px;
    height: 64px;
    padding: 0;
    background: var(--background-surface-2, #2e2d2a);
    cursor: pointer;
    position: relative;

    .accounticon {
        width: 46px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

/* Logo Component */
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 23px;

    img {
        height: 100%;
    }
`;

/* Header Content */
const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`;

export default DashboardHeader;
