import "./Mountains.css";
import SceneryPanel from "../../components/SceneryPanel/SceneryPanel";
import MountainsMountTaranaki from "../../assets/images/mountains-display-mount-taranaki.png";
import MountainsMountCook from "../../assets/images/mountains-display-mount-cook.png";
import MountainsMountNgauruhoe from "../../assets/images/mountains-display-mount-ngauruhoe.png";
import SceneryPage from '../../components/SceneryPage/SceneryPage';
const MountainsWide = "/src/assets/images/mountains-wide.png";


const Mountains = () => {
    return (
        <div className="mountains-page-wrapper">
            <SceneryPage
                intro={{
                    heading: "AOTEAROA'S MOUNTAINS",
                    description: "New Zealand's majestic ranges beckon explorers, offering panoramic views and a profound connection to the wild, untouched beauty of this land.",
                    backgroundImage: MountainsWide
                }}

                sceneryPanels={[
                    <SceneryPanel
                        imageSrc={MountainsMountTaranaki}
                        details={{
                            title: "Mount Taranaki",
                            description: "Located in the Taranaki region, Mount taranaki is a dormant stratovolcano measuring 2.5km in height.",
                            url: "https://en.wikipedia.org/wiki/Mount_Taranaki"
                        }}
                    />,
                    <SceneryPanel
                        imageSrc={MountainsMountCook}
                        details={{
                            title: "Mount Cook",
                            description: "Mount Cook, positioned in the Southern Alps of New Zealand, is New Zealand's tallest mountain, coming in at 3.7km tall.",
                            url: "https://www.newzealand.com/au/aoraki-mount-cook/" 
                        }}
                        invert={true}
                    />,
                    <SceneryPanel
                        imageSrc={MountainsMountNgauruhoe}
                        details={{
                            title: "Mount Ngauruhoe",
                            description: "2500 year old Mount Ngauruhoe, a volcanic cone, belongs to the Tongariro stratovolcano complex.",
                            url: "https://www.summitpost.org/mt-ngauruhoe/264900"
                        }}
                    />
                ]}
            />
        </div>
    );
}

export default Mountains;