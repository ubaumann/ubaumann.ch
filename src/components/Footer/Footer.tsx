import React from 'react'
import './Footer.scss'
import SocialIcon from '../SocialIcon/SocialIcon'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer-Icons">
                <SocialIcon link='https://github.com/mbongard' awesomeFontLibrary='fab' awesomeFontIcon='github' />
                <SocialIcon link='https://www.linkedin.com/in/michel-bongard-70792564/' awesomeFontLibrary='fab' awesomeFontIcon='linkedin' />
                <SocialIcon link='mailto:mail@michelbongard.ch' awesomeFontLibrary='fas' awesomeFontIcon='envelope' />
            </div>
            <div className="Footer-Name">Michel Bongard</div>
            <div className='Footer-Info'>Built with <a href='https://reactjs.org/' rel="noopener noreferrer" target="_blank">React</a>.</div>
        </div>
    )
}

export default Footer
