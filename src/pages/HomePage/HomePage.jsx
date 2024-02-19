import { Icon } from '@iconify/react';

import './HomePage.css'
import NewZealandTextImage from "../../assets/images/new-zealand-text.png";
import SkewedRect from "../../assets/images/skewed-rect.png";


const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="intro-section">
                <h3>TENA KOE, WELCOME TO</h3>
                <div className="new-zealand-text-container">
                    {/* for semantics */}
                    <h1 style={{display: "none"}}>NEW ZEALAND</h1>
                    <h1 style={{display: "none"}}>AOTEAROA</h1>
                    <img src={NewZealandTextImage} alt="NEW ZEALAND AOTEAROA" />
                </div>
            </div>
            <div className="cards-section">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="tourism-guide-card">
                <p className="heading-text">
                    Planning a trip?
                </p>
                <p className="text">
                    <span>View our tourism guide</span>
                    <Icon icon="ep:right" />
                </p>
            </div>
        </div>
    );
}

export default HomePage;