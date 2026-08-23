export const adnThreads = {
  corazon: {
    title: "Corazón",
    subtitle: "Amor · Fe · Esperanza",
    eyebrow: "El hilo que nos inspira",
    text: "Ponemos a las personas en el centro. El amor nos acerca, la fe sostiene nuestro compromiso y la esperanza nos impulsa a creer que toda realidad puede transformarse.",
    values: ["Amor", "Fe", "Esperanza"],
  },
  raices: {
    title: "Raíces",
    subtitle: "Dignidad · Integridad · Transparencia",
    eyebrow: "El hilo que nos sostiene",
    text: "Protegemos la dignidad de cada persona y actuamos con integridad. De estas raíces nace la confianza que sostiene cada programa, alianza y decisión.",
    values: ["Dignidad", "Integridad", "Transparencia"],
  },
  manos: {
    title: "Manos",
    subtitle: "Servicio · Solidaridad · Inclusión",
    eyebrow: "El hilo que nos moviliza",
    text: "Convertimos la empatía en servicio. Unimos voluntades y capacidades para acompañar a las comunidades con solidaridad, respeto e inclusión.",
    values: ["Servicio", "Solidaridad", "Inclusión"],
  },
  horizonte: {
    title: "Horizonte",
    subtitle: "Justicia · Autonomía · Transformación",
    eyebrow: "El hilo que nos orienta",
    text: "Trabajamos por soluciones que superen la asistencia pasajera. Buscamos justicia, autonomía y transformaciones sociales que permanezcan en el tiempo.",
    values: ["Justicia", "Autonomía", "Transformación"],
  },
} as const;

export type AdnKey = keyof typeof adnThreads;

export const pillarPaths = [
  {
    key: "desarrollo",
    short: "Ser escuchado",
    title: "Desarrollo Humano Integral",
    promise: "Acompañamos a las personas, no solamente sus necesidades inmediatas.",
    reality:
      "Una situación de vulnerabilidad puede afectar al mismo tiempo la estabilidad emocional, las relaciones familiares, los ingresos, la educación y el ejercicio de derechos.",
    response:
      "Proponemos una lectura integral de cada situación para articular orientación, formación, acompañamiento psicosocial y acceso a rutas institucionales.",
    change:
      "Personas y familias con mayores capacidades para decidir, ejercer sus derechos y construir proyectos de vida autónomos.",
    program: "Protección Psicosocial, Familia y Tejido Comunitario",
    slug: "proteccion-psicosocial",
    indicator: "Personas caracterizadas, planes de orientación y rutas activadas.",
    status: "En formulación",
    icon: "users",
  },
  {
    key: "equidad",
    short: "Vivir sin barreras",
    title: "Equidad de Género",
    promise: "Las oportunidades no deben depender del género.",
    reality:
      "Las barreras económicas, laborales, familiares y sociales pueden limitar la autonomía, la seguridad y la participación.",
    response:
      "Integramos enfoque de género, formación, liderazgo, prevención de violencias y acceso equitativo a oportunidades.",
    change:
      "Personas con mayor autonomía, protección y capacidad para participar en las decisiones que afectan su vida.",
    program: "Inclusión Productiva y Economía Popular",
    slug: "inclusion-productiva",
    indicator: "Participación desagregada, procesos formativos y rutas de protección.",
    status: "En formulación",
    icon: "users",
  },
  {
    key: "derechos",
    short: "Ejercer derechos",
    title: "Garantía de Derechos",
    promise: "Un derecho que no puede ejercerse necesita una ruta de protección.",
    reality:
      "Muchas personas desconocen sus derechos, las instituciones competentes o los procedimientos para solicitar atención.",
    response:
      "Brindamos orientación jurídica inicial, información comprensible e identificación responsable de rutas institucionales.",
    change:
      "Personas informadas y capaces de activar mecanismos de protección y relacionarse mejor con las instituciones.",
    program: "Protección Jurídica y Garantía de Derechos",
    slug: "proteccion-juridica",
    indicator: "Orientaciones realizadas, materias consultadas y remisiones documentadas.",
    status: "Ruta disponible",
    icon: "shield",
  },
  {
    key: "educacion",
    short: "Desarrollar capacidades",
    title: "Educación y Capacitación",
    promise: "Aprender abre caminos hacia la autonomía.",
    reality:
      "La falta de competencias digitales, laborales o educativas limita el acceso a oportunidades y la generación de ingresos.",
    response:
      "Promovemos habilidades para la vida, formación pertinente y preparación para el empleo o el emprendimiento.",
    change:
      "Personas con capacidades para aprender, trabajar, emprender y participar activamente en su comunidad.",
    program: "Educación, Formación y Empleabilidad",
    slug: "educacion-empleabilidad",
    indicator: "Inscripción, permanencia, finalización y competencias desarrolladas.",
    status: "En formulación",
    icon: "spark",
  },
  {
    key: "vivienda",
    short: "Habitar con dignidad",
    title: "Vivienda Digna",
    promise: "Un hogar seguro es la base para reconstruir la vida.",
    reality:
      "Las condiciones inadecuadas de habitabilidad afectan la salud, la seguridad, la convivencia y el desarrollo familiar.",
    response:
      "Orientamos, articulamos aliados y formulamos iniciativas relacionadas con habitabilidad, entorno y rutas de vivienda.",
    change:
      "Familias con entornos más seguros, saludables y adecuados para desarrollar su proyecto de vida.",
    program: "Vivienda Social y Hábitat Digno",
    slug: "vivienda-habitat",
    indicator: "Hogares caracterizados, rutas identificadas y proyectos formulados.",
    status: "En formulación",
    icon: "shield",
  },
  {
    key: "alimentacion",
    short: "Crecer con bienestar",
    title: "Alimentación y Nutrición",
    promise: "Alimentarse dignamente es una condición para crecer y desarrollarse.",
    reality:
      "La inseguridad alimentaria puede afectar la salud, el aprendizaje, el desarrollo infantil y la estabilidad familiar.",
    response:
      "Articulamos apoyos, educación alimentaria y proyectos sostenibles, priorizando primera infancia y hogares vulnerables.",
    change:
      "Familias con mejores capacidades para acceder a una alimentación adecuada y fortalecer prácticas de cuidado.",
    program: "Seguridad Alimentaria y Primera Infancia",
    slug: "seguridad-alimentaria",
    indicator: "Hogares participantes, actividades educativas y seguimientos realizados.",
    status: "En formulación",
    icon: "leaf",
  },
  {
    key: "social",
    short: "Encontrar una ruta",
    title: "Trabajo Social y Jurídico",
    promise: "Escuchar, orientar y acompañar para encontrar una ruta posible.",
    reality:
      "Los problemas familiares, sociales y jurídicos suelen presentarse de manera simultánea y requieren respuestas coordinadas.",
    response:
      "Integramos lectura social, orientación jurídica, acompañamiento psicosocial y remisión a entidades competentes.",
    change:
      "Personas que comprenden su situación, conocen alternativas y pueden avanzar mediante una ruta organizada.",
    program: "Atención Diferencial y Respuesta Humanitaria",
    slug: "respuesta-humanitaria",
    indicator: "Situaciones orientadas, rutas definidas, remisiones y cierres documentados.",
    status: "Ruta disponible",
    icon: "link",
  },
  {
    key: "alianzas",
    short: "Multiplicar capacidades",
    title: "Cooperación y Alianzas",
    promise: "Ninguna transformación profunda se construye en solitario.",
    reality:
      "Las necesidades comunitarias requieren conocimientos, recursos y competencias que superan la capacidad de una sola organización.",
    response:
      "Conectamos entidades públicas, empresas, universidades, cooperantes, voluntarios y organizaciones comunitarias.",
    change:
      "Proyectos mejor articulados, sostenibles y con capacidades complementarias al servicio de las comunidades.",
    program: "Cooperación Nacional e Internacional",
    slug: "cooperacion",
    indicator: "Alianzas formalizadas, aportes movilizados, proyectos y horas de voluntariado.",
    status: "Alianzas abiertas",
    icon: "link",
  },
] as const;

export const programs = [
  ["01", "Protección Jurídica y Garantía de Derechos", "Orientación, acompañamiento y acceso efectivo a rutas de protección."],
  ["02", "Educación, Formación y Empleabilidad", "Capacidades para el aprendizaje, el trabajo digno y el desarrollo personal."],
  ["03", "Inclusión Productiva y Economía Popular", "Fortalecimiento de iniciativas, emprendimientos y autonomía económica."],
  ["04", "Vivienda Social y Hábitat Digno", "Entornos seguros, habitables y conectados con el bienestar comunitario."],
  ["05", "Seguridad Alimentaria y Primera Infancia", "Nutrición, cuidado y oportunidades desde los primeros años de vida."],
  ["06", "Protección Psicosocial, Familia y Tejido Comunitario", "Vínculos protectores, salud emocional y convivencia solidaria."],
  ["07", "Atención Diferencial y Respuesta Humanitaria", "Acción oportuna, inclusiva y adaptada a cada población y contexto."],
  ["08", "Cooperación Nacional e Internacional", "Alianzas técnicas y financieras para ampliar el impacto sostenible."],
  ["09", "Gobernanza, Transparencia y Fortalecimiento Institucional", "Gestión ética, medible y preparada para crecer con solidez."],
] as const;

export const programSlugs = [
  "proteccion-juridica",
  "educacion-empleabilidad",
  "inclusion-productiva",
  "vivienda-habitat",
  "seguridad-alimentaria",
  "proteccion-psicosocial",
  "respuesta-humanitaria",
  "cooperacion",
  "gobernanza-transparencia",
] as const;

export const people = [
  "Infancia",
  "Jóvenes",
  "Mujeres cabeza de hogar",
  "Hombres cabeza de hogar",
  "Adultos mayores",
  "Comunidades afrodescendientes e indígenas",
  "Migrantes y refugiados",
  "Víctimas del conflicto armado",
  "Familias afectadas por emergencias",
] as const;

export const impact = [
  "Protección",
  "Capacitación",
  "Autonomía",
  "Inclusión",
  "Bienestar",
  "Reconstrucción del tejido social",
] as const;

export const FORM_ENDPOINT = "https://formsubmit.co/karinnalozz20@gmail.com";
