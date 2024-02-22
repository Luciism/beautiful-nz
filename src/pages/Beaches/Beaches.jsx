import './Beaches.css'

import SceneryPanel from "../../components/SceneryPanel/SceneryPanel";
import BeachPihaImage from "../../assets/images/beach-display-piha.png";
import BeachHaheiImage from "../../assets/images/beach-display-hahei.png";
import BeachHotWaterImage from "../../assets/images/beach-display-hot-water-beach.png";

const Beaches = () => {
    return (
        <div className='beaches-page'>
            <div className="scenery-intro">
                <h1 className='intro-heading'>
                    <span className='heading-line-1'>AOTEAROA'S</span>
                    <br />
                    <span className='text-gradient-down heading-line-2'>BEACHES</span>
                </h1>
                <p className="intro-description">Beaches are an integral part of New Zealand's identity. New Zealand's warm climate makes the beach the perfect place to spend your summer days.</p>
            </div>
            <div className="scenery-info">
                <SceneryPanel
                    imageSrc={BeachPihaImage}
                    details={{
                        title: "Piha Beach",
                        description: "Piha beach, located on the North Island's west coast, is New Zealand's most famous surf beach.",
                        url: "https://www.piha.co.nz/"
                    }}
                />
                <SceneryPanel
                    imageSrc={BeachHaheiImage}
                    details={{
                        title: "Hahei Beach",
                        description: "Hahei Beach, situated on the Coromandel Peninsula, is a sheltered beach suitable for swimming and fishing.",
                        url: "https://www.hahei.co.nz/hahei.html"
                    }}
                    invert={true}
                />
                <SceneryPanel
                    imageSrc={BeachHotWaterImage}
                    details={{
                        title: "Hot Water Beach",
                        description: "Hot Water Beach can be found on The Coromandel, featuring underground hot strings that bubble up through the sand at low tide.",
                        url: "https://thecoromandel.com/explore/hot-water-beach"
                    }}
                />
            </div>
        </div>
    );   
}

export default Beaches;