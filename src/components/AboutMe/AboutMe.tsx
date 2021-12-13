import './AboutMe.scss'

const AboutMe = (): JSX.Element => {
    return (
        <div className="AboutMe Tile">
            <div className="AboutMe-About">
                <div className='TileTitle'>About Me</div>
                <p>Hi, I am Michel Bongard, a full-stack software engineer from Rapperswil-Jona, Switzerland.</p>
                <p>I am currently working at the INS Institute for Networked Solutions at the OST – Eastern Switzerland University of Applied Sciences. Here, I am employed as a full-stack software engineer for network applications (mainly in the field of Segment Routing) and as an assistant to the professors.</p>
            </div>
            <div className="AboutMe-Basic">
                <div className='TileTitle'>Basic Information</div>
                <div className="AboutMe-Basic-Item">
                    <div className="AboutMe-Basic-Item-Name">First Name</div>
                    <div className="AboutMe-Basic-Item-Value">Michel</div>
                </div>
                <div className="AboutMe-Basic-Item">
                    <div className="AboutMe-Basic-Item-Name">Last Name</div>
                    <div className="AboutMe-Basic-Item-Value">Bongard</div>
                </div>
                <div className="AboutMe-Basic-Item">
                    <div className="AboutMe-Basic-Item-Name">Academic Title</div>
                    <div className="AboutMe-Basic-Item-Value">Bachelor of Science FHO in Computer Science</div>
                </div>
                <div className="AboutMe-Basic-Item">
                    <div className="AboutMe-Basic-Item-Name">Email</div>
                    <div className="AboutMe-Basic-Item-Value">mail@michelbongard.ch</div>
                </div>
                <div className="AboutMe-Basic-Item">
                    <div className="AboutMe-Basic-Item-Name">Languages</div>
                    <div className="AboutMe-Basic-Item-Value">German, English, Portuguese</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe