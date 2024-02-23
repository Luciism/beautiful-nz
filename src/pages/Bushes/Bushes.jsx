import { useContext } from 'react';
import { DataContext } from '../../DataContext';

import './Bushes.css';
import SceneryPanel from "../../components/SceneryPanel/SceneryPanel";
import BushRangitotoSummitImage from "../../assets/images/bush-display-rangitoto-summit.jpg";
import BushMilfordTrackImage from "../../assets/images/bush-display-milford-track.jpg";
import BushRakiuraTrackImage from "../../assets/images/bush-display-rakiura-track.jpg";
import SceneryPage from '../../components/SceneryPage/SceneryPage';


const Bushes = () => {
    const lang = useContext(DataContext).lang;

    return (
        <div className="bushes-page-wrapper">
            <SceneryPage
                intro={{
                    heading: lang == "en" ? ["AOTEAROA'S", "BUSHES"] : ["AOTEA ROA NGĀ", "HEREHERE"],
                    description: lang == "en"
                        ? "The \"green\" image of New Zealand is just the first brushstroke. When you delve deeper into the bush, you see the vibrant colors of its unique culture, resilience, and respect for the natural world."
                        : "He whakaahua \"kakariki\" no Aotearoa te ahua tuatahi. Ki te whakauru atu ki ngā herehere, ka kite koe i ngā waiwai whānui o tōna ahurea motuhake, tōna kaha, me tōna whakapetapeta ki te ao tūroa."
                }}
    
                sceneryPanels={[
                    <SceneryPanel
                        image={{src: BushRangitotoSummitImage}}
                        details={{
                            title: lang === "en" ? "Rangitoto Summit" : "Te Kōrero o Rangitoto",
                            description: lang === "en"
                                ? "Rangitoto Island, situated in Auckland, is a volcanic island featuring lava fields and the world's largest pōhutukawa forest."
                                : "Ko Rangitoto te moutere whakatete ahi i Tauranga Moana, kei roto i ngā āhuru ahi me te ngāhere pōhutukawa nui rawa o te ao.",
                            url: "https://www.newzealand.com/int/feature/rangitoto-summit-track/"
                        }}
                        key={1}
                    />,
                    <SceneryPanel
                        image={{src: BushMilfordTrackImage}}
                        details={{
                            title: lang === "en" ? "Milford Track" : "Te Ara o Piopio",
                            description:
                                lang === "en"
                                    ? "The Milford Track, spanning 53km, is one of New Zealand's most famous walks boasting the purest of scenery."
                                    : "Ko Te Ara o Piopio, e 53km te roa, he mea rongonui o Aotearoa mo ngā haere whakāri i roto i ngā wāhi ātaahua rawa.",
                            url: "https://www.newzealand.com/int/feature/milford-track/",
                        }}
                        invert={true}
                        key={2}
                    />,
                    <SceneryPanel
                        image={{src: BushRakiuraTrackImage}}
                        details={{
                            title: lang === "en" ? "Rakiura Track" : "Te Ara o Rakiura",
                            description:
                                lang === "en"
                                    ? "The Rakiura Track, a peaceful bush saturated with untouched wildlife and the sweet sound of nature."
                                    : "Ko Te Ara o Rakiura, he ara herehere mō te wairua ki roto i ngā ngāhere kua kore e pā atu, me ngā waiata reka o te taiao.",
                            url: "https://www.newzealand.com/int/feature/rakiura-track/",
                        }}
                        key={3}
                    />
                ]}
            />
        </div>
    );   
}

export default Bushes;