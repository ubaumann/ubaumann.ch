import './Projects.scss'
import ProjectItem from '../ProjectItem/ProjectItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgLspLqa from '../../assets/projects/project-lsp-lqa.png'
import imgSerpro from '../../assets/projects/project-serpro.png'
import imgJagw from '../../assets/projects/project-jagw.png'
import imgSrWebsite from '../../assets/projects/project-sr-website.png'

const Projects = () => {
    return (
        <div className='Projects'>
            <div className="Projects-Header">
                <div className="TileTitle">Projects</div>
                <FontAwesomeIcon className='Projects-HeaderIcon' icon={['fas', 'arrow-down']} />
            </div>
            <div className='Projects-List'>
                <ProjectItem period='2021 - Present' title='Jalapeño API Gateway' image={imgJagw} footerItems={[
                     {awesomeFontLibrary: 'fas', awesomeFontIcon: 'external-link-alt', title: 'Project', link: 'https://www.segment-routing.ch/projects/project-jagw/'},
                    ]}>
                    <p className='ProjectItem-SpaceAfter'>Jalapeño is an cloud-native application developed by <a href='https://www.cisco.com/' rel="noopener noreferrer" target="_blank">Cisco Systems</a> that captures network topology and performance data made available through the Segment Routing technology.</p>
                    <p>With the help of Dominique Illi and Julian Klaiber I am developing an API Gateway in collaboration with Cisco for the use of future SR-Apps.</p>
                </ProjectItem>
                <ProjectItem period='2021' title='segment-routing.ch' image={imgSrWebsite} footerItems={[
                     {awesomeFontLibrary: 'fas', awesomeFontIcon: 'external-link-alt', title: 'Website', link: 'https://www.segment-routing.ch/'},
                    ]}>
                    <p className='ProjectItem-SpaceAfter'>In July 2021 I developed and deployed the website <a href='https://www.segment-routing.ch/' rel="noopener noreferrer" target="_blank">segment-routing.ch</a> (using <a href='https://gohugo.io/' rel="noopener noreferrer" target="_blank">Hugo</a>) for the <a href='https://www.ins.hsr.ch' rel="noopener noreferrer" target="_blank">INS Institute for Networked Solutions</a> in order to showcase our work in the field of Segment Routing.</p>
                    <p></p>
                </ProjectItem>
                <ProjectItem period='2021' title='SR-App: Service Programming (Frontend)' image={imgSerpro} footerItems={[
                     {awesomeFontLibrary: 'fas', awesomeFontIcon: 'external-link-alt', title: 'Project', link: 'https://www.segment-routing.ch/projects/project-serpro/'},
                     {awesomeFontLibrary: 'fab', awesomeFontIcon: 'youtube', title: 'Demo', link: 'https://www.youtube.com/watch?v=tMnpGJwYCNU'},
                    ]}>
                    <p className='ProjectItem-SpaceAfter'>The SR-App SerPro allows a user to program so-called steering policies in a Segment Routing network.</p>
                    <p>The backend was developed by Julian Klaiber and Severin Dellsperger. William Wakelin and I developed the frontend (React) for this SR-App.</p>
                </ProjectItem>
                <ProjectItem period='2020' title='SR-App: Link Saturation Prediction' image={imgLspLqa} footerItems={[
                    {awesomeFontLibrary: 'fas', awesomeFontIcon: 'external-link-alt', title: 'Thesis', link: 'https://eprints.ost.ch/id/eprint/909/1/HS%202020%202021-BA-EP-Bongard-Illi-SR-App%20Analytics.pdf'},
                    {awesomeFontLibrary: 'fas', awesomeFontIcon: 'external-link-alt', title: 'Project', link: 'https://www.segment-routing.ch/projects/project-lsp/'},
                    {awesomeFontLibrary: 'fab', awesomeFontIcon: 'youtube', title: 'Demo', link: 'https://www.youtube.com/watch?v=SouxeTTXx1E'},
                    ]}>
                    <p className='ProjectItem-SpaceAfter'>As part of our Bachelor Thesis, Dominique Illi and I developed the SR-App Link Saturation Prediction.</p>
                    <p>This SR-App makes use of the Segment Routing Traffic Matrix to allow a network operator to make large scale simulations on a topology.</p>
                </ProjectItem>
            </div>
        </div>
    )
}

export default Projects
