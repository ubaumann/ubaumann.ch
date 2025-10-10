import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Certificates from './components/Certificates/Certificates';
import Tasks from './components/Talks/Talks';

function App(): JSX.Element {
  return (
    <div className="App">
      <Banner />
      <AboutMe />
      <Skills />
      <Certificates />
      <Experience />
      <Projects />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
