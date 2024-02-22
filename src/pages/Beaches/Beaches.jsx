import './Beaches.css';
import SceneryPanel from "../../components/SceneryPanel/SceneryPanel";
import BeachPihaImage from "../../assets/images/beach-display-piha.png";
import BeachHaheiImage from "../../assets/images/beach-display-hahei.png";
import BeachHotWaterImage from "../../assets/images/beach-display-hot-water-beach.png";
import SceneryPage from '../../components/SceneryPage/SceneryPage';
const BeachWide = '/src/assets/images/beach-wide.png';


const Beaches = () => {
    return (
        <div className="beaches-page-wrapper">
            <SceneryPage
                intro={{
                    heading: "AOTEAROA'S BEACHES",
                    description: "Beaches are an integral part of New Zealand's identity. New Zealand's warm climate makes the beach the perfect place to live out your summer holidays.",
                    backgroundImage: BeachWide
                }}
    
                sceneryPanels={[
                    <SceneryPanel
                        imageSrc={BeachPihaImage}
                        details={{
                            title: "Piha Beach",
                            description: "Piha beach, located on the North Island's west coast, is New Zealand's most famous surf beach.",
                            url: "https://www.piha.co.nz/"
                        }}
                    />,
                    <SceneryPanel
                        imageSrc={BeachHaheiImage}
                        details={{
                            title: "Hahei Beach",
                            description: "Hahei Beach, situated on the Coromandel Peninsula, is a sheltered beach suitable for swimming and fishing.",
                            url: "https://www.hahei.co.nz/hahei.html"
                        }}
                        invert={true}
                    />,
                    <SceneryPanel
                        imageSrc={BeachHotWaterImage}
                        details={{
                            title: "Hot Water Beach",
                            description: "Hot Water Beach can be found on The Coromandel, featuring underground hot strings that bubble up through the sand at low tide.",
                            url: "https://thecoromandel.com/explore/hot-water-beach"
                        }}
                    />
                ]}
            />
        </div>
    );   
}

export default Beaches;