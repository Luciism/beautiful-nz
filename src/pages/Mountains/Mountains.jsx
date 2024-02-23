import { useContext } from 'react';
import { DataContext } from '../../DataContext';

import "./Mountains.css";
import SceneryPanel from "../../components/SceneryPanel/SceneryPanel";
import MountainsMountTaranaki from "../../assets/images/mountains-display-mount-taranaki.jpg";
import MountainsMountCook from "../../assets/images/mountains-display-mount-cook.jpg";
import MountainsMountNgauruhoe from "../../assets/images/mountains-display-mount-ngauruhoe.jpg";
import SceneryPage from '../../components/SceneryPage/SceneryPage';
const MountainsWide = "/src/assets/images/mountains-wide.jpg";


const Mountains = () => {
    const lang = useContext(DataContext).lang;

    return (
        <div className="mountains-page-wrapper">
            <SceneryPage
                intro={{
                    heading: lang === "en" ? ["AOTEAROA'S", "MOUNTAINS"] : ["NGĀ MAUNGA O", "AOTEA ROA"],
                    description:
                        lang === "en"
                            ? "New Zealand's majestic ranges beckon explorers, offering panoramic views and a profound connection to the wild, untouched beauty of this land."
                            : "Ka karanga ngā raupo nui o Aotearoa ki ngā kaiwhakatoro, e whakawhiwhia ana ngā tirohanga whānui me te hononga hohonu ki te ataahua o tenei whenua herekore.",
                    backgroundImage: MountainsWide,
                }}

                sceneryPanels={[
                    <SceneryPanel
                        image={{src: MountainsMountTaranaki}}
                        details={{
                            title: lang === "en" ? "Mount Taranaki" : "Te Maunganui",
                            description:
                                lang === "en"
                                    ? "Located in the Taranaki region, Mount taranaki is a dormant stratovolcano measuring 2.5km in height."
                                    : "Ko Te Maunganui kei roto i te rohe o Taranaki, he maunga ahi whakaheke 2.5km te teitei.",
                            url: "https://en.wikipedia.org/wiki/Mount_Taranaki",
                        }}
                        key={1}
                    />,
                    <SceneryPanel
                        image={{src: MountainsMountCook}}
                        details={{
                            title: lang === "en" ? "Mount Cook" : "Aoraki",
                            description:
                                lang === "en"
                                    ? "Mount Cook, positioned in the Southern Alps of New Zealand, is New Zealand's tallest mountain, coming in at 3.7km tall."
                                    : "Ko Aoraki kei roto i ngā ngaru o te tonga o Aotearoa, te maunga tiketike rawa o Aotearoa, 3.7km te teitei.",
                            url: "https://www.newzealand.com/au/aoraki-mount-cook/",
                        }}
                        invert={true}
                        key={2}
                    />,
                    <SceneryPanel
                        image={{src: MountainsMountNgauruhoe}}
                        details={{
                            title: lang === "en" ? "Mount Ngauruhoe" : "Ngāuruhoe",
                            description:
                                lang === "en"
                                    ? "2500 year old Mount Ngauruhoe, a volcanic cone, belongs to the Tongariro stratovolcano complex."
                                    : "Ko Ngāuruhoe he maunga ahi kōnui, 2500 tau te tau, kei roto i te huinga maunga ahi o Tongariro.",
                            url: "https://www.summitpost.org/mt-ngauruhoe/264900",
                        }}
                        key={3}
                    />
                ]}
            />
        </div>
    );
};


export default Mountains;