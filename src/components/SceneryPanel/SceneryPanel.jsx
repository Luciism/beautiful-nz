import { useEffect, useContext, useRef } from "react";
import "./SceneryPanel.css";
import { DataContext } from "../../DataContext";


const SceneryPanel = ({ image, details, invert=false }) => {
    const panelRef = useRef();
    const lang = useContext(DataContext).lang;

    const setClassName = () => {
        if (![undefined, null].includes(panelRef.current)) {
            const width = panelRef.current.getBoundingClientRect().width
            
            let className = "scenery-panel" + (invert == true ? " inverted" : "");
            if (width < 800) {
                className += " vertical";
            }
            panelRef.current.className = className;
        }
    }


    useEffect(() => {
        setClassName();

        const resizeObserver = new ResizeObserver(() => {setClassName()});
        resizeObserver.observe(panelRef.current);
    });

    return (
        <div ref={panelRef}>
            <div className="details-container">
                <h2 className="details-title">{details.title}</h2>
                <p className="details-description">{details.description}</p>
                <a
                    href={details.url}
                    className="details-link gradient-outline"
                    target="_blank"
                    rel="noreferer"
                >
                    {lang == "en" ? "LEARN MORE" : "WHAKAWHITI KIA MŌHIO"}
                </a>
            </div>
            <div className="image-wrapper">
                <img
                    src={image.src}
                    alt={image.src ? image.src : "Image representing specified location"}
                    className="scenery-image"
                />
            </div>
        </div>
    );
}


export default SceneryPanel;