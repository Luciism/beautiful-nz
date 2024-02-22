import './Bushes.css';
import SceneryPanel from "../../components/SceneryPanel/SceneryPanel";
import BushRangitotoSummitImage from "../../assets/images/bush-display-rangitoto-summit.png";
import BushMilfordTrackImage from "../../assets/images/bush-display-milford-track.png";
import BushRakiuraTrackImage from "../../assets/images/bush-display-rakiura-track.png";
import SceneryPage from '../../components/SceneryPage/SceneryPage';
const BushWide = "/src/assets/images/bush-wide.png";


const Bushes = () => {
    return (
        <div className="bushes-page-wrapper">
            <SceneryPage
                intro={{
                    heading: "AOTEAROA'S BUSHES",
                    description: "The \"green\" image of New Zealand is just the first brushstroke. When you delve deeper into the bush, you see the vibrant colors of its unique culture, resilience, and respect for the natural world.",
                    backgroundImage: BushWide
                }}
    
                sceneryPanels={[
                    <SceneryPanel
                        imageSrc={BushRangitotoSummitImage}
                        details={{
                            title: "Rangitoto Summit",
                            description: "Rangitoto Island, situated in Auckland, is a volcanic island featuring lava fields and the world's largest pōhutukawa forest.",
                            url: "https://www.newzealand.com/int/feature/rangitoto-summit-track/"
                        }}
                    />,
                    <SceneryPanel
                        imageSrc={BushMilfordTrackImage}
                        details={{
                            title: "Milford Track",
                            description: "The Milford Track, spanning 53km, is one of New Zealand's most famous walks boasting the purest of scenery.",
                            url: "https://www.newzealand.com/int/feature/milford-track/"
                        }}
                        invert={true}
                    />,
                    <SceneryPanel
                        imageSrc={BushRakiuraTrackImage}
                        details={{
                            title: "Rakiura Track",
                            description: "The Rakiura Track, a peaceful bush saturated with untouched wildlife and the sweet sound of nature.",
                            url: "https://www.newzealand.com/int/feature/rakiura-track/"
                        }}
                    />
                ]}
            />
        </div>
    );   
}

export default Bushes;