import {
  Beaker,
  Boxes,
  Building2,
  Droplets,
  Factory,
  Feather,
  FlaskConical,
  Gauge,
  Globe2,
  Leaf,
  Mountain,
  PackageCheck,
  Recycle,
  ShieldCheck,
  Snowflake,
  Sprout,
  Thermometer,
  Waves,
  Wind,
} from "lucide-react";
import type {
  Application,
  Feature,
  NavItem,
  ProcessStep,
  Stat,
  TechnicalSpec,
} from "@/types/site";

export const locales = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "en", label: "EN", name: "English" },
  { code: "nl", label: "NL", name: "Nederlands" },
] as const;

export const navItems: NavItem[] = [
  { label: "Produit", href: "/produit" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "Industrie", href: "/industrie" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  emails: [
    "info@barakahperlite.com",
    "support@barakahperlite.com",
    "Sven@barakahperlite.com",
    "Ahmed@barakahperlite.com",
  ],
  email: "info@barakahperlite.com",
  phones: [
    { name: "Sven Willems", number: "+32 497 84 65 79" },
    { name: "Ahmed EL Marjou", number: "+212 707 08 14 25" },
    { name: "Mohamed Gouaskar", number: "+212 661 69 74 90" },
  ],
  phone: "+212 707 08 14 25",
  whatsapp: "212707081425",
  whatsappMessage:
    "Bonjour, je souhaite avoir plus d’informations sur la perlite Barakah.",
  whatsappUrl:
    "https://wa.me/212707081425?text=Bonjour%2C%20je%20souhaite%20avoir%20plus%20d%E2%80%99informations%20sur%20la%20perlite%20Barakah.",
  website: "www.willems-perlite.com",
  websiteUrl: "https://www.willems-perlite.com/",
  linkedinUrl: "https://www.linkedin.com/company/barakah-perlite/",
  address:
    "N°5 ET.3 Imm. El Khiati, Avenue Hassan II, Taroudant.",
  factory:
    "Projet Usine : Zone industrielle Ahl Rmel, Oulad Teima, Taroudant.",
};

export const stats: Stat[] = [
  {
    value: "100%",
    label: "naturel",
    detail: "Roche volcanique expansée sans additif chimique.",
  },
  {
    value: "pH",
    label: "neutre",
    detail: "Support stable pour fertilisation contrôlée.",
  },
  {
    value: "3-4x",
    label: "rétention d’eau",
    detail: "Capacité élevée sans asphyxier les racines.",
  },
  {
    value: "ultra",
    label: "léger",
    detail: "Manipulation, logistique et mélanges optimisés.",
  },
];

export const applications: Application[] = [
  {
    title: "Agriculture",
    description:
      "Substrats horticoles, hydroponie, pépinières, serres et cultures hors-sol à haute précision.",
    icon: Sprout,
    href: "/agriculture",
    accent: "emerald",
  },
  {
    title: "Construction",
    description:
      "Isolation thermique et acoustique, bétons légers, enduits techniques et supports coupe-feu.",
    icon: Building2,
    href: "/industrie",
    accent: "sand",
  },
  {
    title: "Filtration",
    description:
      "Aide filtrante minérale pour liquides industriels, huiles, eau et procédés exigeants.",
    icon: Waves,
    href: "/industrie",
    accent: "silver",
  },
  {
    title: "Industrie",
    description:
      "Absorption, cryogénie, chimie, applications haute température et granulats allégés.",
    icon: Factory,
    href: "/industrie",
    accent: "clay",
  },
];

export const productBenefits: Feature[] = [
  {
    title: "Légèreté maîtrisée",
    description:
      "Une structure expansée qui réduit les charges, facilite le transport et améliore les mélanges.",
    icon: Feather,
  },
  {
    title: "Milieu stérile",
    description:
      "Un substrat propre qui limite les risques de pathogènes et stabilise le démarrage des cultures.",
    icon: ShieldCheck,
  },
  {
    title: "Inertie chimique",
    description:
      "La perlite ne libère pas d’éléments nutritifs imprévus et permet un pilotage précis de la fertigation.",
    icon: Beaker,
  },
  {
    title: "pH neutre",
    description:
      "Une base compatible avec une large variété d’espèces végétales, d’engrais et de formulations.",
    icon: Gauge,
  },
  {
    title: "Aération élevée",
    description:
      "La porosité ouverte augmente l’oxygénation racinaire et réduit la compaction des supports.",
    icon: Wind,
  },
  {
    title: "Rétention utile",
    description:
      "L’eau reste disponible dans la zone racinaire sans transformer le substrat en milieu saturé.",
    icon: Droplets,
  },
  {
    title: "Recyclable",
    description:
      "Un matériau minéral durable, réutilisable selon l’application et inscrit dans une logique sobre.",
    icon: Recycle,
  },
];

export const technicalSpecs: TechnicalSpec[] = [
  {
    label: "Origine",
    value: "Roche volcanique naturelle",
    note: "Valeurs suivies par lot et par grade.",
  },
  {
    label: "pH",
    value: "6.5 - 7.5",
    note: "Plage indicative pour substrat horticole.",
  },
  {
    label: "Densité apparente",
    value: "60 – 120 kg/m³",
    note: "Selon granulométrie et expansion.",
  },
  {
    label: "Granulométrie",
    value: "0-1 / 1-3 / 3-6 mm",
    note: "Formats à calibrer avec la production.",
  },
  {
    label: "Conductivité électrique",
    value: "Faible / stable",
    note: "À valider par fiche technique officielle.",
  },
  {
    label: "Conditionnement",
    value: "Sacs, big bags, vrac",
    note: "Volumes, poids et palettes à préciser avec la fiche officielle.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Sélection minérale",
    description:
      "Contrôle de la matière première et traçabilité des lots avant transformation.",
  },
  {
    step: "02",
    title: "Expansion thermique",
    description:
      "La roche est chauffée pour libérer son eau liée et créer une structure légère, blanche et poreuse.",
  },
  {
    step: "03",
    title: "Calibration",
    description:
      "Tri granulométrique pour répondre aux usages agricoles, industriels et de filtration.",
  },
  {
    step: "04",
    title: "Contrôle qualité",
    description:
      "Vérification des performances clés: densité, granulométrie, propreté, stabilité et conditionnement.",
  },
];

export const agricultureUseCases: Feature[] = [
  {
    title: "Hydroponie",
    description:
      "Support minéral propre pour systèmes irrigués et cycles nutritifs contrôlés.",
    icon: Droplets,
  },
  {
    title: "Serres",
    description:
      "Substrat léger et régulier pour cultures sous abri, maraîchage et productions intensives.",
    icon: Leaf,
  },
  {
    title: "Pépinières",
    description:
      "Favorise l’enracinement rapide et limite la compaction pendant les phases sensibles.",
    icon: Sprout,
  },
  {
    title: "Amélioration des sols",
    description:
      "Allège les sols lourds, augmente l’aération et améliore la gestion de l’humidité.",
    icon: Mountain,
  },
  {
    title: "Germination",
    description:
      "Structure fine et stable pour une levée homogène des semences et jeunes plants.",
    icon: ShieldCheck,
  },
  {
    title: "Horticulture",
    description:
      "Base technique pour mélanges premium fleurs, fruits rouges, aromatiques et ornemental.",
    icon: FlaskConical,
  },
];

export const industryUseCases: Feature[] = [
  {
    title: "Isolation construction",
    description:
      "Remplissages, enduits et bétons légers pour améliorer le confort thermique et acoustique.",
    icon: Building2,
  },
  {
    title: "Filtration",
    description:
      "Aide filtrante minérale pour clarifier liquides, huiles et flux industriels.",
    icon: Waves,
  },
  {
    title: "Industrie chimique",
    description:
      "Support inerte pour formulations, charges techniques et procédés nécessitant stabilité.",
    icon: Beaker,
  },
  {
    title: "Haute température",
    description:
      "Composants réfractaires, protections thermiques et matériaux exposés à la chaleur.",
    icon: Thermometer,
  },
  {
    title: "Absorption",
    description:
      "Granulat poreux pour absorber huiles, liquides et déversements industriels.",
    icon: PackageCheck,
  },
  {
    title: "Cryogénie",
    description:
      "Isolation de réservoirs et environnements très basse température grâce à sa structure légère.",
    icon: Snowflake,
  },
  {
    title: "Granulats légers",
    description:
      "Allègement de formulations minérales, mortiers, panneaux et systèmes techniques.",
    icon: Boxes,
  },
  {
    title: "Vision export",
    description:
      "Positionnement qualité pour partenaires industriels au Maroc, en Afrique et en Europe.",
    icon: Globe2,
  },
];

export const comparisonCards = [
  {
    title: "Perlite vs sol",
    body:
      "La perlite ne remplace pas toujours le sol: elle le transforme. Elle réduit la compaction, apporte de l’air et stabilise l’humidité autour des racines.",
  },
  {
    title: "Perlite vs cocopeat",
    body:
      "Le cocopeat retient fortement l’eau. La perlite apporte davantage d’aération et permet de régler la porosité dans les mélanges professionnels.",
  },
  {
    title: "Perlite en mélanges",
    body:
      "Associée à tourbe, coco, compost ou supports minéraux, elle devient un levier de précision pour drainage, oxygène et irrigation.",
  },
];

export const footerLinks = [
  { label: "Produit", href: "/produit" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "Industrie", href: "/industrie" },
  { label: "Contact", href: "/contact" },
  { label: "Portail client", href: "/portal/login" },
  { label: "Politique de confidentialité", href: "/privacy-policy" },
  { label: "Politique cookies", href: "/cookie-policy" },
  { label: "Conditions générales", href: "/terms" },
];
