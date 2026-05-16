"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ProductGsapPrototype } from "@/components/animations/ProductGsapPrototype";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProductHero } from "@/components/sections/ProductHero";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { StatsSection } from "@/components/sections/StatsSection";
import { Hero } from "@/components/sections/Hero";
import { ApplicationCard } from "@/components/ui/ApplicationCard";
import { AnimatedParticles } from "@/components/ui/AnimatedParticles";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechnicalSpecsTable } from "@/components/ui/TechnicalSpecsTable";
import { VisualPanel } from "@/components/ui/VisualPanel";
import { technicalDocuments } from "@/data/documents";
import { contact } from "@/data/site";
import { iconMap } from "@/lib/icon-map";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { IconKey, Locale, ProductDetailKey } from "@/types/i18n";

type FeatureLike = {
  title: string;
  description: string;
  icon: IconKey;
};

function featureProps(feature: FeatureLike) {
  return {
    title: feature.title,
    description: feature.description,
    icon: feature.icon,
  };
}

const detailVisualVariant: Record<
  ProductDetailKey,
  "mineral" | "factory" | "packaging"
> = {
  naturelle: "mineral",
  stable: "factory",
  technique: "packaging",
};

type GreenSpaceCopy = {
  header: {
    eyebrow: string;
    title: string;
    description: string;
  };
  promise: {
    eyebrow: string;
    title: string;
    description: string;
    features: FeatureLike[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; body: string }>;
  };
  cta: {
    title: string;
    description: string;
    whatsapp: string;
    sample: string;
  };
};

type AgricultureCommercialCopy = {
  hero: {
    eyebrow: string;
    title: string;
    kicker: string;
    description: string;
    quote: string;
    sample: string;
    whatsapp: string;
    visualLabel: string;
    visualTitle: string;
    metrics: Array<{ value: string; label: string }>;
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    features: FeatureLike[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureLike[];
  };
  trust: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ metric: string; title: string; body: string }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    sample: string;
    whatsapp: string;
  };
};

type IndustryCommercialCopy = {
  hero: {
    eyebrow: string;
    title: string;
    kicker: string;
    description: string;
    quote: string;
    sample: string;
    whatsapp: string;
    visualLabel: string;
    visualTitle: string;
    metrics: Array<{ value: string; label: string }>;
  };
  applications: {
    eyebrow: string;
    title: string;
    description: string;
    features: FeatureLike[];
  };
  logistics: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ metric: string; title: string; body: string }>;
  };
  documents: {
    eyebrow: string;
    title: string;
    description: string;
    datasheet: string;
    msds: string;
    specs: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    sample: string;
    whatsapp: string;
  };
};

type AboutCommercialCopy = {
  hero: {
    eyebrow: string;
    title: string;
    kicker: string;
    description: string;
    quote: string;
    sample: string;
    whatsapp: string;
    visualLabel: string;
    visualTitle: string;
    metrics: Array<{ value: string; label: string }>;
  };
  positioning: {
    eyebrow: string;
    title: string;
    description: string;
    features: FeatureLike[];
  };
  supply: {
    eyebrow: string;
    title: string;
    description: string;
    partnerTitle: string;
    partnerBody: string;
    partnerCta: string;
    items: Array<{ title: string; body: string }>;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ metric: string; title: string; body: string }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    sample: string;
    whatsapp: string;
  };
};

const agricultureCommercialContent: Record<Locale, AgricultureCommercialCopy> = {
  fr: {
    hero: {
      eyebrow: "Agriculture professionnelle",
      title: "Des racines plus saines avec la perlite marocaine Barakah.",
      kicker: "Aération. Drainage. Eau maîtrisée.",
      description:
        "Un substrat naturel et léger pour serres, hydroponie, pépinières et mélanges horticoles professionnels.",
      quote: "Demander un devis",
      sample: "Demander un échantillon",
      whatsapp: "Parler sur WhatsApp",
      visualLabel: "Système racinaire",
      visualTitle: "Perlite expansée pour cultures performantes",
      metrics: [
        { value: "air + eau", label: "équilibre racinaire" },
        { value: "sacs / big bags", label: "formats disponibles" },
      ],
    },
    benefits: {
      eyebrow: "Bénéfices grower",
      title: "Une base plus propre pour des cultures plus régulières.",
      description:
        "Barakah Perlite aide les producteurs à garder un substrat léger, stable et facile à piloter.",
      features: [
        {
          title: "Aération racinaire",
          description:
            "Favorise l’oxygénation autour des racines pour soutenir une croissance plus saine.",
          icon: "wind",
        },
        {
          title: "Drainage maîtrisé",
          description:
            "Limite l’excès d’eau et aide à garder un environnement racinaire plus propre.",
          icon: "droplets",
        },
        {
          title: "Rétention équilibrée",
          description:
            "Conserve une réserve utile sans alourdir le mélange ni fermer la structure.",
          icon: "gauge",
        },
        {
          title: "Substrat stable",
          description:
            "Reste léger et régulier dans le temps pour des programmes de culture fiables.",
          icon: "shield",
        },
      ],
    },
    useCases: {
      eyebrow: "Applications agricoles",
      title: "Pensée pour les usages qui demandent rapidité et régularité.",
      description:
        "Des serres aux pépinières, la perlite s’intègre facilement dans les mélanges professionnels.",
      items: [
        {
          title: "Serres",
          description:
            "Pour améliorer l’air, l’eau et le confort racinaire dans les cultures protégées.",
          icon: "sprout",
        },
        {
          title: "Hydroponie",
          description:
            "Un support minéral léger pour systèmes hors-sol et gestion précise de l’irrigation.",
          icon: "waves",
        },
        {
          title: "Pépinières",
          description:
            "Aide les jeunes plants à démarrer dans un mélange propre, aéré et facile à manipuler.",
          icon: "leaf",
        },
        {
          title: "Mélanges de substrats",
          description:
            "Apporte légèreté, drainage et stabilité aux formulations horticoles.",
          icon: "packageCheck",
        },
      ],
    },
    trust: {
      eyebrow: "Approvisionnement",
      title: "Une perlite marocaine prête pour les professionnels.",
      description:
        "Une approche commerciale simple : comprendre votre usage, confirmer le format et répondre vite.",
      items: [
        {
          metric: "Maroc",
          title: "Production locale",
          body: "Une origine marocaine pour servir agriculture, espaces verts et export.",
        },
        {
          metric: "3 formats",
          title: "Sacs, big bags, vrac",
          body: "Des conditionnements adaptés aux volumes de ferme, serre ou distribution.",
        },
        {
          metric: "Rapide",
          title: "Support commercial",
          body: "Un contact direct pour devis, échantillons et premières informations.",
        },
        {
          metric: "Export",
          title: "Vision internationale",
          body: "Une présentation claire pour clients locaux et partenaires internationaux.",
        },
      ],
    },
    cta: {
      eyebrow: "Projet agricole",
      title: "Parlez-nous de votre culture, nous vous orientons rapidement.",
      description:
        "Envoyez le type de culture, le format souhaité et le volume estimé. Notre équipe revient vers vous avec une réponse commerciale claire.",
      quote: "Demander un devis agricole",
      sample: "Demander un échantillon",
      whatsapp: "WhatsApp Ahmed",
    },
  },
  en: {
    hero: {
      eyebrow: "Professional agriculture",
      title: "Healthier roots with Moroccan expanded perlite.",
      kicker: "Aeration. Drainage. Controlled water.",
      description:
        "A natural lightweight substrate for greenhouses, hydroponics, nurseries and professional growing-media blends.",
      quote: "Request a quote",
      sample: "Request a sample",
      whatsapp: "Talk on WhatsApp",
      visualLabel: "Root system",
      visualTitle: "Expanded perlite for high-performing crops",
      metrics: [
        { value: "air + water", label: "root-zone balance" },
        { value: "bags / big bags", label: "available formats" },
      ],
    },
    benefits: {
      eyebrow: "Grower benefits",
      title: "A cleaner base for more consistent crops.",
      description:
        "Barakah Perlite helps growers keep substrates light, stable and easy to manage.",
      features: [
        {
          title: "Root aeration",
          description:
            "Supports oxygen availability around roots for healthier crop development.",
          icon: "wind",
        },
        {
          title: "Controlled drainage",
          description:
            "Helps limit excess water and keeps the root environment cleaner.",
          icon: "droplets",
        },
        {
          title: "Balanced retention",
          description:
            "Keeps useful moisture without making blends heavy or compact.",
          icon: "gauge",
        },
        {
          title: "Stable substrate",
          description:
            "Stays light and regular over time for reliable growing programs.",
          icon: "shield",
        },
      ],
    },
    useCases: {
      eyebrow: "Agricultural uses",
      title: "Built for growers who need speed, clarity and consistency.",
      description:
        "From greenhouses to nurseries, perlite blends easily into professional media.",
      items: [
        {
          title: "Greenhouses",
          description:
            "Improves air, water and root comfort in protected cropping systems.",
          icon: "sprout",
        },
        {
          title: "Hydroponics",
          description:
            "A lightweight mineral support for soilless systems and precise irrigation.",
          icon: "waves",
        },
        {
          title: "Nurseries",
          description:
            "Helps young plants start in a clean, airy and easy-to-handle blend.",
          icon: "leaf",
        },
        {
          title: "Substrate blends",
          description:
            "Adds lightness, drainage and stability to horticultural formulas.",
          icon: "packageCheck",
        },
      ],
    },
    trust: {
      eyebrow: "Supply",
      title: "Moroccan perlite ready for professional buyers.",
      description:
        "A simple commercial approach: understand your use, confirm the format and answer quickly.",
      items: [
        {
          metric: "Morocco",
          title: "Local production",
          body: "Moroccan origin serving agriculture, green spaces and export.",
        },
        {
          metric: "3 formats",
          title: "Bags, big bags, bulk",
          body: "Packaging for farm, greenhouse and distribution volumes.",
        },
        {
          metric: "Fast",
          title: "Commercial support",
          body: "Direct contact for quotes, samples and first information.",
        },
        {
          metric: "Export",
          title: "International mindset",
          body: "Clear presentation for local clients and global partners.",
        },
      ],
    },
    cta: {
      eyebrow: "Agricultural project",
      title: "Tell us what you grow and we will guide you quickly.",
      description:
        "Send the crop type, target format and estimated volume. Our team will reply with clear commercial guidance.",
      quote: "Request an agricultural quote",
      sample: "Request a sample",
      whatsapp: "WhatsApp Ahmed",
    },
  },
  nl: {
    hero: {
      eyebrow: "Professionele landbouw",
      title: "Gezondere wortels met Marokkaanse geëxpandeerde perliet.",
      kicker: "Beluchting. Drainage. Waterbalans.",
      description:
        "Een natuurlijk licht substraat voor serres, hydroponie, kwekerijen en professionele substraatmengsels.",
      quote: "Offerte aanvragen",
      sample: "Monster aanvragen",
      whatsapp: "Praten via WhatsApp",
      visualLabel: "Wortelsysteem",
      visualTitle: "Geëxpandeerde perliet voor performante teelten",
      metrics: [
        { value: "lucht + water", label: "wortelzonebalans" },
        { value: "zakken / big bags", label: "beschikbare formaten" },
      ],
    },
    benefits: {
      eyebrow: "Voordelen voor telers",
      title: "Een schonere basis voor regelmatiger teelten.",
      description:
        "Barakah Perlite helpt telers substraten licht, stabiel en eenvoudig te beheren te houden.",
      features: [
        {
          title: "Wortelbeluchting",
          description:
            "Ondersteunt zuurstof rond de wortels voor een gezondere ontwikkeling.",
          icon: "wind",
        },
        {
          title: "Gecontroleerde drainage",
          description:
            "Helpt overtollig water te beperken en houdt de wortelomgeving schoner.",
          icon: "droplets",
        },
        {
          title: "Gebalanceerde retentie",
          description:
            "Houdt nuttig vocht vast zonder het mengsel zwaar of compact te maken.",
          icon: "gauge",
        },
        {
          title: "Stabiel substraat",
          description:
            "Blijft licht en regelmatig voor betrouwbare teeltprogramma’s.",
          icon: "shield",
        },
      ],
    },
    useCases: {
      eyebrow: "Landbouwtoepassingen",
      title: "Voor telers die snelheid, duidelijkheid en regelmaat nodig hebben.",
      description:
        "Van serres tot kwekerijen: perliet mengt gemakkelijk in professionele media.",
      items: [
        {
          title: "Serres",
          description:
            "Verbetert lucht, water en wortelcomfort in beschermde teelten.",
          icon: "sprout",
        },
        {
          title: "Hydroponie",
          description:
            "Een licht mineraal medium voor teelt zonder grond en precieze irrigatie.",
          icon: "waves",
        },
        {
          title: "Kwekerijen",
          description:
            "Helpt jonge planten starten in een schoon, luchtig en hanteerbaar mengsel.",
          icon: "leaf",
        },
        {
          title: "Substraatmengsels",
          description:
            "Voegt lichtheid, drainage en stabiliteit toe aan tuinbouwformules.",
          icon: "packageCheck",
        },
      ],
    },
    trust: {
      eyebrow: "Levering",
      title: "Marokkaanse perliet klaar voor professionele kopers.",
      description:
        "Een eenvoudige commerciële aanpak: toepassing begrijpen, formaat bevestigen en snel antwoorden.",
      items: [
        {
          metric: "Marokko",
          title: "Lokale productie",
          body: "Marokkaanse oorsprong voor landbouw, groenzones en export.",
        },
        {
          metric: "3 formaten",
          title: "Zakken, big bags, bulk",
          body: "Verpakkingen voor landbouw-, serre- en distributievolumes.",
        },
        {
          metric: "Snel",
          title: "Commerciële support",
          body: "Direct contact voor offertes, monsters en eerste informatie.",
        },
        {
          metric: "Export",
          title: "Internationale visie",
          body: "Heldere presentatie voor lokale klanten en globale partners.",
        },
      ],
    },
    cta: {
      eyebrow: "Landbouwproject",
      title: "Vertel ons wat u teelt en wij adviseren u snel.",
      description:
        "Stuur het gewastype, gewenst formaat en geschat volume. Ons team reageert met duidelijke commerciële informatie.",
      quote: "Landbouwofferte aanvragen",
      sample: "Monster aanvragen",
      whatsapp: "WhatsApp Ahmed",
    },
  },
  ar: {
    hero: {
      eyebrow: "زراعة احترافية",
      title: "جذور أكثر صحة مع البيرلايت المغربي الموسع.",
      kicker: "تهوية. تصريف. توازن مائي.",
      description:
        "ركيزة طبيعية وخفيفة للبيوت المحمية، الزراعة المائية، المشاتل وخلطات الزراعة الاحترافية.",
      quote: "طلب عرض سعر",
      sample: "طلب عينة",
      whatsapp: "تواصل عبر واتساب",
      visualLabel: "النظام الجذري",
      visualTitle: "بيرلايت موسع لمحاصيل أكثر انتظاما",
      metrics: [
        { value: "هواء + ماء", label: "توازن حول الجذور" },
        { value: "أكياس / بيغ باغ", label: "صيغ متوفرة" },
      ],
    },
    benefits: {
      eyebrow: "فوائد للمزارعين",
      title: "قاعدة أنظف لمحاصيل أكثر انتظاما.",
      description:
        "يساعد Barakah Perlite المنتجين على الحفاظ على ركيزة خفيفة، ثابتة وسهلة التحكم.",
      features: [
        {
          title: "تهوية الجذور",
          description:
            "يدعم توفر الأكسجين حول الجذور لنمو أكثر صحة.",
          icon: "wind",
        },
        {
          title: "تصريف مضبوط",
          description:
            "يساعد على تقليل فائض الماء ويحافظ على بيئة جذور أنظف.",
          icon: "droplets",
        },
        {
          title: "احتفاظ متوازن",
          description:
            "يحافظ على رطوبة مفيدة دون أن يجعل الخليط ثقيلا أو متماسكا.",
          icon: "gauge",
        },
        {
          title: "ركيزة مستقرة",
          description:
            "تبقى خفيفة ومنتظمة مع الوقت لبرامج زراعية موثوقة.",
          icon: "shield",
        },
      ],
    },
    useCases: {
      eyebrow: "الاستخدامات الزراعية",
      title: "مصمم للمزارعين الذين يحتاجون إلى السرعة والوضوح والانتظام.",
      description:
        "من البيوت المحمية إلى المشاتل، يمتزج البيرلايت بسهولة مع الأوساط الزراعية الاحترافية.",
      items: [
        {
          title: "البيوت المحمية",
          description:
            "يحسن الهواء والماء وراحة الجذور في أنظمة الزراعة المحمية.",
          icon: "sprout",
        },
        {
          title: "الزراعة المائية",
          description:
            "دعم معدني خفيف لأنظمة بدون تربة وإدارة دقيقة للري.",
          icon: "waves",
        },
        {
          title: "المشاتل",
          description:
            "يساعد النباتات الصغيرة على البدء في خليط نظيف، مهوى وسهل التعامل.",
          icon: "leaf",
        },
        {
          title: "خلطات الركائز",
          description:
            "يضيف الخفة والتصريف والثبات إلى التركيبات البستانية.",
          icon: "packageCheck",
        },
      ],
    },
    trust: {
      eyebrow: "التوريد",
      title: "بيرلايت مغربي جاهز للمشترين المحترفين.",
      description:
        "نهج تجاري بسيط: فهم الاستخدام، تأكيد الصيغة، والرد بسرعة.",
      items: [
        {
          metric: "المغرب",
          title: "إنتاج محلي",
          body: "أصل مغربي لخدمة الزراعة والمساحات الخضراء والتصدير.",
        },
        {
          metric: "3 صيغ",
          title: "أكياس، بيغ باغ، سائب",
          body: "تعبئة مناسبة لأحجام المزارع والبيوت المحمية والتوزيع.",
        },
        {
          metric: "سريع",
          title: "دعم تجاري",
          body: "تواصل مباشر لعروض الأسعار والعينات والمعلومات الأولى.",
        },
        {
          metric: "تصدير",
          title: "رؤية دولية",
          body: "عرض واضح للعملاء المحليين والشركاء الدوليين.",
        },
      ],
    },
    cta: {
      eyebrow: "مشروع زراعي",
      title: "أخبرنا بما تزرع وسنوجهك بسرعة.",
      description:
        "أرسل نوع المحصول والصيغة المطلوبة والحجم التقريبي. سيرد فريقنا بتوجيه تجاري واضح.",
      quote: "طلب عرض زراعي",
      sample: "طلب عينة",
      whatsapp: "واتساب أحمد",
    },
  },
};

const industryCommercialContent: Record<Locale, IndustryCommercialCopy> = {
  fr: {
    hero: {
      eyebrow: "Industrie & construction",
      title: "Perlite industrielle du Maroc.",
      kicker: "Stable. Légère. Prête pour l’industrie.",
      description:
        "Une matière minérale fiable pour les fabricants, chantiers, formulateurs et partenaires industriels qui recherchent performance et approvisionnement clair.",
      quote: "Demander un devis",
      sample: "Demander un échantillon",
      whatsapp: "Parler sur WhatsApp",
      visualLabel: "Production industrielle",
      visualTitle: "Une supply chain marocaine pensée pour les usages B2B.",
      metrics: [
        { value: "sacs / big bags", label: "formats disponibles" },
        { value: "export-ready", label: "approvisionnement" },
      ],
    },
    applications: {
      eyebrow: "Applications industrielles",
      title: "Des usages concrets, une matière légère et stable.",
      description:
        "La perlite expansée apporte de la légèreté, de l’isolation et une structure poreuse utile dans plusieurs filières industrielles.",
      features: [
        {
          title: "Construction légère",
          description:
            "Pour mortiers, bétons légers et formulations qui doivent réduire la charge.",
          icon: "building",
        },
        {
          title: "Isolation",
          description:
            "Une base minérale légère pour améliorer le confort thermique et acoustique.",
          icon: "thermometer",
        },
        {
          title: "Filtration",
          description:
            "Support poreux pour solutions de clarification et process industriels.",
          icon: "waves",
        },
        {
          title: "Absorption",
          description:
            "Granulat léger pour absorber liquides, huiles et usages techniques.",
          icon: "droplets",
        },
      ],
    },
    logistics: {
      eyebrow: "Supply & logistique",
      title: "Un partenaire industriel doit répondre vite, clairement et au bon format.",
      description:
        "Barakah Perlite structure son offre pour accompagner les demandes locales et export avec des formats professionnels.",
      items: [
        {
          metric: "Maroc",
          title: "Production marocaine",
          body: "Une origine claire pour servir construction, industrie, agriculture et espaces verts.",
        },
        {
          metric: "3 formats",
          title: "Sacs, big bags, vrac",
          body: "Des formats adaptés aux lignes de production, chantiers et volumes récurrents.",
        },
        {
          metric: "B2B",
          title: "Réponse commerciale",
          body: "Usage, volume, destination et format sont qualifiés avant la proposition.",
        },
        {
          metric: "Export",
          title: "Vision internationale",
          body: "Une marque construite pour répondre aux acheteurs professionnels et distributeurs.",
        },
      ],
    },
    documents: {
      eyebrow: "Documentation secondaire",
      title: "Les fiches techniques restent disponibles quand le projet devient concret.",
      description:
        "Les données détaillées ne doivent pas remplacer l’échange commercial: elles appuient la décision quand votre usage est identifié.",
      datasheet: "Fiche technique",
      msds: "Fiche de sécurité MSDS",
      specs: "Spécifications produit",
    },
    cta: {
      eyebrow: "Projet industriel",
      title: "Vous cherchez une perlite fiable pour une application industrielle ?",
      description:
        "Envoyez votre usage, volume estimé, format souhaité et pays de livraison. L’équipe Barakah vous répond avec une proposition claire.",
      quote: "Demander un devis",
      sample: "Demander un échantillon",
      whatsapp: "WhatsApp Ahmed",
    },
  },
  en: {
    hero: {
      eyebrow: "Industry & construction",
      title: "Industrial perlite from Morocco.",
      kicker: "Stable. Lightweight. Industrial-ready.",
      description:
        "A reliable mineral material for manufacturers, construction teams, formulators and industrial buyers looking for performance and clear supply.",
      quote: "Request a quote",
      sample: "Request a sample",
      whatsapp: "Talk on WhatsApp",
      visualLabel: "Industrial production",
      visualTitle: "A Moroccan supply chain built for B2B applications.",
      metrics: [
        { value: "bags / big bags", label: "available formats" },
        { value: "export-ready", label: "supply" },
      ],
    },
    applications: {
      eyebrow: "Industrial applications",
      title: "Practical use cases, one lightweight and stable material.",
      description:
        "Expanded perlite brings lightness, insulation and useful porosity across several industrial sectors.",
      features: [
        {
          title: "Light construction",
          description:
            "For mortars, lightweight concrete and blends that need lower loads.",
          icon: "building",
        },
        {
          title: "Insulation",
          description:
            "A lightweight mineral base for thermal and acoustic performance.",
          icon: "thermometer",
        },
        {
          title: "Filtration",
          description:
            "A porous support for clarification solutions and industrial processes.",
          icon: "waves",
        },
        {
          title: "Absorption",
          description:
            "A lightweight aggregate for liquids, oils and technical uses.",
          icon: "droplets",
        },
      ],
    },
    logistics: {
      eyebrow: "Supply & logistics",
      title: "An industrial supplier must answer fast, clearly and in the right format.",
      description:
        "Barakah Perlite is shaping its offer for local and export demand with professional packaging formats.",
      items: [
        {
          metric: "Morocco",
          title: "Moroccan production",
          body: "A clear origin serving construction, industry, agriculture and green spaces.",
        },
        {
          metric: "3 formats",
          title: "Bags, big bags, bulk",
          body: "Formats suited to production lines, construction sites and recurring volumes.",
        },
        {
          metric: "B2B",
          title: "Commercial response",
          body: "Use case, volume, destination and format are qualified before pricing.",
        },
        {
          metric: "Export",
          title: "International vision",
          body: "A brand built for professional buyers and distribution partners.",
        },
      ],
    },
    documents: {
      eyebrow: "Secondary documentation",
      title: "Technical sheets stay available when the project becomes concrete.",
      description:
        "Detailed data should support the commercial discussion, not replace it. Use it once your application is clear.",
      datasheet: "Technical sheet",
      msds: "Safety data sheet MSDS",
      specs: "Product specifications",
    },
    cta: {
      eyebrow: "Industrial project",
      title: "Looking for reliable perlite for an industrial application?",
      description:
        "Send your use case, estimated volume, required format and delivery country. Barakah will prepare a clear proposal.",
      quote: "Request a quote",
      sample: "Request a sample",
      whatsapp: "WhatsApp Ahmed",
    },
  },
  nl: {
    hero: {
      eyebrow: "Industrie & bouw",
      title: "Industriële perliet uit Marokko.",
      kicker: "Stabiel. Licht. Klaar voor industrie.",
      description:
        "Een betrouwbaar mineraal materiaal voor producenten, bouwprojecten, formuleerders en industriële kopers die prestaties en duidelijke levering zoeken.",
      quote: "Offerte aanvragen",
      sample: "Monster aanvragen",
      whatsapp: "WhatsApp verkoop",
      visualLabel: "Industriële productie",
      visualTitle: "Een Marokkaanse supply chain voor B2B-toepassingen.",
      metrics: [
        { value: "zakken / big bags", label: "beschikbare formaten" },
        { value: "export-ready", label: "levering" },
      ],
    },
    applications: {
      eyebrow: "Industriële toepassingen",
      title: "Concrete toepassingen, één licht en stabiel materiaal.",
      description:
        "Geëxpandeerde perliet biedt lichtheid, isolatie en nuttige porositeit in meerdere industriële sectoren.",
      features: [
        {
          title: "Lichte bouw",
          description:
            "Voor mortels, licht beton en mengsels die lagere belasting vragen.",
          icon: "building",
        },
        {
          title: "Isolatie",
          description:
            "Een lichte minerale basis voor thermische en akoestische prestaties.",
          icon: "thermometer",
        },
        {
          title: "Filtratie",
          description:
            "Een poreuze drager voor klaring en industriële processen.",
          icon: "waves",
        },
        {
          title: "Absorptie",
          description:
            "Een licht granulaat voor vloeistoffen, oliën en technische toepassingen.",
          icon: "droplets",
        },
      ],
    },
    logistics: {
      eyebrow: "Supply & logistiek",
      title: "Een industriële leverancier moet snel, duidelijk en in het juiste formaat leveren.",
      description:
        "Barakah Perlite ontwikkelt zijn aanbod voor lokale en exportvragen met professionele verpakkingsformaten.",
      items: [
        {
          metric: "Marokko",
          title: "Marokkaanse productie",
          body: "Een duidelijke herkomst voor bouw, industrie, landbouw en groene ruimtes.",
        },
        {
          metric: "3 formaten",
          title: "Zakken, big bags, bulk",
          body: "Geschikt voor productielijnen, bouwplaatsen en terugkerende volumes.",
        },
        {
          metric: "B2B",
          title: "Commerciële opvolging",
          body: "Toepassing, volume, bestemming en formaat worden eerst gekwalificeerd.",
        },
        {
          metric: "Export",
          title: "Internationale visie",
          body: "Een merk gebouwd voor professionele kopers en distributiepartners.",
        },
      ],
    },
    documents: {
      eyebrow: "Secundaire documentatie",
      title: "Technische fiches blijven beschikbaar zodra het project concreet wordt.",
      description:
        "Gedetailleerde data ondersteunt het commerciële gesprek, maar vervangt het niet.",
      datasheet: "Technische fiche",
      msds: "Veiligheidsinformatieblad MSDS",
      specs: "Productspecificaties",
    },
    cta: {
      eyebrow: "Industrieel project",
      title: "Zoekt u betrouwbare perliet voor een industriële toepassing?",
      description:
        "Stuur uw toepassing, geschat volume, gewenst formaat en land van levering. Barakah bereidt een duidelijke offerte voor.",
      quote: "Offerte aanvragen",
      sample: "Monster aanvragen",
      whatsapp: "WhatsApp Ahmed",
    },
  },
  ar: {
    hero: {
      eyebrow: "الصناعة والبناء",
      title: "بيرلايت صناعي من المغرب.",
      kicker: "ثابت. خفيف. جاهز للصناعة.",
      description:
        "مادة معدنية موثوقة للمصنعين ومشاريع البناء والمشترين الصناعيين الذين يبحثون عن الأداء والتوريد الواضح.",
      quote: "طلب عرض سعر",
      sample: "طلب عينة",
      whatsapp: "تواصل عبر واتساب",
      visualLabel: "إنتاج صناعي",
      visualTitle: "سلسلة توريد مغربية مهيأة لتطبيقات الأعمال.",
      metrics: [
        { value: "أكياس / بيغ باغ", label: "صيغ متوفرة" },
        { value: "جاهز للتصدير", label: "توريد" },
      ],
    },
    applications: {
      eyebrow: "تطبيقات صناعية",
      title: "استخدامات واضحة لمادة خفيفة ومستقرة.",
      description:
        "يوفر البيرلايت الممدد الخفة والعزل والبنية المسامية المفيدة لعدة قطاعات صناعية.",
      features: [
        {
          title: "البناء الخفيف",
          description:
            "للملاط والخرسانة الخفيفة والخلطات التي تتطلب تقليل الأحمال.",
          icon: "building",
        },
        {
          title: "العزل",
          description:
            "قاعدة معدنية خفيفة للأداء الحراري والصوتي.",
          icon: "thermometer",
        },
        {
          title: "الترشيح",
          description:
            "دعامة مسامية لحلول التصفية والعمليات الصناعية.",
          icon: "waves",
        },
        {
          title: "الامتصاص",
          description:
            "حبيبات خفيفة للسوائل والزيوت والاستخدامات التقنية.",
          icon: "droplets",
        },
      ],
    },
    logistics: {
      eyebrow: "التوريد واللوجستيك",
      title: "المورد الصناعي يجب أن يجيب بسرعة وبوضوح وبالصيغة المناسبة.",
      description:
        "تعمل Barakah Perlite على تنظيم عرضها للطلبات المحلية والتصدير بصيغ تعبئة احترافية.",
      items: [
        {
          metric: "المغرب",
          title: "إنتاج مغربي",
          body: "منشأ واضح لخدمة البناء والصناعة والزراعة والمساحات الخضراء.",
        },
        {
          metric: "3 صيغ",
          title: "أكياس، بيغ باغ، سائب",
          body: "صيغ مناسبة لخطوط الإنتاج والمشاريع والكميات المتكررة.",
        },
        {
          metric: "B2B",
          title: "متابعة تجارية",
          body: "يتم تأكيد الاستخدام والكمية والوجهة والصيغة قبل التسعير.",
        },
        {
          metric: "تصدير",
          title: "رؤية دولية",
          body: "علامة مهيأة للمشترين المحترفين وشركاء التوزيع.",
        },
      ],
    },
    documents: {
      eyebrow: "وثائق ثانوية",
      title: "تبقى الوثائق التقنية متاحة عندما يصبح المشروع واضحاً.",
      description:
        "البيانات التفصيلية تدعم النقاش التجاري ولا يجب أن تحل محله.",
      datasheet: "الورقة التقنية",
      msds: "ورقة السلامة MSDS",
      specs: "مواصفات المنتج",
    },
    cta: {
      eyebrow: "مشروع صناعي",
      title: "هل تبحث عن بيرلايت موثوق لتطبيق صناعي؟",
      description:
        "أرسل الاستخدام والكمية المتوقعة والصيغة المطلوبة وبلد التسليم. سيحضر فريق Barakah عرضاً واضحاً.",
      quote: "طلب عرض سعر",
      sample: "طلب عينة",
      whatsapp: "واتساب أحمد",
    },
  },
};

const aboutCommercialContent: Record<Locale, AboutCommercialCopy> = {
  fr: {
    hero: {
      eyebrow: "Entreprise",
      title: "Un projet industriel marocain construit avec une supply chain fiable.",
      kicker: "Disponible aujourd’hui. Développement local en cours.",
      description:
        "Barakah Perlite développe au Maroc une plateforme dédiée à la perlite expansée pour l’agriculture, les espaces verts, la construction et l’industrie.",
      quote: "Demander un devis",
      sample: "Demander un échantillon",
      whatsapp: "Parler sur WhatsApp",
      visualLabel: "Projet Maroc + partenaire Europe",
      visualTitle:
        "Approvisionnement européen fiable aujourd’hui, ambition industrielle marocaine demain.",
      metrics: [
        { value: "Willems", label: "partenaire Belgique" },
        { value: "Maroc", label: "développement industriel" },
      ],
    },
    positioning: {
      eyebrow: "Positionnement",
      title: "Une marque marocaine honnête, premium et tournée vers les acheteurs B2B.",
      description:
        "Le rôle de Barakah est clair: rendre la perlite expansée accessible avec une relation commerciale sérieuse, des formats professionnels et une vision industrielle locale.",
      features: [
        {
          title: "Projet marocain",
          description:
            "Une présence industrielle en développement à Taroudant, pensée pour servir les marchés locaux et export.",
          icon: "factory",
        },
        {
          title: "Supply chain fiable",
          description:
            "Pendant cette phase, l’approvisionnement est soutenu par Willems Perlite, partenaire européen basé en Belgique.",
          icon: "globe",
        },
        {
          title: "Marchés professionnels",
          description:
            "Agriculture, espaces verts, construction et industrie avec une logique commerciale simple et réactive.",
          icon: "building",
        },
        {
          title: "Qualité lisible",
          description:
            "Documentation, fiches, formats et accompagnement pour aider les acheteurs à décider rapidement.",
          icon: "shield",
        },
      ],
    },
    supply: {
      eyebrow: "Partenariat & disponibilité",
      title: "Une disponibilité commerciale appuyée par Willems Perlite en Belgique.",
      description:
        "Barakah ne prétend pas que toute la production marocaine est déjà opérationnelle. La promesse actuelle est plus solide: proposer une perlite expansée fiable grâce à un partenaire européen reconnu, tout en développant l’implantation industrielle locale.",
      partnerTitle: "Willems Perlite",
      partnerBody:
        "Partenaire européen et source d’approvisionnement pour accompagner les premières demandes commerciales de Barakah Perlite.",
      partnerCta: "Voir le partenaire",
      items: [
        {
          title: "Disponibilité actuelle",
          body:
            "Perlite expansée proposée via une chaîne d’approvisionnement européenne fiable.",
        },
        {
          title: "Projet local",
          body:
            "Développement progressif d’une plateforme industrielle marocaine dédiée à la perlite.",
        },
        {
          title: "Vision export",
          body:
            "Une marque construite pour répondre aux acheteurs professionnels au Maroc, en Afrique et en Europe.",
        },
      ],
    },
    roadmap: {
      eyebrow: "Développement",
      title: "Une trajectoire claire: servir maintenant, produire localement demain.",
      description:
        "Cette phase permet d’avancer commercialement sans perdre la transparence nécessaire à une marque industrielle sérieuse.",
      items: [
        {
          metric: "01",
          title: "Source fiable",
          body: "Répondre aux demandes clients avec une perlite disponible via Willems Perlite.",
        },
        {
          metric: "02",
          title: "Plateforme marocaine",
          body: "Construire la présence industrielle, les process, les formats et la qualité locale.",
        },
        {
          metric: "03",
          title: "Production future",
          body: "Développer une capacité marocaine orientée agriculture, espaces verts, construction et industrie.",
        },
      ],
    },
    cta: {
      eyebrow: "Contact commercial",
      title: "Parlez-nous de votre besoin en perlite expansée.",
      description:
        "Indiquez votre secteur, volume estimé, format souhaité et destination. Barakah vous répondra avec une proposition claire.",
      quote: "Demander un devis",
      sample: "Demander un échantillon",
      whatsapp: "WhatsApp Ahmed",
    },
  },
  en: {
    hero: {
      eyebrow: "Company",
      title: "A Moroccan industrial project built on a reliable supply chain.",
      kicker: "Available today. Local development underway.",
      description:
        "Barakah Perlite is developing a Moroccan platform dedicated to expanded perlite for agriculture, green spaces, construction and industry.",
      quote: "Request a quote",
      sample: "Request a sample",
      whatsapp: "Talk on WhatsApp",
      visualLabel: "Morocco project + Europe partner",
      visualTitle:
        "Reliable European sourcing today, Moroccan industrial ambition tomorrow.",
      metrics: [
        { value: "Willems", label: "Belgian partner" },
        { value: "Morocco", label: "industrial development" },
      ],
    },
    positioning: {
      eyebrow: "Positioning",
      title: "An honest, premium Moroccan brand built for B2B buyers.",
      description:
        "Barakah’s role is clear: make expanded perlite accessible with a serious commercial relationship, professional formats and a local industrial vision.",
      features: [
        {
          title: "Moroccan project",
          description:
            "An industrial presence in development in Taroudant, designed to serve local and export markets.",
          icon: "factory",
        },
        {
          title: "Reliable source",
          description:
            "During this phase, supply is supported by Willems Perlite, a European partner based in Belgium.",
          icon: "globe",
        },
        {
          title: "Professional markets",
          description:
            "Agriculture, green spaces, construction and industry with a simple, responsive commercial approach.",
          icon: "building",
        },
        {
          title: "Clear quality",
          description:
            "Documents, formats and guidance that help buyers move from interest to decision.",
          icon: "shield",
        },
      ],
    },
    supply: {
      eyebrow: "Partnership & availability",
      title: "Commercial availability supported by Willems Perlite in Belgium.",
      description:
        "Barakah does not pretend that full Moroccan production is already operational. The current promise is stronger: reliable expanded perlite through a recognized European partner while local industrial development progresses.",
      partnerTitle: "Willems Perlite",
      partnerBody:
        "European partner and supply source supporting Barakah Perlite’s first commercial demand.",
      partnerCta: "View partner",
      items: [
        {
          title: "Current availability",
          body:
            "Expanded perlite offered through a reliable European supply chain.",
        },
        {
          title: "Local project",
          body:
            "Progressive development of a Moroccan industrial platform dedicated to perlite.",
        },
        {
          title: "Export vision",
          body:
            "A brand designed for professional buyers in Morocco, Africa and Europe.",
        },
      ],
    },
    roadmap: {
      eyebrow: "Development",
      title: "A clear path: supply now, local production tomorrow.",
      description:
        "This phase allows commercial progress without losing the transparency expected from a serious industrial brand.",
      items: [
        {
          metric: "01",
          title: "Reliable sourcing",
          body: "Answer customer requests with perlite available through Willems Perlite.",
        },
        {
          metric: "02",
          title: "Moroccan platform",
          body: "Build local industrial presence, processes, formats and quality systems.",
        },
        {
          metric: "03",
          title: "Future production",
          body: "Develop Moroccan capacity for agriculture, green spaces, construction and industry.",
        },
      ],
    },
    cta: {
      eyebrow: "Commercial contact",
      title: "Tell us what expanded perlite you need.",
      description:
        "Share your sector, estimated volume, required format and destination. Barakah will reply with a clear proposal.",
      quote: "Request a quote",
      sample: "Request a sample",
      whatsapp: "WhatsApp Ahmed",
    },
  },
  nl: {
    hero: {
      eyebrow: "Onderneming",
      title: "Een Marokkaans industrieel project met een betrouwbare supply chain.",
      kicker: "Vandaag beschikbaar. Lokale ontwikkeling in uitvoering.",
      description:
        "Barakah Perlite ontwikkelt in Marokko een platform voor geëxpandeerde perliet voor landbouw, groene ruimtes, bouw en industrie.",
      quote: "Offerte aanvragen",
      sample: "Monster aanvragen",
      whatsapp: "WhatsApp verkoop",
      visualLabel: "Marokko-project + Europese partner",
      visualTitle:
        "Betrouwbare Europese levering vandaag, Marokkaanse industriële ambitie morgen.",
      metrics: [
        { value: "Willems", label: "Belgische partner" },
        { value: "Marokko", label: "industriële ontwikkeling" },
      ],
    },
    positioning: {
      eyebrow: "Positionering",
      title: "Een eerlijk, premium Marokkaans merk voor B2B-kopers.",
      description:
        "Barakah maakt geëxpandeerde perliet toegankelijk met professionele formaten, duidelijke communicatie en een lokale industriële visie.",
      features: [
        {
          title: "Marokkaans project",
          description:
            "Een industriële aanwezigheid in ontwikkeling in Taroudant, gericht op lokale en exportmarkten.",
          icon: "factory",
        },
        {
          title: "Betrouwbare bron",
          description:
            "Tijdens deze fase wordt de levering ondersteund door Willems Perlite, Europese partner in België.",
          icon: "globe",
        },
        {
          title: "Professionele markten",
          description:
            "Landbouw, groene ruimtes, bouw en industrie met een snelle commerciële aanpak.",
          icon: "building",
        },
        {
          title: "Duidelijke kwaliteit",
          description:
            "Documenten, formaten en begeleiding die professionele kopers helpen beslissen.",
          icon: "shield",
        },
      ],
    },
    supply: {
      eyebrow: "Partnerschap & beschikbaarheid",
      title: "Commerciële beschikbaarheid ondersteund door Willems Perlite in België.",
      description:
        "Barakah doet niet alsof de volledige Marokkaanse productie al operationeel is. De huidige belofte is sterker: betrouwbare geëxpandeerde perliet via een erkende Europese partner terwijl de lokale industriële ontwikkeling doorgaat.",
      partnerTitle: "Willems Perlite",
      partnerBody:
        "Europese partner en leveringsbron voor de eerste commerciële aanvragen van Barakah Perlite.",
      partnerCta: "Partner bekijken",
      items: [
        {
          title: "Huidige beschikbaarheid",
          body:
            "Geëxpandeerde perliet aangeboden via een betrouwbare Europese supply chain.",
        },
        {
          title: "Lokaal project",
          body:
            "Geleidelijke ontwikkeling van een Marokkaans industrieel platform voor perliet.",
        },
        {
          title: "Exportvisie",
          body:
            "Een merk gebouwd voor professionele kopers in Marokko, Afrika en Europa.",
        },
      ],
    },
    roadmap: {
      eyebrow: "Ontwikkeling",
      title: "Een helder pad: nu leveren, morgen lokaal produceren.",
      description:
        "Deze fase maakt commerciële groei mogelijk met de transparantie die bij een serieus industrieel merk hoort.",
      items: [
        {
          metric: "01",
          title: "Betrouwbare levering",
          body: "Klantvragen beantwoorden met perliet beschikbaar via Willems Perlite.",
        },
        {
          metric: "02",
          title: "Marokkaans platform",
          body: "Lokale aanwezigheid, processen, formaten en kwaliteitssystemen opbouwen.",
        },
        {
          metric: "03",
          title: "Toekomstige productie",
          body: "Marokkaanse capaciteit ontwikkelen voor landbouw, groene ruimtes, bouw en industrie.",
        },
      ],
    },
    cta: {
      eyebrow: "Commercieel contact",
      title: "Vertel ons welke geëxpandeerde perliet u nodig heeft.",
      description:
        "Deel uw sector, geschat volume, gewenst formaat en bestemming. Barakah antwoordt met een helder voorstel.",
      quote: "Offerte aanvragen",
      sample: "Monster aanvragen",
      whatsapp: "WhatsApp Ahmed",
    },
  },
  ar: {
    hero: {
      eyebrow: "الشركة",
      title: "مشروع صناعي مغربي مبني على سلسلة توريد موثوقة.",
      kicker: "متوفر اليوم. والتطوير المحلي جارٍ.",
      description:
        "تعمل Barakah Perlite على تطوير منصة مغربية مخصصة للبيرلايت الممدد للزراعة والمساحات الخضراء والبناء والصناعة.",
      quote: "طلب عرض سعر",
      sample: "طلب عينة",
      whatsapp: "تواصل عبر واتساب",
      visualLabel: "مشروع المغرب + شريك أوروبا",
      visualTitle:
        "توريد أوروبي موثوق اليوم، وطموح صناعي مغربي غداً.",
      metrics: [
        { value: "Willems", label: "شريك بلجيكي" },
        { value: "المغرب", label: "تطوير صناعي" },
      ],
    },
    positioning: {
      eyebrow: "التموقع",
      title: "علامة مغربية صادقة وفاخرة للمشترين المهنيين.",
      description:
        "دور Barakah واضح: جعل البيرلايت الممدد متاحاً بعلاقة تجارية جدية وصيغ مهنية ورؤية صناعية محلية.",
      features: [
        {
          title: "مشروع مغربي",
          description:
            "حضور صناعي قيد التطوير في تارودانت لخدمة الأسواق المحلية والتصدير.",
          icon: "factory",
        },
        {
          title: "مصدر موثوق",
          description:
            "في هذه المرحلة، يتم دعم التوريد عبر Willems Perlite، شريك أوروبي في بلجيكا.",
          icon: "globe",
        },
        {
          title: "أسواق مهنية",
          description:
            "الزراعة والمساحات الخضراء والبناء والصناعة بمنهج تجاري واضح وسريع.",
          icon: "building",
        },
        {
          title: "جودة واضحة",
          description:
            "وثائق وصيغ ومواكبة تساعد المشترين على اتخاذ القرار بسرعة.",
          icon: "shield",
        },
      ],
    },
    supply: {
      eyebrow: "الشراكة والتوفر",
      title: "توفر تجاري مدعوم من Willems Perlite في بلجيكا.",
      description:
        "لا تقدم Barakah نفسها كما لو أن الإنتاج المغربي الكامل يعمل بالفعل. الوعد الحالي أوضح: بيرلايت ممدد موثوق عبر شريك أوروبي معروف، مع تطوير الحضور الصناعي المحلي.",
      partnerTitle: "Willems Perlite",
      partnerBody:
        "شريك أوروبي ومصدر توريد لمواكبة الطلبات التجارية الأولى لـ Barakah Perlite.",
      partnerCta: "زيارة الشريك",
      items: [
        {
          title: "التوفر الحالي",
          body:
            "بيرلايت ممدد متوفر عبر سلسلة توريد أوروبية موثوقة.",
        },
        {
          title: "مشروع محلي",
          body:
            "تطوير تدريجي لمنصة صناعية مغربية مخصصة للبيرلايت.",
        },
        {
          title: "رؤية للتصدير",
          body:
            "علامة مهيأة للمشترين المهنيين في المغرب وإفريقيا وأوروبا.",
        },
      ],
    },
    roadmap: {
      eyebrow: "التطوير",
      title: "مسار واضح: التوريد الآن، والإنتاج المحلي غداً.",
      description:
        "هذه المرحلة تسمح بالتقدم التجاري مع الشفافية المنتظرة من علامة صناعية جدية.",
      items: [
        {
          metric: "01",
          title: "توريد موثوق",
          body: "الرد على طلبات العملاء ببيرلايت متوفر عبر Willems Perlite.",
        },
        {
          metric: "02",
          title: "منصة مغربية",
          body: "بناء الحضور الصناعي المحلي والعمليات والصيغ وأنظمة الجودة.",
        },
        {
          metric: "03",
          title: "إنتاج مستقبلي",
          body: "تطوير قدرة مغربية للزراعة والمساحات الخضراء والبناء والصناعة.",
        },
      ],
    },
    cta: {
      eyebrow: "تواصل تجاري",
      title: "أخبرنا باحتياجك من البيرلايت الممدد.",
      description:
        "أرسل القطاع والكمية المتوقعة والصيغة المطلوبة والوجهة. سترد Barakah بمقترح واضح.",
      quote: "طلب عرض سعر",
      sample: "طلب عينة",
      whatsapp: "واتساب أحمد",
    },
  },
};

const greenSpaceContent: Record<Locale, GreenSpaceCopy> = {
  fr: {
    header: {
      eyebrow: "Green Space",
      title: "Une perlite premium pour des espaces verts plus vivants.",
      description:
        "Barakah Perlite aide les paysagistes, pépinières et opérateurs d’espaces publics à créer des substrats plus légers, mieux drainés et plus réguliers.",
    },
    promise: {
      eyebrow: "Bénéfices simples",
      title: "Moins de compaction. Plus d’air. Une eau mieux maîtrisée.",
      description:
        "Une solution minérale naturelle pour soutenir les racines, stabiliser les mélanges et simplifier la gestion des sols décoratifs ou fonctionnels.",
      features: [
        {
          title: "Racines plus saines",
          description:
            "La structure poreuse améliore l’oxygénation autour des racines.",
          icon: "sprout",
        },
        {
          title: "Drainage équilibré",
          description:
            "L’eau circule mieux tout en gardant une réserve utile dans le substrat.",
          icon: "droplets",
        },
        {
          title: "Mélanges plus légers",
          description:
            "Idéal pour bacs, jardinières, toitures végétalisées et sols urbains.",
          icon: "feather",
        },
      ],
    },
    useCases: {
      eyebrow: "Applications",
      title: "Des usages clairs pour les professionnels du paysage.",
      description:
        "La perlite se mélange facilement aux substrats existants pour améliorer le confort racinaire sans alourdir les supports.",
      items: [
        {
          title: "Jardins & espaces publics",
          body: "Aide à maintenir une structure de sol plus stable pour plantations décoratives et zones urbaines.",
        },
        {
          title: "Pépinières & jeunes plants",
          body: "Favorise un démarrage racinaire plus propre dans les mélanges horticoles.",
        },
        {
          title: "Terrains sportifs",
          body: "Contribue à l’aération, au drainage et à la tenue des substrats de surface.",
        },
        {
          title: "Mobilier végétalisé",
          body: "Réduit le poids des mélanges pour bacs, jardinières et solutions paysagères modernes.",
        },
      ],
    },
    cta: {
      title: "Vous préparez un projet d’espace vert ?",
      description:
        "Envoyez-nous votre usage, le volume estimé et le type de mélange souhaité. Nous vous orientons rapidement.",
      whatsapp: "Parler sur WhatsApp",
      sample: "Demander un échantillon",
    },
  },
  en: {
    header: {
      eyebrow: "Green Space",
      title: "Premium perlite for healthier, lighter green spaces.",
      description:
        "Barakah Perlite helps landscapers, nurseries and public-space operators build lighter, better-drained and more reliable growing media.",
    },
    promise: {
      eyebrow: "Simple benefits",
      title: "Less compaction. More air. Better water balance.",
      description:
        "A natural mineral solution that supports roots, stabilizes blends and simplifies decorative or functional soil management.",
      features: [
        {
          title: "Healthier roots",
          description:
            "The porous structure improves oxygen availability around the root zone.",
          icon: "sprout",
        },
        {
          title: "Balanced drainage",
          description:
            "Water moves through the mix while keeping useful moisture available.",
          icon: "droplets",
        },
        {
          title: "Lighter media",
          description:
            "Suited to planters, containers, roof gardens and urban planting systems.",
          icon: "feather",
        },
      ],
    },
    useCases: {
      eyebrow: "Applications",
      title: "Clear uses for landscaping professionals.",
      description:
        "Perlite blends easily into growing media to improve root comfort without making substrates heavy.",
      items: [
        {
          title: "Gardens & public areas",
          body: "Helps maintain a more stable soil structure for decorative planting and urban green areas.",
        },
        {
          title: "Nurseries & young plants",
          body: "Supports cleaner root starts in horticultural substrate blends.",
        },
        {
          title: "Sports fields",
          body: "Contributes to aeration, drainage and surface media stability.",
        },
        {
          title: "Green furniture",
          body: "Reduces blend weight for planters, containers and modern landscaping systems.",
        },
      ],
    },
    cta: {
      title: "Planning a green-space project?",
      description:
        "Send us the use case, estimated volume and target blend. We will guide you quickly.",
      whatsapp: "Talk on WhatsApp",
      sample: "Request a sample",
    },
  },
  nl: {
    header: {
      eyebrow: "Green Space",
      title: "Premium perliet voor gezondere, lichtere groenzones.",
      description:
        "Barakah Perlite helpt hoveniers, kwekerijen en beheerders van openbare ruimtes om lichtere, beter drainerende en betrouwbaardere groeimedia te maken.",
    },
    promise: {
      eyebrow: "Eenvoudige voordelen",
      title: "Minder verdichting. Meer lucht. Betere waterbalans.",
      description:
        "Een natuurlijke minerale oplossing die wortels ondersteunt, mengsels stabiliseert en het beheer van decoratieve of functionele bodems vereenvoudigt.",
      features: [
        {
          title: "Gezondere wortels",
          description:
            "De poreuze structuur verbetert de zuurstofbeschikbaarheid rond de wortelzone.",
          icon: "sprout",
        },
        {
          title: "Gebalanceerde drainage",
          description:
            "Water beweegt beter door het mengsel terwijl nuttig vocht beschikbaar blijft.",
          icon: "droplets",
        },
        {
          title: "Lichtere substraten",
          description:
            "Geschikt voor plantenbakken, containers, daktuinen en stedelijke beplanting.",
          icon: "feather",
        },
      ],
    },
    useCases: {
      eyebrow: "Toepassingen",
      title: "Duidelijke toepassingen voor landschapsprofessionals.",
      description:
        "Perliet mengt gemakkelijk met bestaande substraten om wortelcomfort te verbeteren zonder het medium zwaar te maken.",
      items: [
        {
          title: "Tuinen & openbare ruimte",
          body: "Helpt een stabielere bodemstructuur te behouden voor decoratieve beplanting en stedelijke groenzones.",
        },
        {
          title: "Kwekerijen & jonge planten",
          body: "Ondersteunt een schonere wortelstart in tuinbouwkundige substraatmengsels.",
        },
        {
          title: "Sportvelden",
          body: "Draagt bij aan beluchting, drainage en stabiliteit van oppervlaktesubstraten.",
        },
        {
          title: "Groen straatmeubilair",
          body: "Verlaagt het gewicht van mengsels voor plantenbakken en moderne landschapsoplossingen.",
        },
      ],
    },
    cta: {
      title: "Plant u een groenzoneproject?",
      description:
        "Stuur ons de toepassing, het geschatte volume en het gewenste mengsel. Wij adviseren u snel.",
      whatsapp: "Praten via WhatsApp",
      sample: "Monster aanvragen",
    },
  },
  ar: {
    header: {
      eyebrow: "المساحات الخضراء",
      title: "بيرلايت فاخر لمساحات خضراء أخف وأكثر حيوية.",
      description:
        "يساعد Barakah Perlite مهنيي التشجير والمشاتل ومشغلي المساحات العامة على إعداد خلطات زراعية أخف وأفضل تصريفا وأكثر انتظاما.",
    },
    promise: {
      eyebrow: "فوائد مباشرة",
      title: "انضغاط أقل. هواء أكثر. توازن أفضل للماء.",
      description:
        "حل معدني طبيعي يدعم الجذور، يثبت الخلطات، ويسهل إدارة التربة التجميلية والوظيفية.",
      features: [
        {
          title: "جذور أكثر صحة",
          description:
            "البنية المسامية تحسن توفر الأكسجين حول منطقة الجذور.",
          icon: "sprout",
        },
        {
          title: "تصريف متوازن",
          description:
            "يساعد الماء على الحركة داخل الخليط مع الحفاظ على رطوبة مفيدة.",
          icon: "droplets",
        },
        {
          title: "وسط زراعي أخف",
          description:
            "مناسب للأحواض، الأصص، الأسطح الخضراء والتشجير الحضري.",
          icon: "feather",
        },
      ],
    },
    useCases: {
      eyebrow: "التطبيقات",
      title: "استخدامات واضحة لمهنيي المساحات الخضراء.",
      description:
        "يمتزج البيرلايت بسهولة مع الركائز الموجودة لتحسين راحة الجذور دون زيادة وزن الخليط.",
      items: [
        {
          title: "الحدائق والمساحات العامة",
          body: "يساعد على الحفاظ على بنية تربة أكثر ثباتا للغرس التزييني والمناطق الحضرية.",
        },
        {
          title: "المشاتل والنباتات الصغيرة",
          body: "يدعم انطلاقة جذرية أنظف داخل خلطات البستنة.",
        },
        {
          title: "الملاعب الرياضية",
          body: "يساهم في التهوية والتصريف واستقرار الطبقات السطحية.",
        },
        {
          title: "الأحواض والحلول الخضراء",
          body: "يقلل وزن الخلطات للأحواض والأصص والحلول الحديثة للتشجير.",
        },
      ],
    },
    cta: {
      title: "هل تحضر مشروعا للمساحات الخضراء؟",
      description:
        "أرسل لنا نوع الاستخدام والحجم التقريبي والخليط المطلوب. سنوجهك بسرعة.",
      whatsapp: "تواصل عبر واتساب",
      sample: "طلب عينة",
    },
  },
};

type VisualVariant = "mineral" | "greenhouse" | "factory" | "packaging" | "map";

export function HomePageContent() {
  const { t } = useI18n();

  return (
    <>
      <Hero />
      <StatsSection stats={t.home.stats} />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.home.why.eyebrow}
            title={t.home.why.title}
            description={t.home.why.description}
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
            {t.home.why.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...featureProps(feature)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.home.applications.eyebrow}
            title={t.home.applications.title}
            description={t.home.applications.description}
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.applications.map((application, index) => (
              <ApplicationCard
                key={application.title}
                {...featureProps(application)}
                href={application.href}
                accent={application.accent}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <SplitVisualSection
        visualTitle={t.home.origin.visualTitle}
        visualCaption={t.home.origin.visualCaption}
        visualVariant="factory"
      >
        <SectionTitle
          eyebrow={t.home.origin.eyebrow}
          title={t.home.origin.title}
          description={t.home.origin.description}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {t.home.origin.cards.map((card) => (
            <div
              key={card.label}
              className="rounded-[0.45rem] border border-white/10 bg-white/[0.055] p-6 shadow-glass"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-atlas-sand">
                {card.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-silver-200/70 md:text-base">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </SplitVisualSection>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.home.advantages.eyebrow}
            title={t.home.advantages.title}
            description={t.home.advantages.description}
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.home.advantages.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...featureProps(feature)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.home.process.eyebrow}
            title={t.home.process.title}
            description={t.home.process.description}
          />
          <div className="mt-10">
            <ProcessTimeline steps={t.common.processSteps} />
          </div>
        </div>
      </section>

      <QuoteCTA title={t.home.cta.title} description={t.home.cta.description} />
    </>
  );
}

export function ProductPageContent() {
  return (
    <div data-product-page className="overflow-hidden">
      <ProductGsapPrototype />
      <ProductHero />

      <ProductCommercialIntro />
      <ProductApplicationsShowcase />
      <ProductProductionShowcase />
      <ProductMobileFinalCta />
    </div>
  );
}

function ProductCommercialIntro() {
  const { t } = useI18n();

  return (
    <section
      data-gsap-section
      className="relative overflow-hidden bg-[#020806] px-4 py-12 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(22,200,95,0.12),transparent_34%),radial-gradient(circle_at_82%_30%,rgba(213,185,122,0.12),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
        <div data-gsap-section-title className="max-w-xl md:max-w-2xl">
          <SectionTitle
            eyebrow={t.product.what.eyebrow}
            title={t.product.what.title}
            description={t.product.what.description}
          />
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {t.product.what.facts.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article
                data-gsap-card
                key={item.label}
                className="group relative flex min-h-[168px] flex-col overflow-hidden rounded-[0.45rem] border border-white/10 bg-[#07110E]/78 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#16C85F]/50 hover:bg-[#0B1712] md:min-h-[250px] md:rounded-[0.55rem] md:p-7"
              >
                <div className="mb-5 flex items-center justify-between md:mb-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#16C85F]/35 bg-[#16C85F]/10 text-[#16C85F] shadow-[0_0_34px_rgba(22,200,95,0.16)] md:h-14 md:w-14">
                    <Icon aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 text-silver-200/45 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#16C85F]"
                  />
                </div>
                <p className="font-display text-lg font-bold leading-tight text-perlite-50 md:text-2xl">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-silver-200/68 md:mt-4 md:text-base md:leading-7">
                  {item.description}
                </p>
                <span className="mt-auto hidden items-center gap-2 pt-8 text-sm font-bold uppercase tracking-[0.08em] text-[#16C85F] md:inline-flex">
                  {t.product.what.moreLabel}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                  />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductApplicationsShowcase() {
  const { t } = useI18n();

  return (
    <section
      data-gsap-section
      className="relative overflow-hidden bg-[#F5F1EA] px-4 py-14 text-[#07110E] sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-[#16C85F]/12 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-32 w-72 bg-[radial-gradient(circle_at_20%_80%,rgba(22,200,95,0.22),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
        <div data-gsap-section-title className="max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#16A34A]">
            {t.home.applications.eyebrow}
          </p>
          <h2 className="font-display text-[2rem] font-bold leading-[1.05] text-[#06110D] md:text-5xl">
            {t.home.applications.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#20312B]/78 md:text-lg">
            {t.home.applications.description}
          </p>
          <Link
            href="/agriculture"
            className="bp-glass-cta bp-glass-cta--primary mt-8 hidden text-sm md:inline-flex"
          >
            {t.nav.items.find((item) => item.href === "/agriculture")?.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {t.applications.map((application, index) => {
            const Icon = iconMap[application.icon];

            return (
              <Link
                data-gsap-card
                key={application.title}
                href={application.href}
                className={cn(
                  "group rounded-[0.45rem] border border-black/5 bg-white/72 p-5 shadow-[0_22px_70px_rgba(5,11,9,0.08)] backdrop-blur transition hover:-translate-y-1 hover:bg-white md:rounded-[0.55rem] md:p-6",
                  index >= 3 && "hidden md:block",
                )}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-full bg-[#16C85F]/12 text-[#149447] md:h-16 md:w-16">
                    <Icon aria-hidden="true" className="h-7 w-7 md:h-8 md:w-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-tight text-[#06110D] md:text-xl">
                      {application.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#20312B]/72 md:leading-7">
                      {application.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#16A34A]">
                      {t.product.what.moreLabel}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductProductionShowcase() {
  const { t } = useI18n();

  return (
    <section
      data-gsap-section
      className="relative hidden overflow-hidden bg-[#020806] px-4 py-16 sm:px-6 md:block md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(22,200,95,0.14),transparent_36%),linear-gradient(180deg,#020806,#050B09)]" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
          <div data-gsap-section-title className="max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-atlas-sand">
              {t.home.process.eyebrow}
            </p>
            <h2 className="font-display text-[2.15rem] font-bold leading-[1.02] text-perlite-50 md:text-5xl">
              {t.home.process.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-silver-200/72 md:text-lg">
              {t.home.process.description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {t.product.packaging.formats.slice(0, 3).map((format) => (
                <div
                  key={format}
                  className="rounded-[0.5rem] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-atlas-sand">
                    {t.product.packaging.formatsTitle}
                  </p>
                  <p className="mt-2 font-display text-xl font-bold text-[#16C85F]">
                    {format}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--primary mt-8 hidden text-sm md:inline-flex"
            >
              {t.common.quoteRequest}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div
            data-gsap-card
            className="relative min-h-[300px] overflow-hidden rounded-[0.7rem] border border-white/10 bg-[#050B09] shadow-[0_36px_120px_rgba(0,0,0,0.42)] md:min-h-[460px]"
          >
            <Image
              src="/images/barakah-factory-3d.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(2,8,6,0.35)_100%)]" />
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-y border-white/10 py-6 md:grid-cols-2 lg:grid-cols-4">
          {t.common.processSteps.map((step, index) => (
            <div
              data-gsap-card
              key={step.step}
              className={cn(
                "flex items-start gap-3 text-sm font-semibold leading-6 text-silver-200/78",
                index >= 3 && "hidden md:flex",
              )}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16C85F] text-xs font-bold text-[#020806]">
                {index + 1}
              </span>
              <span>
                <span className="block text-perlite-50">{step.title}</span>
                <span className="mt-1 block text-xs font-normal leading-5 text-silver-200/55">
                  {step.description}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductMobileFinalCta() {
  const { t } = useI18n();

  return (
    <section
      data-gsap-section
      className="relative overflow-hidden bg-[#020806] px-4 pb-16 pt-8 sm:px-6 md:hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(22,200,95,0.12),transparent_35%),linear-gradient(180deg,rgba(2,8,6,0)_0%,#020806_62%)]" />
      <div
        data-gsap-card
        className="relative rounded-[0.55rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl"
      >
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-atlas-sand">
          Barakah Perlite
        </p>
        <h2 className="mt-4 font-display text-[1.85rem] font-bold leading-[1.06] tracking-[-0.02em] text-perlite-50">
          {t.product.packaging.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-silver-200/72">
          {t.product.packaging.description}
        </p>
        <div className="mt-7 grid gap-3">
          <Link href="/contact" className="bp-glass-cta bp-glass-cta--primary w-full">
            {t.common.quoteRequest}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bp-glass-cta bp-glass-cta--secondary w-full"
          >
            {t.contactPage.whatsapp}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ProductDetailPageContent({
  detailKey,
}: {
  detailKey: ProductDetailKey;
}) {
  const { t } = useI18n();
  const page = t.productDetails[detailKey];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,10,8,0.97),rgba(20,24,19,0.9),rgba(6,59,36,0.58))]" />
        <div className="absolute inset-0 bg-perlite-radial opacity-65" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <Link
              href="/produit"
              className="mb-8 inline-flex items-center gap-2 rounded-[0.35rem] border border-white/10 bg-white/[0.055] px-3 py-2 text-sm font-semibold text-silver-200/75 transition hover:border-atlas-sand/45 hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              {page.backLabel}
            </Link>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-atlas-sand">
              {page.hero.eyebrow}
            </p>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] text-perlite-50 md:text-5xl md:leading-[1.06] lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-silver-200/75 md:text-lg md:leading-8">
              {page.hero.description}
            </p>
          </div>
          <VisualPanel
            title={page.hero.visualTitle}
            caption={page.hero.visualCaption}
            variant={detailVisualVariant[detailKey]}
            className="min-h-[340px] lg:min-h-[380px]"
          />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={page.technical.eyebrow}
            title={page.technical.title}
            description={page.technical.description}
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
            {page.technical.points.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...featureProps(feature)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <DetailUseSection
        eyebrow={page.agriculture.eyebrow}
        title={page.agriculture.title}
        description={page.agriculture.description}
        useCases={page.agriculture.useCases}
        tone="emerald"
      />

      <DetailUseSection
        eyebrow={page.industry.eyebrow}
        title={page.industry.title}
        description={page.industry.description}
        useCases={page.industry.useCases}
        tone="sand"
      />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <SectionTitle
              eyebrow={page.specs.eyebrow}
              title={page.specs.title}
              description={page.specs.description}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={technicalDocuments.datasheet}
                target="_blank"
                rel="noopener noreferrer"
                className="bp-glass-cta bp-glass-cta--secondary w-full text-sm sm:w-fit"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                {t.product.specs.download}
              </a>
              <a
                href={technicalDocuments.msds}
                target="_blank"
                rel="noopener noreferrer"
                className="bp-glass-cta bp-glass-cta--secondary w-full text-sm sm:w-fit"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                {t.product.specs.msdsDownload}
              </a>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {page.specs.cards.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...featureProps(feature)}
                  index={index}
                />
              ))}
            </div>
          </div>
          <TechnicalSpecsTable specs={page.specs.rows} />
        </div>
      </section>

      {detailKey === "technique" ? (
        <>
          <TechnicalProfileSection profile={t.product.technicalProfile} />
          <FeatureGrid
            eyebrow={t.product.techniqueTrust.eyebrow}
            title={t.product.techniqueTrust.title}
            description={t.product.techniqueTrust.description}
            features={t.product.techniqueTrust.features}
            columns="lg:grid-cols-3"
          />
        </>
      ) : null}

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={page.comparisons.eyebrow}
            title={page.comparisons.title}
            description={page.comparisons.description}
          />
          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
            {page.comparisons.cards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-[0.45rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.035] p-5 shadow-glass backdrop-blur-xl md:p-7"
              >
                <h3 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                  {card.title}
                </h3>
                <div className="mt-6 grid gap-3">
                  <ComparisonPoint label={card.leftLabel} body={card.left} muted />
                  <ComparisonPoint label={card.rightLabel} body={card.right} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={page.why.eyebrow}
            title={page.why.title}
            description={page.why.description}
            align="center"
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
            {page.why.cards.map((card, index) => (
              <article
                key={card.title}
                className="h-full rounded-[0.45rem] border border-white/10 bg-white/[0.055] p-5 shadow-glass backdrop-blur-xl md:p-7"
              >
                <p className="mb-5 font-display text-4xl font-semibold text-white/10">
                  0{index + 1}
                </p>
                <h3 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-silver-200/70 md:text-base">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA title={page.cta.title} description={page.cta.description} />
    </>
  );
}

export function AgriculturePageContent() {
  const { locale } = useI18n();
  const copy = agricultureCommercialContent[locale];

  return (
    <div data-agriculture-page className="overflow-hidden bg-[#020806]">
      <AgricultureHero copy={copy} />
      <AgricultureBenefits copy={copy} />
      <AgricultureUseCases copy={copy} />
      <AgricultureTrust copy={copy} />
      <AgricultureFinalCta copy={copy} />
    </div>
  );
}

function CommercialHeroCtas({
  quote,
  sample,
  whatsapp,
  isArabic = false,
}: {
  quote: string;
  sample: string;
  whatsapp: string;
  isArabic?: boolean;
}) {
  return (
    <div
      dir="ltr"
      className={cn(
        "mb-8 mt-8 w-full max-w-[42rem]",
        isArabic && "sm:ml-0 sm:mr-auto",
      )}
    >
      <div className="grid gap-3 md:grid-cols-2">
        <Link
          data-hero-cta
          href="/contact"
          className="bp-glass-cta bp-glass-cta--primary w-full min-w-0"
        >
          {quote}
          <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </Link>
        <Link
          data-hero-cta
          href="/contact"
          className="bp-glass-cta bp-glass-cta--secondary hidden w-full min-w-0 md:inline-flex"
        >
          {sample}
          <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </Link>
      </div>
      <div className="mt-3 flex justify-center">
        <a
          data-hero-cta
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bp-glass-cta bp-glass-cta--secondary w-full min-w-0 md:w-[calc(50%-0.375rem)]"
        >
          {whatsapp}
          <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </a>
      </div>
    </div>
  );
}

function AgricultureHero({ copy }: { copy: AgricultureCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden border-b border-white/10 bg-[#020806] px-4 pt-28 text-white sm:px-6 md:pt-32 lg:min-h-[760px] lg:px-[5%] 2xl:min-h-[820px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(22,200,95,0.14),transparent_28%),radial-gradient(circle_at_10%_45%,rgba(213,185,122,0.11),transparent_32%),linear-gradient(135deg,#020806_0%,#07110E_58%,#020806_100%)]" />
      <MoroccanPatternBackground density="medium" className="opacity-[0.11]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-72 bg-gradient-to-t from-[#020806] via-[#020806]/82 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-55">
        <AnimatedParticles />
      </div>

      <div className="relative z-[3] mx-auto grid min-w-0 max-w-[1500px] gap-8 pb-10 lg:min-h-[680px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:pb-0 2xl:min-h-[720px]">
        <div className="min-w-0 w-full max-w-[calc(100vw-2rem)] pt-4 sm:max-w-2xl lg:pt-0">
          <div data-hero-eyebrow className="mb-7 h-0.5 w-12 bg-[#16C85F]" />
          <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#16C85F]">
            {copy.hero.eyebrow}
          </p>
          <h1
            data-hero-title
            className="max-w-[11ch] break-words font-display text-[2.05rem] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:max-w-none sm:text-[3.45rem] lg:text-[4.6rem] xl:text-[5rem]"
          >
            {copy.hero.title}
          </h1>
          <p
            data-hero-subtitle
            className="mt-5 text-xl font-semibold leading-snug tracking-[-0.01em] text-white md:text-2xl"
          >
            {copy.hero.kicker}
          </p>
          <p
            data-hero-subtitle
            className="mt-4 max-w-[52ch] text-sm leading-7 text-[#B8C2BD] md:text-base md:leading-8"
          >
            {copy.hero.description}
          </p>

          <CommercialHeroCtas
            quote={copy.hero.quote}
            sample={copy.hero.sample}
            whatsapp={copy.hero.whatsapp}
          />
        </div>

        <div
          data-gsap-card
          className="relative min-h-[410px] min-w-0 max-w-[calc(100vw-2rem)] overflow-hidden rounded-[0.65rem] border border-white/10 bg-[#07110E]/72 shadow-[0_42px_140px_rgba(0,0,0,0.44)] backdrop-blur-xl md:min-h-[520px] lg:max-w-none lg:min-h-[580px] 2xl:min-h-[620px]"
        >
          <Image
            src="/images/agriculture-greenhouse-tomatoes.jpeg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center opacity-[0.82]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,6,0.08)_0%,rgba(2,8,6,0.22)_50%,rgba(2,8,6,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_32%,rgba(22,200,95,0.16),transparent_30%),linear-gradient(90deg,rgba(2,8,6,0.32)_0%,transparent_38%,rgba(2,8,6,0.28)_100%)]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-[#020806]/58 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-perlite-50 backdrop-blur-md md:left-7 md:top-7">
            {copy.hero.visualLabel}
          </div>
          <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
            <h2 className="max-w-[14ch] break-words font-display text-[1.45rem] font-bold leading-snug tracking-[-0.015em] text-perlite-50 md:max-w-lg md:text-4xl">
              {copy.hero.visualTitle}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {copy.hero.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[0.75rem] border border-white/12 bg-[#020806]/62 p-4 backdrop-blur-md"
                >
                  <p className="font-display text-xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-silver-200/62">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgricultureBenefits({ copy }: { copy: AgricultureCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(22,200,95,0.14),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(213,185,122,0.1),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl" data-gsap-section-title>
          <SectionTitle
            eyebrow={copy.benefits.eyebrow}
            title={copy.benefits.title}
            description={copy.benefits.description}
          />
        </div>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {copy.benefits.features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...featureProps(feature)}
              index={index}
              className={index >= 3 ? "hidden md:block" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AgricultureUseCases({ copy }: { copy: AgricultureCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden bg-[#F5F1EA] px-4 py-14 text-[#07110E] sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#16C85F]/16 blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_24%,rgba(22,200,95,0.12),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14">
        <div data-gsap-section-title className="max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#16A34A]">
            {copy.useCases.eyebrow}
          </p>
          <h2 className="font-display text-[2.15rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#06110D] md:text-5xl">
            {copy.useCases.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#20312B]/78 md:text-lg">
            {copy.useCases.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {copy.useCases.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                data-gsap-card
                key={item.title}
                className={cn(
                  "group rounded-[0.55rem] border border-black/5 bg-white/78 p-6 shadow-[0_24px_80px_rgba(5,11,9,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(5,11,9,0.14)]",
                  index >= 2 && "hidden md:block",
                )}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#16C85F]/12 text-[#129B4A]">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold leading-tight text-[#06110D] md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#20312B]/72 md:text-base">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#129B4A]">
                  {String(index + 1).padStart(2, "0")}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AgricultureTrust({ copy }: { copy: AgricultureCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <MoroccanPatternBackground density="quiet" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,6,0.96),rgba(7,17,14,0.94)),radial-gradient(circle_at_72%_28%,rgba(22,200,95,0.14),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start lg:gap-14">
        <div data-gsap-section-title className="max-w-2xl">
          <SectionTitle
            eyebrow={copy.trust.eyebrow}
            title={copy.trust.title}
            description={copy.trust.description}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {copy.trust.items.map((item, index) => (
            <article
              data-gsap-card
              key={item.title}
              className={cn(
                "rounded-[0.55rem] border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl",
                index >= 2 && "hidden md:block",
              )}
            >
              <p className="font-display text-3xl font-bold text-[#16C85F]">
                {item.metric}
              </p>
              <h3 className="mt-5 font-display text-xl font-bold leading-tight text-perlite-50 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-silver-200/70 md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgricultureFinalCta({ copy }: { copy: AgricultureCommercialCopy }) {
  return (
    <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[0.65rem] border border-white/10 bg-[radial-gradient(circle_at_84%_18%,rgba(22,200,95,0.2),transparent_32%),linear-gradient(135deg,#020806,#07110E_52%,#050B09)] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.36)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,620px)] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-atlas-sand">
              {copy.cta.eyebrow}
            </p>
            <h2 className="max-w-3xl font-display text-[2rem] font-bold leading-[1.05] text-perlite-50 md:text-5xl md:leading-[1.02]">
              {copy.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-silver-200/75 md:mt-5 md:text-lg md:leading-8">
              {copy.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--primary text-sm"
            >
              {copy.cta.quote}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--secondary hidden text-sm md:inline-flex"
            >
              {copy.cta.sample}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bp-glass-cta bp-glass-cta--secondary text-sm"
            >
              {copy.cta.whatsapp}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GreenSpacePageContent() {
  const { locale, t } = useI18n();
  const copy = greenSpaceContent[locale];

  return (
    <div data-green-space-page className="overflow-hidden bg-[#020806]">
      <GreenSpaceHero copy={copy} quoteLabel={t.common.quoteRequest} locale={locale} />
      <GreenSpaceBenefits copy={copy} />
      <GreenSpaceUseCases copy={copy} />
      <GreenSpaceFinalCta copy={copy} quoteLabel={t.common.quoteRequest} />
    </div>
  );
}

function GreenSpaceHero({
  copy,
  quoteLabel,
  locale,
}: {
  copy: GreenSpaceCopy;
  quoteLabel: string;
  locale: Locale;
}) {
  const isArabic = locale === "ar";

  return (
    <section
      data-gsap-section
      className="relative overflow-hidden border-b border-white/10 bg-[#020806] px-4 pt-28 text-white sm:px-6 md:pt-32 lg:min-h-[760px] lg:px-[5%] 2xl:min-h-[820px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(22,200,95,0.15),transparent_30%),radial-gradient(circle_at_12%_48%,rgba(213,185,122,0.12),transparent_32%),linear-gradient(135deg,#020806_0%,#07110E_58%,#020806_100%)]" />
      <MoroccanPatternBackground density="medium" className="opacity-[0.11]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-72 bg-gradient-to-t from-[#020806] via-[#020806]/82 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-55">
        <AnimatedParticles />
      </div>

      <div className="relative z-[3] mx-auto grid min-w-0 max-w-[1500px] gap-8 pb-10 lg:min-h-[680px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:pb-0 2xl:min-h-[720px]">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className={cn(
            "min-w-0 w-full max-w-[calc(100vw-2rem)] pt-4 sm:max-w-2xl lg:pt-0",
            isArabic && "text-right",
          )}
        >
          <div className={cn("mb-7 h-0.5 w-12 bg-[#16C85F]", isArabic && "ml-0 mr-auto")} />
          <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#16C85F]">
            {copy.header.eyebrow}
          </p>
          <h1 className="max-w-[12ch] break-words font-display text-[2.05rem] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:max-w-none sm:text-[3.45rem] lg:text-[4.6rem] xl:text-[5rem]">
            {copy.header.title}
          </h1>
          <p className="mt-5 max-w-[52ch] text-sm leading-7 text-[#B8C2BD] md:text-base md:leading-8">
            {copy.header.description}
          </p>

          <CommercialHeroCtas
            quote={quoteLabel}
            sample={copy.cta.sample}
            whatsapp={copy.cta.whatsapp}
            isArabic={isArabic}
          />
        </div>

        <div
          data-gsap-card
          className="relative min-h-[410px] min-w-0 max-w-[calc(100vw-2rem)] overflow-hidden rounded-[0.65rem] border border-white/10 bg-[#07110E]/72 shadow-[0_42px_140px_rgba(0,0,0,0.44)] backdrop-blur-xl md:min-h-[520px] lg:max-w-none lg:min-h-[580px] 2xl:min-h-[620px]"
        >
          <Image
            src="/images/green-space-perlite-seedlings.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center opacity-[0.84]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,6,0.06)_0%,rgba(2,8,6,0.18)_48%,rgba(2,8,6,0.7)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_28%,rgba(22,200,95,0.14),transparent_34%),linear-gradient(90deg,rgba(2,8,6,0.18)_0%,transparent_46%,rgba(2,8,6,0.24)_100%)]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/14 bg-[#020806]/56 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-perlite-50 backdrop-blur-md md:left-7 md:top-7">
            {copy.promise.eyebrow}
          </div>
          <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
            <h2 className="max-w-[15ch] break-words font-display text-[1.45rem] font-bold leading-snug tracking-[-0.015em] text-perlite-50 md:max-w-lg md:text-4xl">
              {copy.promise.title}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {copy.promise.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[0.75rem] border border-white/12 bg-[#020806]/62 p-4 backdrop-blur-md"
                >
                  <p className="font-display text-lg font-bold leading-snug tracking-[-0.01em] text-white">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GreenSpaceBenefits({ copy }: { copy: GreenSpaceCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(22,200,95,0.14),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(213,185,122,0.1),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl" data-gsap-section-title>
          <SectionTitle
            eyebrow={copy.promise.eyebrow}
            title={copy.promise.title}
            description={copy.promise.description}
          />
        </div>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
          {copy.promise.features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...featureProps(feature)}
              index={index}
              className={index >= 3 ? "hidden md:block" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GreenSpaceUseCases({ copy }: { copy: GreenSpaceCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden bg-[#F5F1EA] px-4 py-14 text-[#07110E] sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#16C85F]/16 blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_24%,rgba(22,200,95,0.12),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14">
        <div data-gsap-section-title className="max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#16A34A]">
            {copy.useCases.eyebrow}
          </p>
          <h2 className="font-display text-[2.15rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#06110D] md:text-5xl">
            {copy.useCases.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#20312B]/78 md:text-lg">
            {copy.useCases.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {copy.useCases.items.map((item, index) => (
            <article
              data-gsap-card
              key={item.title}
              className={cn(
                "group rounded-[0.55rem] border border-black/5 bg-white/78 p-6 shadow-[0_24px_80px_rgba(5,11,9,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(5,11,9,0.14)]",
                index >= 2 && "hidden md:block",
              )}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#16C85F]/12 text-sm font-bold text-[#129B4A]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold leading-tight text-[#06110D] md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#20312B]/72 md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GreenSpaceFinalCta({
  copy,
  quoteLabel,
}: {
  copy: GreenSpaceCopy;
  quoteLabel: string;
}) {
  return (
    <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[0.65rem] border border-white/10 bg-[radial-gradient(circle_at_84%_18%,rgba(22,200,95,0.2),transparent_32%),linear-gradient(135deg,#020806,#07110E_52%,#050B09)] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.36)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,620px)] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-atlas-sand">
              Green Space
            </p>
            <h2 className="max-w-3xl font-display text-[2rem] font-bold leading-[1.05] text-perlite-50 md:text-5xl md:leading-[1.02]">
              {copy.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-silver-200/75 md:mt-5 md:text-lg md:leading-8">
              {copy.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--primary text-sm"
            >
              {quoteLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--secondary hidden text-sm md:inline-flex"
            >
              {copy.cta.sample}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bp-glass-cta bp-glass-cta--secondary text-sm"
            >
              {copy.cta.whatsapp}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustryPageContent() {
  const { locale } = useI18n();
  const copy = industryCommercialContent[locale];

  return (
    <div data-industry-page className="overflow-hidden bg-[#020806]">
      <IndustryHero copy={copy} locale={locale} />
      <IndustryApplications copy={copy} />
      <IndustryLogistics copy={copy} />
      <IndustryDocuments copy={copy} />
      <IndustryFinalCta copy={copy} />
    </div>
  );
}

function IndustryHero({
  copy,
  locale,
}: {
  copy: IndustryCommercialCopy;
  locale: Locale;
}) {
  const isArabic = locale === "ar";

  return (
    <section
      data-gsap-section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden border-b border-white/10 bg-[#020806] px-4 pt-28 text-white sm:px-6 md:pt-32 lg:min-h-[760px] lg:px-[5%] 2xl:min-h-[820px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(22,200,95,0.12),transparent_28%),radial-gradient(circle_at_16%_58%,rgba(213,185,122,0.1),transparent_34%),linear-gradient(135deg,#020806_0%,#07110E_56%,#020806_100%)]" />
      <MoroccanPatternBackground density="medium" className="opacity-[0.1]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-72 bg-gradient-to-t from-[#020806] via-[#020806]/86 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-50">
        <AnimatedParticles />
      </div>

      <div className="relative z-[3] mx-auto grid min-w-0 max-w-[1500px] gap-8 pb-10 lg:min-h-[680px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:pb-0 2xl:min-h-[720px]">
        <div
          className={cn(
            "min-w-0 w-full max-w-[calc(100vw-2rem)] pt-4 sm:max-w-2xl lg:pt-0",
            isArabic && "text-right",
          )}
        >
          <div
            data-hero-eyebrow
            className={cn(
              "mb-7 h-0.5 w-12 bg-[#16C85F]",
              isArabic && "mr-0",
            )}
          />
          <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#16C85F]">
            {copy.hero.eyebrow}
          </p>
          <h1
            data-hero-title
            className="max-w-[12ch] break-words font-display text-[2.05rem] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:max-w-none sm:text-[3.45rem] lg:max-w-[12ch] lg:text-[4.6rem] xl:text-[5rem]"
          >
            {copy.hero.title}
          </h1>
          <p
            data-hero-subtitle
            className="mt-5 text-xl font-semibold leading-snug tracking-[-0.01em] text-white md:text-2xl"
          >
            {copy.hero.kicker}
          </p>
          <p
            data-hero-subtitle
            className="mt-4 max-w-[52ch] text-sm leading-7 text-[#B8C2BD] md:text-base md:leading-8"
          >
            {copy.hero.description}
          </p>

          <CommercialHeroCtas
            quote={copy.hero.quote}
            sample={copy.hero.sample}
            whatsapp={copy.hero.whatsapp}
            isArabic={isArabic}
          />
        </div>

        <div
          data-gsap-card
          className="relative min-h-[390px] min-w-0 max-w-[calc(100vw-2rem)] overflow-hidden rounded-[0.65rem] border border-white/10 bg-[radial-gradient(circle_at_72%_18%,rgba(22,200,95,0.1),transparent_32%),linear-gradient(135deg,#020806,#050B09)] shadow-[0_42px_140px_rgba(0,0,0,0.5)] backdrop-blur-xl md:min-h-[520px] lg:max-w-none lg:min-h-[580px] 2xl:min-h-[620px]"
        >
          <div className="absolute inset-5 rounded-[0.5rem] bg-black/70 md:inset-7" />
          <Image
            src="/images/industry-factory-premium.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="scale-[1.08] object-contain object-center opacity-[0.96] md:scale-[1.12]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,6,0.04)_0%,rgba(2,8,6,0.18)_52%,rgba(2,8,6,0.68)_100%)]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-[#020806]/58 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-perlite-50 backdrop-blur-md md:left-7 md:top-7">
            {copy.hero.visualLabel}
          </div>
          <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
            <h2 className="max-w-[16ch] break-words font-display text-[1.4rem] font-bold leading-snug tracking-[-0.015em] text-perlite-50 md:max-w-lg md:text-4xl">
              {copy.hero.visualTitle}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {copy.hero.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[0.75rem] border border-white/12 bg-[#020806]/62 p-4 backdrop-blur-md"
                >
                  <p className="font-display text-xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-silver-200/62">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryApplications({ copy }: { copy: IndustryCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(22,200,95,0.12),transparent_28%),radial-gradient(circle_at_86%_74%,rgba(213,185,122,0.1),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl" data-gsap-section-title>
          <SectionTitle
            eyebrow={copy.applications.eyebrow}
            title={copy.applications.title}
            description={copy.applications.description}
          />
        </div>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {copy.applications.features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...featureProps(feature)}
              index={index}
              className={index >= 3 ? "hidden md:block" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryLogistics({ copy }: { copy: IndustryCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden bg-[#F5F1EA] px-4 py-14 text-[#07110E] sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#16C85F]/14 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14">
        <div data-gsap-section-title className="max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#16A34A]">
            {copy.logistics.eyebrow}
          </p>
          <h2 className="font-display text-[2.15rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#06110D] md:text-5xl">
            {copy.logistics.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#20312B]/78 md:text-lg">
            {copy.logistics.description}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {copy.logistics.items.map((item, index) => (
            <article
              data-gsap-card
              key={item.title}
              className={cn(
                "rounded-[0.55rem] border border-black/5 bg-white/78 p-6 shadow-[0_24px_80px_rgba(5,11,9,0.08)] backdrop-blur",
                index >= 2 && "hidden md:block",
              )}
            >
              <p className="font-display text-3xl font-bold text-[#16A34A]">
                {item.metric}
              </p>
              <h3 className="mt-5 font-display text-xl font-bold leading-tight text-[#06110D] md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#20312B]/72 md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryDocuments({ copy }: { copy: IndustryCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <MoroccanPatternBackground density="quiet" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,6,0.97),rgba(7,17,14,0.94)),radial-gradient(circle_at_78%_26%,rgba(22,200,95,0.12),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 rounded-[0.6rem] border border-white/10 bg-white/[0.045] p-6 shadow-glass backdrop-blur-xl md:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div data-gsap-section-title className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-atlas-sand">
            {copy.documents.eyebrow}
          </p>
          <h2 className="font-display text-[2rem] font-bold leading-[1.05] text-perlite-50 md:text-5xl md:leading-[1.02]">
            {copy.documents.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-silver-200/75 md:text-lg md:leading-8">
            {copy.documents.description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={technicalDocuments.datasheet}
            target="_blank"
            rel="noopener noreferrer"
            className="bp-glass-cta bp-glass-cta--secondary text-sm"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            {copy.documents.datasheet}
          </a>
          <a
            href={technicalDocuments.msds}
            target="_blank"
            rel="noopener noreferrer"
            className="bp-glass-cta bp-glass-cta--secondary text-sm"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            {copy.documents.msds}
          </a>
        </div>
      </div>
    </section>
  );
}

function IndustryFinalCta({ copy }: { copy: IndustryCommercialCopy }) {
  return (
    <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[0.65rem] border border-white/10 bg-[radial-gradient(circle_at_84%_18%,rgba(22,200,95,0.2),transparent_32%),linear-gradient(135deg,#020806,#07110E_52%,#050B09)] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.36)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,620px)] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-atlas-sand">
              {copy.cta.eyebrow}
            </p>
            <h2 className="max-w-3xl font-display text-[2rem] font-bold leading-[1.05] text-perlite-50 md:text-5xl md:leading-[1.02]">
              {copy.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-silver-200/75 md:mt-5 md:text-lg md:leading-8">
              {copy.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--primary text-sm"
            >
              {copy.cta.quote}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--secondary hidden text-sm md:inline-flex"
            >
              {copy.cta.sample}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bp-glass-cta bp-glass-cta--secondary text-sm"
            >
              {copy.cta.whatsapp}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPageContent() {
  const { locale } = useI18n();
  const copy = aboutCommercialContent[locale];

  return (
    <div data-about-page className="overflow-hidden bg-[#020806]">
      <AboutHero copy={copy} locale={locale} />
      <AboutPositioning copy={copy} />
      <AboutSupply copy={copy} />
      <AboutRoadmap copy={copy} />
      <AboutFinalCta copy={copy} />
    </div>
  );
}

function AboutHero({
  copy,
  locale,
}: {
  copy: AboutCommercialCopy;
  locale: Locale;
}) {
  const isArabic = locale === "ar";

  return (
    <section
      data-gsap-section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden border-b border-white/10 bg-[#020806] px-4 pt-28 text-white sm:px-6 md:pt-32 lg:min-h-[760px] lg:px-[5%] 2xl:min-h-[820px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(22,200,95,0.14),transparent_28%),radial-gradient(circle_at_12%_54%,rgba(213,185,122,0.1),transparent_34%),linear-gradient(135deg,#020806_0%,#07110E_58%,#020806_100%)]" />
      <MoroccanPatternBackground density="medium" className="opacity-[0.11]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-72 bg-gradient-to-t from-[#020806] via-[#020806]/84 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-50">
        <AnimatedParticles />
      </div>

      <div className="relative z-[3] mx-auto grid min-w-0 max-w-[1500px] gap-8 pb-10 lg:min-h-[680px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:pb-0 2xl:min-h-[720px]">
        <div
          className={cn(
            "min-w-0 w-full max-w-[calc(100vw-2rem)] pt-4 sm:max-w-2xl lg:pt-0",
            isArabic && "text-right",
          )}
        >
          <div className="mb-7 h-0.5 w-12 bg-[#16C85F]" />
          <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#16C85F]">
            {copy.hero.eyebrow}
          </p>
          <h1 className="max-w-[12ch] break-words font-display text-[2.05rem] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:max-w-none sm:text-[3.45rem] lg:max-w-[12ch] lg:text-[4.6rem] xl:text-[5rem]">
            {copy.hero.title}
          </h1>
          <p className="mt-5 text-xl font-semibold leading-snug tracking-[-0.01em] text-white md:text-2xl">
            {copy.hero.kicker}
          </p>
          <p className="mt-4 max-w-[54ch] text-sm leading-7 text-[#B8C2BD] md:text-base md:leading-8">
            {copy.hero.description}
          </p>

          <CommercialHeroCtas
            quote={copy.hero.quote}
            sample={copy.hero.sample}
            whatsapp={copy.hero.whatsapp}
            isArabic={isArabic}
          />
        </div>

        <div
          data-gsap-card
          className="relative min-h-[390px] min-w-0 max-w-[calc(100vw-2rem)] overflow-hidden rounded-[0.65rem] border border-white/10 bg-[radial-gradient(circle_at_72%_18%,rgba(22,200,95,0.11),transparent_32%),linear-gradient(135deg,#020806,#050B09)] shadow-[0_42px_140px_rgba(0,0,0,0.5)] backdrop-blur-xl md:min-h-[520px] lg:max-w-none lg:min-h-[580px] 2xl:min-h-[620px]"
        >
          <div className="absolute inset-5 rounded-[0.5rem] bg-black/70 md:inset-7" />
          <Image
            src="/images/about-perlite-hands.jpeg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center opacity-[0.94]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,6,0.08)_0%,rgba(2,8,6,0.2)_50%,rgba(2,8,6,0.76)_100%)]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-[#020806]/58 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-perlite-50 backdrop-blur-md md:left-7 md:top-7">
            {copy.hero.visualLabel}
          </div>
          <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
            <h2 className="max-w-[16ch] break-words font-display text-[1.4rem] font-bold leading-snug tracking-[-0.015em] text-perlite-50 md:max-w-lg md:text-4xl">
              {copy.hero.visualTitle}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {copy.hero.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[0.75rem] border border-white/12 bg-[#020806]/62 p-4 backdrop-blur-md"
                >
                  <p className="font-display text-xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-silver-200/62">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPositioning({ copy }: { copy: AboutCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(22,200,95,0.13),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(213,185,122,0.1),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl" data-gsap-section-title>
          <SectionTitle
            eyebrow={copy.positioning.eyebrow}
            title={copy.positioning.title}
            description={copy.positioning.description}
          />
        </div>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {copy.positioning.features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...featureProps(feature)}
              index={index}
              className={index >= 3 ? "hidden md:block" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSupply({ copy }: { copy: AboutCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden bg-[#F5F1EA] px-4 py-14 text-[#07110E] sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#16C85F]/14 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start lg:gap-14">
        <div data-gsap-section-title className="max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#16A34A]">
            {copy.supply.eyebrow}
          </p>
          <h2 className="font-display text-[2.15rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#06110D] md:text-5xl">
            {copy.supply.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#20312B]/78 md:text-lg">
            {copy.supply.description}
          </p>
          <a
            href={contact.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bp-glass-cta bp-glass-cta--primary mt-7 text-sm"
          >
            {copy.supply.partnerCta}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5">
          <article
            data-gsap-card
            className="rounded-[0.55rem] border border-black/5 bg-white/82 p-6 shadow-[0_24px_80px_rgba(5,11,9,0.08)] backdrop-blur md:p-7"
          >
            <p className="font-display text-3xl font-bold text-[#16A34A]">
              {copy.supply.partnerTitle}
            </p>
            <p className="mt-4 text-base leading-8 text-[#20312B]/76">
              {copy.supply.partnerBody}
            </p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#20312B]/54">
              {contact.website}
            </p>
          </article>
          <div className="grid gap-5 md:grid-cols-3">
            {copy.supply.items.map((item, index) => (
              <article
                data-gsap-card
                key={item.title}
                className={cn(
                  "rounded-[0.55rem] border border-black/5 bg-white/72 p-6 shadow-[0_24px_80px_rgba(5,11,9,0.07)] backdrop-blur",
                  index >= 2 && "hidden md:block",
                )}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#16C85F]/12 text-sm font-bold text-[#129B4A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold leading-tight text-[#06110D]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#20312B]/72">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutRoadmap({ copy }: { copy: AboutCommercialCopy }) {
  return (
    <section
      data-gsap-section
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <MoroccanPatternBackground density="quiet" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,6,0.97),rgba(7,17,14,0.94)),radial-gradient(circle_at_78%_26%,rgba(22,200,95,0.12),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start lg:gap-14">
        <div data-gsap-section-title className="max-w-2xl">
          <SectionTitle
            eyebrow={copy.roadmap.eyebrow}
            title={copy.roadmap.title}
            description={copy.roadmap.description}
          />
        </div>
        <div className="grid min-w-0 gap-4 md:grid-cols-3">
          {copy.roadmap.items.map((item) => (
            <article
              data-gsap-card
              key={item.title}
              className="min-w-0 rounded-[0.55rem] border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl"
            >
              <p className="font-display text-3xl font-bold text-[#16C85F]">
                {item.metric}
              </p>
              <h3 className="mt-5 min-w-0 break-words font-display text-xl font-bold leading-tight text-perlite-50 [overflow-wrap:anywhere] md:text-[1.35rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-silver-200/70 md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutFinalCta({ copy }: { copy: AboutCommercialCopy }) {
  return (
    <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[0.65rem] border border-white/10 bg-[radial-gradient(circle_at_84%_18%,rgba(22,200,95,0.2),transparent_32%),linear-gradient(135deg,#020806,#07110E_52%,#050B09)] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.36)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,620px)] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-atlas-sand">
              {copy.cta.eyebrow}
            </p>
            <h2 className="max-w-3xl font-display text-[2rem] font-bold leading-[1.05] text-perlite-50 md:text-5xl md:leading-[1.02]">
              {copy.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-silver-200/75 md:mt-5 md:text-lg md:leading-8">
              {copy.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--primary text-sm"
            >
              {copy.cta.quote}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--secondary hidden text-sm md:inline-flex"
            >
              {copy.cta.sample}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bp-glass-cta bp-glass-cta--secondary text-sm"
            >
              {copy.cta.whatsapp}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.contactPage.header} actions="commercial" />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <SectionTitle
              eyebrow={t.contactPage.formIntro.eyebrow}
              title={t.contactPage.formIntro.title}
              description={t.contactPage.formIntro.description}
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="grid gap-5 self-start">
            <div className="rounded-[0.45rem] border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl">
              <h2 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                {t.contactPage.detailsHeading}
              </h2>
              <div className="mt-6 grid gap-4 text-sm text-silver-200/75">
                <ContactLinks whatsappLabel={t.contactPage.whatsapp} />
              </div>
            </div>

            <VisualPanel
              title={t.contactPage.mapTitle}
              caption={t.contactPage.mapCaption}
              variant="map"
              className="min-h-[300px]"
            />
          </aside>
        </div>
      </section>
    </>
  );
}

export function TechnicalCenterPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        eyebrow={t.product.specs.eyebrow}
        title={t.product.header.technicalCenterCta}
        description={t.product.specs.description}
      />

      <TechnicalProfileSection profile={t.product.technicalProfile} />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow={t.product.specs.eyebrow}
              title={t.product.specs.title}
              description={t.product.specs.description}
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={technicalDocuments.datasheet}
                target="_blank"
                rel="noopener noreferrer"
                className="bp-glass-cta bp-glass-cta--secondary w-full text-sm sm:w-fit"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                {t.product.specs.download}
              </a>
              <a
                href={technicalDocuments.msds}
                target="_blank"
                rel="noopener noreferrer"
                className="bp-glass-cta bp-glass-cta--secondary w-full text-sm sm:w-fit"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                {t.product.specs.msdsDownload}
              </a>
            </div>
          </div>
          <TechnicalSpecsTable specs={t.technicalSpecs} />
        </div>
      </section>

      <FeatureGrid
        eyebrow={t.product.techniqueTrust.eyebrow}
        title={t.product.techniqueTrust.title}
        description={t.product.techniqueTrust.description}
        features={t.product.techniqueTrust.features}
        columns="lg:grid-cols-3"
      />

      <QuoteCTA />
    </>
  );
}

export function AdminPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.admin.header} />
      <FeatureGrid features={t.admin.modules} title="" />
    </>
  );
}

export function ClientPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.client.header} />
      <FeatureGrid features={t.client.modules} title="" />
    </>
  );
}

type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  features: readonly FeatureLike[];
  columns?: string;
};

type TechnicalDataRow = {
  label: string;
  value: string;
  note?: string;
};

type TechnicalDataGroup = {
  title: string;
  description: string;
  rows: readonly TechnicalDataRow[];
};

type TechnicalProfileData = {
  eyebrow: string;
  title: string;
  description: string;
  groups: readonly TechnicalDataGroup[];
};

type DetailUseCase = {
  title: string;
  description: string;
  metric: string;
};

type SplitVisualSectionProps = {
  children: ReactNode;
  visualTitle: string;
  visualCaption: string;
  visualVariant?: VisualVariant;
  visualClassName?: string;
  className?: string;
};

function SplitVisualSection({
  children,
  visualTitle,
  visualCaption,
  visualVariant = "mineral",
  visualClassName,
  className,
}: SplitVisualSectionProps) {
  return (
    <section
      className={cn("px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20", className)}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="max-w-3xl">{children}</div>
        <VisualPanel
          title={visualTitle}
          caption={visualCaption}
          variant={visualVariant}
          className={visualClassName}
        />
      </div>
    </section>
  );
}

function TechnicalProfileSection({ profile }: { profile: TechnicalProfileData }) {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={profile.eyebrow}
          title={profile.title}
          description={profile.description}
        />
        <div className="mt-10 grid items-start gap-5 lg:grid-cols-3">
          {profile.groups.map((group) => (
            <TechnicalDataCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalDataCard({ group }: { group: TechnicalDataGroup }) {
  return (
    <article className="h-full overflow-hidden rounded-[0.45rem] border border-white/10 bg-basalt-900/70 shadow-glass backdrop-blur-xl">
      <div className="border-b border-white/10 bg-white/[0.045] p-5 md:p-6">
        <h3 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
          {group.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-silver-200/70 md:text-base">
          {group.description}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <tbody className="divide-y divide-white/10">
            {group.rows.map((row) => (
              <tr key={row.label} className="align-top transition hover:bg-white/[0.035]">
                <th
                  scope="row"
                  className="w-[42%] px-5 py-4 text-start font-semibold text-perlite-50"
                >
                  {row.label}
                </th>
                <td className="px-5 py-4 text-start">
                  <span className="block font-semibold text-silver-100">
                    {row.value}
                  </span>
                  {row.note ? (
                    <span className="mt-1 block text-xs leading-6 text-silver-200/55">
                      {row.note}
                    </span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function DetailUseSection({
  eyebrow,
  title,
  description,
  useCases,
  tone,
}: {
  eyebrow: string;
  title: string;
  description: string;
  useCases: readonly DetailUseCase[];
  tone: "emerald" | "sand";
}) {
  const accent =
    tone === "emerald" ? "text-agritech-emerald" : "text-atlas-sand";
  const border =
    tone === "emerald" ? "border-agritech-emerald/25" : "border-atlas-sand/25";

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className={cn(
                "h-full rounded-[0.45rem] border bg-white/[0.055] p-5 shadow-glass backdrop-blur-xl md:p-7",
                border,
              )}
            >
              <p className={cn("text-xs font-semibold uppercase tracking-[0.24em]", accent)}>
                {item.metric}
              </p>
              <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-silver-200/70 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonPoint({
  label,
  body,
  muted = false,
}: {
  label: string;
  body: string;
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[0.35rem] border px-4 py-4",
        muted
          ? "border-white/10 bg-basalt-950/45"
          : "border-agritech-emerald/25 bg-agritech-emerald/10",
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em]",
          muted ? "text-silver-200/45" : "text-agritech-emerald",
        )}
      >
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-silver-200/75 md:text-base">
        {body}
      </p>
    </div>
  );
}

function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
  columns = "xl:grid-cols-4",
}: FeatureGridProps) {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {title ? (
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        ) : null}
        <div
          className={cn(
            "grid items-stretch gap-5 md:grid-cols-2",
            title ? "mt-10" : "mt-0",
            columns,
          )}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...featureProps(feature)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactLinks({ whatsappLabel }: { whatsappLabel: string }) {
  return (
    <>
      {contact.emails.map((email) => (
        <a
          key={email}
          href={`mailto:${email}`}
          className="flex gap-3 transition hover:text-atlas-sand"
        >
          <MailIcon />
          {email}
        </a>
      ))}
      {contact.phones.map((phone) => (
        <a
          key={phone.number}
          href={`tel:${phone.number.replace(/[^\d+]/g, "")}`}
          className="flex gap-3 transition hover:text-atlas-sand"
        >
          <PhoneIcon />
          <span>
            <span className="block text-perlite-50/85">{phone.name}</span>
            <span>{phone.number}</span>
          </span>
        </a>
      ))}
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex gap-3 transition hover:text-atlas-sand"
      >
        <WhatsAppMiniIcon />
        {whatsappLabel}
      </a>
      <a
        href={contact.websiteUrl}
        target="_blank"
        rel="noreferrer"
        className="flex gap-3 transition hover:text-atlas-sand"
      >
        <WebsiteIcon />
        {contact.website}
      </a>
      <p className="flex gap-3">
        <MapIcon />
        <span>
          {contact.address}
          <br />
          <span className="text-silver-200/50">{contact.factory}</span>
        </span>
      </p>
    </>
  );
}

function MailIcon() {
  return <Mail aria-hidden="true" className="h-5 w-5 text-atlas-sand" />;
}

function PhoneIcon() {
  return <Phone aria-hidden="true" className="h-5 w-5 text-atlas-sand" />;
}

function MapIcon() {
  return <MapPin aria-hidden="true" className="h-5 w-5 text-atlas-sand" />;
}

function WebsiteIcon() {
  return <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-atlas-sand" />;
}

function WhatsAppMiniIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-agritech-emerald"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M16.03 3.2c-7.06 0-12.8 5.67-12.8 12.64 0 2.23.59 4.41 1.72 6.33L3.12 28.8l6.82-1.79a12.95 12.95 0 0 0 6.09 1.52c7.06 0 12.8-5.67 12.8-12.65S23.09 3.2 16.03 3.2Zm0 23.18c-1.94 0-3.84-.52-5.5-1.5l-.39-.23-4.04 1.06 1.08-3.89-.25-.4a10.38 10.38 0 0 1-1.57-5.58c0-5.79 4.79-10.5 10.67-10.5 5.89 0 10.68 4.71 10.68 10.5 0 5.8-4.79 10.54-10.68 10.54Zm5.86-7.88c-.32-.16-1.9-.93-2.2-1.03-.29-.11-.51-.16-.72.16-.21.31-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.57-.95-.84-1.6-1.88-1.79-2.2-.18-.31-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.72-1.72-.99-2.35-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.55.08-.84.39-.29.32-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.35 5.38 4.7.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.9-.77 2.17-1.51.27-.75.27-1.38.19-1.51-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}
