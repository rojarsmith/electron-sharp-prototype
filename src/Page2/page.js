import '../App.css';
import Home from './home.png'

function Page() {
  return (
    <div>
      <div className={`page2-container`}>
        <div class="center">
          <div class="icon-container">
            <img src={Home} alt="Home Icon" class="house-icon" />
            <div class="consumption-text">自家消費率</div>
            <div class="breathing-light"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
