import { useMemo } from "react";
import React, { useContext, useEffect, useRef, useState } from "react";
import {  getP2TotalPoints } from "../../../../data";
import { useData } from "../../../../contexts/DataContext";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { mobileBreakpoint } from "../../../../const";
import { Percent } from "@mui/icons-material";
    

const Leaderboard: React.FC = () => {
    const [loading, setLoading] = useState(true);
        const { datas } = useData();
    
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
          const totalMinePoints = useMemo(() => {
            if (!datas) return null; // Wait until data is ready
        
            const mPoints = datas.stats.minePoints; 
            const p2Points = getP2TotalPoints(datas.phase2Users);
            console.log(mPoints, p2Points);
            return mPoints + p2Points; // Ensure calculations only run when data is available
        }, [loading, datas]);
    
    
// Sample leaderboard data
// const mPoints = datas?.stats?.minePoints || 1;
// const p2Points = getP2TotalPoints(datas?.phase2Users);
// console.log(mPoints, p2Points);
// const totalMinePoints = (mPoints + p2Points); // Avoid division by zero

const leaderboardData = datas?.mergedUsers?.slice(0, 3).map((user: any, index: any) => ({
    id: index + 1,
    avatar: "/images/common/usr.png",
    address: user.key ? `${user.key.slice(0, 6)}...${user.key.slice(-6)}` : "N/A",
    score: (user.grandTotal / 1000000000 )?.toLocaleString()+' B' || "0",
    isTop: index === 0, // First user is marked as "Top"
    percentage: `${((user.grandTotal || 0) / totalMinePoints * 100).toFixed(2)}%`,
}));

const additionalData = datas?.mergedUsers?.slice(3, 6).map((user: any, index: any) => ({
    rank: index + 4,
    avatar: "/images/common/usr.png",
    address: user.key ? `${user.key.slice(0, 6)}...${user.key.slice(-6)}` : "N/A",
    score: (user.grandTotal / 1000000000 )?.toLocaleString()+' B' || "0",
    percentage: `${((user.grandTotal || 0) / totalMinePoints * 100).toFixed(2)}%`,
}));
    // if (loading) {
    if(!datas) {
        return <div>Loading...</div>; // ✅ Delay rendering until data fetching is complete
    }
    return (
        <Layout>
            <TopLeaderboard>
                {leaderboardData.map((item: any) => (
                    <TopCard
                        key={item.id}
                        isTop={item.isTop}
                        className={`card${item.id}`}
                    >
                        <div className="top">
                            <div className="avatar">
                                <Avatar src={item.avatar} alt="Avatar" />
                                <div className="cup">
                                    <img
                                        src="/images/common/icons/cup.png"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <Address>{item.address}</Address>
                        </div>
                        <div className="bar">
                            <Score className="text">{item.score} <br /> {item.percentage}</Score>
                        </div>
                    </TopCard>
                ))}
            </TopLeaderboard>

            <BottomLeaderboard>
                {additionalData.map((item: any) => (
                    <Row key={item.rank}>
                        <div className="left">
                            <Rank>{item.rank}</Rank>
                            <UserInfo>
                                <SmallAvatar src={item.avatar} alt="Avatar" />
                                <Address>{item.address}</Address>
                            </UserInfo>
                        </div>
                        <Score>{item.score}</Score>
                        <Percentage>{item.percentage}</Percentage>
                    </Row>
                ))}
            </BottomLeaderboard>
        </Layout>
    );
};

const Layout = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
    color: white;
    background: #111;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const TopLeaderboard = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
    padding: 40px 20px;
    padding-bottom: 0;
    background: url("/images/common/cover.png");
    background-size: cover;
`;

const TopCard = styled.div<{ isTop: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    border-radius: 10px;
    width: 120px;
    text-align: center;
    .top {
        margin-bottom: 20px;
        .avatar {
            position: relative;
            margin-bottom: 8px;
            .cup {
                border-radius: 24px;
                border: 4px solid var(--Brand-Dark, #111);

                display: flex;
                width: 32px;
                height: 32px;
                justify-content: center;
                align-items: Center;
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }
    }
    .bar {
        border-radius: 16px 16px 0px 0px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        border-left: 1px solid rgba(255, 255, 255, 0.08);
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 100%
        );
        backdrop-filter: blur(12px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .text {
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
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;

            /* P2/Regular */
            font-family: Telegraf;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
        }
    }
    &.card1 {
        .bar {
            height: 156px;
        }
        .cup {
            background: #ffe290;
        }
    }
    &.card2 {
        .bar {
            height: 124px;
        }
        .cup {
            background: #c7c7c7;
        }
    }
    &.card3 {
        .bar {
            height: 92px;
        }
        .cup {
            background: #a97f57;
        }
    }
    @media screen and (max-width: 600px) {
        width: 100px;
        margin: 0 10px;
    }
    @media screen and (max-width: 400px) {
        width: 80px;
        margin: 0 10px;
    }
`;

const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

const SmallAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const Address = styled.div`
    font-size: 14px;
    color: #fff;
`;

const Score = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #e8ce84;
    margin-top: 10px;
`;

const BottomLeaderboard = styled.div`
    width: 100%;
    // max-width: 800px;
    margin: 20px auto;
    border-radius: 10px;
    // background: #222;
    padding: 10px;
    box-sizing: border-box;
    .left {
        display: flex;
        align-items: center;
    }
`;

const Rank = styled.div`
    width: 20px;
    color: var(--Text-Tertiary, #969696);
    text-align: left;
    font-family: Telegraf;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    margin-right: 14px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Percentage = styled.div`
    color: var(--Text-Primary, #fff);
    font-family: Telegraf;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`;
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    border-bottom: 1px solid #444;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        position: relative;
        .left {
            width: 100%;
        }
        ${SmallAvatar} {
            width: 60px;
            height: 60px;
        }
        ${UserInfo} {
            align-items: flex-start;
        }
        ${Score} {
            position: absolute;
            top: 50px;
            left: 125px;
            margin-top: 0px;
        }
        ${Percentage} {
            position: absolute;
            top: 50px;
            left: 250px;
        }
    }
`;

export default Leaderboard;
