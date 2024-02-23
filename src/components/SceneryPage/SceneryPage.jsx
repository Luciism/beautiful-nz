import './SceneryPage.css'


const SceneryPage = ({ intro, sceneryPanels }) => {
    return (
        <div className='scenery-page'>
            <div className="scenery-intro">
                <h1 className='intro-heading'>
                    <span className='heading-line-1'>{intro.heading[0]}</span>
                    <br />
                    <span className='text-gradient-down heading-line-2'>{intro.heading[1]}</span>
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