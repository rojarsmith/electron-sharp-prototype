import '../App.css';
import Home from './home.png'
import TimeDisplay from "./TimeDisplay";

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
      <div class="center">
        <div class="icon-container">
          <img src={Home} alt="Home Icon" class="house-icon" />
          <div class="consumption-text">自家消費率</div>
          <div class="breathing-light"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
