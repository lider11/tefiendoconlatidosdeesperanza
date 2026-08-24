import type {Metadata} from "next";
import {ActionPage} from "../components/ActionPage";
import {ContributionSection} from "../components/forms/HomeForms";

export const metadata:Metadata={title:"Realizar aportes",description:"Conoce cómo aportar recursos, bienes, tiempo o conocimiento a los programas de la Fundación Tejiendo.",alternates:{canonical:"/aportes"}};
export default function Page(){return <ActionPage kicker="Cómo ayudar" title="Aportes que fortalecen capacidades y transforman realidades" description="Presenta una manifestación de interés para aportar de forma responsable, trazable y alineada con nuestros programas." path="/aportes"><ContributionSection/></ActionPage>}
