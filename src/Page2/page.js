import '../App.css';
import Home from './home.png'
import TimeDisplay from "./TimeDisplay";
import Icon02 from "./icon02.png";
import Icon03 from "./icon03.png";
import CustomButton from "./CustomButton";

function Page() {
  return (
    <div className={`page2-container`}>
      <div class="row row-1">
        <div class="column column-1">
          <div><TimeDisplay /></div>
          <div>ネットワーク通信あり</div>
        </div>
        <div class="column column-2">
          <div>Item A</div>
          <div>Item B</div>
          <div>Item C</div>
        </div>
      </div>
      <div class="row row-2">
        <div class="column column-3">
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "50px", marginTop: "20px", marginRight: "70px" }}>
            <CustomButton
              icon={Icon03}
              title="蓄電池"
              status1="放電中"
              status2="DR"
              data="5.5kw"
              percentage={80}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "50px", marginTop: "20px", marginRight: "70px" }}>
            <CustomButton
              icon={Icon02}
              title="外部発電"
              status1="放電中"
              backgroundColor="#ff6b6b"
            />
          </div>
        </div>
        <div class="column column-4">
          <div class="center">
            <div class="icon-container">
              <img src={Home} alt="Home Icon" class="house-icon" />
              <div class="consumption-text">自家消費率</div>
              <div class="breathing-light"></div>
            </div>
          </div>
        </div>
        <div class="column column-5">
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "70px", marginTop: "20px", marginRight: "50px" }}>
            <CustomButton
              icon={Icon02}
              title="蓄電池"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginLeft: "70px", marginTop: "20px", marginRight: "50px" }}>
            <CustomButton
              icon={Icon02}
              title="外部発電"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
