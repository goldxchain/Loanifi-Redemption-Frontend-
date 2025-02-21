import { useEffect } from "react";

const CoingGeckoMarquee = () => {
    useEffect(() => {
        // Create script element
        const script = document.createElement("script");
        script.src = "https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js";
        script.async = true;
        script.onload = () => console.log("CoinGecko Marquee Loaded");
        
        // Append script to the document body
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup script on unmount
        };
    }, []);

    return (
        <div>
            <gecko-coin-price-marquee-widget 
                locale="en" 
                dark-mode="true" 
                transparent-background="true" 
                outlined="true" 
                coin-ids="bitcoin,ethereum,binancecoin,chainlink" 
                initial-currency="usd">
            </gecko-coin-price-marquee-widget>
        </div>
    );
};

export default CoingGeckoMarquee;
