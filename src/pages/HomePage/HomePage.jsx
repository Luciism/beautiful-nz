import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';


import { DataContext } from "../../DataContext";
import './HomePage.css'
import NewZealandTextImage from "../../assets/images/new-zealand-text.png";
import CardCultureImage from "../../assets/images/card-culture.png";
import CardSceneryImage from "../../assets/images/card-scenery.png";
import CardArt from "../../assets/images/card-art.png";


const HomePage = () => {
    const { lang } = useContext(DataContext);

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

                <div className="card card-1">
                    <img src={CardCultureImage} alt="Marae with people in front of it" />
                    <div className="card-info">
                        <h3>{lang == "en" ? "OUR CULTURE" : "TŌ TĀTOU TIKANGA"}</h3>
                        <p>{lang == "en" ? "Uncover the treasures of Māori culture." : "Whakahorohia ngā Taonga o te Ao Māori."}</p>
                        <Link to="" className='learn-more-btn pill-btn background-gradient-down'>{lang == "en" ? "LEARN MORE" : "WHAKAWHITI KIA MŌHIO"}</Link>
                    </div>
                </div>

                <div className="card card-2">
                    <img src={CardSceneryImage} alt="Lake with mountains in the distance" />
                    <div className="card-info">
                        <h3>{lang == "en" ? "DISCOVER SCENERY" : "WHIWHI KI TE WAI O TE WHENUA"}</h3>
                        <p>{lang == "en" ? "Aotearoa's untamed wilderness." : "Te Ao Whakaharahara o Aotearoa."}</p>
                        <Link to="" className='learn-more-btn pill-btn background-gradient-down'>{lang == "en" ? "LEARN MORE" : "WHAKAWHITI KIA MŌHIO"}</Link>
                    </div>
                </div>

                <div className="card card-3">
                    <img src={CardArt} alt="People looking at art in an art gallery." />
                    <div className="card-info">
                        <h3>{lang == "en" ? "ADMIRE ART" : "WHAKAMIHI KI TE TOI"}</h3>
                        <p>{lang == "en" ? "Immerse yourself in artistic expression." : "Whakamihi ki te toi, huri ki te ao o te waiata."}</p>
                        <Link to="" className='learn-more-btn pill-btn background-gradient-down'>{lang == "en" ? "LEARN MORE" : "WHAKAWHITI KIA MŌHIO"}</Link>
                    </div>
                </div>

            </div>

            <div className="tourism-guide-card">
                <p className="heading-text">{lang == "en" ? "Planning a trip?" : "Ka hīoi rā koe i tētahi haerenga?"}</p>
                <Link className="guide-link" to="">
                    <span>{lang == "en" ? "View our tourism guide" : "Tirohia te tāringa haerenga a mātou"}</span>
                    <Icon className='icon' icon="ep:right" />
                </Link>
            </div>
        </div>
    );
}

export default HomePage;