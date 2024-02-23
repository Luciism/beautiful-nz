import { useContext } from 'react';

import { DataContext } from "../../DataContext";
import './Beaches.css';
import SceneryPanel from "../../components/SceneryPanel/SceneryPanel";
import BeachPihaImage from "../../assets/images/beach-display-piha.jpg";
import BeachHaheiImage from "../../assets/images/beach-display-hahei.jpg";
import BeachHotWaterImage from "../../assets/images/beach-display-hot-water-beach.jpg";
import SceneryPage from '../../components/SceneryPage/SceneryPage';


const Beaches = () => {
    const ctx = useContext(DataContext);
    const lang = ctx.lang;

    return (
        <div className="beaches-page-wrapper">
            <SceneryPage
                intro={{
                    heading: lang === "en" ? ["AOTEAROA'S", "BEACHES"] : ["AOTEA ROA", "NGĀ TAI"],
                    description:
                        lang === "en"
                            ? "Beaches are an integral part of New Zealand's identity. New Zealand's warm climate makes the beach the perfect place to live out your summer holidays."
                            : "He wāhanga nui ngā tāi ki te ahuatanga o Aotearoa. He wā kāore te makariri, he mea pai ngā tāi hei wā kaihōunu i ngā wā whakatā."
                }}
                sceneryPanels={[
                    <SceneryPanel
                        image={{src: BeachPihaImage}}
                        details={{
                            title: lang === "en" ? "Piha Beach" : "Tāi Piha",
                            description:
                                lang === "en"
                                    ? "Piha beach, located on the North Island's west coast, is New Zealand's most famous surf beach."
                                    : "Ko Tāi Piha, kei te taha o te Tai Rāwhiti o Te Ika a Māui, te tāi whakatete mātangi waka kaiwhairi nui o Aotearoa.",
                            url: "https://www.piha.co.nz/",
                        }}
                        key={1}
                    />,
                    <SceneryPanel
                        image={{src: BeachHaheiImage}}
                        details={{
                            title: lang === "en" ? "Hahei Beach" : "Tāi Hahei",
                            description:
                                lang === "en"
                                    ? "Hahei Beach, situated on the Coromandel Peninsula, is a sheltered beach suitable for swimming and fishing."
                                    : "Ko Tāi Hahei, kei te Whanganui a Hei, he tāi whakaruru pai mō te kaukau me te hī ika.",
                            url: "https://www.hahei.co.nz/hahei.html",
                        }}
                        invert={true}
                        key={2}
                    />,
                    <SceneryPanel
                        image={{src: BeachHotWaterImage}}
                        details={{
                            title: lang === "en" ? "Hot Water Beach" : "Tāi Waiariki",
                            description:
                                lang === "en"
                                    ? "Hot Water Beach can be found on The Coromandel, featuring underground hot strings that bubble up through the sand at low tide."
                                    : "Ko Tāi Waiariki kei Te Karamandela, kei runga i ngā waiariki i raro o te whenua e pū ana ki te one i te wā moana tata.",
                            url: "https://thecoromandel.com/explore/hot-water-beach",
                        }}
                        key={3}
                    />
                ]}
            />
        </div>
    );
};


export default Beaches;