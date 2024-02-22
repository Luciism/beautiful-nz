import { useEffect } from "react";
import "./SceneryPanel.css";
import { useRef } from "react";


const SceneryPanel = ({ imageSrc, details, invert=false }) => {
    const panelRef = useRef();

    const setClassName = () => {
        if (panelRef.current !== undefined) {
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
        // window.addEventListener("resize", setClassName);

        // return () => {
        //     window.removeEventListener("resize", setClassName);
        // }
    }, [panelRef]);

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
                    LEARN MORE
                </a>
            </div>
            <div className="image-wrapper">
                <img
                    src={imageSrc}
                    alt="Image representing specified location"
                    className="scenery-image"
                />
            </div>
        </div>
    );
}


export default SceneryPanel;