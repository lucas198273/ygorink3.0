import AboutIntro from '../components/AboutIntro/AboutIntro';
import SocialMediaSection from '../components/SocialMediaSection/SocialMediaSection';
import './About.css'; // novo css da página

export default function About() {
  return (
    <div className="about-page">
      <AboutIntro />
      
      <SocialMediaSection />
      {/* <AboutGallery /> */}
    </div>
  );
}
