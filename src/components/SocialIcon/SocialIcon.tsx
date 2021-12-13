import React from 'react'
import './SocialIcon.scss'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SocialIconProps = {
    link: string;
    awesomeFontLibrary: IconPrefix;
    awesomeFontIcon: IconName;
}


const SocialIcon = (props: SocialIconProps) => {
    const {link, awesomeFontLibrary, awesomeFontIcon} = props;
    return (
        <a className='SocialIcon' href={link} rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className='SocialIcon-Icon' icon={[awesomeFontLibrary, awesomeFontIcon]} />
        </a>
    )
}

export default SocialIcon
