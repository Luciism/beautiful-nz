import './SceneryPage.css'


const SceneryPage = ({ intro, sceneryPanels }) => {
    const introHeading = intro.heading.split(" ");

    console.log(`linear-gradient(
        to left, transparent, var(--background)
    ), url("${intro.backgroundImage}");`);

    return (
        <div className='scenery-page'>
            <div className="scenery-intro" style={{backgroundImage: `linear-gradient(
                to left, transparent, var(--background)), url("${intro.backgroundImage}"
            )`}}>
                <h1 className='intro-heading'>
                    <span className='heading-line-1'>{introHeading[0]}</span>
                    <br />
                    <span className='text-gradient-down heading-line-2'>{introHeading[1]}</span>
                </h1>
                <p className="intro-description">{intro.description}</p>
            </div>
            <div className="scenery-info">
                {sceneryPanels.map((panel, i) => <div key={i}>{panel}</div>)}
            </div>
        </div>
    );   
}

export default SceneryPage;