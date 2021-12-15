import './Projects.scss'
import ProjectItem from '../ProjectItem/ProjectItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgLspLqa from '../../assets/projects/project-lsp-lqa.png'

const Projects = () => {
    return (
        <div className='Projects'>
            <div className="Projects-Header">
                <div className="TileTitle">Projects</div>
                <FontAwesomeIcon className='Projects-HeaderIcon' icon={['fas', 'arrow-down']} />
            </div>
            <div className='Projects-List'>
                <ProjectItem period='2020' title='SR-App: Link Saturation Prediction' image={imgLspLqa} footerItems={[
                    {awesomeFontLibrary: 'fas', awesomeFontIcon: 'arrow-down', title: 'PDF', link: 'https://eprints.ost.ch/id/eprint/909/1/HS%202020%202021-BA-EP-Bongard-Illi-SR-App%20Analytics.pdf'},
                    {awesomeFontLibrary: 'fas', awesomeFontIcon: 'arrow-down', title: 'PDF', link: 'https://google.com'},
                    ]}>
                    <p>öalskdöashdflakjsdflasdfl asöljdf laksdbflashdbflakbsd flasdnbf lkas,dhbf labsd fjsadlfbasldfjb aslkjdf lakshdfkasjhvd fkashvdfkasdf kjahsvd fkashdvf akshvf aksdhf aksdhf akshdf kajshdf alksdbfalsdb jh falskdfalskhfba,sd fhbkas dhfkajmsdh fbka s,hdb fkja,hsbd fka,hsbdf k,asbhd fk,hasb dlkf,ba sldkf,balksd, fblaks,d flabsnd fla,b sndfl,ab sdlf ,basldf </p>
                </ProjectItem>
                <ProjectItem period='2020' title='SR-App: Link Saturation Prediction' image={imgLspLqa} footerItems={[
                    {awesomeFontLibrary: 'fas', awesomeFontIcon: 'arrow-down', title: 'PDF', link: 'https://google.com'},
                    {awesomeFontLibrary: 'fas', awesomeFontIcon: 'arrow-down', title: 'PDF', link: 'https://google.com'},
                    ]}>
                    <p>öalskdöashdflakjsdflasdfl asöljdf laksdbflashdbflakbsd flasdnbf lkas,dhbf labsd fjsadlfbasldfjb aslkjdf lakshdfkasjhvd fkashvdfkasdf kjahsvd fkashdvf akshvf aksdhf aksdhf akshdf kajshdf alksdbfalsdb jh falskdfalskhfba,sd fhbkas dhfkajmsdh fbka s,hdb fkja,hsbd fka,hsbdf k,asbhd fk,hasb dlkf,ba sldkf,balksd, fblaks,d flabsnd fla,b sndfl,ab sdlf ,basldf </p>
                </ProjectItem>
            </div>
        </div>
    )
}

export default Projects
