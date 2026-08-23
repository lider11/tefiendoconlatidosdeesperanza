import {ContactSection, ContributionSection, SupportSection} from "./components/forms/HomeForms";
import {AdnWeave} from "./components/home/AdnWeave";
import {PillarsSection} from "./components/home/PillarsSection";
import {AboutSection, HeroSection, ImpactAndTrustSections, ParticipationSection, PrivacySection, ProgramsSection} from "./components/home/StaticSections";
import {SiteFooter} from "./components/SiteFooter";
import {SiteHeader} from "./components/SiteHeader";

export default function Home(){
  return <>
    <SiteHeader/>
    <main id="contenido">
      <HeroSection/>
      <AboutSection/>
      <AdnWeave/>
      <PillarsSection/>
      <ProgramsSection/>
      <ImpactAndTrustSections/>
      <ContributionSection/>
      <SupportSection/>
      <ParticipationSection/>
      <ContactSection/>
      <PrivacySection/>
    </main>
    <SiteFooter/>
  </>;
}
