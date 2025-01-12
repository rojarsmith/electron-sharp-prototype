import React, { useState, useEffect } from "react";
import '../App.css';
import Home from './home.png'
import TimeDisplay from "./TimeDisplay";
import Icon02 from "./icon02.png";
import Icon03 from "./icon03.png";
import Icon11 from "./icon11.png";
import CustomButton from "./CustomButton";
import Indicator from "./Indicator";
import CustomNotificationButton from "../Page3/CustomNotificationButton";
import FpsComponent from "../FpsComponent";

function Page() {
  const [percentage1, setPercentage1] = useState(10);
  const [percentage2, setPercentage2] = useState(20);
  const [percentage3, setPercentage3] = useState(30);
  const [percentage4, setPercentage4] = useState(40);
  const [data1, setData1] = useState("10.0kw");
  const [data2, setData2] = useState("20.0kw");
  const [data3, setData3] = useState("30.0kw");
  const [data4, setData4] = useState("40.0kw");
  const [isDecoration, setIsDecoration] = useState("decoration");
  const [isDr, setIsDr] = useState(true);
  const [btcPrice, setBtcPrice] = useState("Fetching...");
  const [inputValue, setInputValue] = useState("Page 2 is OK");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPercentage = Math.floor(Math.random() * 100) + 1;
      setPercentage1(randomPercentage);
      const randomPercentage2 = Math.floor(Math.random() * 100) + 1;
      setPercentage2(randomPercentage2);
      const randomPercentage3 = Math.floor(Math.random() * 100) + 1;
      setPercentage3(randomPercentage3);
      const randomPercentage4 = Math.floor(Math.random() * 100) + 1;
      setPercentage4(randomPercentage4);
      setIsDecoration((prev) => !prev);
    }, 2000);

    const interval2 = setInterval(() => {
      const randomData1 = (Math.random() * 99 + 1).toFixed(1);
      setData1(`${randomData1}kw`);
      const randomData2 = (Math.random() * 99 + 1).toFixed(1);
      setData2(`${randomData2}kw`);
      const randomData3 = (Math.random() * 99 + 1).toFixed(1);
      setData3(`${randomData3}kw`);
      const randomData4 = (Math.random() * 99 + 1).toFixed(1);
      setData4(`${randomData4}kw`);
    }, 1000);

    const interval3 = setInterval(() => {
      setIsDr((prev) => !prev);
      window.be_api.sendEvent("custom-event", inputValue);
    }, 3000);

    const updatePriceHandler = (event, price) => {
      setBtcPrice(price);
    };

    window.be_api.onUpdatePrice(updatePriceHandler);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
      window.be_api.onUpdatePrice(() => { });
    };
  }, []);

  return (
    <div className={`page2-container`}>
      <div >
        <FpsComponent />
      </div>
      <div class="row row-1">
        <div class="column column-1">
          <div><TimeDisplay /></div>
          <div>ネットワーク通信あり</div>
        </div>
        <div class="column column-2">
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "10px", marginTop: "10px", marginRight: "10px" }}>
            <CustomNotificationButton width={100} height={50} title="A" />
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "10px", marginTop: "10px", marginRight: "10px" }}>
            <CustomNotificationButton width={50} height={50} icon={Icon11} popup>
              <div>
                <h2>ポップアップ タイトル</h2>
                <p>あなたの成功は私たちの成功です。</p>
                <p>Rojar Smith @2025</p>
              </div>
            </CustomNotificationButton>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "10px", marginTop: "10px", marginRight: "10px" }}>
            {isDecoration ?
              <CustomNotificationButton width={50} height={50} title="C" decoration />
              :
              <CustomNotificationButton width={50} height={50} title="C" />
            }
          </div>
        </div>
      </div>
      <div class="row row-2">
        <div class="column column-3">
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "50px", marginTop: "20px", marginRight: "70px" }}>
            <CustomButton
              icon={Icon03}
              title="蓄電池"
              status1="放電中"
              status2={isDr ? 'DR' : ''}
              data={data1}
              percentage={percentage1}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "50px", marginTop: "20px", marginRight: "70px" }}>
            <CustomButton
              icon={Icon02}
              title="外部発電"
              status1="放電中"
              backgroundColor="#ff6b6b"
              data={data2}
              percentage={percentage2}
            />
          </div>
        </div>
        <div class="column column-4">
          <div class="center">
            <div class="icon-container">
              <img src={Home} alt="Home Icon" class="house-icon" />
              <div class="consumption-text">自家消費率</div>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <span>インスタント<br />メッセージ</span>
                <br />
                <span>Bitcoin Price</span>
                <br />
                <span>{btcPrice} USD</span>
              </div>
              <div class="breathing-light"></div>
            </div>
          </div>
        </div>
        <div class="column column-5">
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "70px", marginTop: "20px", marginRight: "50px" }}>
            <CustomButton
              icon={Icon02}
              title="蓄電池"
              data={data3}
              percentage={percentage3}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "70px", marginTop: "20px", marginRight: "50px" }}>
            <CustomButton
              icon={Icon02}
              title="外部発電"
              data={data4}
              percentage={percentage4}
            />
          </div>
        </div>
      </div>
      <Indicator top={180} left={245} direction="row" circles={3} backgroundColor="#38a69b" />
      <Indicator top={280} left={245} direction="row" circles={3} backgroundColor="#ff6b6b" />
      <Indicator top={180} left={490} direction="row" circles={3} backgroundColor="#38a69b" />
      <Indicator top={280} left={490} direction="row" circles={3} backgroundColor="#38a69b" />
    </div>
  );
}

export default Page;
