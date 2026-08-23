"use client";

import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { AdnWeave } from "./components/sections/AdnWeave";
import { Pillars } from "./components/sections/Pillars";
import { ProgramsGrid } from "./components/sections/ProgramsGrid";
import { ElectricProject } from "./components/sections/ElectricProject";
import { People } from "./components/sections/People";
import { Impact } from "./components/sections/Impact";
import { Trust } from "./components/sections/Trust";
import { Alliances } from "./components/sections/Alliances";
import { Participate } from "./components/sections/Participate";
import { Privacy } from "./components/sections/Privacy";
import { ContributionForm } from "./components/forms/ContributionForm";
import { SupportForm } from "./components/forms/SupportForm";
import { ContactForm } from "./components/forms/ContactForm";
import { useFormSubmit } from "./components/forms/useFormSubmit";

export default function Home() {
  const { status, submit } = useFormSubmit();

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido principal
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <About />
        <AdnWeave />
        <Pillars />
        <ProgramsGrid />
        <ElectricProject />
        <People />
        <Impact />
        <Trust />
        <Alliances />
        <ContributionForm status={status.aporte} onSubmit={submit} />
        <SupportForm status={status.apoyo} onSubmit={submit} />
        <Participate />
        <ContactForm status={status.contacto} onSubmit={submit} />
        <Privacy />
      </main>
      <SiteFooter />
    </>
  );
}
