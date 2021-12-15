import React from 'react'
import './ProjectItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

type FooterItem = {
    awesomeFontLibrary: IconPrefix;
    awesomeFontIcon: IconName;
    title: string;
    link: string;
}

type ProjectItemProps = {
    period: string;
    title: string;
    image: string;
    imageAlt?: string;
    footerItems?: FooterItem[];
    children?: React.ReactNode;
}

const ProjectItem = (props: ProjectItemProps) => {
    const {period, title, image, imageAlt, footerItems, children} = props;

    return (
        <div className='ProjectItem Tile'>
            <img className="ProjectItem-Image" src={image} alt={imageAlt} />
            <div className="ProjectItem-Content">
                <div className="ProjectItem-Header">{title}</div>
                {children}
                <div className="ProjectItem-Footer">
                    <div className="ProjectItem-Links">
                        {footerItems?.map(item => {
                            return (
                                <a className="ProjectItem-FooterLink" href={item.link} rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon className='ProjectItem-LinkIcon' icon={[item.awesomeFontLibrary, item.awesomeFontIcon]} />
                                    <div className="ProjectItem-LinkTitle">{item.title}</div>
                                </a>
                            )
                        })}
                    </div>
                    <div className="ProjectItem-Period">{period}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
