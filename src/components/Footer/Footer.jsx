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
                {links.map((link, i) => <li key={i}><Link to={link.url} target={link.target ? link.target : ""}>{link.name}</Link></li>)}
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
                    { name: lang == "en" ? "Beaches" : "Tātahi", url: "/explore/beaches" },
                    { name: lang == "en" ? "Bushes" : "Pūrangi", url: "/explore/bushes" },
                    { name: lang == "en" ? "Mountains" : "Nga maunga", url: "/explore/mountains" },
                ]}
            />
            <FooterLinksCategory
                name={lang == "en" ? "TOURISM" : "TŪRISMA"}
                links={[
                    { name: lang == "en" ? "Locations" : "Whāinga", url: "/tourism/locations" },
                    { name: lang == "en" ? "Guides" : "Kaiarāhi", url: "/tourism/guides" },
                    { name: lang == "en" ? "Information" : "Mōhiohio", url: "/tourism/information" },
                ]}
            />
            <FooterLinksCategory
                name={lang == "en" ? "SOCIALS" : "TE WHAI WHAKAARO"}
                links={[
                    { name: lang == "en" ? "Facebook" : "Tā Facebook", url: "/socials/facebook" },
                    { name: lang == "en" ? "Twitter" : "Tā Twitter", url: "/socials/twitter" },
                    { name: lang == "en" ? "Instagram" : "Tā Instagram", url: "/socials/instagram" },
                ]}
            />
            <FooterLinksCategory
                name={lang == "en" ? "OTHER" : "ANŌ HOKI"}
                links={[
                    {
                        name: lang == "en" ? "Government Website" : "Pāpāho Awanui Whare Wānanga",
                        url: "https://www.govt.nz/",
                        target: "_blank"
                    },
                    {
                        name: lang == "en" ? "Github" : "Tā Github",
                        url: "https://github.com/Luciism/beautiful-nz",
                        target: "_blank"
                    },
                ]}
            />
        </footer>
    );
}

export default Footer;