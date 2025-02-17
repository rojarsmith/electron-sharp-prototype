import React, { useState, useEffect } from 'react';
import '../App.css';
import CustomNotificationButton from "../Page3/CustomNotificationButton";
import EchoButton from "./EchoButton";
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
          <CustomNotificationButton width={80} height={60} title="Home" />
        </div>
        <div>エアコン (ECHONET Liteクラス:0x0130 家庭用エアコン)</div>
        <div><EchoButton width={160} height={60} title="power On" action="1" /></div>
        
        <div><EchoButton width={160} height={60} title="power Off" action="2" /></div>
        
        <div><EchoButton width={160} height={60} title="set Temp 10" action="3" /></div>
        
        <div><EchoButton width={160} height={60} title="set Temp 30" action="4" /></div>
      </div>
    </div>
  );
}

export default Page;
