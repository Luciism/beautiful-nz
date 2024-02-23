import { useContext } from "react";

import { DataContext } from "../../DataContext";
import "./NotFound.css";

const NotFound = () => {
    const lang = useContext(DataContext).lang;


    return (
        <div className="not-found-page">
            <div className="info-container">
                <h1>404</h1>
                <div className="details">
                    <h2>{lang == "en" ? "Page not found!" : "Whārangi kāore i kitea!"}</h2>
                    <p>{lang == "en"
                            ? "Because this website was designed for a web development assessment, most links lead nowhere."
                            : "Nō te mea i hangaia tēnei paetukutuku mō te whakamātau whakawhanake tukutuku, kaore te nuinga o ngā hononga e arahina atu ki tetahi wahi."}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;