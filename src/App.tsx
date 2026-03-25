import './styles/global.css';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import RitualSection from './components/RitualSection';
import Testimonials from './components/Testimonials';
import CollectionSection from './components/CollectionSection';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import SectionDivider from './components/SectionDivider';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <HeroCarousel />
      <SectionDivider from="black" to="dark" />
      <RitualSection />
      <SectionDivider from="dark" to="light" />
      <Testimonials />
      <CollectionSection />
      <SectionDivider from="light" to="black" />
      <ProcessSection />
      <SectionDivider from="black" to="black" />
      <Footer />
    </>
  );
}
