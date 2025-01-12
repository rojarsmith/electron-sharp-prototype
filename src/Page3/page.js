import React, { useState, useEffect } from 'react';
import RealTimeChart from "./RealTimeChart";
import '../App.css';
import CustomNotificationButton from "./CustomNotificationButton";
import FpsComponent from "../FpsComponent";

function Page() {
  const [btcPrice, setBtcPrice] = useState("Fetching...");

  useEffect(() => {
    const updatePriceHandler = (event, price) => {
      setBtcPrice(price);
    };

    window.be_api.onUpdatePrice(updatePriceHandler);
    return () => {
      window.be_api.onUpdatePrice(() => { });
    };
  }, []);

  return (
    <div>
      <div >
        <FpsComponent />
      </div>
      <div className={`page3-container`}>
        <div>
          <CustomNotificationButton width={80} height={60} title="Page 2" />
        </div>
        <div>
          Real Time BTC : {btcPrice}
        </div>
        <div style={{ backgroundColor: "black", color: "white", height: "100vh", padding: "20px", marginBottom: "10px" }}>
          {btcPrice ? (
            <RealTimeChart btcPrice={btcPrice} />
          ) : (
            <p>Loading Bitcoin price...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
