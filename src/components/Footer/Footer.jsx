import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from "../../DataContext";
import "./Footer.css"


const FooterLinksCategory = ({name, links}) => {
    return (
        <div className="footer-links-category">
            <div className="category-title">
                <h3>{ name }</h3>
                <hr />
            </div>
            <ul>
                {links.map((link, i) => <li key={i}><Link to={link.url}>{link.name}</Link></li>)}
            </ul>
        </div>
    );
}

const Footer = () => {
    const { lang } = useContext(DataContext);

    return (
        <footer className="footer">
            <FooterLinksCategory
                name={lang == "en" ? "EXPLORE" : "HŌPARA"}
                links={[
                    { name: lang == "en" ? "Beaches" : "Tātahi", url: "Pūrangi" },
                    { name: lang == "en" ? "Bushes" : "Pūrangi", url: "" },
                    { name: lang == "en" ? "Mountains" : "Nga maunga", url: "" },
                ]}
            />
            <FooterLinksCategory
                name={lang == "en" ? "TOURISM" : "TŪRISMA"}
                links={[
                    { name: lang == "en" ? "Locations" : "Whāinga", url: "" },
                    { name: lang == "en" ? "Guides" : "Kaiarāhi", url: "" },
                    { name: lang == "en" ? "Information" : "Mōhiohio", url: "" },
                ]}
            />
            <FooterLinksCategory
                name={lang == "en" ? "SOCIALS" : "TE WHAI WHAKAARO"}
                links={[
                    { name: lang == "en" ? "Facebook" : "Tā Facebook", url: "" },
                    { name: lang == "en" ? "Twitter" : "Tā Twitter", url: "" },
                    { name: lang == "en" ? "Instagram" : "Tā Instagram", url: "" },
                ]}
            />
            <FooterLinksCategory
                name={lang == "en" ? "OTHER" : "ANŌ HOKI"}
                links={[
                    { name: lang == "en" ? "Government Website" : "Pāpāho Awanui Whare Wānanga", url: "" },
                    { name: lang == "en" ? "Github" : "Tā Github", url: "" },
                ]}
            />
        </footer>
    );
}

export default Footer;