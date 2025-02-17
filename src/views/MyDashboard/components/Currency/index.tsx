import React from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../../../../const";

// Sample cryptocurrency data
const cryptoData = [
    {
        id: 1,
        name: "USDC",
        symbol: "USDC",
        icon: "images/common/icons/USDC.png", // Replace with actual icon URL
        price: "$0.998692",
        change: "-0.23%",
        isPositive: false,
    },
    {
        id: 2,
        name: "Bitcoin",
        symbol: "BTC",
        icon: "images/common/icons/USDC.png", // Replace with actual icon URL
        price: "$0.998692",
        change: "+0.23%",
        isPositive: true,
    },
    {
        id: 3,
        name: "Ethereum",
        symbol: "ETH",
        icon: "images/common/icons/USDC.png", // Replace with actual icon URL
        price: "$0.998692",
        change: "+0.23%",
        isPositive: true,
    },
    {
        id: 4,
        name: "XRP",
        symbol: "XRP",
        icon: "images/common/icons/USDC.png", // Replace with actual icon URL
        price: "$0.998692",
        change: "-0.23%",
        isPositive: false,
    },
];

const Currency: React.FC = () => {
    return (
        <Layout>
            {cryptoData.map((crypto) => (
                <CryptoCard key={crypto.id}>
                    <CryptoInfo>
                        <div className="info">
                            <Icon src={crypto.icon} alt={crypto.name} />
                            <TextContainer>
                                <CryptoName>{crypto.name}</CryptoName>
                                <CryptoSymbol>{crypto.symbol}</CryptoSymbol>
                            </TextContainer>
                        </div>
                        <div className="price">
                            <Price>{crypto.price}</Price>
                            <Change isPositive={crypto.isPositive}>
                                {crypto.change}
                            </Change>
                        </div>
                    </CryptoInfo>
                    <PriceContainer>
                        <svg
                            width="216"
                            height="80"
                            viewBox="0 0 216 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_46395_10066)">
                                <rect
                                    width="216"
                                    height="80"
                                    rx="12"
                                    fill="white"
                                    fill-opacity="0.04"
                                />
                                <path
                                    d="M0 39.4117L5.02323 38.2758L10.0465 52.1372L15.0697 53.5571L20.093 38.8167L25.1163 36.7071L30.1395 42.7926L35.1628 39.9932L40.186 28.5255L45.2093 58.7095L50.2326 52.9486L55.2558 36.2202L60.279 41.6972L65.3024 61.8875L70.3256 36.7476L75.3488 32.596L80.372 64.3622L85.3953 60.8732L90.4186 55.6397L95.4418 53.3948L100.465 32.8394L105.488 46.268L110.512 53.7735L115.535 19.8165L120.558 30.8921L125.581 40.5612L130.605 30.6622L135.628 64.0242L140.651 39.4523L145.674 17.3688L150.698 22.1154L155.721 42.6573L160.744 35.7875L165.767 45.2809L170.791 40.2502L175.814 44.0232L180.837 30.6216L185.86 44.9022L190.884 56.5187L195.907 68L200.93 64.3622L205.953 52.0831L210.977 12L216 20.8037"
                                    stroke="#F14B5D"
                                    stroke-width="0.75"
                                />
                                <path
                                    opacity="0.08"
                                    d="M0 39.4117L5.02323 38.2758L10.0465 52.1372L15.0697 53.5571L20.093 38.8167L25.1163 36.7071L30.1395 42.7926L35.1628 39.9932L40.186 28.5255L45.2093 58.7095L50.2326 52.9486L55.2558 36.2202L60.279 41.6972L65.3024 61.8875L70.3256 36.7476L75.3488 32.596L80.372 64.3622L85.3953 60.8732L90.4186 55.6397L95.4418 53.3948L100.465 32.8394L105.488 46.268L110.512 53.7735L115.535 19.8165L120.558 30.8921L125.581 40.5612L130.605 30.6622L135.628 64.0242L140.651 39.4523L145.674 17.3688L150.698 22.1154L155.721 42.6573L160.744 35.7875L165.767 45.2809L170.791 40.2502L175.814 44.0232L180.837 30.6216L185.86 44.9022L190.884 56.5187L195.907 68L200.93 64.3622L205.953 52.0831L210.977 12L216 20.8037V80H0V39.4117Z"
                                    fill="#F14B5D"
                                />
                                <g opacity="0.1">
                                    <line
                                        y1="7.625"
                                        x2="216"
                                        y2="7.625"
                                        stroke="#F1F1F1"
                                        stroke-width="0.75"
                                        stroke-dasharray="3.5 3.5"
                                    />
                                    <line
                                        y1="23.625"
                                        x2="216"
                                        y2="23.625"
                                        stroke="#F1F1F1"
                                        stroke-width="0.75"
                                        stroke-dasharray="3.5 3.5"
                                    />
                                    <line
                                        y1="39.625"
                                        x2="216"
                                        y2="39.625"
                                        stroke="#F1F1F1"
                                        stroke-width="0.75"
                                        stroke-dasharray="3.5 3.5"
                                    />
                                    <line
                                        y1="55.625"
                                        x2="216"
                                        y2="55.625"
                                        stroke="#F1F1F1"
                                        stroke-width="0.75"
                                        stroke-dasharray="3.5 3.5"
                                    />
                                    <line
                                        y1="71.625"
                                        x2="216"
                                        y2="71.625"
                                        stroke="#F1F1F1"
                                        stroke-width="0.75"
                                        stroke-dasharray="3.5 3.5"
                                    />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_46395_10066">
                                    <rect
                                        width="216"
                                        height="80"
                                        rx="12"
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </PriceContainer>
                </CryptoCard>
            ))}
        </Layout>
    );
};

const Layout = styled.section`
    width: 100%;

    margin: auto;
    box-sizing: border-box;
    padding-bottom: 80px;
    color: white;
`;

const CryptoInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    justify-content: space-between;
    .info {
        display: flex;
        align-items: center;
    }
    .price {
        display: flex;
        flex-direction: column;
        text-align: right;
        margin-right: 14px;
    }
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 14px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const CryptoName = styled.span`
    overflow: hidden;
    color: var(--Text-Primary, #fff);
    text-overflow: ellipsis;
    font-family: Telegraf;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
`;

const CryptoSymbol = styled.span`
    overflow: hidden;
    color: var(--Text-Tertiary, #969696);
    text-overflow: ellipsis;
    font-family: Telegraf;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;
const CryptoCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    background: #111;
    border-radius: 20px;
    margin-bottom: 10px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        ${CryptoInfo} {
            margin-bottom: 12px;
        }
        ${PriceContainer} {
            width: 100%;
            svg {
                width: 100%;
                height: auto;
            }
        }
    }
`;
const Price = styled.span`
    overflow: hidden;
    color: var(--Text-Primary, #fff);
    text-align: right;
    text-overflow: ellipsis;
    font-family: Telegraf;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`;

const Change = styled.span<{ isPositive: boolean }>`
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    font-family: Telegraf;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    color: ${(props) => (props.isPositive ? "#5AB79B" : "#f14b5d")};
`;

const GraphPlaceholder = styled.div<{ isPositive: boolean }>`
    width: 80px;
    height: 30px;
    background: ${(props) => (props.isPositive ? "#0f0" : "#f00")};
    opacity: 0.3;
    border-radius: 5px;
`;

export default Currency;
