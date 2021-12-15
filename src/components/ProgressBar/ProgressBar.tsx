import React from 'react'
import './ProgressBar.scss'

type ProgressBarProps = {
    cssClass: string;
    name: string;
    image?: string;
    imageAlt?: string;
    progress: number;
}

const SkillLevels = Object.freeze({
    Novice: "Novice",
    Proficient: "Proficient",
    Expert: "Expert",
})

const SkillThresholds = Object.freeze({
    Novice: 50,
    Proficient: 75,
    Expert: 100,
})

const ProgressBar = (props: ProgressBarProps) => {
    const {cssClass, name, image, imageAlt, progress} = props;
    return (
        <div className={buildClassName("ProgressBar", cssClass)}>
            <div className="ProgressBar-Title">
                { image && <img src={image} alt={imageAlt} className='ProgressBar-Image' /> }
                <span>{name}</span>
            </div>
            <div className="ProgressBar-Bar">
                <div className='ProgressBar-Progress' style={{width: progress + "%"}}>
                    <div className="ProgressBar-Level">{getSkillLevel(progress)}</div>
                </div>
            </div>
        </div>
    )
}

const buildClassName = (cn: string, cssClass: string) : string => {
    return cn + " " + cssClass
}

const getSkillLevel = (progress: number) : string => {
    if (progress < SkillThresholds.Novice) return SkillLevels.Novice
    if (progress < SkillThresholds.Proficient) return SkillLevels.Proficient
    return SkillLevels.Expert
}

export default ProgressBar
