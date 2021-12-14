import React from 'react'
import './Skills.scss'
import ProgressBar from '../ProgressBar/ProgressBar';

const Skills = () => {
    return (
        <div className='Skills Tile'>
            <div className="TileTitle">Professional Skills</div>
            <div className="Skills-Items">
                <ProgressBar cssClass='Skills-ProgressBar' name='HTML' progress={80} />
                <ProgressBar cssClass='Skills-ProgressBar' name='SCSS' progress={80} />
                <ProgressBar cssClass='Skills-ProgressBar' name='Typescript' progress={60} />
                <ProgressBar cssClass='Skills-ProgressBar' name='React' progress={50} />
                <ProgressBar cssClass='Skills-ProgressBar' name='.Net' progress={50} />
                <ProgressBar cssClass='Skills-ProgressBar' name='C#' progress={80} />
                <ProgressBar cssClass='Skills-ProgressBar' name='Java' progress={50} />
                <ProgressBar cssClass='Skills-ProgressBar' name='Golang' progress={50} />
                <ProgressBar cssClass='Skills-ProgressBar' name='gRPC' progress={60} />
                <ProgressBar cssClass='Skills-ProgressBar' name='Docker' progress={70} />
                <ProgressBar cssClass='Skills-ProgressBar' name='Kubernetes' progress={70} />
            </div>
        </div>
    )
}

export default Skills
