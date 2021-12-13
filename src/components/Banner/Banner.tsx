import BannerImage from '../../assets/banner.jpg';
import ProfileImage from '../../assets/profileImage.jpg';
import './Banner.scss';
import SocialIcon from '../SocialIcon/SocialIcon';

const Banner = (): JSX.Element => {
    return (
        <div className='Banner'>
            <img className='Banner-Image' src={BannerImage} alt="Rapperswil" />
            <div className='Banner-Content'>
                <a href={ProfileImage} rel="noopener noreferrer" target="_blank">
                    <img className='Banner-Content-ProfileImage' src={ProfileImage} alt='Michel Bongard'/>
                </a>
                <div className='Banner-Content-Name'>Michel Bongard</div>
                <div className='Banner-Content-Description'>Software Engineer</div>
            </div>
            <div className="Banner-Social">
                <SocialIcon link='https://github.com/mbongard' awesomeFontLibrary='fab' awesomeFontIcon='github' />
                <SocialIcon link='https://www.linkedin.com/in/michel-bongard-70792564/' awesomeFontLibrary='fab' awesomeFontIcon='linkedin' />
                <SocialIcon link='mailto:mail@michelbongard.ch' awesomeFontLibrary='fas' awesomeFontIcon='envelope' />
            </div>
        </div>
    )
}

export default Banner