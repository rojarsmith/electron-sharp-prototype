import '../App.css';
import Image01 from './image01.png'
import Image02 from './image02.png'

function Page() {
  return (
    <div>
      <div className={`overlay fade-In-Out`} />
      <div className={`page1-container`}>
        <img src={Image01} alt="Image 01" className="image01" />
        <img src={Image02} alt="Image 02" className="image02" />
        <div>Web Base Prototype</div>
      </div>
    </div>
  );
}

export default Page;
