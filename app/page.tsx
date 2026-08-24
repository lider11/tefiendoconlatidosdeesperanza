import {AdnWeave} from "./components/home/AdnWeave";
import {AboutSection, EvidenceSection, HeroSection, ParticipationSection, PillarsTeaser, ProgramsSection} from "./components/home/StaticSections";
import {SiteFooter} from "./components/SiteFooter";
import {SiteHeader} from "./components/SiteHeader";

export default function Home(){
  return <>
    <SiteHeader/>
    <main id="contenido">
      <HeroSection/>
      <AboutSection/>
      <AdnWeave/>
      <PillarsTeaser/>
      <ProgramsSection/>
      <EvidenceSection/>
      <ParticipationSection/>
    </main>
    <SiteFooter/>
  </>;
}
