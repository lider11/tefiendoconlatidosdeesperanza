import type {Metadata} from "next";
import {ActionPage} from "../components/ActionPage";
import {SupportSection} from "../components/forms/HomeForms";

export const metadata:Metadata={title:"Solicitar orientación",description:"Canal inicial para solicitar orientación social o postular una necesidad comunitaria ante la Fundación Tejiendo.",alternates:{canonical:"/solicitar-orientacion"}};
export default function Page(){return <ActionPage kicker="Ruta de atención" title="Solicita orientación o postula una necesidad" description="Registra la situación para una revisión inicial. El envío no constituye aceptación, asignación de recursos ni garantía de atención." path="/solicitar-orientacion"><SupportSection/></ActionPage>}
