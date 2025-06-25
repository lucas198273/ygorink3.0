import './About.css'; // novo css da página
import AboutSection from '../components/AboutSection/AboutSection.tsx';
import Spacer from '../components/Spacer/Spacer.tsx';
export default function About() {
  return (
    <div className="about-page">
      <Spacer />
      <AboutSection/>
      {/* <AboutGallery /> */}
    </div>
  );
}
