import './App.css';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import WorkExperience from './components/workExperience/WorkExperience';
import Footer from './components/footer/Footer';
import SideProjects from './components/sideProjects/SideProjects';
import Top from './components/topButton/Top';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <div className="App">
        <Navigation />
	  <div className='wrap_content'>
        <Banner />
        <Resume />
        <Skills />
        <SideProjects />
        <WorkExperience />
        <Contact />
	 </div>
        <Footer />
        <Top />
    </div>
  );
}

export default App;
