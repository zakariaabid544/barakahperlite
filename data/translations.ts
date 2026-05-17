import type { IconKey, Locale, ProductDetailKey, RouteKey } from "@/types/i18n";

type LocalizedMeta = Record<RouteKey, { title: string; description: string }>;

type FeatureTranslation = {
  title: string;
  description: string;
  icon: IconKey;
};

type ApplicationTranslation = FeatureTranslation & {
  href: RouteKey;
  accent: "emerald" | "sand" | "clay" | "silver";
};

type ProcessTranslation = {
  step: string;
  title: string;
  description: string;
};

type TechnicalSpecTranslation = {
  label: string;
  value: string;
  note: string;
};

type TechnicalDataGroupTranslation = {
  title: string;
  description: string;
  rows: TechnicalSpecTranslation[];
};

type ProductFactTranslation = {
  label: string;
  value: string;
  description: string;
  icon: IconKey;
};

type DetailUseCaseTranslation = {
  title: string;
  description: string;
  metric: string;
};

type ComparisonTranslation = {
  title: string;
  leftLabel: string;
  left: string;
  rightLabel: string;
  right: string;
};

type ProductDetailTranslation = {
  backLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    visualTitle: string;
    visualCaption: string;
  };
  technical: {
    eyebrow: string;
    title: string;
    description: string;
    points: FeatureTranslation[];
  };
  agriculture: {
    eyebrow: string;
    title: string;
    description: string;
    useCases: DetailUseCaseTranslation[];
  };
  industry: {
    eyebrow: string;
    title: string;
    description: string;
    useCases: DetailUseCaseTranslation[];
  };
  specs: {
    eyebrow: string;
    title: string;
    description: string;
    rows: TechnicalSpecTranslation[];
    cards: FeatureTranslation[];
  };
  comparisons: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ComparisonTranslation[];
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; body: string }>;
  };
  cta: {
    title: string;
    description: string;
  };
};

export const localeOptions: Array<{ code: Locale; label: string; name: string }> = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "en", label: "EN", name: "English" },
  { code: "nl", label: "NL", name: "Nederlands" },
];

export const defaultLocale: Locale = "fr";

const common = {
  brand: "Barakah Perlite",
  technicalQuote: "Devis technique",
  quoteRequest: "Demander un devis",
  productData: "Voir les données produit",
  visualBrand: "Barakah Perlite",
  technicalTableCaption:
    "Fiche technique de la perlite Barakah",
  technicalTableColumns: {
    parameter: "Paramètre",
    value: "Valeur",
    note: "Note",
  },
  placeholderVisualTodo:
    "Visuel institutionnel Barakah Perlite destiné aux présentations produit.",
  processSteps: [
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
  ] satisfies ProcessTranslation[],
};

const metaFr: LocalizedMeta = {
  "/": {
    title: "Perlite marocaine agricole et industrielle | Barakah Perlite",
    description:
      "Barakah Perlite transforme une ressource minérale naturelle en substrat premium pour agriculture, hydroponie, horticulture, construction, filtration et industrie au Maroc.",
  },
  "/produit": {
    title: "Produit perlite expansée | Barakah Perlite",
    description:
      "Découvrez la perlite expansée Barakah Perlite: roche volcanique naturelle, légère, stérile, inerte, pH neutre, excellente aération et rétention d’eau.",
  },
  "/agriculture": {
    title: "Perlite agricole et horticole | Barakah Perlite",
    description:
      "Perlite agricole au Maroc pour hydroponie, serres, pépinières, germination, horticulture et amélioration des sols.",
  },
  "/green-space": {
    title: "Perlite pour espaces verts | Barakah Perlite",
    description:
      "Perlite expansée Barakah pour jardins, pépinières, espaces verts, sols urbains, terrains sportifs et substrats paysagers.",
  },
  "/industrie": {
    title: "Perlite industrielle | Barakah Perlite",
    description:
      "Perlite industrielle au Maroc pour isolation, filtration, industrie chimique, haute température, absorption, cryogénie et granulats légers.",
  },
  "/a-propos": {
    title: "À propos | Barakah Perlite",
    description:
      "Barakah Perlite est une entreprise marocaine spécialisée dans la perlite naturelle pour agriculture, industrie, construction et filtration, avec une vision export durable.",
  },
  "/contact": {
    title: "Contact et demande de devis | Barakah Perlite",
    description:
      "Contactez Barakah Perlite pour une demande de devis perlite agricole, horticole, hydroponique ou industrielle au Maroc.",
  },
  "/privacy-policy": {
    title: "Politique de confidentialité | Barakah Perlite",
    description:
      "Politique de confidentialité du site barakahperlite.com: données de contact, demandes de devis, finalités, conservation, sécurité et droits utilisateurs.",
  },
  "/cookie-policy": {
    title: "Politique cookies | Barakah Perlite",
    description:
      "Politique cookies du site barakahperlite.com: cookies essentiels, mesure d’audience éventuelle, services tiers et contrôle par l’utilisateur.",
  },
  "/terms": {
    title: "Conditions générales | Barakah Perlite",
    description:
      "Conditions générales d’utilisation du site barakahperlite.com, informations produits, données techniques, demandes de devis et propriété intellectuelle.",
  },
  "/admin": {
    title: "Espace admin futur | Barakah Perlite",
    description:
      "Base du futur tableau de bord Barakah Perlite pour gestion des devis, catalogue produit, clients, CRM et contenus multilingues.",
  },
  "/admin/content": {
    title: "Prototype administration contenu | Barakah Perlite",
    description:
      "Prototype UI interne non fonctionnel pour future gestion de galerie, expériences, collaborations et contenus Barakah Perlite.",
  },
  "/client": {
    title: "Portail client futur | Barakah Perlite",
    description:
      "Base du futur portail client Barakah Perlite pour devis, commandes, fiches techniques, documents et support.",
  },
  "/portal/login": {
    title: "Portail client | Barakah Perlite",
    description:
      "Connexion sécurisée au portail client Barakah Perlite pour accéder aux espaces privés autorisés.",
  },
};

export const translations = {
  fr: {
    localeName: "Français",
    direction: "ltr",
    meta: metaFr,
    nav: {
      aria: "Navigation principale",
      mobileAria: "Navigation mobile",
      homeLabel: "Barakah Perlite - Accueil",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      language: "Langue",
      quoteShort: "Devis",
      items: [
        { label: "Produit", href: "/produit" },
        { label: "Agriculture", href: "/agriculture" },
        { label: "Green Space", href: "/green-space" },
        { label: "Industrie", href: "/industrie" },
        { label: "À propos", href: "/a-propos" },
        { label: "Contact", href: "/contact" },
      ] as Array<{ label: string; href: RouteKey }>,
    },
    common: {
      ...common,
      technicalTableCaption:
        "Fiche technique de la perlite Barakah",
      technicalTableColumns: {
        parameter: "Paramètre",
        value: "Valeur",
        note: "Note",
      },
      quoteRequest: "Demander un devis",
      productData: "Voir les données produit",
      technicalQuote: "Devis technique",
    },
    whatsapp: {
      aria: "Contacter Barakah Perlite sur WhatsApp",
    },
    footer: {
      description:
        "Entreprise marocaine spécialisée dans la production et la commercialisation de perlite pour l’agriculture, l’industrie, la construction et la filtration.",
      tagline: "Maroc · Agriculture · Industrie · Export",
      navigation: "Navigation",
      contact: "Contact",
      linkedin: "LinkedIn",
      copyright: "Copyright © 2026 Barakah Perlite. Tous droits réservés.",
      links: [
        { label: "Produit", href: "/produit" },
        { label: "Agriculture", href: "/agriculture" },
        { label: "Green Space", href: "/green-space" },
        { label: "Industrie", href: "/industrie" },
        { label: "Contact", href: "/contact" },
        { label: "Portail client", href: "/portal/login" },
        { label: "Politique de confidentialité", href: "/privacy-policy" },
        { label: "Politique cookies", href: "/cookie-policy" },
        { label: "Conditions générales", href: "/terms" },
      ] as Array<{ label: string; href: RouteKey }>,
    },
    legal: {
      updatedLabel: "Dernière mise à jour",
      updatedValue: "Mai 2026",
      reviewNotice:
        "Ce contenu présente les informations générales applicables au site Barakah Perlite.",
      privacy: {
        header: {
          eyebrow: "Politique de confidentialité",
          title: "Protection des données et demandes de contact.",
          description:
            "Cette politique explique comment Barakah Perlite peut traiter les informations transmises via le site barakahperlite.com.",
        },
        sections: [
          {
            title: "Qui sommes-nous",
            body:
              "Barakah Perlite est une entreprise marocaine active dans la perlite pour usages agricoles et industriels. Le site concerné par cette politique est barakahperlite.com. Pour toute question relative aux données personnelles, vous pouvez écrire à info@barakahperlite.com.",
          },
          {
            title: "Données pouvant être collectées",
            body:
              "Lorsque vous utilisez un formulaire de contact ou une demande de devis, nous pouvons recevoir les informations que vous choisissez de transmettre.",
            bullets: [
              "Nom et prénom",
              "Nom de l’entreprise",
              "Adresse email",
              "Numéro de téléphone",
              "Secteur d’activité",
              "Quantité ou besoin estimé",
              "Message et informations liées à votre demande",
            ],
          },
          {
            title: "Finalités du traitement",
            body:
              "Ces données peuvent être utilisées pour répondre à vos demandes, préparer une offre commerciale, orienter une recommandation technique, organiser un suivi et améliorer la qualité du service.",
          },
          {
            title: "Conservation des données",
            body:
              "Les données sont conservées pendant la durée nécessaire au traitement des demandes, au suivi commercial et au respect des obligations applicables.",
          },
          {
            title: "Vos droits",
            body:
              "Selon la réglementation applicable, vous pouvez disposer de droits d’accès, de rectification, d’opposition, d’effacement ou de limitation en contactant Barakah Perlite.",
          },
          {
            title: "Sécurité",
            body:
              "Barakah Perlite applique des mesures raisonnables pour protéger les informations reçues contre l’accès non autorisé, la perte ou l’usage abusif.",
          },
          {
            title: "Contact",
            body:
              "Pour toute question relative à cette politique, contactez Barakah Perlite à info@barakahperlite.com.",
          },
        ],
      },
      cookies: {
        header: {
          eyebrow: "Politique cookies",
          title: "Usage des cookies sur barakahperlite.com.",
          description:
            "Cette politique explique les catégories de cookies pouvant être utilisées sur le site Barakah Perlite.",
        },
        sections: [
          {
            title: "Qu’est-ce qu’un cookie ?",
            body:
              "Un cookie est un petit fichier déposé sur votre appareil par un site web afin de permettre certaines fonctions, mémoriser des préférences ou mesurer l’usage du site.",
          },
          {
            title: "Cookies essentiels",
            body:
              "Le site peut utiliser des cookies nécessaires au fonctionnement technique, à la sécurité, à la navigation et à la mémorisation de certains choix comme la langue sélectionnée.",
          },
          {
            title: "Cookies analytiques",
            body:
              "Le site peut utiliser une mesure d’audience limitée afin de comprendre les pages consultées, les téléchargements et les interactions importantes, dans une logique d’amélioration du service.",
          },
          {
            title: "Services tiers",
            body:
              "Certains services tiers nécessaires au fonctionnement du site, aux cartes, aux communications ou à la mesure d’audience peuvent appliquer leurs propres règles de confidentialité.",
          },
          {
            title: "Contrôle des cookies",
            body:
              "Vous pouvez contrôler ou supprimer les cookies depuis les paramètres de votre navigateur. Le blocage de cookies essentiels peut toutefois limiter certaines fonctions du site.",
          },
          {
            title: "Contact",
            body:
              "Pour toute question sur cette politique cookies, contactez Barakah Perlite à info@barakahperlite.com.",
          },
        ],
      },
      terms: {
        header: {
          eyebrow: "Conditions générales",
          title: "Conditions d’utilisation du site.",
          description:
            "Ces conditions encadrent l’utilisation du site barakahperlite.com et des informations publiées par Barakah Perlite.",
        },
        sections: [
          {
            title: "Utilisation du site",
            body:
              "L’accès au site barakahperlite.com implique une utilisation conforme aux lois applicables, sans tentative d’altération, d’extraction abusive ou d’usage portant atteinte au fonctionnement du site.",
          },
          {
            title: "Informations produits",
            body:
              "Les informations relatives à la perlite, aux applications et aux avantages sont fournies à titre informatif. Elles ne remplacent pas une validation technique adaptée au projet, au substrat, au lot ou au contexte d’usage.",
          },
          {
            title: "Données techniques",
            body:
              "Les tableaux, valeurs et fiches techniques affichés peuvent être indicatifs ou soumis à validation. Les caractéristiques définitives doivent être confirmées par une fiche technique officielle, un échantillon ou une offre écrite.",
          },
          {
            title: "Demandes de devis",
            body:
              "L’envoi d’un formulaire ou d’une demande de devis ne constitue pas une commande ferme. Toute offre commerciale, disponibilité, délai, prix ou condition logistique doit être confirmée par Barakah Perlite par écrit.",
          },
          {
            title: "Propriété intellectuelle",
            body:
              "Les contenus du site, y compris textes, visuels, identité graphique, logos et structure, sont protégés. Toute reproduction ou utilisation non autorisée est interdite sauf accord écrit préalable.",
          },
          {
            title: "Limitation de responsabilité",
            body:
              "Barakah Perlite s’efforce de publier des informations fiables, mais ne garantit pas l’absence d’erreurs ou d’interruptions. L’utilisateur reste responsable de vérifier l’adéquation des informations à son propre usage.",
          },
          {
            title: "Contact",
            body:
              "Pour toute question concernant ces conditions, contactez Barakah Perlite à info@barakahperlite.com.",
          },
        ],
      },
    },
    applications: [
      {
        title: "Agriculture",
        description:
          "Substrats horticoles, hydroponie, pépinières, serres et cultures hors-sol à haute précision.",
        icon: "sprout",
        href: "/agriculture",
        accent: "emerald",
      },
      {
        title: "Industrie",
        description:
          "Isolation, filtration, absorption, haute température et granulats légers pour cahiers des charges techniques.",
        icon: "factory",
        href: "/industrie",
        accent: "sand",
      },
      {
        title: "Espaces verts",
        description:
          "Jardinage professionnel, sols urbains, gazons, plantations et mélanges drainants pour racines plus aérées.",
        icon: "leaf",
        href: "/agriculture",
        accent: "clay",
      },
    ] satisfies ApplicationTranslation[],
    technicalSpecs: [
      {
        label: "Origine",
        value: "Roche volcanique naturelle",
        note: "Valeurs suivies par lot et par grade.",
      },
      {
        label: "pH",
        value: "6 – 8",
        note: "Profil neutre selon grade et application.",
      },
      {
        label: "Densité apparente",
        value: "60 – 100 kg/m³",
        note: "Plage indicative selon granulométrie et expansion.",
      },
      {
        label: "Conductivité thermique",
        value: "0.04 – 0.06 W/mK",
        note: "Performance isolante indicative.",
      },
      {
        label: "Granulométrie",
        value: "1–4 / 3–6 / <1.5 mm / 50–100 µm",
        note: "Grades adaptés aux usages agricoles, industriels et filtration.",
      },
      {
        label: "Stabilité",
        value: "Inerte, non inflammable, recyclable",
        note: "Matériau minéral durable et non réactif.",
      },
      {
        label: "Conditionnement",
        value: "Sacs 100 L, big bags 1 m³, vrac",
        note: "Formats logistiques adaptés selon la commande.",
      },
    ] satisfies TechnicalSpecTranslation[],
    home: {
      hero: {
        eyebrow: "Perlite marocaine · Agriculture de précision",
        title:
          "La perlite marocaine au service d’une agriculture plus performante",
        subtitle:
          "Un substrat naturel, léger et durable pour améliorer l’aération, la rétention d’eau et le développement racinaire.",
        ctaPrimary: "Demander un devis",
        ctaSecondary: "Découvrir la perlite",
        visualLabel: "Atlas mineral system",
        cardOneKicker: "Substrat",
        cardOneTitle: "neutre & inerte",
        cardTwoKicker: "Racines",
        cardTwoTitle: "air + eau",
      },
      stats: [
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
      ],
      why: {
        eyebrow: "Pourquoi la perlite",
        title: "Un substrat minéral qui transforme la précision agronomique.",
        description:
          "Barakah Perlite positionne la perlite comme un outil technique: elle améliore l’oxygénation, stabilise l’humidité et donne aux producteurs un support fiable pour cultures modernes.",
        features: [
          {
            title: "Air, eau, racines: le bon équilibre",
            description:
              "La structure poreuse de la perlite crée des zones d’air et d’humidité qui aident les racines à respirer, absorber et se développer sans compaction.",
            icon: "wind",
          },
          {
            title: "Pilotage précis de l’irrigation",
            description:
              "En serre, pépinière ou hydroponie, la perlite rend la gestion de l’eau plus lisible et facilite la régularité des cycles nutritifs.",
            icon: "droplets",
          },
          {
            title: "Support neutre et propre",
            description:
              "Inerte, stérile et sans apport chimique imprévu, elle permet aux producteurs de contrôler leur fertilisation avec plus de confiance.",
            icon: "shield",
          },
        ] satisfies FeatureTranslation[],
      },
      applications: {
        eyebrow: "Applications",
        title:
          "Agriculture, industrie et espaces verts.",
        description:
          "Du substrat horticole au jardinage professionnel, des formulations industrielles aux usages durables, la perlite ouvre des possibilités concrètes.",
      },
      origin: {
        visualTitle: "Origine marocaine, ambition internationale",
        visualCaption:
          "Une présence industrielle marocaine structurée autour de la matière minérale, de la qualité et de la fiabilité export.",
        eyebrow: "Savoir-faire local",
        title: "Taroudant comme base industrielle, le Maroc comme signature.",
        description:
          "Barakah Perlite naît d’un territoire minéral et agricole. L’objectif est clair: proposer une perlite fiable, documentée et prête pour les standards des marchés marocains, africains et internationaux.",
        cards: [
          {
            label: "Agriculture",
            body:
              "Une réponse aux besoins des serres, pépinières, exploitations hors-sol et systèmes d’irrigation précis.",
          },
          {
            label: "Industrie",
            body:
              "Un matériau technique pour isolation, filtration, absorption, applications thermiques et charges légères.",
          },
        ],
      },
      advantages: {
        eyebrow: "Avantages techniques",
        title: "Des performances simples à comprendre, difficiles à remplacer.",
        description:
          "La force de la perlite est son équilibre: légère mais stable, poreuse mais durable, neutre mais utile dans des cahiers des charges très différents.",
        features: [
          {
            title: "pH neutre",
            description:
              "Compatibilité élevée avec les programmes de fertigation et les cultures sensibles.",
            icon: "gauge",
          },
          {
            title: "Haute porosité",
            description:
              "Circulation d’air améliorée, drainage maîtrisé et réduction des risques d’asphyxie racinaire.",
            icon: "wind",
          },
          {
            title: "Sobriété hydrique",
            description:
              "Une meilleure disponibilité de l’eau dans la zone racinaire peut réduire les pertes selon le système.",
            icon: "droplets",
          },
          {
            title: "Matériau durable",
            description:
              "Minéral, recyclable selon l’usage et adapté aux exploitations qui cherchent des solutions plus propres.",
            icon: "recycle",
          },
        ] satisfies FeatureTranslation[],
      },
      process: {
        eyebrow: "Process & qualité",
        title: "Une chaîne étudiée pour la régularité des lots.",
        description:
          "La qualité du produit de Barakah Perlite repose sur la maîtrise de la matière première, de l’expansion, de la granulométrie et de la traçabilité.",
      },
      cta: {
        title: "Prêt à spécifier une perlite plus performante ?",
        description:
          "Parlez-nous de votre culture, de votre formulation ou de votre cahier des charges. Nous vous orientons vers le format et la granulométrie adaptés.",
      },
    },
    product: {
      header: {
        eyebrow: "Notre produit",
        title: "Perlite expansée marocaine pour agriculture, industrie et export.",
        description:
          "Un matériau naturel, léger et stable pour améliorer les substrats agricoles, répondre aux besoins industriels et sécuriser vos approvisionnements.",
        sampleCta: "Demander un échantillon",
        technicalCenterCta: "Centre technique",
        datasheetCta: "Fiche technique",
        msdsCta: "Fiche de sécurité MSDS",
      },
      what: {
        eyebrow: "Qu’est-ce que la perlite ?",
        title: "Une matière minérale naturelle.",
        description:
          "La perlite est une roche volcanique contenant de l’eau liée. Lorsqu’elle est chauffée, elle se dilate fortement et devient un matériau blanc, léger, propre et stable. Cette transformation crée des pores qui retiennent l’eau tout en maintenant l’air disponible.",
        facts: [
          {
            label: "Naturelle",
            value: "par expansion thermique",
            description:
              "Origine minérale, sans additif, transformée par expansion thermique.",
            icon: "mountain",
          },
          {
            label: "Stable",
            value: "inerte et non décomposable",
            description:
              "Comportement régulier en substrat, filtration, isolation et mélanges techniques.",
            icon: "shield",
          },
          {
            label: "Technique",
            value: "poreuse, légère, calibrée",
            description:
              "Structure blanche expansée pour piloter air, eau, masse et isolation.",
            icon: "gauge",
          },
        ] satisfies ProductFactTranslation[],
        moreLabel: "En savoir plus",
        visualTitle: "Perlite expansée",
        visualCaption:
          "Grains blancs expansés, texture minérale visible et granulométrie étudiée pour des usages agricoles et industriels.",
      },
      benefits: {
        eyebrow: "Bénéfices produit",
        title: "Un matériau technique, propre et polyvalent.",
        description:
          "La perlite Barakah est pensée pour les professionnels qui veulent une matière lisible, régulière et facile à intégrer dans leurs protocoles.",
        features: [
          {
            title: "Légèreté maîtrisée",
            description:
              "Une structure expansée qui réduit les charges, facilite le transport et améliore les mélanges.",
            icon: "feather",
          },
          {
            title: "Milieu stérile",
            description:
              "Un substrat propre qui limite les risques de pathogènes et stabilise le démarrage des cultures.",
            icon: "shield",
          },
          {
            title: "Inertie chimique",
            description:
              "La perlite ne libère pas d’éléments nutritifs imprévus et permet un pilotage précis de la fertigation.",
            icon: "beaker",
          },
          {
            title: "pH neutre",
            description:
              "Une base compatible avec une large variété d’espèces végétales, d’engrais et de formulations.",
            icon: "gauge",
          },
          {
            title: "Aération élevée",
            description:
              "La porosité ouverte augmente l’oxygénation racinaire et réduit la compaction des supports.",
            icon: "wind",
          },
          {
            title: "Rétention utile",
            description:
              "L’eau reste disponible dans la zone racinaire sans transformer le substrat en milieu saturé.",
            icon: "droplets",
          },
          {
            title: "Recyclable",
            description:
              "Un matériau minéral durable, réutilisable selon l’application et inscrit dans une logique sobre.",
            icon: "recycle",
          },
        ] satisfies FeatureTranslation[],
      },
      technicalProfile: {
        eyebrow: "Données matière",
        title: "Composition minérale, propriétés physiques et granulométrie.",
        description:
          "La perlite expansée Barakah est présentée comme une matière minérale technique: légère, poreuse, stable et adaptable aux usages agricoles, industriels et de filtration.",
        groups: [
          {
            title: "Composition indicative",
            description:
              "Matériau volcanique composé principalement de silice et d’alumine, avec une structure chimiquement stable.",
            rows: [
              {
                label: "Silice (SiO₂)",
                value: "74 – 76 %",
                note: "Composant minéral principal.",
              },
              {
                label: "Alumine (Al₂O₃)",
                value: "12 – 13 %",
                note: "Contribue à la stabilité du matériau.",
              },
              {
                label: "Oxydes alcalins (Na₂O, K₂O)",
                value: "6 – 8 %",
                note: "Présents naturellement dans la matrice volcanique.",
              },
              {
                label: "Oxyde de fer (Fe₂O₃)",
                value: "< 1.5 %",
                note: "Teneur indicative selon lot.",
              },
              {
                label: "Autres minéraux",
                value: "Traces",
                note: "À qualifier par analyse de lot.",
              },
            ] satisfies TechnicalSpecTranslation[],
          },
          {
            title: "Propriétés physiques",
            description:
              "L’expansion thermique à air chaud développe une structure blanche, légère, poreuse et résistante.",
            rows: [
              {
                label: "Densité apparente",
                value: "60 – 100 kg/m³",
                note: "Selon granulométrie et degré d’expansion.",
              },
              {
                label: "pH",
                value: "Neutre (6 – 8)",
                note: "Adapté aux substrats et formulations techniques.",
              },
              {
                label: "Conductivité thermique",
                value: "0.04 – 0.06 W/mK",
                note: "Plage indicative pour usages isolants.",
              },
              {
                label: "Comportement",
                value: "Inerte, durable, non inflammable",
                note: "Stable dans des environnements exigeants.",
              },
              {
                label: "Cycle matière",
                value: "Recyclable",
                note: "Contribue à des solutions plus légères et durables.",
              },
            ] satisfies TechnicalSpecTranslation[],
          },
          {
            title: "Granulométrie typique",
            description:
              "Le contrôle granulométrique permet d’adapter la performance au substrat, au drainage, à la construction ou à la filtration.",
            rows: [
              {
                label: "1 – 4 mm",
                value: "Substrats agricoles et horticulture",
                note: "Aération, drainage et rétention utile.",
              },
              {
                label: "3 – 6 mm",
                value: "Drainage et isolation",
                note: "Grades plus ouverts pour flux et allègement.",
              },
              {
                label: "< 1.5 mm",
                value: "Applications techniques et construction",
                note: "Formulations fines, mortiers et charges minérales.",
              },
              {
                label: "50 – 100 microns",
                value: "Filtration industrielle",
                note: "Grade à qualifier selon procédé.",
              },
            ] satisfies TechnicalSpecTranslation[],
          },
        ] satisfies TechnicalDataGroupTranslation[],
      },
      specs: {
        eyebrow: "Spécifications",
        title: "Fiche technique.",
        description:
          "Les valeurs seront consolidées avec les résultats officiels de laboratoire et les fiches Barakah Perlite.",
        download: "Fiche technique",
        msdsDownload: "Fiche de sécurité MSDS",
      },
      packaging: {
        visualTitle: "Conditionnement professionnel",
        visualCaption:
          "Formats professionnels conçus pour simplifier transport, stockage, manutention et préparation des commandes.",
        eyebrow: "Packaging",
        title: "Sacs, big bags et vrac prêts pour les circuits professionnels.",
        description:
          "Choisissez le format adapté à votre chantier, serre, pépinière ou ligne industrielle. Barakah prépare une réponse claire selon volume, usage et destination.",
        formatsTitle: "Formats disponibles",
        formats: ["Sacs 100 L", "Big bags 1 m³", "Vrac"],
        formatsNote:
          "Le conditionnement facilite le transport, le stockage et l’utilisation sur site selon les volumes commandés.",
      },
      techniqueTrust: {
        eyebrow: "Sécurité & stabilité",
        title: "Une matière naturellement sûre à manipuler.",
        description:
          "La perlite est un matériau minéral stable, non réactif et adapté aux environnements agricoles comme industriels.",
        features: [
          {
            title: "Non toxique et inodore",
            description:
              "Un matériau minéral sans odeur, conçu pour être intégré dans des usages professionnels encadrés.",
            icon: "shield",
          },
          {
            title: "Insoluble dans l’eau",
            description:
              "Sa stabilité limite les interactions indésirables avec les solutions nutritives ou procédés industriels.",
            icon: "droplets",
          },
          {
            title: "Faible impact logistique",
            description:
              "Sa légèreté réduit les charges transportées et facilite la manutention sur site.",
            icon: "feather",
          },
        ] satisfies FeatureTranslation[],
      },
    },
    productDetails: {
      naturelle: {
        backLabel: "Retour au produit",
        hero: {
          eyebrow: "Perlite naturelle",
          title: "Une roche volcanique transformée par expansion thermique, sans artifice.",
          description:
            "La perlite est une roche volcanique naturelle qui contient de l’eau liée. Par expansion thermique, cette eau se vaporise, le grain s’expanse et devient blanc, léger et poreux: une base minérale propre pour les substrats agricoles comme pour les formulations industrielles.",
          visualTitle: "Origine minérale contrôlée",
          visualCaption:
            "Une matière volcanique naturelle transformée en granulats blancs, légers et poreux par expansion thermique.",
        },
        technical: {
          eyebrow: "Explication technique",
          title: "La chaleur transforme la roche en structure utile.",
          description:
            "L’expansion thermique ouvre des microcavités dans le grain. Cette architecture donne à la perlite sa légèreté, sa blancheur, sa porosité et son comportement neutre dans des environnements très différents.",
          points: [
            {
              title: "Roche volcanique",
              description:
                "Matière minérale naturelle issue d’une roche vitreuse, sélectionnée pour sa capacité d’expansion.",
              icon: "mountain",
            },
            {
              title: "Expansion thermique",
              description:
                "La vapeur interne augmente le volume et crée un grain blanc beaucoup plus léger.",
              icon: "flame",
            },
            {
              title: "Porosité ouverte",
              description:
                "Les cavités facilitent l’air, l’eau, l’isolation et l’absorption selon la granulométrie.",
              icon: "sparkles",
            },
          ] satisfies FeatureTranslation[],
        },
        agriculture: {
          eyebrow: "Agriculture",
          title: "Une base minérale naturelle pour racines actives.",
          description:
            "En culture, la perlite améliore l’aération, le drainage, la rétention utile d’eau et l’oxygénation autour des racines. Elle aide à réduire la compaction et stabilise le rapport air/eau dans les substrats modernes.",
          useCases: [
            {
              title: "Hydroponie",
              description:
                "Support léger pour systèmes hors-sol où l’irrigation et la fertigation doivent rester très lisibles.",
              metric: "air + eau",
            },
            {
              title: "Serres et pépinières",
              description:
                "Composant de mélanges horticoles pour améliorer le drainage et limiter les zones saturées.",
              metric: "racines oxygénées",
            },
            {
              title: "Semis et amélioration des sols",
              description:
                "Réduit la compaction, facilite l’installation racinaire et améliore la manipulation des supports.",
              metric: "structure durable",
            },
          ],
        },
        industry: {
          eyebrow: "Industrie",
          title: "Une matière minérale polyvalente pour cahiers des charges techniques.",
          description:
            "La perlite expansée naturelle sert de charge légère, d’isolant, d’aide filtrante ou de matériau absorbant dans des environnements de construction, filtration, chimie, cryogénie et haute température.",
          useCases: [
            {
              title: "Isolation et construction",
              description:
                "Granulat léger pour améliorer la performance thermique et réduire la masse de formulations minérales.",
              metric: "faible densité",
            },
            {
              title: "Filtration",
              description:
                "Structure poreuse utile comme aide filtrante dans des procédés industriels exigeants.",
              metric: "surface poreuse",
            },
            {
              title: "Absorption et procédés",
              description:
                "Support minéral non toxique pour absorption, applications thermiques et formulations légères.",
              metric: "minéral propre",
            },
          ],
        },
        specs: {
          eyebrow: "Données indicatives",
          title: "Paramètres à qualifier selon l’usage final.",
          description:
            "Les valeurs ci-dessous structurent la future fiche technique Barakah Perlite. Elles seront remplacées par les résultats officiels selon granulométrie, lot et application.",
          rows: [
            {
              label: "Nature",
              value: "Par expansion thermique",
              note: "Matière minérale naturelle transformée par expansion thermique.",
            },
            {
              label: "Couleur après expansion",
              value: "Blanc à blanc cassé",
              note: "Indicateur visuel de l’expansion et de la propreté.",
            },
            {
              label: "Structure",
              value: "Légère et poreuse",
              note: "Contribue à l’aération, l’isolation et la rétention utile.",
            },
            {
              label: "Domaines",
              value: "Agriculture, filtration, isolation, industrie",
              note: "À préciser par grade et granulométrie.",
            },
          ] satisfies TechnicalSpecTranslation[],
          cards: [
            {
              title: "Sans additif",
              description:
                "La performance vient de l’expansion physique de la roche volcanique.",
              icon: "check",
            },
            {
              title: "Facile à manipuler",
              description:
                "Sa légèreté facilite les mélanges, le dosage et la logistique.",
              icon: "feather",
            },
            {
              title: "Multi-marchés",
              description:
                "Une même base minérale peut être calibrée pour agriculture ou industrie.",
              icon: "globe",
            },
          ] satisfies FeatureTranslation[],
        },
        comparisons: {
          eyebrow: "Comparaisons",
          title: "Ce que la naturalité change dans les formulations.",
          description:
            "La perlite n’est pas un intrant organique instable: c’est une matrice minérale neutre dont le rôle est physique et prévisible.",
          cards: [
            {
              title: "Perlite vs matière organique",
              leftLabel: "Organique",
              left: "Peut se décomposer, évoluer et tasser le support.",
              rightLabel: "Perlite",
              right: "Ne se décompose pas et conserve une fonction structurelle.",
            },
            {
              title: "Perlite vs sol compact",
              leftLabel: "Sol seul",
              left: "Risque de faible oxygénation et drainage irrégulier.",
              rightLabel: "Mélange avec perlite",
              right: "Améliore l’équilibre air/eau autour des racines.",
            },
            {
              title: "Perlite vs charge lourde",
              leftLabel: "Charge dense",
              left: "Augmente la masse et complique la manutention.",
              rightLabel: "Perlite expansée",
              right: "Allège les formulations tout en apportant de la porosité.",
            },
          ],
        },
        why: {
          eyebrow: "Pourquoi c’est important",
          title: "Une ressource naturelle, mais un comportement professionnel.",
          description:
            "Pour les producteurs, formulateurs et industriels, la valeur de la perlite vient de sa combinaison rare: origine minérale, neutralité, faible masse et porosité utile.",
          cards: [
            {
              title: "Confiance technique",
              body: "Le matériau est simple à expliquer aux équipes qualité et aux clients internationaux.",
            },
            {
              title: "Flexibilité d’usage",
              body: "Agriculture, isolation, filtration et absorption utilisent la même logique physique: un grain poreux et léger.",
            },
            {
              title: "Image export",
              body: "Une perlite marocaine bien caractérisée peut répondre à des attentes de régularité et de traçabilité.",
            },
          ],
        },
        cta: {
          title: "Spécifier une perlite naturelle adaptée à votre usage.",
          description:
            "Indiquez votre secteur, votre granulométrie cible et vos contraintes de conditionnement. Nous préparons une réponse technique structurée.",
        },
      },
      stable: {
        backLabel: "Retour au produit",
        hero: {
          eyebrow: "Perlite stable",
          title: "Inerte, stérile, non toxique et non décomposable.",
          description:
            "La perlite expansée offre une stabilité physique et chimique recherchée dans les substrats agricoles, les systèmes hydroponiques, la filtration, la construction et les applications industrielles où la matière ne doit pas perturber le procédé.",
          visualTitle: "Stabilité du grain expansé",
          visualCaption:
            "Grade calibré, comportement stable et lecture qualité adaptée aux usages professionnels.",
        },
        technical: {
          eyebrow: "Explication technique",
          title: "Un matériau neutre qui laisse le système faire son travail.",
          description:
            "La perlite est chimiquement stable, inerte, stérile après expansion, non toxique et non décomposable. Elle n’ajoute pas une variable biologique ou chimique inutile dans les protocoles de culture ou les formulations industrielles.",
          points: [
            {
              title: "Inertie chimique",
              description:
                "Ne libère pas de nutriments imprévus et facilite le pilotage précis de la fertigation.",
              icon: "beaker",
            },
            {
              title: "Milieu stérile",
              description:
                "L’expansion à haute température crée un support propre pour démarrage de cultures et usages exigeants.",
              icon: "shield",
            },
            {
              title: "Non décomposable",
              description:
                "La structure minérale ne se dégrade pas comme une fraction organique classique.",
              icon: "recycle",
            },
          ] satisfies FeatureTranslation[],
        },
        agriculture: {
          eyebrow: "Agriculture",
          title: "Plus de contrôle dans les substrats et l’irrigation.",
          description:
            "Dans les serres, pépinières, systèmes hydroponiques et mélanges horticoles, la stabilité de la perlite réduit l’incertitude: l’air, l’eau et les apports nutritifs restent plus faciles à gérer.",
          useCases: [
            {
              title: "Hydroponie contrôlée",
              description:
                "Support inerte pour dissocier la nutrition de la structure physique du substrat.",
              metric: "pilotage précis",
            },
            {
              title: "Pépinières",
              description:
                "Milieu propre pour jeunes plants, germination et enracinement dans des protocoles reproductibles.",
              metric: "démarrage propre",
            },
            {
              title: "Mélanges de substrats",
              description:
                "Réduit la compaction et stabilise l’équilibre air/eau sans se décomposer.",
              metric: "moins de tassement",
            },
          ],
        },
        industry: {
          eyebrow: "Industrie",
          title: "Une stabilité utile quand le procédé ne tolère pas l’imprévu.",
          description:
            "Dans l’isolation, la filtration, l’absorption et les granulats légers, la perlite agit comme une matrice minérale stable: légère, poreuse et compatible avec de nombreuses formulations.",
          useCases: [
            {
              title: "Filtration industrielle",
              description:
                "Aide filtrante minérale pour procédés où propreté et constance sont essentielles.",
              metric: "comportement régulier",
            },
            {
              title: "Construction",
              description:
                "Charge légère non décomposable pour mortiers, enduits et bétons allégés.",
              metric: "durabilité minérale",
            },
            {
              title: "Cryogénie et température",
              description:
                "Isolant minéral stable pour environnements thermiques exigeants selon grade.",
              metric: "isolation stable",
            },
          ],
        },
        specs: {
          eyebrow: "Données indicatives",
          title: "Stabilité à documenter par contrôle qualité.",
          description:
            "Ces paramètres structurent la future fiche technique pour les clients qui exigent répétabilité, traçabilité et compatibilité de procédé.",
          rows: [
            {
              label: "Comportement chimique",
              value: "Stable / inerte",
              note: "À documenter par fiches qualité et analyses de lot.",
            },
            {
              label: "Toxicité",
              value: "Non toxique",
              note: "Matériau minéral à utiliser selon consignes poussières et EPI.",
            },
            {
              label: "Décomposition",
              value: "Non décomposable",
              note: "Ne se transforme pas en matière organique dans le substrat.",
            },
            {
              label: "pH indicatif",
              value: "Neutre",
              note: "Plage qualifiée par grade et analyse officielle.",
            },
          ] satisfies TechnicalSpecTranslation[],
          cards: [
            {
              title: "Reproductible",
              description:
                "Aide à garder un comportement comparable d’un mélange à l’autre.",
              icon: "gauge",
            },
            {
              title: "Compatible",
              description:
                "S’intègre dans les programmes de fertigation et les formulations minérales.",
              icon: "flask",
            },
            {
              title: "Stockable",
              description:
                "Une matière minérale facile à conserver lorsqu’elle est protégée et conditionnée.",
              icon: "packageCheck",
            },
          ] satisfies FeatureTranslation[],
        },
        comparisons: {
          eyebrow: "Comparaisons",
          title: "Pourquoi la stabilité réduit les risques opérationnels.",
          description:
            "Un matériau stable aide les exploitations et les industriels à limiter les variables parasites dans leurs systèmes.",
          cards: [
            {
              title: "Perlite vs supports organiques",
              leftLabel: "Organique",
              left: "Peut évoluer, fermenter ou se compacter avec le temps.",
              rightLabel: "Perlite",
              right: "Reste minérale, inerte et structurelle.",
            },
            {
              title: "Perlite vs substrat mal drainé",
              leftLabel: "Drainage faible",
              left: "Risque d’asphyxie racinaire et d’irrigation difficile.",
              rightLabel: "Perlite stable",
              right: "Maintient des vides d’air et limite la compaction.",
            },
            {
              title: "Perlite vs charge réactive",
              leftLabel: "Charge réactive",
              left: "Peut modifier le procédé ou la formulation.",
              rightLabel: "Charge inerte",
              right: "Apporte masse réduite et porosité sans perturber le système.",
            },
          ],
        },
        why: {
          eyebrow: "Pourquoi c’est important",
          title: "La stabilité crée de la confiance industrielle.",
          description:
            "Quand les volumes augmentent, les clients veulent une matière prévisible. La perlite répond à cette attente par un rôle physique clair et une compatibilité large.",
          cards: [
            {
              title: "Moins d’incertitude",
              body: "Les producteurs pilotent mieux irrigation, oxygène et nutrition.",
            },
            {
              title: "Procédés plus lisibles",
              body: "Les industriels intègrent une charge légère sans ajouter de variable active non souhaitée.",
            },
            {
              title: "Qualité export",
              body: "La stabilité facilite les fiches techniques, les audits qualité et les contrats récurrents.",
            },
          ],
        },
        cta: {
          title: "Besoin d’une perlite stable pour votre formulation ?",
          description:
            "Envoyez votre application, vos contraintes de pH, granulométrie, densité et conditionnement. Nous préparons une base de spécification.",
        },
      },
      technique: {
        backLabel: "Retour au produit",
        hero: {
          eyebrow: "Perlite technique",
          title: "Légèreté, porosité et calibration pour usages exigeants.",
          description:
            "La valeur technique de la perlite expansée vient de sa structure blanche, légère et hautement poreuse. Elle améliore l’aération, le drainage, la rétention d’eau et l’oxygénation racinaire, tout en servant l’isolation, la filtration, la cryogénie, l’absorption et les granulats légers.",
          visualTitle: "Granulométrie et porosité",
          visualCaption:
            "Différentes granulométries permettent d’ajuster aération, drainage, filtration, isolation et légèreté.",
        },
        technical: {
          eyebrow: "Explication technique",
          title: "La structure du grain pilote les performances.",
          description:
            "Après expansion, chaque grain agit comme une microstructure poreuse. Selon la granulométrie, il peut favoriser l’air dans un substrat, retenir une partie de l’eau utile, alléger une formulation ou contribuer à l’isolation thermique.",
          points: [
            {
              title: "Très légère",
              description:
                "Faible densité apparente pour réduire la masse et faciliter la manutention.",
              icon: "feather",
            },
            {
              title: "Hautement poreuse",
              description:
                "Réseau de cavités utile pour l’air, l’eau, la filtration et l’isolation.",
              icon: "wind",
            },
            {
              title: "Calibrable",
              description:
                "Granulométries adaptées aux semis, substrats, mélanges industriels et aides filtrantes.",
              icon: "barChart",
            },
          ] satisfies FeatureTranslation[],
        },
        agriculture: {
          eyebrow: "Agriculture",
          title: "Une architecture air/eau au service des racines.",
          description:
            "En hydroponie, serres, pépinières, germination et amélioration des sols, la perlite aide à maintenir un environnement racinaire oxygéné, drainant et moins compact.",
          useCases: [
            {
              title: "Substrats de serre",
              description:
                "Améliore la structure des mélanges et facilite une irrigation plus régulière.",
              metric: "équilibre air/eau",
            },
            {
              title: "Germination",
              description:
                "Milieu léger et propre pour favoriser l’installation des jeunes racines.",
              metric: "support fin",
            },
            {
              title: "Amélioration du sol",
              description:
                "Réduit la compaction et crée des chemins d’air et d’eau autour du système racinaire.",
              metric: "sol plus respirant",
            },
          ],
        },
        industry: {
          eyebrow: "Industrie",
          title: "Une porosité utile au-delà de l’agriculture.",
          description:
            "Les mêmes propriétés physiques expliquent les usages industriels: isolation thermique, construction, filtration, applications haute température, cryogénie, absorption et granulats légers.",
          useCases: [
            {
              title: "Isolation thermique",
              description:
                "Grain expansé léger pour systèmes d’isolation, remplissages et formulations minérales.",
              metric: "conductivité réduite",
            },
            {
              title: "Filtration et absorption",
              description:
                "Porosité et surface du grain adaptées aux procédés de séparation et d’absorption.",
              metric: "microstructure active",
            },
            {
              title: "Granulats légers",
              description:
                "Allège mortiers, enduits et bétons techniques tout en conservant une base minérale.",
              metric: "masse réduite",
            },
          ],
        },
        specs: {
          eyebrow: "Données indicatives",
          title: "La granulométrie détermine l’usage.",
          description:
            "Les fiches futures devront relier chaque grade à une plage granulométrique, une densité apparente et des performances attendues.",
          rows: [
            {
              label: "Densité apparente",
              value: "60 – 120 kg/m³",
              note: "Selon expansion et granulométrie.",
            },
            {
              label: "Granulométrie",
              value: "0-1 / 1-3 / 3-6 mm",
              note: "Grades indicatifs adaptés à la production.",
            },
            {
              label: "Fonctions clés",
              value: "Aération, drainage, rétention, isolation",
              note: "Fonction dominante selon grade.",
            },
            {
              label: "Formats",
              value: "Sacs, big bags, vrac",
              note: "préciser poids, palettes et fiches PDF.",
            },
          ] satisfies TechnicalSpecTranslation[],
          cards: [
            {
              title: "Air racinaire",
              description:
                "La porosité maintient des espaces d’air autour des racines.",
              icon: "wind",
            },
            {
              title: "Rétention utile",
              description:
                "Une partie de l’eau reste disponible sans saturer le support.",
              icon: "droplets",
            },
            {
              title: "Isolation légère",
              description:
                "Le grain expansé réduit la masse et contribue à l’isolation thermique.",
              icon: "thermometer",
            },
          ] satisfies FeatureTranslation[],
        },
        comparisons: {
          eyebrow: "Comparaisons",
          title: "La performance vient du bon grade au bon endroit.",
          description:
            "La perlite technique doit être pensée comme un composant calibré, pas comme une poudre générique.",
          cards: [
            {
              title: "Perlite fine vs grosse",
              leftLabel: "Fine",
              left: "Utile pour semis, mélanges fins et certaines filtrations.",
              rightLabel: "Grosse",
              right: "Apporte plus de macroporosité, drainage et légèreté.",
            },
            {
              title: "Perlite vs sol dense",
              leftLabel: "Sol dense",
              left: "Peut retenir trop d’eau et limiter l’oxygène.",
              rightLabel: "Perlite en mélange",
              right: "Améliore la respiration et la distribution de l’eau.",
            },
            {
              title: "Perlite vs agrégat lourd",
              leftLabel: "Agrégat lourd",
              left: "Augmente la charge et réduit l’efficacité logistique.",
              rightLabel: "Agrégat léger",
              right: "Allège la formulation et facilite la manutention.",
            },
          ],
        },
        why: {
          eyebrow: "Pourquoi c’est important",
          title: "Une matière technique bien spécifiée vend mieux.",
          description:
            "Pour convaincre des exploitations, bureaux d’études, industriels et distributeurs, Barakah Perlite doit relier chaque grade à un bénéfice mesurable et à un usage clair.",
          cards: [
            {
              title: "Décision plus rapide",
              body: "Les clients comprennent quel grade demander et pourquoi.",
            },
            {
              title: "Moins d’erreurs d’usage",
              body: "La bonne granulométrie évite les mélanges trop drainants, trop fins ou trop lourds.",
            },
            {
              title: "Positionnement premium",
              body: "La donnée technique transforme une commodité minérale en solution professionnelle.",
            },
          ],
        },
        cta: {
          title: "Construisons la fiche technique adaptée à votre usage.",
          description:
            "Décrivez votre application agricole ou industrielle. Nous vous aidons à choisir granulométrie, format et données à documenter.",
        },
      },
    } satisfies Record<ProductDetailKey, ProductDetailTranslation>,
    agriculture: {
      header: {
        eyebrow: "Agriculture",
        title:
          "Un substrat agritech pour serres, hydroponie et cultures performantes.",
        description:
          "Barakah Perlite aide les producteurs à construire des supports plus légers, plus respirants et mieux adaptés à l’irrigation moderne.",
      },
      intro: {
        visualTitle: "Serres & cultures hors-sol",
        visualCaption:
          "Substrats modernes pour serres, hydroponie, pépinières et cultures à irrigation contrôlée.",
        eyebrow: "Usages agricoles",
        title:
          "La perlite donne de la structure aux systèmes de culture modernes.",
        description:
          "Hydroponie, pépinière, maraîchage sous serre ou mélanges horticoles: la perlite Barakah permet de moduler drainage, air et rétention selon l’objectif du producteur.",
        checklist: [
          "Hydroponie et fertigation",
          "Serres maraîchères",
          "Pépinières et jeunes plants",
          "Amélioration des sols lourds",
          "Germination et bouturage",
          "Horticulture professionnelle",
        ],
      },
      useCases: {
        eyebrow: "Cas d’usage",
        title: "Applications agricoles: substrat, amendement et mélanges.",
        description:
          "En agriculture, la perlite améliore la structure du sol et des substrats: aération racinaire, drainage, rétention d’eau équilibrée et support stable pour cultures modernes.",
        features: [
          {
            title: "Hydroponie",
            description:
              "Support minéral propre pour cultures hydroponiques, systèmes irrigués et cycles nutritifs contrôlés.",
            icon: "droplets",
          },
          {
            title: "Serres",
            description:
              "Substrat léger pour cultures sous abri, avec meilleur drainage et oxygénation des racines.",
            icon: "leaf",
          },
          {
            title: "Pépinières",
            description:
              "Favorise l’enracinement rapide et limite la compaction pendant les phases sensibles.",
            icon: "sprout",
          },
          {
            title: "Amélioration des sols",
            description:
              "Allège les sols lourds, réduit la compaction et améliore la gestion de l’humidité.",
            icon: "mountain",
          },
          {
            title: "Germination",
            description:
              "Structure fine et stable pour une levée homogène des semences et jeunes plants.",
            icon: "shield",
          },
          {
            title: "Mélanges de substrats",
            description:
              "Composant stable pour mélanges premium: fleurs, fruits rouges, aromatiques et ornemental.",
            icon: "flask",
          },
        ] satisfies FeatureTranslation[],
      },
      benefits: {
        eyebrow: "Bénéfices producteurs",
        title: "Des cultures plus lisibles, des racines mieux servies.",
        description:
          "Dans un système bien piloté, la perlite devient un levier de régularité: irrigation plus propre, enracinement plus sain, support plus stable.",
        features: [
          {
            title: "Racines plus actives",
            description:
              "Un meilleur accès à l’oxygène favorise la vigueur racinaire et accélère les phases de reprise.",
            icon: "sprout",
          },
          {
            title: "Moins de compaction",
            description:
              "La structure minérale garde le mélange plus ouvert, même sous cycles d’irrigation répétés.",
            icon: "wind",
          },
          {
            title: "Irrigation plus efficace",
            description:
              "La perlite retient l’humidité utile tout en évacuant l’excès d’eau, ce qui réduit le stress hydrique.",
            icon: "droplets",
          },
          {
            title: "Oxygénation régulière",
            description:
              "Un substrat plus respirant réduit les conditions favorables aux stress racinaires.",
            icon: "leaf",
          },
        ] satisfies FeatureTranslation[],
      },
      comparisons: {
        eyebrow: "Comparaisons",
        title: "Choisir la perlite pour la bonne raison.",
        description:
          "La perlite n’est pas une promesse magique: c’est un matériau physique qui améliore le comportement d’un substrat quand il est bien dosé.",
        cards: [
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
        ],
      },
      cta: {
        title:
          "Serres, fermes et pépinières: demandez une recommandation de granulométrie.",
        description:
          "Indiquez votre culture, votre système d’irrigation, vos volumes et vos objectifs. Barakah Perlite préparera une réponse orientée usage, pas seulement un prix au sac.",
      },
    },
    industry: {
      header: {
        eyebrow: "Industrie",
        title: "Une matière minérale légère pour cahiers des charges techniques.",
        description:
          "Construction, filtration, chimie, absorption ou cryogénie: la perlite expansée offre un profil rare, à la fois léger, inerte, isolant et poreux.",
      },
      intro: {
        eyebrow: "Applications industrielles",
        title:
          "Un matériau discret, mais essentiel dans des systèmes exigeants.",
        description:
          "La valeur industrielle de la perlite vient de sa combinaison: faible densité, stabilité, porosité, isolation et compatibilité avec de nombreuses matrices.",
        checklist: [
          "Isolation thermique et acoustique",
          "Aide filtrante pour liquides industriels",
          "Matériaux réfractaires et haute température",
          "Absorption d’huiles et produits chimiques",
          "Isolation cryogénique",
          "Granulats légers et formulations minérales",
        ],
        visualTitle: "Perlite pour systèmes industriels",
        visualCaption:
          "Une matière légère et stable pour l’isolation, la filtration, les mélanges techniques et les applications de construction.",
      },
      domains: {
        eyebrow: "Domaines",
        title: "Sept usages industriels, une même logique de performance.",
        description:
          "Sa structure poreuse, sa légèreté et sa stabilité chimique permettent de répondre à des cahiers des charges industriels exigeants.",
        features: [
          {
            title: "Isolation construction",
            description:
              "Remplissages, mortiers techniques et bétons légers pour améliorer le confort thermique et acoustique.",
            icon: "building",
          },
          {
            title: "Filtration",
            description:
              "Aide filtrante minérale pour clarifier liquides, huiles et flux industriels.",
            icon: "waves",
          },
          {
            title: "Industrie chimique",
            description:
              "Support inerte pour formulations, charges techniques et procédés nécessitant stabilité.",
            icon: "beaker",
          },
          {
            title: "Haute température",
            description:
              "Matériaux techniques haute température, composants réfractaires et protections thermiques.",
            icon: "thermometer",
          },
          {
            title: "Absorption",
            description:
              "Granulat poreux pour absorber huiles, liquides et déversements industriels.",
            icon: "packageCheck",
          },
          {
            title: "Cryogénie",
            description:
              "Isolation de réservoirs et environnements très basse température grâce à sa structure légère.",
            icon: "snowflake",
          },
          {
            title: "Granulats légers",
            description:
              "Allègement de formulations minérales, mortiers, panneaux et systèmes techniques.",
            icon: "boxes",
          },
          {
            title: "Vision export",
            description:
              "Positionnement qualité pour partenaires industriels au Maroc, en Afrique et en Europe.",
            icon: "globe",
          },
        ] satisfies FeatureTranslation[],
      },
      technical: {
        eyebrow: "Approche technique",
        title: "Les bonnes données avant la bonne commande.",
        description:
          "L’offre industrielle devra préciser granulométrie, densité, humidité, pureté, conductivité thermique, conditionnement, transport et documentation qualité.",
        cta: "Parler à l’équipe",
      },
      cta: {
        title: "Vous avez un cahier des charges industriel ?",
        description:
          "Envoyez vos contraintes: granulométrie, densité, volume, pays de livraison, usage final et exigences qualité. L’équipe préparera une réponse technique claire.",
      },
    },
    about: {
      header: {
        eyebrow: "À propos",
        title:
          "Une marque marocaine bâtie pour inspirer confiance aux marchés techniques.",
        description:
          "Barakah Perlite veut faire passer la perlite marocaine d’un produit minéral à une solution professionnelle documentée, fiable et export-ready.",
      },
      story: {
        eyebrow: "Histoire de marque",
        title: "Du territoire minéral marocain vers une industrie de confiance.",
        description:
          "Barakah Perlite est une entreprise marocaine spécialisée dans la production et la commercialisation de perlite. Son rôle est de fournir aux secteurs agricoles et industriels une matière stable, propre et performante, avec une qualité lisible et une relation commerciale sérieuse.",
        body:
          "L’ambition est simple: offrir aux producteurs, paysagistes, distributeurs et industriels un partenaire marocain fiable, réactif et capable d’accompagner les demandes locales comme export.",
        visualTitle: "Équipe, usine et matière première",
        visualCaption:
          "Une organisation construite autour du site industriel, de la matière première, du contrôle qualité et de la documentation technique.",
      },
      values: {
        eyebrow: "Engagements",
        title: "Qualité, fiabilité, durabilité: les trois preuves à construire.",
        description:
          "Le site prépare une présence internationale où chaque promesse pourra être appuyée par des fiches techniques, photos, certifications, analyses et processus.",
        features: [
          {
            title: "Ressource naturelle",
            description:
              "Une matière d’origine volcanique valorisée avec une approche technique et responsable.",
            icon: "mountain",
          },
          {
            title: "Qualité fiable",
            description:
              "Une ambition de régularité des lots, de traçabilité et de documentation claire pour les clients.",
            icon: "shield",
          },
          {
            title: "Agriculture durable",
            description:
              "Des substrats qui contribuent à mieux gérer l’eau, l’air et les racines dans les cultures modernes.",
            icon: "leaf",
          },
          {
            title: "Vision export",
            description:
              "Un positionnement marocain prêt à dialoguer avec les marchés africains, européens et internationaux.",
            icon: "globe",
          },
        ] satisfies FeatureTranslation[],
      },
      focusCards: [
        {
          title: "Agriculture",
          body:
            "Servir les producteurs, serres, pépinières et distributeurs avec un substrat naturel plus technique.",
        },
        {
          title: "Industrie",
          body:
            "Répondre aux usages isolation, filtration, absorption et haute température avec une donnée produit claire.",
        },
        {
          title: "Durabilité",
          body:
            "Valoriser une ressource minérale durable et accompagner les clients vers des solutions plus sobres.",
        },
      ],
    },
    contactPage: {
      header: {
        eyebrow: "Contact",
        title: "Demander un devis ou une recommandation technique.",
        description:
          "Indiquez votre usage, votre secteur, vos volumes et votre destination. L’équipe Barakah Perlite vous répond avec une orientation claire.",
      },
      formIntro: {
        eyebrow: "Formulaire professionnel",
        title: "Parlez-nous de votre besoin.",
        description:
          "Indiquez votre secteur, la quantité souhaitée, le format recherché et le pays de livraison. Nous vous orientons rapidement vers la bonne solution.",
      },
      detailsHeading: "Coordonnées",
      whatsapp: "WhatsApp commercial",
      mapTitle: "Carte & accès",
      mapCaption:
        "Bureau : N°5 ET.3 Imm. El Khiati, Avenue Hassan II, Taroudant. Projet Usine : Zone industrielle Ahl Rmel, Oulad Teima, Taroudant.",
      form: {
        name: "Nom",
        company: "Entreprise",
        phone: "Téléphone",
        email: "Email",
        sector: "Secteur",
        quantity: "Quantité souhaitée",
        message: "Message",
        requiredMark: "*",
        sectorPlaceholder: "Sélectionner",
        quantityPlaceholder: "Ex: 10 tonnes, 500 sacs, 2 big bags",
        messagePlaceholder:
          "Décrivez votre application, la granulométrie recherchée, votre pays de livraison ou vos contraintes techniques.",
        note: "Réponse commerciale sous 24-48h ouvrées après validation interne.",
        submit: "Envoyer la demande",
        loading: "Envoi...",
        success: "Demande reçue",
        error:
          "Impossible d’envoyer la demande pour le moment. Essayez WhatsApp ou email.",
        errors: {
          name: "Nom requis.",
          email: "Email requis.",
          invalidEmail: "Email invalide.",
          phone: "Téléphone requis.",
          sector: "Secteur requis.",
          message: "Message requis.",
        },
        sectors: [
          "Agriculture",
          "Industrie",
          "Construction",
          "Filtration",
          "Distribution / export",
        ],
      },
    },
    gallery: {
      header: {
        eyebrow: "Galerie",
        title: "Une bibliothèque visuelle prête pour les preuves terrain.",
        description:
          "Un espace premium pour présenter les futures photos Barakah Perlite: matière, serres, usine, conditionnements et applications industrielles avec une lecture claire par catégorie.",
      },
      categories: ["Agriculture", "Industrie", "Produit", "Usine"],
      items: [
        {
          category: "Agriculture",
          title: "Racines en substrat perlite",
          caption:
            "Applications en serres, hydroponie et pépinières pour améliorer l’équilibre air/eau autour des racines.",
        },
        {
          category: "Produit",
          title: "Granulats blancs calibrés",
          caption:
            "Granulats expansés à structure poreuse pour substrats, mélanges techniques et applications industrielles.",
        },
        {
          category: "Industrie",
          title: "Applications techniques",
          caption:
            "Isolation, filtration, absorption et granulats légers dans des environnements techniques exigeants.",
        },
        {
          category: "Usine",
          title: "Chaîne de transformation",
          caption:
            "Transformation, contrôle qualité, stockage et conditionnement pensés pour les clients professionnels.",
        },
        {
          category: "Agriculture",
          title: "Essais et résultats terrain",
          caption:
            "Suivi du développement racinaire, des protocoles d’irrigation et des résultats terrain.",
        },
        {
          category: "Produit",
          title: "Conditionnements export",
          caption:
            "Sacs, big bags, palettes et marquage produit pour les circuits agricoles, industriels et export.",
        },
      ],
      noteTitle: "Photothèque professionnelle",
      noteBody:
        "Les emplacements sont prêts pour des images optimisées, légendes validées, tags SEO et contenus multilingues.",
    },
    experience: {
      header: {
        eyebrow: "Expérience",
        title: "Des preuves terrain pour accélérer la confiance.",
        description:
          "Une page pensée pour présenter collaborations, essais agricoles, retours clients et applications industrielles de manière structurée et crédible pour des acheteurs internationaux.",
      },
      cards: [
        {
          kicker: "Collaborations",
          title: "Partenaires agricoles et industriels",
          body:
            "ajouter les collaborations autorisées avec exploitations, distributeurs, laboratoires, bureaux d’étude ou industriels.",
          metric: "réseau",
        },
        {
          kicker: "Résultats terrain",
          title: "Suivi des cultures et des racines",
          body:
            "intégrer mesures d’aération, irrigation, compaction et développement racinaire issues d’essais réels.",
          metric: "preuves",
        },
        {
          kicker: "Clients",
          title: "Histoires d’usage vérifiables",
          body:
            "préparer des cas clients validés avec secteur, volume, problématique et résultat observé.",
          metric: "confiance",
        },
        {
          kicker: "Essais agricoles",
          title: "Hydroponie, serres et pépinières",
          body:
            "documenter protocoles de culture, substrats mélangés, germination et efficacité d’irrigation.",
          metric: "agritech",
        },
        {
          kicker: "Industrie",
          title: "Isolation, filtration et absorption",
          body:
            "ajouter applications industrielles qualifiées avec contraintes techniques, grades et conditionnements.",
          metric: "technique",
        },
      ],
    },
    adminContent: {
      eyebrow: "Prototype interne",
      title: "Admin contenu Barakah Perlite.",
      description:
        "Interface non fonctionnelle pour cadrer la future gestion de contenus. Aucun accès réel, aucune modification et aucune donnée sensible ne sont connectés.",
      securityNote:
        "Prototype visuel uniquement: la future version devra être protégée côté serveur avant toute mise en production.",
      login: {
        title: "Connexion mockup",
        email: "Email administrateur",
        password: "Mot de passe",
        button: "Connexion désactivée",
      },
      dashboard: {
        title: "Dashboard contenu",
        stats: ["Images galerie", "Légendes", "Expériences", "Collaborations"],
      },
      managers: [
        {
          title: "Gestion images galerie",
          description:
            "Mockup pour importer, classer et valider les futures images Agriculture, Industrie, Produit et Usine.",
          items: ["Upload images", "Catégories", "Statut publication"],
        },
        {
          title: "Gestion des légendes",
          description:
            "Mockup pour préparer légendes multilingues, descriptions SEO et textes courts.",
          items: ["FR / EN / AR", "SEO image", "Validation contenu"],
        },
        {
          title: "Gestion expériences",
          description:
            "Mockup pour structurer essais terrain, résultats clients et applications techniques.",
          items: ["Essais agricoles", "Cas clients", "Applications industrielles"],
        },
        {
          title: "Gestion collaborations",
          description:
            "Mockup pour préparer partenaires, statuts d’autorisation et preuves publiables.",
          items: ["Partenaires", "Autorisations", "Documents"],
        },
      ],
      todos: [
        "authentification réelle côté serveur",
        "middleware de protection",
        "base de données",
        "stockage upload images",
        "autorisation rôle admin",
        "protection API",
        "CRUD réel",
      ],
    },
    admin: {
      header: {
        eyebrow: "Admin",
        title: "Tableau de bord Barakah Perlite.",
        description:
          "Base prête pour la future application: devis, produits, contenus, CRM et administration multilingue.",
      },
      modules: [
        {
          title: "Gestion devis",
          description:
            "connecter formulaires, pipeline commercial, statuts, notifications et export CRM.",
          icon: "fileText",
        },
        {
          title: "Catalogue produit",
          description:
            "gérer granulométries, fiches PDF, conditionnements, stocks et visuels.",
          icon: "barChart",
        },
        {
          title: "Accès sécurisé",
          description:
            "ajouter authentification, rôles, journal d’activité et permissions admin.",
          icon: "lock",
        },
        {
          title: "Clients",
          description:
            "suivre comptes, demandes, documents, contrats et historique de contact.",
          icon: "users",
        },
      ] satisfies FeatureTranslation[],
    },
    client: {
      header: {
        eyebrow: "Portail client",
        title: "Un futur espace pour clients, distributeurs et partenaires.",
        description:
          "Le site est structuré comme une application évolutive: documents, devis, commandes, support et notifications pourront être ajoutés sans reconstruire la base.",
      },
      modules: [
        {
          title: "Suivi devis",
          description:
            "afficher demandes, offres, statuts, volumes, dates et interlocuteurs.",
          icon: "fileCheck",
        },
        {
          title: "Documents",
          description:
            "télécharger fiches techniques, certificats, factures et documents qualité.",
          icon: "download",
        },
        {
          title: "Commandes",
          description:
            "suivre conditionnements, expéditions, historiques et réassorts.",
          icon: "packageSearch",
        },
        {
          title: "Accès client",
          description:
            "ajouter authentification, profils entreprise, permissions et notifications.",
          icon: "lock",
        },
      ] satisfies FeatureTranslation[],
    },
  },
  en: {
    localeName: "English",
    direction: "ltr",
    meta: {
      "/": {
        title: "Moroccan agricultural and industrial perlite | Barakah Perlite",
        description:
          "Barakah Perlite turns a natural mineral resource into a premium substrate for agriculture, hydroponics, horticulture, construction, filtration and industry in Morocco.",
      },
      "/produit": {
        title: "Expanded perlite product | Barakah Perlite",
        description:
          "Discover Barakah expanded perlite: natural volcanic rock, lightweight, sterile, inert, neutral pH, excellent aeration and water retention.",
      },
      "/agriculture": {
        title: "Agricultural and horticultural perlite | Barakah Perlite",
        description:
          "Agricultural perlite in Morocco for hydroponics, greenhouses, nurseries, germination, horticulture and soil improvement.",
      },
      "/green-space": {
        title: "Perlite for green spaces | Barakah Perlite",
        description:
          "Barakah expanded perlite for gardens, nurseries, public green areas, urban planting, sports fields and landscaping substrates.",
      },
      "/industrie": {
        title: "Industrial perlite | Barakah Perlite",
        description:
          "Industrial perlite in Morocco for insulation, filtration, chemical industry, high-temperature use, absorption, cryogenics and lightweight aggregates.",
      },
      "/a-propos": {
        title: "About | Barakah Perlite",
        description:
          "Barakah Perlite is a Moroccan company specializing in natural perlite for agriculture, industry, construction and filtration, with a sustainable export-ready vision.",
      },
      "/contact": {
        title: "Contact and quote request | Barakah Perlite",
        description:
          "Contact Barakah Perlite for agricultural, horticultural, hydroponic or industrial perlite quote requests in Morocco.",
      },
      "/privacy-policy": {
        title: "Privacy Policy | Barakah Perlite",
        description:
          "Privacy policy for barakahperlite.com: contact data, quote requests, purposes, retention, security and user rights.",
      },
      "/cookie-policy": {
        title: "Cookie Policy | Barakah Perlite",
        description:
          "Cookie policy for barakahperlite.com: essential cookies, possible analytics, third-party services and user controls.",
      },
      "/terms": {
        title: "Terms & Conditions | Barakah Perlite",
        description:
          "Terms and conditions for barakahperlite.com: website use, product information, technical data, quote requests and intellectual property.",
      },
      "/admin": {
        title: "Future admin space | Barakah Perlite",
        description:
          "Foundation for the future Barakah Perlite dashboard: quote management, product catalog, clients, CRM and multilingual content.",
      },
      "/admin/content": {
        title: "Content admin prototype | Barakah Perlite",
        description:
          "Internal non-functional UI prototype for future Barakah Perlite gallery, experiences, collaborations and content management.",
      },
      "/client": {
        title: "Future client portal | Barakah Perlite",
        description:
          "Foundation for the future Barakah Perlite client portal: quotes, orders, technical sheets, documents and support.",
      },
      "/portal/login": {
        title: "Client portal | Barakah Perlite",
        description:
          "Secure login to the Barakah Perlite client portal for authorized private access.",
      },
    } satisfies LocalizedMeta,
    nav: {
      aria: "Main navigation",
      mobileAria: "Mobile navigation",
      homeLabel: "Barakah Perlite - Home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      quoteShort: "Quote",
      items: [
        { label: "Product", href: "/produit" },
        { label: "Agriculture", href: "/agriculture" },
        { label: "Green Space", href: "/green-space" },
        { label: "Industry", href: "/industrie" },
        { label: "About", href: "/a-propos" },
        { label: "Contact", href: "/contact" },
      ] as Array<{ label: string; href: RouteKey }>,
    },
    common: {
      ...common,
      technicalQuote: "Technical quote",
      quoteRequest: "Request a quote",
      productData: "View product data",
      technicalTableCaption:
        "Barakah perlite technical sheet",
      technicalTableColumns: {
        parameter: "Parameter",
        value: "Value",
        note: "Note",
      },
      placeholderVisualTodo:
        "Institutional Barakah Perlite visual for product presentations.",
      processSteps: [
        {
          step: "01",
          title: "Mineral selection",
          description:
            "Raw material control and batch traceability before transformation.",
        },
        {
          step: "02",
          title: "Thermal expansion",
          description:
            "The rock is heated to release bound water and create a lightweight, white, porous structure.",
        },
        {
          step: "03",
          title: "Calibration",
          description:
            "Particle-size sorting for agricultural, industrial and filtration uses.",
        },
        {
          step: "04",
          title: "Quality control",
          description:
            "Verification of density, particle size, cleanliness, stability and packaging.",
        },
      ] satisfies ProcessTranslation[],
    },
    whatsapp: {
      aria: "Contact Barakah Perlite on WhatsApp",
    },
    footer: {
      description:
        "Moroccan company specialized in producing and commercializing perlite for agriculture, industry, construction and filtration.",
      tagline: "Morocco · Agriculture · Industry · Export",
      navigation: "Navigation",
      contact: "Contact",
      linkedin: "LinkedIn",
      copyright: "Copyright © 2026 Barakah Perlite. All rights reserved.",
      links: [
        { label: "Product", href: "/produit" },
        { label: "Agriculture", href: "/agriculture" },
        { label: "Green Space", href: "/green-space" },
        { label: "Industry", href: "/industrie" },
        { label: "Contact", href: "/contact" },
        { label: "Client portal", href: "/portal/login" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Terms & Conditions", href: "/terms" },
      ] as Array<{ label: string; href: RouteKey }>,
    },
    legal: {
      updatedLabel: "Last updated",
      updatedValue: "May 2026",
      reviewNotice:
        "This content provides general information applicable to the Barakah Perlite website.",
      privacy: {
        header: {
          eyebrow: "Privacy Policy",
          title: "Data protection and contact requests.",
          description:
            "This policy explains how Barakah Perlite may process information submitted through barakahperlite.com.",
        },
        sections: [
          {
            title: "Who we are",
            body:
              "Barakah Perlite is a Moroccan company active in perlite for agricultural and industrial uses. The website covered by this policy is barakahperlite.com. For privacy questions, contact info@barakahperlite.com.",
          },
          {
            title: "Data that may be collected",
            body:
              "When you use a contact form or quote request, we may receive the information you choose to submit.",
            bullets: [
              "First and last name",
              "Company name",
              "Email address",
              "Phone number",
              "Business sector",
              "Estimated quantity or need",
              "Message and details related to your request",
            ],
          },
          {
            title: "Why data is collected",
            body:
              "This data may be used to respond to inquiries, prepare commercial quotes, provide technical guidance, organize follow-up and improve service quality.",
          },
          {
            title: "Data retention",
            body:
              "Data is retained for the time needed to process inquiries, manage commercial follow-up and meet applicable obligations.",
          },
          {
            title: "User rights",
            body:
              "Depending on applicable law, you may have rights of access, rectification, objection, deletion or restriction by contacting Barakah Perlite.",
          },
          {
            title: "Security measures",
            body:
              "Barakah Perlite applies reasonable measures to protect received information against unauthorized access, loss or misuse.",
          },
          {
            title: "Contact",
            body:
              "For any question about this policy, contact Barakah Perlite at info@barakahperlite.com.",
          },
        ],
      },
      cookies: {
        header: {
          eyebrow: "Cookie Policy",
          title: "Cookie use on barakahperlite.com.",
          description:
            "This policy explains the categories of cookies that may be used on the Barakah Perlite website.",
        },
        sections: [
          {
            title: "What are cookies?",
            body:
              "A cookie is a small file stored on your device by a website to enable certain functions, remember preferences or measure site usage.",
          },
          {
            title: "Essential cookies",
            body:
              "The site may use cookies required for technical operation, security, navigation and remembering certain choices such as the selected language.",
          },
          {
            title: "Analytics cookies",
            body:
              "The website may use limited audience measurement to understand page views, downloads and important interactions in order to improve service quality.",
          },
          {
            title: "Third-party services",
            body:
              "Some third-party services required for website operation, maps, communications or audience measurement may apply their own privacy rules.",
          },
          {
            title: "How users can control cookies",
            body:
              "You can control or delete cookies through your browser settings. Blocking essential cookies may limit some website functions.",
          },
          {
            title: "Contact",
            body:
              "For any question about this cookie policy, contact Barakah Perlite at info@barakahperlite.com.",
          },
        ],
      },
      terms: {
        header: {
          eyebrow: "Terms & Conditions",
          title: "Website terms of use.",
          description:
            "These terms govern the use of barakahperlite.com and information published by Barakah Perlite.",
        },
        sections: [
          {
            title: "Website use",
            body:
              "Access to barakahperlite.com requires lawful use, without attempts to alter, misuse, overload or interfere with the website operation.",
          },
          {
            title: "Product information disclaimer",
            body:
              "Information about perlite, applications and benefits is provided for general information. It does not replace technical validation adapted to the project, substrate, batch or use context.",
          },
          {
            title: "Technical data disclaimer",
            body:
              "Tables, values and technical sheet references may be indicative or subject to validation. Final characteristics must be confirmed through an official technical sheet, sample or written offer.",
          },
          {
            title: "Quote requests",
            body:
              "Submitting a form or quote request does not constitute a firm order. Any commercial offer, availability, lead time, price or logistics condition must be confirmed in writing by Barakah Perlite.",
          },
          {
            title: "Intellectual property",
            body:
              "Website content, including text, visuals, brand identity, logos and structure, is protected. Reproduction or unauthorized use is prohibited without prior written approval.",
          },
          {
            title: "Limitation of liability",
            body:
              "Barakah Perlite aims to publish reliable information but does not guarantee that the website is free from errors or interruptions. Users remain responsible for verifying suitability for their own use.",
          },
          {
            title: "Contact information",
            body:
              "For any question about these terms, contact Barakah Perlite at info@barakahperlite.com.",
          },
        ],
      },
    },
    applications: [
      {
        title: "Agriculture",
        description:
          "Horticultural substrates, hydroponics, nurseries, greenhouses and high-precision soilless crops.",
        icon: "sprout",
        href: "/agriculture",
        accent: "emerald",
      },
      {
        title: "Industry",
        description:
          "Insulation, filtration, absorption, high-temperature use and lightweight aggregates for technical specifications.",
        icon: "factory",
        href: "/industrie",
        accent: "sand",
      },
      {
        title: "Green spaces",
        description:
          "Professional gardening, urban soils, lawns, plantations and draining blends for better-aerated roots.",
        icon: "leaf",
        href: "/agriculture",
        accent: "clay",
      },
    ] satisfies ApplicationTranslation[],
    technicalSpecs: [
      {
        label: "Origin",
        value: "Natural volcanic rock",
        note: "Values monitored by batch and grade.",
      },
      {
        label: "pH",
        value: "6 – 8",
        note: "Neutral profile depending on grade and application.",
      },
      {
        label: "Bulk density",
        value: "60 – 100 kg/m³",
        note: "Indicative range depending on particle size and expansion.",
      },
      {
        label: "Thermal conductivity",
        value: "0.04 – 0.06 W/mK",
        note: "Indicative insulation performance.",
      },
      {
        label: "Particle size",
        value: "1–4 / 3–6 / <1.5 mm / 50–100 µm",
        note: "Grades for agricultural, industrial and filtration uses.",
      },
      {
        label: "Stability",
        value: "Inert, non-flammable, recyclable",
        note: "Durable, non-reactive mineral material.",
      },
      {
        label: "Packaging",
        value: "100 L bags, 1 m³ big bags, bulk",
        note: "Logistics formats adapted to the order.",
      },
    ] satisfies TechnicalSpecTranslation[],
    home: {
      hero: {
        eyebrow: "Moroccan perlite · Precision agriculture",
        title: "Moroccan perlite for more productive agriculture",
        subtitle:
          "A natural, lightweight and durable substrate that improves aeration, water retention and root development.",
        ctaPrimary: "Request a quote",
        ctaSecondary: "Discover perlite",
        visualLabel: "Atlas mineral system",
        cardOneKicker: "Substrate",
        cardOneTitle: "neutral & inert",
        cardTwoKicker: "Roots",
        cardTwoTitle: "air + water",
      },
      stats: [
        {
          value: "100%",
          label: "natural",
          detail: "Expanded volcanic rock with no chemical additives.",
        },
        {
          value: "pH",
          label: "neutral",
          detail: "Stable support for controlled fertilization.",
        },
        {
          value: "3-4x",
          label: "water retention",
          detail: "High capacity without suffocating roots.",
        },
        {
          value: "ultra",
          label: "lightweight",
          detail: "Optimized handling, logistics and blends.",
        },
      ],
      why: {
        eyebrow: "Why perlite",
        title: "A mineral substrate that sharpens agronomic precision.",
        description:
          "Barakah Perlite positions perlite as a technical tool: it improves oxygenation, stabilizes moisture and gives growers a reliable medium for modern crops.",
        features: [
          {
            title: "Air, water, roots: the right balance",
            description:
              "Perlite’s porous structure creates air and moisture zones that help roots breathe, absorb and develop without compaction.",
            icon: "wind",
          },
          {
            title: "Precise irrigation control",
            description:
              "In greenhouses, nurseries or hydroponics, perlite makes water management clearer and supports regular nutrient cycles.",
            icon: "droplets",
          },
          {
            title: "Neutral and clean support",
            description:
              "Inert, sterile and free from unexpected chemical contribution, it helps growers control fertilization with confidence.",
            icon: "shield",
          },
        ] satisfies FeatureTranslation[],
      },
      applications: {
        eyebrow: "Applications",
        title: "Agriculture, industry, furniture and green spaces.",
        description:
          "From horticultural substrates to professional gardening, from industrial formulations to lightweight fillers for furniture, perlite opens durable technical uses.",
      },
      origin: {
        visualTitle: "Moroccan origin, international ambition",
        visualCaption:
          "A structured Moroccan industrial presence built around mineral material, quality and export reliability.",
        eyebrow: "Local expertise",
        title: "Taroudant as an industrial base, Morocco as a signature.",
        description:
          "Barakah Perlite is rooted in a mineral and agricultural territory. The objective is clear: provide reliable, documented perlite ready for Moroccan, African and international standards.",
        cards: [
          {
            label: "Agriculture",
            body:
              "A response to greenhouses, nurseries, soilless farms and precise irrigation systems.",
          },
          {
            label: "Industry",
            body:
              "A technical material for insulation, filtration, absorption, thermal applications and lightweight fillers.",
          },
        ],
      },
      advantages: {
        eyebrow: "Technical advantages",
        title: "Performance that is easy to understand and hard to replace.",
        description:
          "Perlite’s strength is balance: lightweight yet stable, porous yet durable, neutral yet useful across very different specifications.",
        features: [
          {
            title: "Neutral pH",
            description:
              "Strong compatibility with fertigation programs and sensitive crops.",
            icon: "gauge",
          },
          {
            title: "High porosity",
            description:
              "Improved air circulation, controlled drainage and reduced risk of root asphyxia.",
            icon: "wind",
          },
          {
            title: "Water efficiency",
            description:
              "Better water availability in the root zone can reduce losses depending on the system.",
            icon: "droplets",
          },
          {
            title: "Durable material",
            description:
              "Mineral, recyclable depending on use and suitable for farms seeking cleaner solutions.",
            icon: "recycle",
          },
        ] satisfies FeatureTranslation[],
      },
      process: {
        eyebrow: "Process & quality",
        title: "A chain designed for batch consistency.",
        description:
          "Barakah Perlite’s future industrial advantage relies on controlling raw material, expansion, particle size and traceability.",
      },
      cta: {
        title: "Ready to specify higher-performance perlite?",
        description:
          "Tell us about your crop, formulation or specification. We guide you toward the right format and particle size.",
      },
    },
    product: {
      header: {
        eyebrow: "Our product",
        title: "Moroccan expanded perlite for agriculture, industry and export.",
        description:
          "A natural, lightweight and stable material for agricultural substrates, industrial needs and reliable supply.",
        sampleCta: "Request a sample",
        technicalCenterCta: "Technical center",
        datasheetCta: "Technical sheet",
        msdsCta: "Safety data sheet MSDS",
      },
      what: {
        eyebrow: "What is perlite?",
        title: "A natural mineral material with a unique porous architecture.",
        description:
          "Perlite is a volcanic rock containing bound water. When heated, it expands strongly and becomes a white, lightweight, clean and stable material. This transformation creates pores that retain water while keeping air available.",
        facts: [
          {
            label: "Natural",
            value: "thermal expansion",
            description:
              "Mineral origin, no additive, transformed by thermal expansion.",
            icon: "mountain",
          },
          {
            label: "Stable",
            value: "inert and non-decomposable",
            description:
              "Consistent behavior in substrates, filtration, insulation and technical blends.",
            icon: "shield",
          },
          {
            label: "Technical",
            value: "porous, light, calibrated",
            description:
              "White expanded structure for controlling air, water, weight and insulation.",
            icon: "gauge",
          },
        ] satisfies ProductFactTranslation[],
        moreLabel: "Learn more",
        visualTitle: "Expanded perlite",
        visualCaption:
          "White expanded grains, visible mineral texture and particle size studied for agricultural and industrial uses.",
      },
      benefits: {
        eyebrow: "Product benefits",
        title: "A technical, clean and versatile material.",
        description:
          "Barakah perlite is built for professionals who need a readable, regular material that integrates easily into protocols.",
        features: [
          {
            title: "Controlled lightness",
            description:
              "An expanded structure that reduces loads, simplifies transport and improves blends.",
            icon: "feather",
          },
          {
            title: "Sterile medium",
            description:
              "A clean substrate that limits pathogen risks and stabilizes crop starts.",
            icon: "shield",
          },
          {
            title: "Chemical inertness",
            description:
              "Perlite does not release unexpected nutrients and allows precise fertigation control.",
            icon: "beaker",
          },
          {
            title: "Neutral pH",
            description:
              "A base compatible with many plant species, fertilizers and formulations.",
            icon: "gauge",
          },
          {
            title: "High aeration",
            description:
              "Open porosity increases root oxygenation and reduces substrate compaction.",
            icon: "wind",
          },
          {
            title: "Useful retention",
            description:
              "Water remains available in the root zone without turning the substrate saturated.",
            icon: "droplets",
          },
          {
            title: "Recyclable",
            description:
              "A durable mineral material, reusable depending on application and aligned with a leaner approach.",
            icon: "recycle",
          },
        ] satisfies FeatureTranslation[],
      },
      technicalProfile: {
        eyebrow: "Material data",
        title: "Mineral composition, physical properties and particle size.",
        description:
          "Barakah expanded perlite is positioned as a technical mineral material: lightweight, porous, stable and adaptable to agricultural, industrial and filtration uses.",
        groups: [
          {
            title: "Indicative composition",
            description:
              "Volcanic material mainly composed of silica and alumina, with a chemically stable structure.",
            rows: [
              {
                label: "Silica (SiO₂)",
                value: "74 – 76 %",
                note: "Main mineral component.",
              },
              {
                label: "Alumina (Al₂O₃)",
                value: "12 – 13 %",
                note: "Contributes to material stability.",
              },
              {
                label: "Alkali oxides (Na₂O, K₂O)",
                value: "6 – 8 %",
                note: "Naturally present in the volcanic matrix.",
              },
              {
                label: "Iron oxide (Fe₂O₃)",
                value: "< 1.5 %",
                note: "Indicative content by batch.",
              },
              {
                label: "Other minerals",
                value: "Traces",
                note: "To be qualified by batch analysis.",
              },
            ] satisfies TechnicalSpecTranslation[],
          },
          {
            title: "Physical properties",
            description:
              "Hot-air thermal expansion creates a white, lightweight, porous and resistant structure.",
            rows: [
              {
                label: "Bulk density",
                value: "60 – 100 kg/m³",
                note: "Depending on particle size and expansion level.",
              },
              {
                label: "pH",
                value: "Neutral (6 – 8)",
                note: "Suitable for substrates and technical formulations.",
              },
              {
                label: "Thermal conductivity",
                value: "0.04 – 0.06 W/mK",
                note: "Indicative range for insulation uses.",
              },
              {
                label: "Behavior",
                value: "Inert, durable, non-flammable",
                note: "Stable in demanding environments.",
              },
              {
                label: "Material cycle",
                value: "Recyclable",
                note: "Contributes to lighter, more durable solutions.",
              },
            ] satisfies TechnicalSpecTranslation[],
          },
          {
            title: "Typical particle size",
            description:
              "Particle-size control adapts performance to substrates, drainage, construction or filtration.",
            rows: [
              {
                label: "1 – 4 mm",
                value: "Agricultural substrates and horticulture",
                note: "Aeration, drainage and useful retention.",
              },
              {
                label: "3 – 6 mm",
                value: "Drainage and insulation",
                note: "More open grades for flow and weight reduction.",
              },
              {
                label: "< 1.5 mm",
                value: "Technical applications and construction",
                note: "Fine formulations, mortars and mineral fillers.",
              },
              {
                label: "50 – 100 microns",
                value: "Industrial filtration",
                note: "Grade to be qualified by process.",
              },
            ] satisfies TechnicalSpecTranslation[],
          },
        ] satisfies TechnicalDataGroupTranslation[],
      },
      specs: {
        eyebrow: "Specifications",
        title: "Technical sheet.",
        description:
          "The values will be consolidated with official laboratory results and Barakah Perlite technical sheets.",
        download: "Technical sheet",
        msdsDownload: "Safety data sheet MSDS",
      },
      packaging: {
        visualTitle: "Professional packaging",
        visualCaption:
          "Professional formats designed to simplify transport, storage, handling and order preparation.",
        eyebrow: "Packaging",
        title: "Bags, big bags and bulk ready for professional channels.",
        description:
          "Choose the format that fits your greenhouse, site, nursery or industrial line. Barakah prepares a clear answer based on volume, use and destination.",
        formatsTitle: "Available formats",
        formats: ["100 L bags", "1 m³ big bags", "Bulk"],
        formatsNote:
          "Packaging is designed to simplify transport, storage and on-site use according to ordered volumes.",
      },
      techniqueTrust: {
        eyebrow: "Safety & stability",
        title: "A naturally safe material to handle.",
        description:
          "Perlite is a stable, non-reactive mineral material suited to both agricultural and industrial environments.",
        features: [
          {
            title: "Non-toxic and odorless",
            description:
              "A mineral material with no odor, designed for controlled professional uses.",
            icon: "shield",
          },
          {
            title: "Insoluble in water",
            description:
              "Its stability limits unwanted interactions with nutrient solutions or industrial processes.",
            icon: "droplets",
          },
          {
            title: "Lower logistics impact",
            description:
              "Its lightness reduces transported loads and makes on-site handling easier.",
            icon: "feather",
          },
        ] satisfies FeatureTranslation[],
      },
    },
    productDetails: {
      naturelle: {
        backLabel: "Back to product",
        hero: {
          eyebrow: "Natural perlite",
          title: "A volcanic rock transformed by thermal expansion, without artifice.",
          description:
            "Perlite is a natural volcanic rock containing bound water. Through thermal expansion, this water vaporizes, the grain expands and becomes white, lightweight and porous: a clean mineral base for agricultural substrates and industrial formulations.",
          visualTitle: "Controlled mineral origin",
          visualCaption:
            "A natural volcanic material transformed into white, lightweight and porous granules through thermal expansion.",
        },
        technical: {
          eyebrow: "Technical explanation",
          title: "Heat turns rock into useful structure.",
          description:
            "Thermal expansion opens micro-cavities inside the grain. This architecture gives perlite its lightness, whiteness, porosity and neutral behavior across very different environments.",
          points: [
            {
              title: "Volcanic glass",
              description:
                "A natural mineral material selected for its ability to expand.",
              icon: "mountain",
            },
            {
              title: "Thermal expansion",
              description:
                "Internal steam increases volume and creates a much lighter white granule.",
              icon: "flame",
            },
            {
              title: "Open porosity",
              description:
                "Cavities support air, water, insulation and absorption depending on particle size.",
              icon: "sparkles",
            },
          ] satisfies FeatureTranslation[],
        },
        agriculture: {
          eyebrow: "Agriculture",
          title: "A natural mineral base for active roots.",
          description:
            "In crop production, perlite improves aeration, drainage, useful water retention and oxygenation around roots. It helps reduce compaction and stabilizes the air/water balance in modern substrates.",
          useCases: [
            {
              title: "Hydroponics",
              description:
                "A lightweight support for soilless systems where irrigation and fertigation must remain clear and controllable.",
              metric: "air + water",
            },
            {
              title: "Greenhouses and nurseries",
              description:
                "A component in horticultural blends to improve drainage and reduce saturated zones.",
              metric: "oxygenated roots",
            },
            {
              title: "Seed germination and soil improvement",
              description:
                "Reduces compaction, supports root establishment and makes substrates easier to handle.",
              metric: "durable structure",
            },
          ],
        },
        industry: {
          eyebrow: "Industry",
          title: "A versatile mineral material for technical specifications.",
          description:
            "Natural expanded perlite is used as a lightweight filler, insulation material, filter aid or absorbent in construction, filtration, chemical, cryogenic and high-temperature environments.",
          useCases: [
            {
              title: "Insulation and construction",
              description:
                "Lightweight aggregate for improving thermal performance and reducing mineral formulation weight.",
              metric: "low density",
            },
            {
              title: "Filtration",
              description:
                "Porous structure suited to filter-aid use in demanding industrial processes.",
              metric: "porous surface",
            },
            {
              title: "Absorption and processes",
              description:
                "A non-toxic mineral support for absorption, thermal applications and lightweight formulations.",
              metric: "clean mineral",
            },
          ],
        },
        specs: {
          eyebrow: "Indicative data",
          title: "Parameters to qualify by final use.",
          description:
            "The values below structure the future Barakah Perlite technical sheet. They will be replaced with official results by particle size, batch and application.",
          rows: [
            {
              label: "Nature",
              value: "Thermal expansion",
              note: "Natural mineral material transformed by thermal expansion.",
            },
            {
              label: "Color after expansion",
              value: "White to off-white",
              note: "Visual indicator of expansion and cleanliness.",
            },
            {
              label: "Structure",
              value: "Lightweight and porous",
              note: "Contributes to aeration, insulation and useful retention.",
            },
            {
              label: "Domains",
              value: "Agriculture, filtration, insulation, industry",
              note: "To be specified by grade and particle size.",
            },
          ] satisfies TechnicalSpecTranslation[],
          cards: [
            {
              title: "No additive",
              description:
                "Performance comes from physical expansion of volcanic rock.",
              icon: "check",
            },
            {
              title: "Easy handling",
              description:
                "Lightness simplifies blending, dosing and logistics.",
              icon: "feather",
            },
            {
              title: "Multi-market",
              description:
                "One mineral base can be calibrated for agriculture or industry.",
              icon: "globe",
            },
          ] satisfies FeatureTranslation[],
        },
        comparisons: {
          eyebrow: "Comparisons",
          title: "What natural mineral structure changes in formulations.",
          description:
            "Perlite is not an unstable organic input: it is a neutral mineral matrix whose role is physical and predictable.",
          cards: [
            {
              title: "Perlite vs organic matter",
              leftLabel: "Organic",
              left: "Can decompose, evolve and compact the medium.",
              rightLabel: "Perlite",
              right: "Does not decompose and keeps a structural function.",
            },
            {
              title: "Perlite vs compact soil",
              leftLabel: "Soil alone",
              left: "Risk of low oxygenation and uneven drainage.",
              rightLabel: "Perlite blend",
              right: "Improves air/water balance around roots.",
            },
            {
              title: "Perlite vs heavy filler",
              leftLabel: "Dense filler",
              left: "Increases weight and complicates handling.",
              rightLabel: "Expanded perlite",
              right: "Lightens formulations while adding porosity.",
            },
          ],
        },
        why: {
          eyebrow: "Why it matters",
          title: "A natural resource with professional behavior.",
          description:
            "For growers, formulators and industrial buyers, perlite’s value comes from a rare combination: mineral origin, neutrality, low weight and useful porosity.",
          cards: [
            {
              title: "Technical confidence",
              body: "The material is easy to explain to quality teams and international clients.",
            },
            {
              title: "Application flexibility",
              body: "Agriculture, insulation, filtration and absorption use the same physical logic: a porous, lightweight grain.",
            },
            {
              title: "Export image",
              body: "Well-characterized Moroccan perlite can answer expectations for consistency and traceability.",
            },
          ],
        },
        cta: {
          title: "Specify natural perlite for your use case.",
          description:
            "Share your sector, target particle size and packaging constraints. We will prepare a structured technical response.",
        },
      },
      stable: {
        backLabel: "Back to product",
        hero: {
          eyebrow: "Stable perlite",
          title: "Inert, sterile, non-toxic and non-decomposable.",
          description:
            "Expanded perlite offers the physical and chemical stability needed in agricultural substrates, hydroponic systems, filtration, construction and industrial applications where the material must not disturb the process.",
          visualTitle: "Expanded grain stability",
          visualCaption:
            "Calibrated grade, stable behavior and quality readability suited to professional uses.",
        },
        technical: {
          eyebrow: "Technical explanation",
          title: "A neutral material that lets the system do the work.",
          description:
            "Perlite is chemically stable, inert, sterile after expansion, non-toxic and non-decomposable. It does not add unnecessary biological or chemical variables to crop protocols or industrial formulations.",
          points: [
            {
              title: "Chemical inertness",
              description:
                "Does not release unexpected nutrients and supports precise fertigation control.",
              icon: "beaker",
            },
            {
              title: "Sterile medium",
              description:
                "High-temperature expansion creates a clean support for crop starts and demanding uses.",
              icon: "shield",
            },
            {
              title: "Non-decomposable",
              description:
                "The mineral structure does not break down like a classic organic fraction.",
              icon: "recycle",
            },
          ] satisfies FeatureTranslation[],
        },
        agriculture: {
          eyebrow: "Agriculture",
          title: "More control in substrates and irrigation.",
          description:
            "In greenhouses, nurseries, hydroponics and horticultural blends, perlite stability reduces uncertainty: air, water and nutrient supply remain easier to manage.",
          useCases: [
            {
              title: "Controlled hydroponics",
              description:
                "An inert support that separates nutrition management from the physical substrate structure.",
              metric: "precise control",
            },
            {
              title: "Nurseries",
              description:
                "A clean medium for young plants, germination and rooting in reproducible protocols.",
              metric: "clean start",
            },
            {
              title: "Substrate blends",
              description:
                "Reduces compaction and stabilizes air/water balance without decomposing.",
              metric: "less settling",
            },
          ],
        },
        industry: {
          eyebrow: "Industry",
          title: "Useful stability when the process cannot tolerate surprises.",
          description:
            "In insulation, filtration, absorption and lightweight aggregates, perlite acts as a stable mineral matrix: lightweight, porous and compatible with many formulations.",
          useCases: [
            {
              title: "Industrial filtration",
              description:
                "Mineral filter aid for processes where cleanliness and consistency are essential.",
              metric: "regular behavior",
            },
            {
              title: "Construction",
              description:
                "Non-decomposable lightweight filler for mortars, renders and lightweight concrete.",
              metric: "mineral durability",
            },
            {
              title: "Cryogenics and temperature",
              description:
                "Stable mineral insulation for demanding thermal environments, depending on grade.",
              metric: "stable insulation",
            },
          ],
        },
        specs: {
          eyebrow: "Indicative data",
          title: "Stability to document through quality control.",
          description:
            "These parameters structure the future technical sheet for clients requiring repeatability, traceability and process compatibility.",
          rows: [
            {
              label: "Chemical behavior",
              value: "Stable / inert",
              note: "To be documented by quality sheets and batch analyses.",
            },
            {
              label: "Toxicity",
              value: "Non-toxic",
              note: "Mineral material to use with dust control and PPE guidance.",
            },
            {
              label: "Decomposition",
              value: "Non-decomposable",
              note: "Does not turn into organic matter in the substrate.",
            },
            {
              label: "Indicative pH",
              value: "Neutral",
              note: "Range qualified by grade and official analysis.",
            },
          ] satisfies TechnicalSpecTranslation[],
          cards: [
            {
              title: "Repeatable",
              description:
                "Helps maintain comparable behavior from one blend to another.",
              icon: "gauge",
            },
            {
              title: "Compatible",
              description:
                "Integrates into fertigation programs and mineral formulations.",
              icon: "flask",
            },
            {
              title: "Storable",
              description:
                "A mineral material that is easy to store when protected and packaged.",
              icon: "packageCheck",
            },
          ] satisfies FeatureTranslation[],
        },
        comparisons: {
          eyebrow: "Comparisons",
          title: "Why stability lowers operational risk.",
          description:
            "A stable material helps farms and industrial operations limit parasitic variables in their systems.",
          cards: [
            {
              title: "Perlite vs organic supports",
              leftLabel: "Organic",
              left: "Can evolve, ferment or compact over time.",
              rightLabel: "Perlite",
              right: "Remains mineral, inert and structural.",
            },
            {
              title: "Perlite vs poorly drained medium",
              leftLabel: "Weak drainage",
              left: "Risk of root asphyxia and difficult irrigation.",
              rightLabel: "Stable perlite",
              right: "Maintains air voids and reduces compaction.",
            },
            {
              title: "Perlite vs reactive filler",
              leftLabel: "Reactive filler",
              left: "Can modify the process or formulation.",
              rightLabel: "Inert filler",
              right: "Adds lower weight and porosity without disturbing the system.",
            },
          ],
        },
        why: {
          eyebrow: "Why it matters",
          title: "Stability creates industrial trust.",
          description:
            "As volumes grow, customers want predictable material. Perlite answers that expectation with a clear physical role and broad compatibility.",
          cards: [
            {
              title: "Less uncertainty",
              body: "Growers can manage irrigation, oxygen and nutrition more precisely.",
            },
            {
              title: "Clearer processes",
              body: "Industrial users integrate a lightweight filler without adding an unwanted active variable.",
            },
            {
              title: "Export-grade quality",
              body: "Stability supports data sheets, quality audits and recurring contracts.",
            },
          ],
        },
        cta: {
          title: "Need stable perlite for your formulation?",
          description:
            "Send your application, pH, particle size, density and packaging constraints. We will prepare a specification base.",
        },
      },
      technique: {
        backLabel: "Back to product",
        hero: {
          eyebrow: "Technical perlite",
          title: "Lightness, porosity and calibration for demanding uses.",
          description:
            "The technical value of expanded perlite comes from its white, lightweight and highly porous structure. It improves aeration, drainage, water retention and root oxygenation, while serving insulation, filtration, cryogenics, absorption and lightweight aggregates.",
          visualTitle: "Particle size and porosity",
          visualCaption:
            "Different particle sizes help tune aeration, drainage, filtration, insulation and lightness.",
        },
        technical: {
          eyebrow: "Technical explanation",
          title: "Grain structure controls performance.",
          description:
            "After expansion, each grain acts as a porous microstructure. Depending on particle size, it can add air to a substrate, retain useful water, lighten a formulation or contribute to thermal insulation.",
          points: [
            {
              title: "Very lightweight",
              description:
                "Low bulk density reduces weight and makes handling easier.",
              icon: "feather",
            },
            {
              title: "Highly porous",
              description:
                "A cavity network useful for air, water, filtration and insulation.",
              icon: "wind",
            },
            {
              title: "Calibratable",
              description:
                "Particle sizes adapted to seedlings, substrates, industrial blends and filter aids.",
              icon: "barChart",
            },
          ] satisfies FeatureTranslation[],
        },
        agriculture: {
          eyebrow: "Agriculture",
          title: "An air/water architecture for roots.",
          description:
            "In hydroponics, greenhouses, nurseries, germination and soil improvement, perlite helps maintain an oxygenated, draining and less compact root environment.",
          useCases: [
            {
              title: "Greenhouse substrates",
              description:
                "Improves blend structure and supports more regular irrigation.",
              metric: "air/water balance",
            },
            {
              title: "Germination",
              description:
                "A lightweight and clean medium to support young root establishment.",
              metric: "fine support",
            },
            {
              title: "Soil improvement",
              description:
                "Reduces compaction and creates air and water pathways around the root system.",
              metric: "more breathable soil",
            },
          ],
        },
        industry: {
          eyebrow: "Industry",
          title: "Porosity that works beyond agriculture.",
          description:
            "The same physical properties explain industrial uses: thermal insulation, construction, filtration, high-temperature applications, cryogenics, absorption and lightweight aggregates.",
          useCases: [
            {
              title: "Thermal insulation",
              description:
                "Light expanded grain for insulation systems, fills and mineral formulations.",
              metric: "reduced conductivity",
            },
            {
              title: "Filtration and absorption",
              description:
                "Grain porosity and surface support separation and absorption processes.",
              metric: "active microstructure",
            },
            {
              title: "Lightweight aggregates",
              description:
                "Lightens mortars, renders and technical concretes while keeping a mineral base.",
              metric: "lower weight",
            },
          ],
        },
        specs: {
          eyebrow: "Indicative data",
          title: "Particle size determines the use.",
          description:
            "Future sheets should connect each grade to a particle-size range, bulk density and expected performance.",
          rows: [
            {
              label: "Bulk density",
              value: "60 – 120 kg/m³",
              note: "Depending on expansion and particle size.",
            },
            {
              label: "Particle size",
              value: "0-1 / 1-3 / 3-6 mm",
              note: "Indicative grades adapted to production.",
            },
            {
              label: "Key functions",
              value: "Aeration, drainage, retention, insulation",
              note: "Dominant function depends on grade.",
            },
            {
              label: "Formats",
              value: "Bags, big bags, bulk",
              note: "specify weights, pallets and PDF sheets.",
            },
          ] satisfies TechnicalSpecTranslation[],
          cards: [
            {
              title: "Root air",
              description:
                "Porosity maintains air spaces around the roots.",
              icon: "wind",
            },
            {
              title: "Useful retention",
              description:
                "Part of the water remains available without saturating the medium.",
              icon: "droplets",
            },
            {
              title: "Light insulation",
              description:
                "Expanded grain lowers mass and contributes to thermal insulation.",
              icon: "thermometer",
            },
          ] satisfies FeatureTranslation[],
        },
        comparisons: {
          eyebrow: "Comparisons",
          title: "Performance comes from the right grade in the right place.",
          description:
            "Technical perlite should be specified as a calibrated component, not treated as a generic powder.",
          cards: [
            {
              title: "Fine vs coarse perlite",
              leftLabel: "Fine",
              left: "Useful for seedlings, fine blends and some filtration uses.",
              rightLabel: "Coarse",
              right: "Adds more macro-porosity, drainage and lightness.",
            },
            {
              title: "Perlite vs dense soil",
              leftLabel: "Dense soil",
              left: "May hold too much water and limit oxygen.",
              rightLabel: "Perlite blend",
              right: "Improves respiration and water distribution.",
            },
            {
              title: "Perlite vs heavy aggregate",
              leftLabel: "Heavy aggregate",
              left: "Raises load and reduces logistics efficiency.",
              rightLabel: "Light aggregate",
              right: "Lightens the formulation and improves handling.",
            },
          ],
        },
        why: {
          eyebrow: "Why it matters",
          title: "A well-specified technical material sells better.",
          description:
            "To convince farms, engineering offices, industrial buyers and distributors, Barakah Perlite must connect each grade to a measurable benefit and a clear use.",
          cards: [
            {
              title: "Faster decisions",
              body: "Customers understand which grade to request and why.",
            },
            {
              title: "Fewer use errors",
              body: "The right particle size avoids blends that are too draining, too fine or too heavy.",
            },
            {
              title: "Premium positioning",
              body: "Technical data turns a mineral commodity into a professional solution.",
            },
          ],
        },
        cta: {
          title: "Let’s build the technical sheet for your use.",
          description:
            "Describe your agricultural or industrial application. We help you choose particle size, format and data to document.",
        },
      },
    } satisfies Record<ProductDetailKey, ProductDetailTranslation>,
    agriculture: {
      header: {
        eyebrow: "Agriculture",
        title:
          "An agritech substrate for greenhouses, hydroponics and productive crops.",
        description:
          "Barakah Perlite helps growers build lighter, more breathable substrates suited to modern irrigation.",
      },
      intro: {
        visualTitle: "Greenhouses & soilless crops",
        visualCaption:
          "Modern substrates for greenhouses, hydroponics, nurseries and crops under controlled irrigation.",
        eyebrow: "Agricultural uses",
        title: "Perlite gives structure to modern growing systems.",
        description:
          "Hydroponics, nurseries, greenhouse vegetables or horticultural blends: Barakah perlite helps tune drainage, air and retention according to grower objectives.",
        checklist: [
          "Hydroponics and fertigation",
          "Vegetable greenhouses",
          "Nurseries and young plants",
          "Heavy soil improvement",
          "Germination and cuttings",
          "Professional horticulture",
        ],
      },
      useCases: {
        eyebrow: "Use cases",
        title: "Agricultural applications: substrate, amendment and blends.",
        description:
          "In agriculture, perlite improves soil and substrate structure: root aeration, drainage, balanced water retention and stable support for modern crops.",
        features: [
          {
            title: "Hydroponics",
            description:
              "Clean mineral support for hydroponic crops, irrigated systems and controlled nutrient cycles.",
            icon: "droplets",
          },
          {
            title: "Greenhouses",
            description:
              "Light substrate for protected crops with better drainage and root oxygenation.",
            icon: "leaf",
          },
          {
            title: "Nurseries",
            description:
              "Promotes rapid rooting and limits compaction during sensitive phases.",
            icon: "sprout",
          },
          {
            title: "Soil improvement",
            description:
              "Lightens heavy soils, reduces compaction and improves moisture management.",
            icon: "mountain",
          },
          {
            title: "Germination",
            description:
              "Fine, stable structure for uniform seedling emergence and young plants.",
            icon: "shield",
          },
          {
            title: "Substrate blends",
            description:
              "Stable component for premium blends: flowers, berries, herbs and ornamentals.",
            icon: "flask",
          },
        ] satisfies FeatureTranslation[],
      },
      benefits: {
        eyebrow: "Grower benefits",
        title: "Clearer crops, better-served roots.",
        description:
          "In a well-managed system, perlite becomes a consistency lever: cleaner irrigation, healthier rooting and a more stable medium.",
        features: [
          {
            title: "More active roots",
            description:
              "Better oxygen access supports root vigor and accelerates recovery phases.",
            icon: "sprout",
          },
          {
            title: "Less compaction",
            description:
              "The mineral structure keeps blends more open, even through repeated irrigation cycles.",
            icon: "wind",
          },
          {
            title: "More efficient irrigation",
            description:
              "Perlite retains useful moisture while draining excess water, helping reduce water stress.",
            icon: "droplets",
          },
          {
            title: "Regular oxygenation",
            description:
              "A more breathable substrate reduces conditions that favor root stress.",
            icon: "leaf",
          },
        ] satisfies FeatureTranslation[],
      },
      comparisons: {
        eyebrow: "Comparisons",
        title: "Choose perlite for the right reason.",
        description:
          "Perlite is not a magic promise: it is a physical material that improves substrate behavior when correctly dosed.",
        cards: [
          {
            title: "Perlite vs soil",
            body:
              "Perlite does not always replace soil: it transforms it. It reduces compaction, adds air and stabilizes moisture around roots.",
          },
          {
            title: "Perlite vs cocopeat",
            body:
              "Cocopeat retains water strongly. Perlite adds more aeration and helps tune porosity in professional blends.",
          },
          {
            title: "Perlite in blends",
            body:
              "Combined with peat, coco, compost or mineral media, it becomes a precision lever for drainage, oxygen and irrigation.",
          },
        ],
      },
      cta: {
        title:
          "Greenhouses, farms and nurseries: request a particle-size recommendation.",
        description:
          "Share your crop, irrigation system, volumes and goals. Barakah Perlite will prepare a use-oriented answer, not just a bag price.",
      },
    },
    industry: {
      header: {
        eyebrow: "Industry",
        title: "A lightweight mineral material for technical specifications.",
        description:
          "Construction, filtration, chemistry, absorption or cryogenics: expanded perlite offers a rare profile: lightweight, inert, insulating and porous.",
      },
      intro: {
        eyebrow: "Industrial applications",
        title: "A discreet material, essential in demanding systems.",
        description:
          "Perlite’s industrial value comes from its combination of low density, stability, porosity, insulation and compatibility with many matrices.",
        checklist: [
          "Thermal and acoustic insulation",
          "Filter aid for industrial liquids",
          "Refractory and high-temperature materials",
          "Oil and chemical absorption",
          "Cryogenic insulation",
          "Lightweight aggregates and mineral formulations",
        ],
        visualTitle: "Perlite for industrial systems",
        visualCaption:
          "A lightweight and stable material for insulation, filtration, technical blends and construction applications.",
      },
      domains: {
        eyebrow: "Fields",
        title: "Seven industrial uses, one performance logic.",
        description:
          "Its porous structure, lightness and chemical stability make it suitable for demanding industrial specifications.",
        features: [
          {
            title: "Construction insulation",
            description:
              "Fillers, technical mortars and lightweight concretes to improve thermal and acoustic comfort.",
            icon: "building",
          },
          {
            title: "Filtration",
            description:
              "Mineral filter aid to clarify liquids, oils and industrial flows.",
            icon: "waves",
          },
          {
            title: "Chemical industry",
            description:
              "Inert support for formulations, technical fillers and processes requiring stability.",
            icon: "beaker",
          },
          {
            title: "High temperature",
            description:
              "High-temperature technical materials, refractory components and thermal protections.",
            icon: "thermometer",
          },
          {
            title: "Absorption",
            description:
              "Porous granulate for absorbing oils, liquids and industrial spills.",
            icon: "packageCheck",
          },
          {
            title: "Cryogenics",
            description:
              "Tank and very-low-temperature environment insulation thanks to its lightweight structure.",
            icon: "snowflake",
          },
          {
            title: "Lightweight aggregates",
            description:
              "Weight reduction for mineral formulations, mortars, panels and technical systems.",
            icon: "boxes",
          },
          {
            title: "Export vision",
            description:
              "Quality positioning for industrial partners in Morocco, Africa and Europe.",
            icon: "globe",
          },
        ] satisfies FeatureTranslation[],
      },
      technical: {
        eyebrow: "Technical approach",
        title: "The right data before the right order.",
        description:
          "The industrial offer must specify particle size, density, moisture, purity, thermal conductivity, packaging, transport and quality documentation.",
        cta: "Talk to the team",
      },
      cta: {
        title: "Do you have an industrial specification?",
        description:
          "Send your constraints: particle size, density, volume, delivery country, final use and quality requirements. The team will prepare a clear technical answer.",
      },
    },
    about: {
      header: {
        eyebrow: "About",
        title:
          "A Moroccan brand built to inspire trust in technical markets.",
        description:
          "Barakah Perlite aims to elevate Moroccan perlite from mineral product to documented, reliable and export-ready professional solution.",
      },
      story: {
        eyebrow: "Brand story",
        title: "From Moroccan mineral territory to a trusted industry.",
        description:
          "Barakah Perlite is a Moroccan company specialized in producing and commercializing perlite. Its role is to provide agricultural and industrial sectors with a stable, clean and high-performance material, backed by readable quality and serious commercial relationships.",
        body:
          "The ambition is straightforward: provide growers, landscapers, distributors and industrial buyers with a reliable Moroccan partner for local supply and export projects.",
        visualTitle: "Team, factory and raw material",
        visualCaption:
          "An organization built around the industrial site, raw material, quality control and technical documentation.",
      },
      values: {
        eyebrow: "Commitments",
        title: "Quality, reliability, sustainability: the three proofs to build.",
        description:
          "The site prepares an international presence where every promise can be backed by data sheets, photos, certifications, analyses and process.",
        features: [
          {
            title: "Natural resource",
            description:
              "A volcanic-origin material valued through a technical and responsible approach.",
            icon: "mountain",
          },
          {
            title: "Reliable quality",
            description:
              "An ambition for batch consistency, traceability and clear documentation for clients.",
            icon: "shield",
          },
          {
            title: "Sustainable agriculture",
            description:
              "Substrates that help manage water, air and roots better in modern crops.",
            icon: "leaf",
          },
          {
            title: "Export vision",
            description:
              "A Moroccan positioning ready to engage African, European and international markets.",
            icon: "globe",
          },
        ] satisfies FeatureTranslation[],
      },
      focusCards: [
        {
          title: "Agriculture",
          body:
            "Serve growers, greenhouses, nurseries and distributors with a more technical natural substrate.",
        },
        {
          title: "Industry",
          body:
            "Address insulation, filtration, absorption and high-temperature uses with clear product data.",
        },
        {
          title: "Sustainability",
          body:
            "Promote a durable mineral resource and support clients toward leaner solutions.",
        },
      ],
    },
    contactPage: {
      header: {
        eyebrow: "Contact",
        title: "Request a quote or technical recommendation.",
        description:
          "Share your use case, sector, volumes and destination. The Barakah Perlite team will answer with clear guidance.",
      },
      formIntro: {
        eyebrow: "Professional form",
        title: "Tell us about your need.",
        description:
          "Share your sector, target quantity, preferred format and delivery country. We will guide you quickly toward the right solution.",
      },
      detailsHeading: "Contact details",
      whatsapp: "Sales WhatsApp",
      mapTitle: "Map & access",
      mapCaption:
        "Office: N°5 ET.3 Imm. El Khiati, Avenue Hassan II, Taroudant. Factory project: Zone industrielle Ahl Rmel, Oulad Teima, Taroudant.",
      form: {
        name: "Name",
        company: "Company",
        phone: "Phone",
        email: "Email",
        sector: "Sector",
        quantity: "Quantity needed",
        message: "Message",
        requiredMark: "*",
        sectorPlaceholder: "Select",
        quantityPlaceholder: "Example: 10 tons, 500 bags, 2 big bags",
        messagePlaceholder:
          "Describe your application, desired particle size, delivery country or technical constraints.",
        note: "Commercial response within 24-48 business hours after internal validation.",
        submit: "Send request",
        loading: "Sending...",
        success: "Request received",
        error:
          "Unable to send the request right now. Try WhatsApp or email.",
        errors: {
          name: "Name is required.",
          email: "Email is required.",
          invalidEmail: "Invalid email.",
          phone: "Phone is required.",
          sector: "Sector is required.",
          message: "Message is required.",
        },
        sectors: [
          "Agriculture",
          "Industry",
          "Construction",
          "Filtration",
          "Distribution / export",
        ],
      },
    },
    gallery: {
      header: {
        eyebrow: "Gallery",
        title: "A visual library ready for field proof.",
        description:
          "A premium space for future Barakah Perlite photography: material, greenhouses, factory, packaging and industrial applications with clear category-based browsing.",
      },
      categories: ["Agriculture", "Industry", "Product", "Factory"],
      items: [
        {
          category: "Agriculture",
          title: "Roots in perlite substrate",
          caption:
            "Greenhouse, hydroponic and nursery applications that improve the air/water balance around roots.",
        },
        {
          category: "Product",
          title: "Calibrated white granules",
          caption:
            "Expanded granules with porous structure for substrates, technical blends and industrial applications.",
        },
        {
          category: "Industry",
          title: "Technical applications",
          caption:
            "Insulation, filtration, absorption and lightweight aggregates for demanding technical environments.",
        },
        {
          category: "Factory",
          title: "Transformation line",
          caption:
            "Transformation, quality control, storage and packaging designed for professional customers.",
        },
        {
          category: "Agriculture",
          title: "Trials and field results",
          caption:
            "Monitoring of root development, irrigation protocols and field results.",
        },
        {
          category: "Product",
          title: "Export packaging",
          caption:
            "Bags, big bags, pallets and product markings for agricultural, industrial and export channels.",
        },
      ],
      noteTitle: "Professional photo library",
      noteBody:
        "The slots are ready for optimized images, approved captions, SEO tags and multilingual content.",
    },
    experience: {
      header: {
        eyebrow: "Experience",
        title: "Field proof that accelerates trust.",
        description:
          "A page designed to present collaborations, agricultural trials, customer stories and industrial applications in a structured, credible way for international buyers.",
      },
      cards: [
        {
          kicker: "Collaborations",
          title: "Agricultural and industrial partners",
          body:
            "add approved collaborations with farms, distributors, laboratories, engineering offices or industrial operators.",
          metric: "network",
        },
        {
          kicker: "Field results",
          title: "Crop and root monitoring",
          body:
            "integrate real measurements for aeration, irrigation, compaction and root development.",
          metric: "proof",
        },
        {
          kicker: "Customers",
          title: "Verifiable use stories",
          body:
            "prepare approved customer cases with sector, volume, challenge and observed result.",
          metric: "trust",
        },
        {
          kicker: "Agricultural trials",
          title: "Hydroponics, greenhouses and nurseries",
          body:
            "document crop protocols, blended substrates, germination and irrigation efficiency.",
          metric: "agritech",
        },
        {
          kicker: "Industry",
          title: "Insulation, filtration and absorption",
          body:
            "add qualified industrial applications with technical constraints, grades and packaging.",
          metric: "technical",
        },
      ],
    },
    adminContent: {
      eyebrow: "Internal prototype",
      title: "Barakah Perlite content admin.",
      description:
        "Non-functional interface to frame future content management. No real access, edits or sensitive data are connected.",
      securityNote:
        "Visual prototype only: the future version must be protected server-side before production.",
      login: {
        title: "Login mockup",
        email: "Admin email",
        password: "Password",
        button: "Login disabled",
      },
      dashboard: {
        title: "Content dashboard",
        stats: ["Gallery images", "Captions", "Experiences", "Collaborations"],
      },
      managers: [
        {
          title: "Gallery image manager",
          description:
            "Mockup for uploading, categorizing and approving future Agriculture, Industry, Product and Factory images.",
          items: ["Image upload", "Categories", "Publication status"],
        },
        {
          title: "Caption manager",
          description:
            "Mockup for preparing multilingual captions, SEO descriptions and short copy.",
          items: ["FR / EN / AR", "Image SEO", "Content approval"],
        },
        {
          title: "Experience manager",
          description:
            "Mockup for structuring field trials, customer results and technical applications.",
          items: ["Agricultural trials", "Customer cases", "Industrial uses"],
        },
        {
          title: "Collaboration manager",
          description:
            "Mockup for partners, permission status and publishable proof points.",
          items: ["Partners", "Permissions", "Documents"],
        },
      ],
      todos: [
        "real server-side authentication",
        "protected middleware",
        "database",
        "image upload storage",
        "admin role authorization",
        "API protection",
        "real CRUD",
      ],
    },
    admin: {
      header: {
        eyebrow: "Admin",
        title: "Barakah Perlite dashboard.",
        description:
          "Foundation ready for the future application: quotes, products, content, CRM and multilingual administration.",
      },
      modules: [
        {
          title: "Quote management",
          description:
            "connect forms, sales pipeline, statuses, notifications and CRM export.",
          icon: "fileText",
        },
        {
          title: "Product catalog",
          description:
            "manage particle sizes, PDF sheets, packaging, stock and visuals.",
          icon: "barChart",
        },
        {
          title: "Secure access",
          description:
            "add authentication, roles, activity log and admin permissions.",
          icon: "lock",
        },
        {
          title: "Clients",
          description:
            "track accounts, requests, documents, contracts and contact history.",
          icon: "users",
        },
      ] satisfies FeatureTranslation[],
    },
    client: {
      header: {
        eyebrow: "Client portal",
        title: "A future space for clients, distributors and partners.",
        description:
          "The site is structured as an evolutive application: documents, quotes, orders, support and notifications can be added without rebuilding the base.",
      },
      modules: [
        {
          title: "Quote tracking",
          description:
            "display requests, offers, statuses, volumes, dates and contacts.",
          icon: "fileCheck",
        },
        {
          title: "Documents",
          description:
            "download technical sheets, certificates, invoices and quality documents.",
          icon: "download",
        },
        {
          title: "Orders",
          description:
            "track packaging, shipments, history and reorders.",
          icon: "packageSearch",
        },
        {
          title: "Client access",
          description:
            "add authentication, company profiles, permissions and notifications.",
          icon: "lock",
        },
      ] satisfies FeatureTranslation[],
    },
  },
  nl: {
  "localeName": "Nederlands",
  "direction": "ltr",
  "meta": {
    "/": {
      "title": "Marokkaans landbouw- en industrieel perliet | Barakah Perlite",
      "description": "Barakah Perlite verandert een natuurlijke minerale hulpbron in een premium substraat voor de landbouw, hydrocultuur, tuinbouw, bouw, filtratie en industrie in Marokko."
    },
    "/produit": {
      "title": "Geëxpandeerd perlietproduct | Barakah Perlite",
      "description": "Ontdek Barakah geëxpandeerd perliet: natuurlijk vulkanisch gesteente, lichtgewicht, steriel, inert, neutrale pH, uitstekende beluchting en waterretentie."
    },
    "/agriculture": {
      "title": "Perliet voor land- en tuinbouw | Barakah Perlite",
      "description": "Landbouwperliet in Marokko voor hydrocultuur, kassen, kwekerijen, kiemkracht, tuinbouw en bodemverbetering."
    },
    "/green-space": {
      "title": "Perliet voor groene ruimtes | Barakah Perlite",
      "description": "Barakah geëxpandeerd perliet voor tuinen, kwekerijen, openbare groenzones, stedelijke aanplant, sportvelden en landschappelijke substraten."
    },
    "/industrie": {
      "title": "Industrieel perliet | Barakah Perlite",
      "description": "Industrieel perliet in Marokko voor isolatie, filtratie, chemische industrie, gebruik bij hoge temperaturen, absorptie, cryogene en lichtgewicht aggregaten."
    },
    "/a-propos": {
      "title": "Over | Barakah Perlite",
      "description": "Barakah Perlite is een Marokkaans bedrijf gespecialiseerd in natuurlijk perliet voor de landbouw, industrie, bouw en filtratie, met een duurzame exportgerichte visie."
    },
    "/contact": {
      "title": "Contact- en offerteaanvraag | Barakah Perlite",
      "description": "Neem contact op met Barakah Perlite voor offerteaanvragen voor landbouw-, tuinbouw-, hydrocultuur- of industriële perliet in Marokko."
    },
    "/privacy-policy": {
      "title": "Privacybeleid | Barakah Perlite",
      "description": "Privacybeleid voor barakahperlite.com: contactgegevens, offerteaanvragen, doeleinden, bewaring, beveiliging en gebruikersrechten."
    },
    "/cookie-policy": {
      "title": "Cookiebeleid | Barakah Perlite",
      "description": "Cookiebeleid voor barakahperlite.com: essentiële cookies, mogelijke analyses, diensten van derden en gebruikerscontroles."
    },
    "/terms": {
      "title": "Algemene voorwaarden | Barakah Perlite",
      "description": "Algemene voorwaarden voor barakahperlite.com: websitegebruik, productinformatie, technische gegevens, offerteaanvragen en intellectueel eigendom."
    },
    "/admin": {
      "title": "Toekomstige beheerdersruimte | Barakah Perlite",
      "description": "Basis voor de toekomst Barakah Perlite dashboard: offertebeheer, productcatalogus, klanten, CRM en meertalige inhoud."
    },
    "/admin/content": {
      "title": "Prototype voor inhoudbeheer | Barakah Perlite",
      "description": "Intern niet-functioneel UI-prototype voor toekomstige Barakah Perlite-galerij, ervaringen, samenwerkingen en contentbeheer."
    },
    "/client": {
      "title": "Toekomstig klantenportaal | Barakah Perlite",
      "description": "Basis voor de toekomst Barakah Perlite klantenportaal: offertes, bestellingen, technische fiches, documenten en ondersteuning."
    },
    "/portal/login": {
      "title": "Klantenportaal | Barakah Perlite",
      "description": "Veilig inloggen op het Barakah Perlite-klantenportaal voor geautoriseerde privétoegang."
    }
  },
  "nav": {
    "aria": "Hoofdnavigatie",
    "mobileAria": "Mobiele navigatie",
    "homeLabel": "Barakah Perlite - Home",
    "openMenu": "Menu openen",
    "closeMenu": "Menu sluiten",
    "language": "Taal",
    "quoteShort": "Offerte",
    "items": [
      {
        "label": "Product",
        "href": "/produit"
      },
      {
        "label": "Landbouw",
        "href": "/agriculture"
      },
      {
        "label": "Green Space",
        "href": "/green-space"
      },
      {
        "label": "Industrie",
        "href": "/industrie"
      },
      {
        "label": "Over ons",
        "href": "/a-propos"
      },
      {
        "label": "Contact",
        "href": "/contact"
      }
    ]
  },
  "common": {
    "brand": "Barakah Perlite",
    "technicalQuote": "Technische offerte",
    "quoteRequest": "Offerte aanvragen",
    "productData": "Productgegevens bekijken",
    "visualBrand": "Barakah Perlite",
    "technicalTableCaption": "Technische fiche Barakah Perlite",
    "technicalTableColumns": {
      "parameter": "Parameter",
      "value": "Waarde",
      "note": "Opmerking"
    },
    "placeholderVisualTodo": "Institutionele Barakah Perlite-visual voor productpresentaties.",
    "processSteps": [
      {
        "step": "01",
        "title": "Minerale selectie",
        "description": "Controle van de grondstof en traceerbaarheid per partij vóór verwerking."
      },
      {
        "step": "02",
        "title": "Thermische expansie",
        "description": "Het gesteente wordt verhit om gebonden water vrij te maken en een lichte, witte en poreuze structuur te creëren."
      },
      {
        "step": "03",
        "title": "Kalibratie",
        "description": "Korrelgroottesortering voor landbouwkundige, industriële en filtratietoepassingen."
      },
      {
        "step": "04",
        "title": "Kwaliteitscontrole",
        "description": "Controle van dichtheid, granulometrie, zuiverheid, stabiliteit en verpakking."
      }
    ]
  },
  "whatsapp": {
    "aria": "Neem contact op met Barakah Perlite op WhatsApp",
    "label": "WhatsApp",
    "ariaLabel": "Contact opnemen via WhatsApp"
  },
  "footer": {
    "description": "Marokkaans bedrijf gespecialiseerd in de productie en commercialisering van perliet voor landbouw, industrie, bouw en filtratie.",
    "tagline": "Marokko · Landbouw · Industrie · Export",
    "navigation": "Navigatie",
    "contact": "Contact",
    "linkedin": "LinkedIn",
    "copyright": "Copyright © 2026 Barakah Perlite. Alle rechten voorbehouden.",
    "links": [
      {
        "label": "Product",
        "href": "/produit"
      },
      {
        "label": "Landbouw",
        "href": "/agriculture"
      },
      {
        "label": "Green Space",
        "href": "/green-space"
      },
      {
        "label": "Industrie",
        "href": "/industrie"
      },
      {
        "label": "Contact",
        "href": "/contact"
      },
      {
        "label": "Klantenportaal",
        "href": "/portal/login"
      },
      {
        "label": "Privacybeleid",
        "href": "/privacy-policy"
      },
      {
        "label": "Cookiebeleid",
        "href": "/cookie-policy"
      },
      {
        "label": "Algemene voorwaarden",
        "href": "/terms"
      }
    ]
  },
  "legal": {
    "updatedLabel": "Laatst bijgewerkt",
    "updatedValue": "Mei 2026",
    "reviewNotice": "Deze inhoud biedt algemene informatie die van toepassing is op de Barakah Perlite-website.",
    "privacy": {
      "header": {
        "eyebrow": "Privacybeleid",
        "title": "Gegevensbescherming en contactverzoeken.",
        "description": "In dit beleid wordt uitgelegd hoe Barakah Perlite informatie kan verwerken die via barakahperlite.com wordt ingediend."
      },
      "sections": [
        {
          "title": "Wie wij zijn",
          "body": "Barakah Perlite is een Marokkaans bedrijf dat actief is in perliet voor agrarische en industriële toepassingen. De website waarop dit beleid van toepassing is, is barakahperlite.com. Neem voor privacyvragen contact op met info@barakahperlite.com."
        },
        {
          "title": "Gegevens die kunnen worden verzameld",
          "body": "Wanneer u een contactformulier of een offerteaanvraag gebruikt, kunnen wij de door u gewenste informatie ontvangen.",
          "bullets": [
            "Voor- en achternaam",
            "Bedrijfsnaam",
            "E-mailadres",
            "Telefoonnummer",
            "Bedrijfssector",
            "Geschatte hoeveelheid of behoefte",
            "Bericht en details met betrekking tot uw verzoek"
          ]
        },
        {
          "title": "Waarom gegevens worden verzameld",
          "body": "Deze gegevens kunnen worden gebruikt om te reageren op vragen, commerciële offertes op te stellen, technische begeleiding te bieden, follow-up te organiseren en de kwaliteit van de dienstverlening te verbeteren."
        },
        {
          "title": "Gegevensretentie",
          "body": "Gegevens worden bewaard gedurende de tijd die nodig is om vragen te verwerken, de commerciële opvolging te beheren en aan de toepasselijke verplichtingen te voldoen."
        },
        {
          "title": "Gebruikersrechten",
          "body": "Afhankelijk van de toepasselijke wetgeving heeft u mogelijk recht op toegang, rectificatie, bezwaar, verwijdering of beperking door contact op te nemen met Barakah Perlite."
        },
        {
          "title": "Beveiligingsmaatregelen",
          "body": "Barakah Perlite past redelijke maatregelen toe om ontvangen informatie te beschermen tegen ongeoorloofde toegang, verlies of misbruik."
        },
        {
          "title": "Contacteer",
          "body": "Neem voor vragen over dit beleid contact op met Barakah Perlite via info@barakahperlite.com."
        }
      ]
    },
    "cookies": {
      "header": {
        "eyebrow": "Cookiebeleid",
        "title": "Cookiegebruik op barakahperlite.com.",
        "description": "In dit beleid worden de categorieën cookies uitgelegd die op de Barakah Perlite-website kunnen worden gebruikt."
      },
      "sections": [
        {
          "title": "Wat zijn cookies?",
          "body": "Een cookie is een klein bestand dat door een website op uw apparaat wordt opgeslagen om bepaalde functies in te schakelen, voorkeuren te onthouden of het sitegebruik te meten."
        },
        {
          "title": "Essentiële koekjes",
          "body": "De site kan cookies gebruiken die nodig zijn voor de technische werking, beveiliging, navigatie en het onthouden van bepaalde keuzes, zoals de geselecteerde taal."
        },
        {
          "title": "Analytics-cookies",
          "body": "De website kan beperkte doelgroepmetingen gebruiken om inzicht te krijgen in paginaweergaven, downloads en belangrijke interacties en zo de kwaliteit van de dienstverlening te verbeteren."
        },
        {
          "title": "Diensten van derden",
          "body": "Sommige diensten van derden die nodig zijn voor de werking van de website, kaarten, communicatie of publieksmetingen kunnen hun eigen privacyregels toepassen."
        },
        {
          "title": "Hoe gebruikers cookies kunnen beheren",
          "body": "U kunt cookies beheren of verwijderen via uw browserinstellingen. Het blokkeren van essentiële cookies kan bepaalde websitefuncties beperken."
        },
        {
          "title": "Contacteer",
          "body": "Voor vragen over dit cookiebeleid kunt u contact opnemen met Barakah Perlite via info@barakahperlite.com."
        }
      ]
    },
    "terms": {
      "header": {
        "eyebrow": "Algemene voorwaarden",
        "title": "Gebruiksvoorwaarden website.",
        "description": "Deze voorwaarden zijn van toepassing op het gebruik van barakahperlite.com en de informatie gepubliceerd door Barakah Perlite."
      },
      "sections": [
        {
          "title": "Websitegebruik",
          "body": "Toegang tot barakahperlite.com vereist rechtmatig gebruik, zonder pogingen om de werking van de website te wijzigen, misbruiken, overbelasten of verstoren."
        },
        {
          "title": "Disclaimer voor productinformatie",
          "body": "Informatie over perliet, toepassingen en voordelen wordt verstrekt ter algemene informatie. Het vervangt geen technische validatie die is aangepast aan de project-, substraat-, batch- of gebruikscontext."
        },
        {
          "title": "Disclaimer technische gegevens",
          "body": "Tabellen, waarden en referenties van technische fiches kunnen indicatief zijn of onderworpen zijn aan validatie. De definitieve kenmerken moeten worden bevestigd door middel van een officiële technische fiche, monster of schriftelijke offerte."
        },
        {
          "title": "Offerte aanvragen",
          "body": "Het indienen van een formulier of offerteaanvraag houdt geen definitieve bestelling in. Elk commercieel aanbod, beschikbaarheid, levertijd, prijs of logistieke voorwaarde moet schriftelijk worden bevestigd door Barakah Perlite."
        },
        {
          "title": "Intellectueel eigendom",
          "body": "Website-inhoud, inclusief tekst, beeldmateriaal, merkidentiteit, logo's en structuur, is beschermd. Reproductie of ongeoorloofd gebruik is verboden zonder voorafgaande schriftelijke toestemming."
        },
        {
          "title": "Beperking van aansprakelijkheid",
          "body": "Barakah Perlite streeft ernaar betrouwbare informatie te publiceren, maar garandeert niet dat de website vrij is van fouten of onderbrekingen. Gebruikers blijven verantwoordelijk voor het verifiëren van de geschiktheid voor eigen gebruik."
        },
        {
          "title": "Contactgegevens",
          "body": "Neem voor vragen over deze voorwaarden contact op met Barakah Perlite via info@barakahperlite.com."
        }
      ]
    }
  },
  "applications": [
    {
      "title": "Landbouw",
      "description": "Tuinbouwsubstraten, hydrocultuur, kwekerijen, kassen en uiterst nauwkeurige grondloze gewassen.",
      "icon": "sprout",
      "href": "/agriculture",
      "accent": "emerald"
    },
    {
      "title": "Industrie",
      "description": "Isolatie, filtratie, absorptie, gebruik bij hoge temperaturen en lichtgewicht aggregaten voor technische specificaties.",
      "icon": "factory",
      "href": "/industrie",
      "accent": "sand"
    },
    {
      "title": "Groene ruimtes",
      "description": "Professioneel tuinieren, stedelijke bodems, gazons, plantages en drainagemengsels voor beter beluchte wortels.",
      "icon": "leaf",
      "href": "/agriculture",
      "accent": "clay"
    }
  ],
  "technicalSpecs": [
    {
      "label": "Oorsprong",
      "value": "Natuurlijk vulkanisch gesteente",
      "note": "Waarden bewaakt per batch en kwaliteit."
    },
    {
      "label": "pH",
      "value": "6 – 8",
      "note": "Neutraal profiel afhankelijk van soort en toepassing."
    },
    {
      "label": "Bulkdichtheid",
      "value": "60 – 100 kg/m³",
      "note": "Indicatief bereik afhankelijk van deeltjesgrootte en expansie."
    },
    {
      "label": "Thermische geleidbaarheid",
      "value": "0.04 – 0.06 W/mK",
      "note": "Indicatieve isolatieprestaties."
    },
    {
      "label": "Deeltjesgrootte",
      "value": "1–4 / 3–6 / <1,5 mm / 50–100 µm",
      "note": "Kwaliteiten voor landbouw-, industrieel en filtratiegebruik."
    },
    {
      "label": "Stabiliteit",
      "value": "Inert, niet-ontvlambaar, recyclebaar",
      "note": "Duurzaam, niet-reactief mineraal materiaal."
    },
    {
      "label": "Verpakking",
      "value": "Zakken van 100 L, bigbags van 1 m³, bulk",
      "note": "Logistieke formaten aangepast aan de bestelling."
    }
  ],
  "home": {
    "hero": {
      "eyebrow": "Marokkaanse perliet · precisielandbouw",
      "title": "Marokkaanse perliet voor een productievere landbouw",
      "subtitle": "Een natuurlijk, licht en duurzaam substraat dat beluchting, waterretentie en wortelontwikkeling verbetert.",
      "ctaPrimary": "Vraag een offerte aan",
      "ctaSecondary": "Ontdek perliet",
      "visualLabel": "Atlas-mineraalsysteem",
      "cardOneKicker": "Substraat",
      "cardOneTitle": "neutraal en inert",
      "cardTwoKicker": "Wortels",
      "cardTwoTitle": "lucht + water",
      "primaryCta": "Offerte aanvragen",
      "secondaryCta": "Perliet ontdekken"
    },
    "stats": [
      {
        "value": "100%",
        "label": "natuurlijk",
        "detail": "Uitgebreid vulkanisch gesteente zonder chemische toevoegingen."
      },
      {
        "value": "pH",
        "label": "neutraal",
        "detail": "Stabiele ondersteuning voor gecontroleerde bemesting."
      },
      {
        "value": "3-4x",
        "label": "waterretentie",
        "detail": "Hoge capaciteit zonder verstikkende wortels."
      },
      {
        "value": "ultra",
        "label": "lichtgewicht",
        "detail": "Geoptimaliseerde handling, logistiek en mengsels."
      }
    ],
    "why": {
      "eyebrow": "Waarom perliet",
      "title": "Een mineraal substraat dat de agronomische precisie aanscherpt.",
      "description": "Barakah Perlite positioneert perliet als een technisch hulpmiddel: het verbetert de oxygenatie, stabiliseert het vocht en geeft telers een betrouwbaar medium voor moderne gewassen.",
      "features": [
        {
          "title": "Lucht, water, wortels: de juiste balans",
          "description": "De poreuze structuur van Perliet creëert lucht- en vochtzones die de wortels helpen ademen, absorberen en ontwikkelen zonder verdichting.",
          "icon": "wind"
        },
        {
          "title": "Nauwkeurige irrigatiecontrole",
          "description": "In kassen, kwekerijen of hydrocultuur maakt perliet het waterbeheer duidelijker en ondersteunt het regelmatige nutriëntenkringlopen.",
          "icon": "droplets"
        },
        {
          "title": "Neutrale en schone ondersteuning",
          "description": "Het is inert, steriel en vrij van onverwachte chemische bijdragen en helpt telers de bemesting met vertrouwen onder controle te houden.",
          "icon": "shield"
        }
      ]
    },
    "applications": {
      "eyebrow": "Toepassingen",
      "title": "Landbouw, industrie, meubilair en groene ruimten.",
      "description": "Van tuinbouwsubstraten tot professioneel tuinieren, van industriële formuleringen tot lichtgewicht vulstoffen voor meubels, perliet opent duurzame technische toepassingen."
    },
    "origin": {
      "visualTitle": "Marokkaanse afkomst, internationale ambitie",
      "visualCaption": "Een gestructureerde Marokkaanse industriële aanwezigheid opgebouwd rond mineraal materiaal, kwaliteit en exportbetrouwbaarheid.",
      "eyebrow": "Lokale expertise",
      "title": "Taroudant als industriële basis, Marokko als signatuur.",
      "description": "Barakah Perlite is geworteld in een mineraal en agrarisch gebied. Het doel is duidelijk: betrouwbare, gedocumenteerde perliet leveren die klaar is voor Marokkaanse, Afrikaanse en internationale normen.",
      "cards": [
        {
          "label": "Landbouw",
          "body": "Een antwoord op kassen, kwekerijen, grondloze boerderijen en nauwkeurige irrigatiesystemen."
        },
        {
          "label": "Industrie",
          "body": "Een technisch materiaal voor isolatie, filtratie, absorptie, thermische toepassingen en lichtgewicht vulstoffen."
        }
      ]
    },
    "advantages": {
      "eyebrow": "Technische voordelen",
      "title": "Prestaties die gemakkelijk te begrijpen en moeilijk te vervangen zijn.",
      "description": "De kracht van Perlite is balans: lichtgewicht en toch stabiel, poreus en toch duurzaam, neutraal en toch bruikbaar in zeer verschillende specificaties.",
      "features": [
        {
          "title": "Neutrale pH-waarde",
          "description": "Sterke compatibiliteit met fertigatieprogramma's en gevoelige gewassen.",
          "icon": "gauge"
        },
        {
          "title": "Hoge porositeit",
          "description": "Verbeterde luchtcirculatie, gecontroleerde drainage en verminderd risico op wortelverstikking.",
          "icon": "wind"
        },
        {
          "title": "Waterefficiëntie",
          "description": "Een betere waterbeschikbaarheid in de wortelzone kan afhankelijk van het systeem verliezen verminderen.",
          "icon": "droplets"
        },
        {
          "title": "Duurzaam materiaal",
          "description": "Mineraal, recyclebaar afhankelijk van gebruik en geschikt voor bedrijven die op zoek zijn naar schonere oplossingen.",
          "icon": "recycle"
        }
      ]
    },
    "process": {
      "eyebrow": "Proces & kwaliteit",
      "title": "Een ketting ontworpen voor batchconsistentie.",
      "description": "Het toekomstige industriële voordeel van Barakah Perlite is afhankelijk van het beheersen van grondstoffen, expansie, deeltjesgrootte en traceerbaarheid."
    },
    "cta": {
      "title": "Klaar om perliet met hogere prestaties te specificeren?",
      "description": "Vertel ons over uw gewas, formulering of specificatie. Wij begeleiden u naar het juiste formaat en deeltjesgrootte."
    }
  },
  "product": {
    "header": {
      "eyebrow": "Ons product",
      "title": "Marokkaans geëxpandeerd perliet voor landbouw, industrie en export.",
      "description": "Een natuurlijk, licht en stabiel materiaal voor landbouwsubstraten, industriële toepassingen en betrouwbare bevoorrading.",
      "sampleCta": "Monster aanvragen",
      "technicalCenterCta": "Technisch centrum",
      "datasheetCta": "Technische fiche",
      "msdsCta": "Veiligheidsfiche MSDS"
    },
    "what": {
      "eyebrow": "Wat is perliet?",
      "title": "Een natuurlijke minerale grondstof met een unieke poreuze structuur.",
      "description": "Perliet is een vulkanisch gesteente met natuurlijk gebonden water. Door thermische expansie ontstaat een wit, licht, schoon en stabiel materiaal met poriën die water vasthouden en tegelijk lucht beschikbaar houden.",
      "facts": [
        {
          "label": "Natuurlijk",
          "value": "thermische expansie",
          "description": "Minerale oorsprong, geen additief, getransformeerd door thermische expansie.",
          "icon": "mountain"
        },
        {
          "label": "Stabiel",
          "value": "inert en niet-afbreekbaar",
          "description": "Consistent gedrag in substraten, filtratie, isolatie en technische mengsels.",
          "icon": "shield"
        },
        {
          "label": "Technisch",
          "value": "poreus, licht, gekalibreerd",
          "description": "Witte geëxpandeerde structuur voor het regelen van lucht, water, gewicht en isolatie.",
          "icon": "gauge"
        }
      ],
      "moreLabel": "Meer informatie",
      "visualTitle": "Geëxpandeerde perliet",
      "visualCaption": "Witte geëxpandeerde korrels, zichtbare minerale textuur en onderzochte granulometrie voor landbouwkundige en industriële toepassingen."
    },
    "benefits": {
      "eyebrow": "Productvoordelen",
      "title": "Een technisch, schoon en veelzijdig materiaal.",
      "description": "Barakah Perlite is gebouwd voor professionals die leesbaar, regelmatig materiaal nodig hebben dat gemakkelijk in protocollen kan worden geïntegreerd.",
      "features": [
        {
          "title": "Gecontroleerde lichtheid",
          "description": "Een uitgebreide structuur die de belasting vermindert, het transport vereenvoudigt en de mengsels verbetert.",
          "icon": "feather"
        },
        {
          "title": "Steriel medium",
          "description": "Een schoon substraat dat de risico’s van ziekteverwekkers beperkt en de gewasstart stabiliseert.",
          "icon": "shield"
        },
        {
          "title": "Chemische inertie",
          "description": "Perliet geeft geen onverwachte voedingsstoffen vrij en maakt nauwkeurige bemestingscontrole mogelijk.",
          "icon": "beaker"
        },
        {
          "title": "Neutrale pH-waarde",
          "description": "Een basis die compatibel is met vele plantensoorten, meststoffen en formuleringen.",
          "icon": "gauge"
        },
        {
          "title": "Hoge beluchting",
          "description": "Open porositeit verhoogt de zuurstofvoorziening van de wortels en vermindert de substraatverdichting.",
          "icon": "wind"
        },
        {
          "title": "Nuttige retentie",
          "description": "Water blijft beschikbaar in de wortelzone zonder dat het substraat verzadigd raakt.",
          "icon": "droplets"
        },
        {
          "title": "Recyclebaar",
          "description": "Een duurzaam mineraal materiaal, herbruikbaar afhankelijk van de toepassing en afgestemd op een slankere aanpak.",
          "icon": "recycle"
        }
      ]
    },
    "technicalProfile": {
      "eyebrow": "Materiaalgegevens",
      "title": "Minerale samenstelling, fysieke eigenschappen en granulometrie.",
      "description": "Barakah geëxpandeerd perliet is gepositioneerd als een technisch mineraal materiaal: lichtgewicht, poreus, stabiel en aanpasbaar aan landbouw-, industriële en filtratietoepassingen.",
      "groups": [
        {
          "title": "Indicatieve samenstelling",
          "description": "Vulkanisch materiaal dat voornamelijk bestaat uit silica en aluminiumoxide, met een chemisch stabiele structuur.",
          "rows": [
            {
              "label": "Siliciumdioxide (SiO₂)",
              "value": "74 – 76 %",
              "note": "Belangrijkste minerale component."
            },
            {
              "label": "Aluminiumoxide (Al₂O₃)",
              "value": "12 – 13 %",
              "note": "Draagt bij aan de materiaalstabiliteit."
            },
            {
              "label": "Alkalioxiden (Na₂O, K₂O)",
              "value": "6 – 8 %",
              "note": "Van nature aanwezig in de vulkanische matrix."
            },
            {
              "label": "IJzeroxide (Fe₂O₃)",
              "value": "< 1.5 %",
              "note": "Indicatieve inhoud per batch."
            },
            {
              "label": "Andere mineralen",
              "value": "Sporen",
              "note": "Te kwalificeren door batchanalyse."
            }
          ]
        },
        {
          "title": "Fysieke eigenschappen",
          "description": "De thermische expansie door hete lucht creëert een witte, lichtgewicht, poreuze en resistente structuur.",
          "rows": [
            {
              "label": "Bulkdichtheid",
              "value": "60 – 100 kg/m³",
              "note": "Afhankelijk van deeltjesgrootte en expansieniveau."
            },
            {
              "label": "pH",
              "value": "Neutraal (6 – 8)",
              "note": "Geschikt voor substraten en technische formuleringen."
            },
            {
              "label": "Thermische geleidbaarheid",
              "value": "0.04 – 0.06 W/mK",
              "note": "Indicatief bereik voor isolatietoepassingen."
            },
            {
              "label": "Gedrag",
              "value": "Inert, duurzaam, niet brandbaar",
              "note": "Stabiel in veeleisende omgevingen."
            },
            {
              "label": "Materiaalcyclus",
              "value": "Recyclebaar",
              "note": "Draagt bij aan lichtere, duurzamere oplossingen."
            }
          ]
        },
        {
          "title": "Typische deeltjesgrootte",
          "description": "De deeltjesgroottecontrole past de prestaties aan aan substraten, drainage, constructie of filtratie.",
          "rows": [
            {
              "label": "1 – 4 mm",
              "value": "Landbouwsubstraten en tuinbouw",
              "note": "Beluchting, drainage en nuttige retentie."
            },
            {
              "label": "3 – 6 mm",
              "value": "Afwatering en isolatie",
              "note": "Meer open kwaliteiten voor doorstroming en gewichtsreductie."
            },
            {
              "label": "< 1.5 mm",
              "value": "Technische toepassingen en constructie",
              "note": "Fijne formuleringen, mortels en minerale vulstoffen."
            },
            {
              "label": "50 – 100 microns",
              "value": "Industriële filtratie",
              "note": "Rang die moet worden gekwalificeerd via het proces."
            }
          ]
        }
      ]
    },
    "specs": {
      "eyebrow": "Specificaties",
      "title": "Technische fiche",
      "description": "De waarden zullen worden geconsolideerd met officiële laboratoriumresultaten en technische bladen van Barakah Perlite.",
      "download": "Technische fiche",
      "msdsDownload": "Veiligheidsinformatieblad MSDS"
    },
    "packaging": {
      "visualTitle": "Professionele verpakking",
      "visualCaption": "Professionele formaten ontworpen om transport, opslag, handling en ordervoorbereiding te vereenvoudigen.",
      "eyebrow": "Verpakking",
      "title": "Zakken, big bags en bulk klaar voor professionele kanalen.",
      "description": "Kies het formaat dat past bij uw kas, project, kwekerij of industriële lijn. Barakah geeft een duidelijk antwoord volgens volume, toepassing en bestemming.",
      "formatsTitle": "Beschikbare formaten",
      "formats": [
        "Zakken van 100 liter",
        "Bigbags van 1 m³",
        "Bulk"
      ],
      "formatsNote": "De verpakking is ontworpen om transport, opslag en gebruik ter plaatse te vereenvoudigen, afhankelijk van de bestelde volumes."
    },
    "techniqueTrust": {
      "eyebrow": "Veiligheid en stabiliteit",
      "title": "Een natuurlijk veilig materiaal om te hanteren.",
      "description": "Perliet is een stabiel, niet-reactief mineraal materiaal dat geschikt is voor zowel agrarische als industriële omgevingen.",
      "features": [
        {
          "title": "Niet giftig en geurloos",
          "description": "Een mineraal materiaal zonder geur, ontworpen voor gecontroleerd professioneel gebruik.",
          "icon": "shield"
        },
        {
          "title": "Onoplosbaar in water",
          "description": "De stabiliteit beperkt ongewenste interacties met voedingsoplossingen of industriële processen.",
          "icon": "droplets"
        },
        {
          "title": "Lagere logistieke impact",
          "description": "Zijn lichtheid vermindert de getransporteerde lasten en maakt het hanteren op locatie eenvoudiger.",
          "icon": "feather"
        }
      ]
    }
  },
  "productDetails": {
    "naturelle": {
      "backLabel": "Terug naar product",
      "hero": {
        "eyebrow": "Natuurlijk perliet",
        "title": "Een vulkanisch gesteente dat is getransformeerd door thermische expansie, zonder kunstgrepen.",
        "description": "Perliet is een natuurlijk vulkanisch gesteente dat gebonden water bevat. Door thermische expansie verdampt dit water, zet de korrel uit en wordt wit, lichtgewicht en poreus: een schone minerale basis voor landbouwsubstraten en industriële formuleringen.",
        "visualTitle": "Gecontroleerde minerale oorsprong",
        "visualCaption": "Een natuurlijk vulkanisch materiaal dat door thermische expansie wordt omgezet in witte, lichtgewicht en poreuze korrels."
      },
      "technical": {
        "eyebrow": "Technische uitleg",
        "title": "Warmte verandert gesteente in een bruikbare structuur.",
        "description": "Door thermische expansie ontstaan microholtes in de korrel. Deze architectuur geeft perliet zijn lichtheid, witheid, porositeit en neutraal gedrag in zeer verschillende omgevingen.",
        "points": [
          {
            "title": "Vulkanisch glas",
            "description": "Een natuurlijk mineraal materiaal geselecteerd vanwege zijn vermogen om uit te zetten.",
            "icon": "mountain"
          },
          {
            "title": "Thermische expansie",
            "description": "Interne stoom vergroot het volume en creëert een veel lichtere witte korrel.",
            "icon": "flame"
          },
          {
            "title": "Open porositeit",
            "description": "Holtes ondersteunen lucht, water, isolatie en absorptie, afhankelijk van de deeltjesgrootte.",
            "icon": "sparkles"
          }
        ]
      },
      "agriculture": {
        "eyebrow": "Landbouw",
        "title": "Een natuurlijke minerale basis voor actieve wortels.",
        "description": "Bij de gewasproductie verbetert perliet de beluchting, drainage, nuttige waterretentie en oxygenatie rond de wortels. Het helpt de verdichting te verminderen en stabiliseert de lucht/waterbalans in moderne substraten.",
        "useCases": [
          {
            "title": "Hydrocultuur",
            "description": "Een lichtgewicht ondersteuning voor grondloze systemen waarbij irrigatie en fertigatie overzichtelijk en controleerbaar moeten blijven.",
            "metric": "lucht + water"
          },
          {
            "title": "Kassen en kinderdagverblijven",
            "description": "Een component in tuinbouwmengsels om de drainage te verbeteren en verzadigde zones te verminderen.",
            "metric": "zuurstofrijke wortels"
          },
          {
            "title": "Zaadkieming en bodemverbetering",
            "description": "Vermindert verdichting, ondersteunt de wortelvorming en maakt substraten gemakkelijker te hanteren.",
            "metric": "duurzame structuur"
          }
        ]
      },
      "industry": {
        "eyebrow": "Industrie",
        "title": "Een veelzijdig mineraal materiaal voor technische specificaties.",
        "description": "Natuurlijk geëxpandeerd perliet wordt gebruikt als lichtgewicht vulmiddel, isolatiemateriaal, filterhulpmiddel of absorberend materiaal in de bouw, filtratie, chemische, cryogene en hoge temperatuuromgevingen.",
        "useCases": [
          {
            "title": "Isolatie en constructie",
            "description": "Lichtgewicht aggregaat voor het verbeteren van de thermische prestaties en het verminderen van het gewicht van de minerale formulering.",
            "metric": "lage dichtheid"
          },
          {
            "title": "Filtratie",
            "description": "Poreuze structuur geschikt voor gebruik als filterhulpmiddel in veeleisende industriële processen.",
            "metric": "poreus oppervlak"
          },
          {
            "title": "Absorptie en processen",
            "description": "Een niet-giftige minerale ondersteuning voor absorptie, thermische toepassingen en lichtgewicht formuleringen.",
            "metric": "schoon mineraal"
          }
        ]
      },
      "specs": {
        "eyebrow": "Indicatieve gegevens",
        "title": "Parameters die bij eindgebruik in aanmerking komen.",
        "description": "De onderstaande waarden structureren de toekomstige technische fiche van Barakah Perlite. Ze zullen worden vervangen door officiële resultaten per deeltjesgrootte, batch en toepassing.",
        "rows": [
          {
            "label": "Natuur",
            "value": "Thermische expansie",
            "note": "Natuurlijk mineraal materiaal getransformeerd door thermische expansie."
          },
          {
            "label": "Kleur na expansie",
            "value": "Wit tot gebroken wit",
            "note": "Visuele indicator van expansie en reinheid."
          },
          {
            "label": "Structuur",
            "value": "Lichtgewicht en poreus",
            "note": "Draagt bij aan beluchting, isolatie en nuttige retentie."
          },
          {
            "label": "Domeinen",
            "value": "Landbouw, filtratie, isolatie, industrie",
            "note": "Te specificeren op soort en deeltjesgrootte."
          }
        ],
        "cards": [
          {
            "title": "Geen additief",
            "description": "Prestaties komen voort uit fysieke expansie van vulkanisch gesteente.",
            "icon": "check"
          },
          {
            "title": "Gemakkelijk te hanteren",
            "description": "Lichtheid vereenvoudigt het mengen, doseren en logistiek.",
            "icon": "feather"
          },
          {
            "title": "Multi-markt",
            "description": "Eén minerale basis kan worden gekalibreerd voor landbouw of industrie.",
            "icon": "globe"
          }
        ]
      },
      "comparisons": {
        "eyebrow": "Vergelijkingen",
        "title": "Welke natuurlijke minerale structuur verandert in formuleringen.",
        "description": "Perliet is geen onstabiele organische input: het is een neutrale minerale matrix waarvan de rol fysiek en voorspelbaar is.",
        "cards": [
          {
            "title": "Perliet versus organisch materiaal",
            "leftLabel": "Biologisch",
            "left": "Kan het medium ontbinden, evolueren en compacteren.",
            "rightLabel": "Perliet",
            "right": "Ontleedt niet en behoudt een structurele functie."
          },
          {
            "title": "Perliet versus compacte grond",
            "leftLabel": "Alleen grond",
            "left": "Risico op lage oxygenatie en ongelijkmatige drainage.",
            "rightLabel": "Perliet mengsel",
            "right": "Verbetert de lucht/waterbalans rond de wortels."
          },
          {
            "title": "Perliet versus zwaar vulmiddel",
            "leftLabel": "Dichte vulling",
            "left": "Verhoogt het gewicht en bemoeilijkt het hanteren.",
            "rightLabel": "Uitgebreid perliet",
            "right": "Verlicht formuleringen en voegt porositeit toe."
          }
        ]
      },
      "why": {
        "eyebrow": "Waarom het ertoe doet",
        "title": "Een natuurlijke hulpbron met professioneel gedrag.",
        "description": "Voor telers, formuleerders en industriële kopers komt de waarde van perliet voort uit een zeldzame combinatie: minerale oorsprong, neutraliteit, laag gewicht en nuttige porositeit.",
        "cards": [
          {
            "title": "Technisch vertrouwen",
            "body": "De stof is gemakkelijk uit te leggen aan kwaliteitsteams en internationale klanten."
          },
          {
            "title": "Flexibiliteit in toepassingen",
            "body": "Landbouw, isolatie, filtratie en absorptie gebruiken dezelfde fysieke logica: een poreuze, lichtgewicht korrel."
          },
          {
            "title": "Afbeelding exporteren",
            "body": "Goed gekarakteriseerd Marokkaans perliet kan voldoen aan de verwachtingen op het gebied van consistentie en traceerbaarheid."
          }
        ]
      },
      "cta": {
        "title": "Specificeer natuurlijk perliet voor uw gebruiksscenario.",
        "description": "Deel uw sector, beoogde deeltjesgrootte en verpakkingsbeperkingen. Wij zullen een gestructureerd technisch antwoord voorbereiden."
      }
    },
    "stable": {
      "backLabel": "Terug naar product",
      "hero": {
        "eyebrow": "Stabiel perliet",
        "title": "Inert, steriel, niet giftig en niet afbreekbaar.",
        "description": "Geëxpandeerd perliet biedt de fysische en chemische stabiliteit die nodig is in landbouwsubstraten, hydrocultuursystemen, filtratie, constructie en industriële toepassingen waarbij het materiaal het proces niet mag verstoren.",
        "visualTitle": "Uitgebreide graanstabiliteit",
        "visualCaption": "Gekalibreerde kwaliteit, stabiel gedrag en hoogwaardige leesbaarheid geschikt voor professioneel gebruik."
      },
      "technical": {
        "eyebrow": "Technische uitleg",
        "title": "Een neutraal materiaal dat het systeem het werk laat doen.",
        "description": "Perliet is chemisch stabiel, inert, steriel na expansie, niet giftig en niet afbreekbaar. Het voegt geen onnodige biologische of chemische variabelen toe aan gewasprotocollen of industriële formuleringen.",
        "points": [
          {
            "title": "Chemische inertie",
            "description": "Geeft geen onverwachte voedingsstoffen vrij en ondersteunt een nauwkeurige bemestingscontrole.",
            "icon": "beaker"
          },
          {
            "title": "Steriel medium",
            "description": "Uitzetting bij hoge temperaturen creëert een schone ondersteuning voor het starten van gewassen en veeleisende toepassingen.",
            "icon": "shield"
          },
          {
            "title": "Niet-afbreekbaar",
            "description": "De minerale structuur valt niet uiteen zoals bij een klassieke organische fractie.",
            "icon": "recycle"
          }
        ]
      },
      "agriculture": {
        "eyebrow": "Landbouw",
        "title": "Meer controle in substraten en irrigatie.",
        "description": "In kassen, kwekerijen, hydrocultuur en tuinbouwmengsels vermindert de stabiliteit van perliet de onzekerheid: de toevoer van lucht, water en voedingsstoffen blijft gemakkelijker te beheren.",
        "useCases": [
          {
            "title": "Gecontroleerde hydrocultuur",
            "description": "Een inerte ondersteuning die het voedingsmanagement scheidt van de fysieke substraatstructuur.",
            "metric": "nauwkeurige controle"
          },
          {
            "title": "Kwekerijen",
            "description": "Een schoon medium voor jonge planten, kieming en beworteling in reproduceerbare protocollen.",
            "metric": "schoon begin"
          },
          {
            "title": "Substraatmengsels",
            "description": "Vermindert verdichting en stabiliseert de lucht/waterbalans zonder te ontbinden.",
            "metric": "minder bezinking"
          }
        ]
      },
      "industry": {
        "eyebrow": "Industrie",
        "title": "Nuttige stabiliteit wanneer het proces geen verrassingen kan tolereren.",
        "description": "In isolatie-, filtratie-, absorptie- en lichtgewichtaggregaten fungeert perliet als een stabiele minerale matrix: lichtgewicht, poreus en compatibel met vele formuleringen.",
        "useCases": [
          {
            "title": "Industriële filtratie",
            "description": "Mineraal filterhulpmiddel voor processen waarbij zuiverheid en consistentie essentieel zijn.",
            "metric": "regelmatig gedrag"
          },
          {
            "title": "Bouw",
            "description": "Niet-afbreekbaar lichtgewicht vulmiddel voor mortels, pleisterwerk en lichtgewicht beton.",
            "metric": "minerale duurzaamheid"
          },
          {
            "title": "Cryogenica en temperatuur",
            "description": "Stabiele minerale isolatie voor veeleisende thermische omgevingen, afhankelijk van de kwaliteit.",
            "metric": "stabiele isolatie"
          }
        ]
      },
      "specs": {
        "eyebrow": "Indicatieve gegevens",
        "title": "Stabiliteit bij het documenteren dankzij kwaliteitscontrole.",
        "description": "Deze parameters structureren de toekomstige technische fiche voor klanten die herhaalbaarheid, traceerbaarheid en procescompatibiliteit vereisen.",
        "rows": [
          {
            "label": "Chemisch gedrag",
            "value": "Stabiel / inert",
            "note": "Te documenteren met kwaliteitsbladen en batchanalyses."
          },
          {
            "label": "Toxiciteit",
            "value": "Niet giftig",
            "note": "Mineraal materiaal te gebruiken bij stofbestrijding en PBM-richtlijnen."
          },
          {
            "label": "Ontleding",
            "value": "Niet-afbreekbaar",
            "note": "Vormt geen organische stof in het substraat."
          },
          {
            "label": "Indicatieve pH",
            "value": "Neutraal",
            "note": "Bereik gekwalificeerd op basis van cijfer en officiële analyse."
          }
        ],
        "cards": [
          {
            "title": "Herhaalbaar",
            "description": "Helpt bij het handhaven van vergelijkbaar gedrag van de ene mix tot de andere.",
            "icon": "gauge"
          },
          {
            "title": "Compatibel",
            "description": "Kan worden geïntegreerd in fertigatieprogramma's en mineraalformuleringen.",
            "icon": "flask"
          },
          {
            "title": "Opbergbaar",
            "description": "Een mineraal materiaal dat, mits beschermd en verpakt, gemakkelijk op te bergen is.",
            "icon": "packageCheck"
          }
        ]
      },
      "comparisons": {
        "eyebrow": "Vergelijkingen",
        "title": "Waarom stabiliteit het operationele risico verlaagt.",
        "description": "Een stabiel materiaal helpt boerderijen en industriële activiteiten parasitaire variabelen in hun systemen te beperken.",
        "cards": [
          {
            "title": "Perliet versus organische dragers",
            "leftLabel": "Biologisch",
            "left": "Kan in de loop van de tijd evolueren, fermenteren of compacteren.",
            "rightLabel": "Perliet",
            "right": "Blijft mineraal, inert en structureel."
          },
          {
            "title": "Perliet versus slecht gedraineerd medium",
            "leftLabel": "Zwakke afwatering",
            "left": "Risico op wortelverstikking en moeilijke irrigatie.",
            "rightLabel": "Stabiel perliet",
            "right": "Onderhoudt luchtholtes en vermindert verdichting."
          },
          {
            "title": "Perliet versus reactief vulmiddel",
            "leftLabel": "Reactieve vulstof",
            "left": "Kan het proces of de formulering wijzigen.",
            "rightLabel": "Inerte vulstof",
            "right": "Voegt een lager gewicht en porositeit toe zonder het systeem te verstoren."
          }
        ]
      },
      "why": {
        "eyebrow": "Waarom het ertoe doet",
        "title": "Stabiliteit schept industrieel vertrouwen.",
        "description": "Naarmate de volumes groeien, willen klanten voorspelbaar materiaal. Perlite beantwoordt aan die verwachting met een duidelijke fysieke rol en brede compatibiliteit.",
        "cards": [
          {
            "title": "Minder onzekerheid",
            "body": "Telers kunnen irrigatie, zuurstof en voeding nauwkeuriger beheren."
          },
          {
            "title": "Duidelijkere processen",
            "body": "Industriële gebruikers integreren een lichtgewicht vulmiddel zonder een ongewenste actieve variabele toe te voegen."
          },
          {
            "title": "Exportkwaliteit",
            "body": "Stabiliteit ondersteunt datasheets, kwaliteitsaudits en terugkerende contracten."
          }
        ]
      },
      "cta": {
        "title": "Heeft u stabiel perliet nodig voor uw formulering?",
        "description": "Stuur uw toepassing, pH, deeltjesgrootte, dichtheid en verpakkingsbeperkingen. Wij zullen een specificatiebasis voorbereiden."
      }
    },
    "technique": {
      "backLabel": "Terug naar product",
      "hero": {
        "eyebrow": "Technisch perliet",
        "title": "Lichtheid, porositeit en kalibratie voor veeleisende toepassingen.",
        "description": "De technische waarde van geëxpandeerd perliet komt voort uit de witte, lichtgewicht en zeer poreuze structuur. Het verbetert de beluchting, drainage, waterretentie en zuurstofvoorziening van de wortels, terwijl het isolatie, filtratie, cryogene werking, absorptie en lichtgewicht aggregaten ten goede komt.",
        "visualTitle": "Deeltjesgrootte en porositeit",
        "visualCaption": "Verschillende deeltjesgroottes helpen bij het afstemmen van beluchting, drainage, filtratie, isolatie en lichtheid."
      },
      "technical": {
        "eyebrow": "Technische uitleg",
        "title": "De korrelstructuur bepaalt de prestaties.",
        "description": "Na expansie fungeert elke korrel als een poreuze microstructuur. Afhankelijk van de deeltjesgrootte kan het lucht toevoegen aan een substraat, bruikbaar water vasthouden, een formulering lichter maken of bijdragen aan thermische isolatie.",
        "points": [
          {
            "title": "Zeer lichtgewicht",
            "description": "Een lage bulkdichtheid vermindert het gewicht en maakt het hanteren eenvoudiger.",
            "icon": "feather"
          },
          {
            "title": "Zeer poreus",
            "description": "Een spouwnetwerk dat nuttig is voor lucht, water, filtratie en isolatie.",
            "icon": "wind"
          },
          {
            "title": "Kalibreerbaar",
            "description": "Deeltjesgroottes aangepast aan zaailingen, substraten, industriële mengsels en filterhulpmiddelen.",
            "icon": "barChart"
          }
        ]
      },
      "agriculture": {
        "eyebrow": "Landbouw",
        "title": "Een lucht/water-architectuur voor wortels.",
        "description": "In hydrocultuur, kassen, kwekerijen, ontkieming en bodemverbetering helpt perliet een zuurstofrijk, doorlatend en minder compact wortelmilieu te behouden.",
        "useCases": [
          {
            "title": "Kassubstraten",
            "description": "Verbetert de mengselstructuur en ondersteunt een regelmatigere irrigatie.",
            "metric": "lucht/waterbalans"
          },
          {
            "title": "Kieming",
            "description": "Een lichtgewicht en schoon medium ter ondersteuning van de vestiging van jonge wortels.",
            "metric": "fijne ondersteuning"
          },
          {
            "title": "Bodemverbetering",
            "description": "Vermindert verdichting en creëert lucht- en waterwegen rond het wortelsysteem.",
            "metric": "beter ademende grond"
          }
        ]
      },
      "industry": {
        "eyebrow": "Industrie",
        "title": "Porositeit die verder reikt dan de landbouw.",
        "description": "Dezelfde fysieke eigenschappen verklaren industriële toepassingen: thermische isolatie, constructie, filtratie, toepassingen bij hoge temperaturen, cryogene techniek, absorptie en lichtgewicht aggregaten.",
        "useCases": [
          {
            "title": "Thermische isolatie",
            "description": "Licht geëxpandeerde korrel voor isolatiesystemen, vullingen en minerale formuleringen.",
            "metric": "verminderde geleidbaarheid"
          },
          {
            "title": "Filtratie en absorptie",
            "description": "Korrelporositeit en oppervlak ondersteunen scheidings- en absorptieprocessen.",
            "metric": "actieve microstructuur"
          },
          {
            "title": "Lichtgewicht aggregaten",
            "description": "Verlicht mortels, pleisterwerk en technisch beton met behoud van een minerale basis.",
            "metric": "lager gewicht"
          }
        ]
      },
      "specs": {
        "eyebrow": "Indicatieve gegevens",
        "title": "De deeltjesgrootte bepaalt het gebruik.",
        "description": "Toekomstige platen moeten elke kwaliteit verbinden met een deeltjesgroottebereik, bulkdichtheid en verwachte prestaties.",
        "rows": [
          {
            "label": "Bulkdichtheid",
            "value": "60 – 120 kg/m³",
            "note": "Afhankelijk van expansie en deeltjesgrootte."
          },
          {
            "label": "Deeltjesgrootte",
            "value": "0-1 / 1-3 / 3-6 mm",
            "note": "Indicatieve kwaliteiten aangepast aan de productie."
          },
          {
            "label": "Belangrijkste functies",
            "value": "Beluchting, drainage, retentie, isolatie",
            "note": "Dominante functie is afhankelijk van de rang."
          },
          {
            "label": "Formaten",
            "value": "Zakken, bigbags, bulk",
            "note": "specificeer gewichten, pallets en PDF-vellen."
          }
        ],
        "cards": [
          {
            "title": "Wortel lucht",
            "description": "Porositeit handhaaft luchtruimten rond de wortels.",
            "icon": "wind"
          },
          {
            "title": "Nuttige retentie",
            "description": "Een deel van het water blijft beschikbaar zonder dat het medium verzadigd raakt.",
            "icon": "droplets"
          },
          {
            "title": "Lichte isolatie",
            "description": "Uitgebreide korrel verlaagt de massa en draagt bij aan de thermische isolatie.",
            "icon": "thermometer"
          }
        ]
      },
      "comparisons": {
        "eyebrow": "Vergelijkingen",
        "title": "Prestaties komen van het juiste cijfer op de juiste plaats.",
        "description": "Technisch perliet moet worden gespecificeerd als een gekalibreerde component en mag niet worden behandeld als een generiek poeder.",
        "cards": [
          {
            "title": "Fijn versus grof perliet",
            "leftLabel": "Fijn",
            "left": "Handig voor zaailingen, fijne mengsels en sommige filtratietoepassingen.",
            "rightLabel": "Grof",
            "right": "Voegt meer macroporositeit, drainage en lichtheid toe."
          },
          {
            "title": "Perliet versus dichte grond",
            "leftLabel": "Dichte grond",
            "left": "Kan te veel water vasthouden en zuurstof beperken.",
            "rightLabel": "Perliet mengsel",
            "right": "Verbetert de ademhaling en waterverdeling."
          },
          {
            "title": "Perliet versus zwaar aggregaat",
            "leftLabel": "Zwaar aggregaat",
            "left": "Verhoogt de lading en vermindert de logistieke efficiëntie.",
            "rightLabel": "Licht aggregaat",
            "right": "Verlicht de formulering en verbetert de hantering."
          }
        ]
      },
      "why": {
        "eyebrow": "Waarom het ertoe doet",
        "title": "Een goed gespecificeerd technisch materiaal verkoopt beter.",
        "description": "Om boerderijen, ingenieursbureaus, industriële kopers en distributeurs te overtuigen, moet Barakah Perlite elke kwaliteit koppelen aan een meetbaar voordeel en een duidelijk gebruik.",
        "cards": [
          {
            "title": "Snellere beslissingen",
            "body": "Klanten begrijpen welk cijfer ze moeten aanvragen en waarom."
          },
          {
            "title": "Minder gebruiksfouten",
            "body": "De juiste deeltjesgrootte vermijdt mengsels die te drainerend, te fijn of te zwaar zijn."
          },
          {
            "title": "Premium positionering",
            "body": "Technische gegevens maken van een mineraalproduct een professionele oplossing."
          }
        ]
      },
      "cta": {
        "title": "Laten we de technische fiche voor uw gebruik samenstellen.",
        "description": "Beschrijf uw agrarische of industriële toepassing. Wij helpen u bij het kiezen van de deeltjesgrootte, het formaat en de te documenteren gegevens."
      }
    }
  },
  "agriculture": {
    "header": {
      "eyebrow": "Agritech-toepassingen",
      "title": "Een substraat ontworpen voor gezonde wortels, efficiënte irrigatie en stabiele teeltprestaties.",
      "description": "Barakah Perlite ondersteunt moderne telers, kassen, kwekerijen en hydrocultuursystemen met een natuurlijke, inerte en lichte oplossing."
    },
    "intro": {
      "visualTitle": "Kassen en grondloze gewassen",
      "visualCaption": "Moderne substraten voor kassen, hydrocultuur, kwekerijen en gewassen onder gecontroleerde irrigatie.",
      "eyebrow": "Agrarisch gebruik",
      "title": "Perliet geeft structuur aan moderne teeltsystemen.",
      "description": "Hydrocultuur, kwekerijen, kasgroenten of tuinbouwmengsels: Barakah-perliet helpt de drainage, lucht en retentie af te stemmen op de doelstellingen van de teler.",
      "checklist": [
        "Hydrocultuur en fertigatie",
        "Groentenkassen",
        "Kwekerijen en jonge planten",
        "Zware bodemverbetering",
        "Kieming en stekken",
        "Professionele tuinbouw"
      ]
    },
    "useCases": {
      "eyebrow": "Gebruiksgevallen",
      "title": "Landbouwtoepassingen: substraat, amendement en mengsels.",
      "description": "In de landbouw verbetert perliet de bodem- en substraatstructuur: wortelbeluchting, drainage, evenwichtige waterretentie en stabiele ondersteuning voor moderne gewassen.",
      "features": [
        {
          "title": "Hydrocultuur",
          "description": "Schone minerale ondersteuning voor hydrocultuurgewassen, geïrrigeerde systemen en gecontroleerde nutriëntencycli.",
          "icon": "droplets"
        },
        {
          "title": "Kassen",
          "description": "Licht substraat voor beschermde gewassen met betere drainage en worteloxygenatie.",
          "icon": "leaf"
        },
        {
          "title": "Kwekerijen",
          "description": "Bevordert een snelle beworteling en beperkt verdichting tijdens gevoelige fasen.",
          "icon": "sprout"
        },
        {
          "title": "Bodemverbetering",
          "description": "Maakt zware grond lichter, vermindert verdichting en verbetert het vochtbeheer.",
          "icon": "mountain"
        },
        {
          "title": "Kieming",
          "description": "Fijne, stabiele structuur voor een uniforme opkomst van zaailingen en jonge planten.",
          "icon": "shield"
        },
        {
          "title": "Substraatmengsels",
          "description": "Stabiele component voor premium mengsels: bloemen, bessen, kruiden en sierplanten.",
          "icon": "flask"
        }
      ]
    },
    "benefits": {
      "eyebrow": "Voordelen voor de teler",
      "title": "Duidelijkere gewassen, beter bediende wortels.",
      "description": "In een goed beheerd systeem wordt perliet een consistentiemiddel: schonere irrigatie, gezondere beworteling en een stabieler medium.",
      "features": [
        {
          "title": "Actievere wortels",
          "description": "Een betere toegang tot zuurstof ondersteunt de wortelkracht en versnelt de herstelfasen.",
          "icon": "sprout"
        },
        {
          "title": "Minder verdichting",
          "description": "De minerale structuur houdt de mengsels opener, zelfs bij herhaalde irrigatiecycli.",
          "icon": "wind"
        },
        {
          "title": "Efficiëntere irrigatie",
          "description": "Perliet houdt nuttig vocht vast terwijl overtollig water wordt afgevoerd, waardoor waterstress wordt verminderd.",
          "icon": "droplets"
        },
        {
          "title": "Regelmatige oxygenatie",
          "description": "Een beter ademend substraat vermindert omstandigheden die wortelstress bevorderen.",
          "icon": "leaf"
        }
      ]
    },
    "comparisons": {
      "eyebrow": "Vergelijkingen",
      "title": "Kies om de juiste reden voor perliet.",
      "description": "Perliet is geen magische belofte: het is een fysiek materiaal dat bij juiste dosering het substraatgedrag verbetert.",
      "cards": [
        {
          "title": "Perliet versus aarde",
          "body": "Perliet vervangt niet altijd de grond: het transformeert deze. Het vermindert de verdichting, voegt lucht toe en stabiliseert vocht rond de wortels."
        },
        {
          "title": "Perliet versus kokos",
          "body": "Kokospeat houdt water sterk vast. Perliet zorgt voor meer beluchting en helpt bij het afstemmen van de porositeit in professionele mengsels."
        },
        {
          "title": "Perliet in mengsels",
          "body": "Gecombineerd met turf, kokos, compost of minerale media wordt het een precisiehefboom voor drainage, zuurstof en irrigatie."
        }
      ]
    },
    "cta": {
      "title": "Kassen, boerderijen en kwekerijen: vraag een deeltjesgrootteadvies aan.",
      "description": "Deel uw gewas, irrigatiesysteem, volumes en doelstellingen. Barakah Perlite zal een gebruiksgericht antwoord opstellen, niet alleen een zakprijs."
    }
  },
  "industry": {
    "header": {
      "eyebrow": "Industriële toepassingen",
      "title": "Lichte, poreuze en chemisch stabiele perliet voor veeleisende technische toepassingen.",
      "description": "Van isolatie tot filtratie: geëxpandeerde perliet biedt prestaties, lage massa en minerale stabiliteit voor industriële processen."
    },
    "intro": {
      "eyebrow": "Industriële toepassingen",
      "title": "Een discreet materiaal, essentieel in veeleisende systemen.",
      "description": "De industriële waarde van Perliet komt voort uit de combinatie van lage dichtheid, stabiliteit, porositeit, isolatie en compatibiliteit met veel matrices.",
      "checklist": [
        "Thermische en akoestische isolatie",
        "Filterhulpmiddel voor industriële vloeistoffen",
        "Vuurvaste materialen en materialen voor hoge temperaturen",
        "Absorptie van olie en chemicaliën",
        "Cryogene isolatie",
        "Lichtgewicht aggregaten en minerale formuleringen"
      ],
      "visualTitle": "Perliet voor industriële systemen",
      "visualCaption": "Een lichtgewicht en stabiel materiaal voor isolatie, filtratie, technische mengsels en bouwtoepassingen."
    },
    "domains": {
      "eyebrow": "Velden",
      "title": "Zeven industriële toepassingen, één prestatielogica.",
      "description": "De poreuze structuur, lichtheid en chemische stabiliteit maken het geschikt voor veeleisende industriële specificaties.",
      "features": [
        {
          "title": "Bouw isolatie",
          "description": "Vulstoffen, technische mortels en lichtgewicht beton om het thermisch en akoestisch comfort te verbeteren.",
          "icon": "building"
        },
        {
          "title": "Filtratie",
          "description": "Mineraal filterhulpmiddel voor het zuiveren van vloeistoffen, oliën en industriële stromen.",
          "icon": "waves"
        },
        {
          "title": "Chemische industrie",
          "description": "Inerte ondersteuning voor formuleringen, technische vulstoffen en processen die stabiliteit vereisen.",
          "icon": "beaker"
        },
        {
          "title": "Hoge temperatuur",
          "description": "Technische materialen voor hoge temperaturen, vuurvaste componenten en thermische beveiligingen.",
          "icon": "thermometer"
        },
        {
          "title": "Absorptie",
          "description": "Poreus granulaat voor het absorberen van oliën, vloeistoffen en industriële lekkages.",
          "icon": "packageCheck"
        },
        {
          "title": "Cryogenen",
          "description": "Isolatie van tanks en omgevingen bij zeer lage temperaturen dankzij de lichtgewicht structuur.",
          "icon": "snowflake"
        },
        {
          "title": "Lichtgewicht aggregaten",
          "description": "Gewichtsreductie voor minerale formuleringen, mortels, panelen en technische systemen.",
          "icon": "boxes"
        },
        {
          "title": "Visie exporteren",
          "description": "Kwaliteitspositionering voor industriële partners in Marokko, Afrika en Europa.",
          "icon": "globe"
        }
      ]
    },
    "technical": {
      "eyebrow": "Technische aanpak",
      "title": "De juiste gegevens vóór de juiste bestelling.",
      "description": "Het industriële aanbod moet de deeltjesgrootte, dichtheid, vocht, zuiverheid, thermische geleidbaarheid, verpakking, transport en kwaliteitsdocumentatie specificeren.",
      "cta": "Praat met het team"
    },
    "cta": {
      "title": "Heeft u een industriële specificatie?",
      "description": "Stuur uw beperkingen: deeltjesgrootte, dichtheid, volume, land van levering, eindgebruik en kwaliteitseisen. Het team zal een duidelijk technisch antwoord voorbereiden."
    }
  },
  "about": {
    "header": {
      "eyebrow": "Over",
      "title": "Een Marokkaans merk dat is gebouwd om vertrouwen te wekken op technische markten.",
      "description": "Barakah Perlite heeft tot doel Marokkaans perliet te verheffen van mineraalproduct tot gedocumenteerde, betrouwbare en exportklare professionele oplossing."
    },
    "story": {
      "eyebrow": "Merk verhaal",
      "title": "Van Marokkaans mineraalgebied naar een vertrouwde industrie.",
      "description": "Barakah Perlite is een Marokkaans bedrijf gespecialiseerd in de productie en commercialisering van perliet. Het is haar rol om de agrarische en industriële sectoren te voorzien van stabiel, schoon en hoogwaardig materiaal, ondersteund door leesbare kwaliteit en serieuze commerciële relaties.",
      "body": "De ambitie is duidelijk: telers, landschapsbedrijven, distributeurs en industriële kopers een betrouwbare Marokkaanse partner bieden voor lokale levering en exportprojecten.",
      "visualTitle": "Team, fabriek en grondstof",
      "visualCaption": "Een organisatie opgebouwd rond de industriële site, grondstoffen, kwaliteitscontrole en technische documentatie."
    },
    "values": {
      "eyebrow": "Toezeggingen",
      "title": "Kwaliteit, betrouwbaarheid, duurzaamheid: de drie proofs to build.",
      "description": "De site bereidt een internationale aanwezigheid voor waar elke belofte kan worden ondersteund door gegevensbladen, foto's, certificeringen, analyses en processen.",
      "features": [
        {
          "title": "Natuurlijke hulpbron",
          "description": "Een materiaal van vulkanische oorsprong dat gewaardeerd wordt door een technische en verantwoorde aanpak.",
          "icon": "mountain"
        },
        {
          "title": "Betrouwbare kwaliteit",
          "description": "Een ambitie voor batchconsistentie, traceerbaarheid en duidelijke documentatie voor klanten.",
          "icon": "shield"
        },
        {
          "title": "Duurzame landbouw",
          "description": "Substraten die helpen om water, lucht en wortels beter te beheren in moderne gewassen.",
          "icon": "leaf"
        },
        {
          "title": "Visie exporteren",
          "description": "Een Marokkaanse positionering die klaar is om de Afrikaanse, Europese en internationale markten te betreden.",
          "icon": "globe"
        }
      ]
    },
    "focusCards": [
      {
        "title": "Landbouw",
        "body": "Bedien telers, kassen, kwekerijen en distributeurs met een meer technisch natuurlijk substraat."
      },
      {
        "title": "Industrie",
        "body": "Pak isolatie, filtratie, absorptie en toepassingen bij hoge temperaturen aan met duidelijke productgegevens."
      },
      {
        "title": "Duurzaamheid",
        "body": "Promoot een duurzame minerale hulpbron en ondersteun klanten in de richting van efficiëntere oplossingen."
      }
    ]
  },
  "contactPage": {
    "header": {
      "eyebrow": "Contact",
      "title": "Bespreek uw perlietbehoefte met het Barakah Perlite-team.",
      "description": "Vraag een offerte, technische fiche of toepassingsadvies aan voor landbouw, industrie, filtratie of distributie."
    },
    "formIntro": {
      "eyebrow": "Professionele vorm",
      "title": "Vertel ons over uw behoefte.",
      "description": "Deel uw sector, gewenste hoeveelheid, voorkeursformaat en leveringsland. Wij begeleiden u snel naar de juiste oplossing."
    },
    "detailsHeading": "Contactgegevens",
    "whatsapp": "Verkoop WhatsApp",
    "mapTitle": "Kaart & toegang",
    "mapCaption": "Kantoor: N°5 ET.3 Imm. El Khiati, Avenue Hassan II, Taroudant. Fabrieksproject: Zone industrielle Ahl Rmel, Oulad Teima, Taroudant.",
    "form": {
      "name": "Naam",
      "company": "Bedrijf",
      "phone": "Telefoon",
      "email": "E-mail",
      "sector": "Sector",
      "quantity": "Benodigde hoeveelheid",
      "message": "Bericht",
      "requiredMark": "*",
      "sectorPlaceholder": "Selecteer",
      "quantityPlaceholder": "Voorbeeld: 10 ton, 500 zakken, 2 bigbags",
      "messagePlaceholder": "Beschrijf uw toepassing, gewenste granulometrie, leveringsland of technische vereisten.",
      "note": "Commerciële reactie binnen 24-48 werkuren na interne validatie.",
      "submit": "Aanvraag verzenden",
      "loading": "Verzenden...",
      "success": "Aanvraag ontvangen",
      "error": "De aanvraag kan momenteel niet worden verzonden. Probeer WhatsApp of e-mail.",
      "errors": {
        "name": "Naam is verplicht.",
        "email": "E-mail is verplicht.",
        "invalidEmail": "Ongeldig e-mailadres.",
        "phone": "Telefoon is verplicht.",
        "sector": "Sector is verplicht.",
        "message": "Bericht is verplicht."
      },
      "sectors": [
        "Landbouw",
        "Industrie",
        "Bouw",
        "Filtratie",
        "Distributie / export"
      ]
    }
  },
  "gallery": {
    "header": {
      "eyebrow": "Galerij",
      "title": "Beelden van product, toepassingen en toekomstige industriële referenties.",
      "description": "Een premium ruimte voor toekomstige Barakah Perlite-fotografie: materiaal, kassen, fabrieken, verpakkingen en industriële toepassingen met duidelijke, op categorieën gebaseerde navigatie."
    },
    "categories": [
      "Landbouw",
      "Industrie",
      "Product",
      "Fabriek"
    ],
    "items": [
      {
        "category": "Landbouw",
        "title": "Wortels in perlietsubstraat",
        "caption": "Kas-, hydrocultuur- en kweektoepassingen die de lucht/waterbalans rond de wortels verbeteren."
      },
      {
        "category": "Product",
        "title": "Gekalibreerde witte korrels",
        "caption": "Geëxpandeerde korrels met poreuze structuur voor substraten, technische blends en industriële toepassingen."
      },
      {
        "category": "Industrie",
        "title": "Technische toepassingen",
        "caption": "Isolatie-, filtratie-, absorptie- en lichtgewicht aggregaten voor veeleisende technische omgevingen."
      },
      {
        "category": "Fabriek",
        "title": "Transformatie lijn",
        "caption": "Transformatie, kwaliteitscontrole, opslag en verpakking ontworpen voor professionele klanten."
      },
      {
        "category": "Landbouw",
        "title": "Proeven en veldresultaten",
        "caption": "Monitoring van wortelontwikkeling, irrigatieprotocollen en veldresultaten."
      },
      {
        "category": "Product",
        "title": "Exportverpakkingen",
        "caption": "Zakken, bigbags, pallets en productmarkeringen voor agrarische, industriële en exportkanalen."
      }
    ],
    "noteTitle": "Professionele fotobibliotheek",
    "noteBody": "De slots zijn klaar voor geoptimaliseerde afbeeldingen, goedgekeurde bijschriften, SEO-tags en meertalige inhoud."
  },
  "experience": {
    "header": {
      "eyebrow": "Ervaring",
      "title": "Resultaten uit het veld, samenwerkingen en technische toepassingen.",
      "description": "Een pagina die is ontworpen om samenwerkingen, landbouwproeven, klantverhalen en industriële toepassingen op een gestructureerde, geloofwaardige manier te presenteren aan internationale kopers."
    },
    "cards": [
      {
        "kicker": "Samenwerkingen",
        "title": "Agrarische en industriële partners",
        "body": "voeg goedgekeurde samenwerkingen toe met boerderijen, distributeurs, laboratoria, ingenieursbureaus of industriële exploitanten.",
        "metric": "netwerk"
      },
      {
        "kicker": "Veldresultaten",
        "title": "Gewas- en wortelmonitoring",
        "body": "integreer echte metingen voor beluchting, irrigatie, verdichting en wortelontwikkeling.",
        "metric": "bewijs"
      },
      {
        "kicker": "Klanten",
        "title": "Verifieerbare gebruiksverhalen",
        "body": "bereid goedgekeurde klantcases voor met sector, volume, uitdaging en waargenomen resultaat.",
        "metric": "vertrouwen"
      },
      {
        "kicker": "Landbouwproeven",
        "title": "Hydrocultuur, kassen en kwekerijen",
        "body": "documenteer gewasprotocollen, gemengde substraten, kiemkracht en irrigatie-efficiëntie.",
        "metric": "agritech"
      },
      {
        "kicker": "Industrie",
        "title": "Isolatie, filtratie en absorptie",
        "body": "voeg gekwalificeerde industriële toepassingen toe met technische beperkingen, kwaliteiten en verpakkingen.",
        "metric": "technisch"
      }
    ]
  },
  "adminContent": {
    "eyebrow": "Intern prototype",
    "title": "Barakah Perlite inhoudbeheerder.",
    "description": "Niet-functionele interface om toekomstig contentbeheer in te kaderen. Er zijn geen echte toegang, bewerkingen of gevoelige gegevens aan verbonden.",
    "securityNote": "Alleen visueel prototype: de toekomstige versie moet vóór productie op de server worden beveiligd.",
    "login": {
      "title": "Login-mockup",
      "email": "E-mailadres van beheerder",
      "password": "Wachtwoord",
      "button": "Inloggen uitgeschakeld"
    },
    "dashboard": {
      "title": "Inhoudsdashboard",
      "stats": [
        "Galerijafbeeldingen",
        "Onderschriften",
        "Ervaringen",
        "Samenwerkingen"
      ]
    },
    "managers": [
      {
        "title": "Galerijafbeeldingsbeheerder",
        "description": "Mockup voor het uploaden, categoriseren en goedkeuren van toekomstige landbouw-, industrie-, product- en fabrieksafbeeldingen.",
        "items": [
          "Afbeelding uploaden",
          "Categorieën",
          "Publicatiestatus"
        ]
      },
      {
        "title": "Ondertitelingsbeheerder",
        "description": "Mockup voor het voorbereiden van meertalige bijschriften, SEO-beschrijvingen en korte teksten.",
        "items": [
          "FR / EN / AR",
          "Afbeelding-SEO",
          "Goedkeuring van inhoud"
        ]
      },
      {
        "title": "Ervaringsmanager",
        "description": "Mockup voor het structureren van veldproeven, klantresultaten en technische toepassingen.",
        "items": [
          "Landbouwproeven",
          "Klantgevallen",
          "Industrieel gebruik"
        ]
      },
      {
        "title": "Samenwerkingsmanager",
        "description": "Mockup voor partners, toestemmingsstatus en publiceerbare bewijspunten.",
        "items": [
          "Partners",
          "Machtigingen",
          "Documenten"
        ]
      }
    ],
    "todos": [
      "echte server-side authenticatie",
      "beschermde middleware",
      "database",
      "opslag voor het uploaden van afbeeldingen",
      "autorisatie van de beheerdersrol",
      "API-bescherming",
      "echte KRUI"
    ]
  },
  "admin": {
    "header": {
      "eyebrow": "Beheerder",
      "title": "Barakah Perlite-dashboard.",
      "description": "Basis klaar voor de toekomstige toepassing: offertes, producten, content, CRM en meertalige administratie."
    },
    "modules": [
      {
        "title": "Offertebeheer",
        "description": "connect formulieren, verkooppijplijn, statussen, meldingen en CRM-export.",
        "icon": "fileText"
      },
      {
        "title": "Productcatalogus",
        "description": "beheer deeltjesgroottes, PDF-vellen, verpakkingen, voorraad en afbeeldingen.",
        "icon": "barChart"
      },
      {
        "title": "Veilige toegang",
        "description": "voeg authenticatie, rollen, activiteitenlogboek en beheerdersrechten toe.",
        "icon": "lock"
      },
      {
        "title": "Klanten",
        "description": "houd accounts, verzoeken, documenten, contracten en contactgeschiedenis bij.",
        "icon": "users"
      }
    ]
  },
  "client": {
    "header": {
      "eyebrow": "Klantenportaal",
      "title": "Een toekomstige ruimte voor klanten, distributeurs en partners.",
      "description": "De site is opgezet als een evolutieve applicatie: documenten, offertes, bestellingen, support en meldingen kunnen later worden toegevoegd zonder de basis opnieuw op te bouwen."
    },
    "modules": [
      {
        "title": "Het bijhouden van offertes",
        "description": "verzoeken, aanbiedingen, statussen, volumes, data en contacten weergeven.",
        "icon": "fileCheck"
      },
      {
        "title": "Documenten",
        "description": "download technische fiches, certificaten, facturen en kwaliteitsdocumenten.",
        "icon": "download"
      },
      {
        "title": "Bestellingen",
        "description": "volg verpakkingen, verzendingen, geschiedenis en nabestellingen.",
        "icon": "packageSearch"
      },
      {
        "title": "Toegang voor klanten",
        "description": "voeg authenticatie, bedrijfsprofielen, machtigingen en meldingen toe.",
        "icon": "lock"
      }
    ]
  }
},
  ar: {
    localeName: "العربية",
    direction: "rtl",
    meta: {
      "/": {
        title: "البيرلايت المغربي للزراعة والصناعة | Barakah Perlite",
        description:
          "تحول Barakah Perlite موردا معدنیا طبیعیا إلى ركيزة عالية الجودة للزراعة والهيدروبونيك والبستنة والبناء والترشيح والصناعة في المغرب.",
      },
      "/produit": {
        title: "منتج البيرلايت الممدد | Barakah Perlite",
        description:
          "اكتشف البيرلايت الممدد من Barakah: صخر بركاني طبيعي، خفيف، معقم، خامل، pH متعادل، بتهوية ممتازة واحتفاظ جيد بالماء.",
      },
      "/agriculture": {
        title: "بيرلايت زراعي وبستاني | Barakah Perlite",
        description:
          "بيرلايت زراعي في المغرب للهيدروبونيك، البيوت المحمية، المشاتل، الإنبات، البستنة وتحسين التربة.",
      },
      "/green-space": {
        title: "بيرلايت للمساحات الخضراء | Barakah Perlite",
        description:
          "بيرلايت Barakah الممدد للحدائق والمشاتل والمساحات الخضراء العامة والتشجير الحضري والملاعب والخلطات الزراعية التجميلية.",
      },
      "/industrie": {
        title: "بيرلايت صناعي | Barakah Perlite",
        description:
          "بيرلايت صناعي في المغرب للعزل، الترشيح، الصناعة الكيميائية، الحرارة العالية، الامتصاص، التطبيقات المبردة والركام الخفيف.",
      },
      "/a-propos": {
        title: "من نحن | Barakah Perlite",
        description:
          "Barakah Perlite شركة مغربية متخصصة في البيرلايت الطبيعي للزراعة والصناعة والبناء والترشيح، برؤية مستدامة جاهزة للتصدير.",
      },
      "/contact": {
        title: "اتصال وطلب عرض سعر | Barakah Perlite",
        description:
          "تواصل مع Barakah Perlite لطلب عرض سعر للبيرلايت الزراعي أو البستاني أو الهيدروبونيك أو الصناعي في المغرب.",
      },
      "/privacy-policy": {
        title: "سياسة الخصوصية | Barakah Perlite",
        description:
          "سياسة الخصوصية لموقع barakahperlite.com: بيانات الاتصال وطلبات العروض وأغراض المعالجة والاحتفاظ والأمان وحقوق المستخدم.",
      },
      "/cookie-policy": {
        title: "سياسة ملفات تعريف الارتباط | Barakah Perlite",
        description:
          "سياسة ملفات تعريف الارتباط لموقع barakahperlite.com: الملفات الأساسية والتحليلات المحتملة والخدمات الخارجية وتحكم المستخدم.",
      },
      "/terms": {
        title: "الشروط والأحكام | Barakah Perlite",
        description:
          "الشروط والأحكام الخاصة بموقع barakahperlite.com: استخدام الموقع ومعلومات المنتجات والبيانات التقنية وطلبات العروض والملكية الفكرية.",
      },
      "/admin": {
        title: "مساحة الإدارة التجريبية | Barakah Perlite",
        description:
          "مساحة مبدئية للوحة تحكم Barakah Perlite المستقبلية لإدارة العروض والمنتجات والعملاء وCRM والمحتوى متعدد اللغات.",
      },
      "/admin/content": {
        title: "نموذج إدارة المحتوى | Barakah Perlite",
        description:
          "نموذج واجهة داخلي غير وظيفي لإدارة معرض Barakah Perlite والتجارب والتعاونات والمحتوى مستقبلا.",
      },
      "/client": {
        title: "بوابة العميل التجريبية | Barakah Perlite",
        description:
          "مساحة مبدئية لبوابة عملاء Barakah Perlite المستقبلية للعروض والطلبات والوثائق التقنية والدعم.",
      },
      "/portal/login": {
        title: "بوابة العميل | Barakah Perlite",
        description:
          "تسجيل دخول آمن إلى بوابة عملاء Barakah Perlite للوصول الخاص المصرح به.",
      },
    } satisfies LocalizedMeta,
    nav: {
      aria: "التنقل الرئيسي",
      mobileAria: "تنقل الهاتف",
      homeLabel: "Barakah Perlite - الرئيسية",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      language: "اللغة",
      quoteShort: "عرض سعر",
      items: [
        { label: "المنتج", href: "/produit" },
        { label: "الزراعة", href: "/agriculture" },
        { label: "المساحات الخضراء", href: "/green-space" },
        { label: "الصناعة", href: "/industrie" },
        { label: "من نحن", href: "/a-propos" },
        { label: "اتصال", href: "/contact" },
      ] as Array<{ label: string; href: RouteKey }>,
    },
    common: {
      ...common,
      technicalQuote: "عرض سعر تقني",
      quoteRequest: "طلب عرض سعر",
      productData: "عرض بيانات المنتج",
      technicalTableCaption:
        "الورقة التقنية لبيرلايت Barakah",
      technicalTableColumns: {
        parameter: "المعيار",
        value: "القيمة",
        note: "ملاحظة",
      },
      placeholderVisualTodo:
        "تصور مؤسسي من Barakah Perlite مخصص لعرض المنتج.",
      processSteps: [
        {
          step: "01",
          title: "اختيار المعدن",
          description:
            "مراقبة المادة الخام وتتبع الدفعات قبل التحويل.",
        },
        {
          step: "02",
          title: "التمدد الحراري",
          description:
            "يتم تسخين الصخر لتحرير الماء المرتبط وتكوين بنية بيضاء وخفيفة ومسامية.",
        },
        {
          step: "03",
          title: "المعايرة",
          description:
            "فرز الحبيبات حسب المقاسات لتناسب الزراعة والصناعة والترشيح.",
        },
        {
          step: "04",
          title: "مراقبة الجودة",
          description:
            "التحقق من الكثافة، المقاس الحبيبي، النظافة، الثبات والتعبئة.",
        },
      ] satisfies ProcessTranslation[],
    },
    whatsapp: {
      aria: "تواصل مع Barakah Perlite عبر واتساب",
    },
    footer: {
      description:
        "شركة مغربية متخصصة في إنتاج وتسويق البيرلايت للزراعة والصناعة والبناء والترشيح.",
      tagline: "المغرب · الزراعة · الصناعة · التصدير",
      navigation: "التنقل",
      contact: "اتصال",
      linkedin: "لينكدإن",
      copyright: "حقوق النشر © 2026 Barakah Perlite. جميع الحقوق محفوظة.",
      links: [
        { label: "المنتج", href: "/produit" },
        { label: "الزراعة", href: "/agriculture" },
        { label: "المساحات الخضراء", href: "/green-space" },
        { label: "الصناعة", href: "/industrie" },
        { label: "اتصال", href: "/contact" },
        { label: "بوابة العميل", href: "/portal/login" },
        { label: "سياسة الخصوصية", href: "/privacy-policy" },
        { label: "سياسة ملفات الارتباط", href: "/cookie-policy" },
        { label: "الشروط والأحكام", href: "/terms" },
      ] as Array<{ label: string; href: RouteKey }>,
    },
    legal: {
      updatedLabel: "آخر تحديث",
      updatedValue: "ماي 2026",
      reviewNotice:
        "يقدم هذا المحتوى معلومات عامة تخص موقع Barakah Perlite.",
      privacy: {
        header: {
          eyebrow: "سياسة الخصوصية",
          title: "حماية البيانات وطلبات التواصل.",
          description:
            "توضح هذه السياسة كيف يمكن لشركة Barakah Perlite معالجة المعلومات المرسلة عبر موقع barakahperlite.com.",
        },
        sections: [
          {
            title: "من نحن",
            body:
              "Barakah Perlite شركة مغربية تنشط في البيرلايت للاستعمالات الزراعية والصناعية. الموقع المعني بهذه السياسة هو barakahperlite.com. لأي سؤال متعلق بالبيانات الشخصية يمكن التواصل عبر info@barakahperlite.com.",
          },
          {
            title: "البيانات التي قد يتم جمعها",
            body:
              "عند استعمال نموذج الاتصال أو طلب عرض سعر، قد نتلقى المعلومات التي تختار إرسالها.",
            bullets: [
              "الاسم واللقب",
              "اسم الشركة",
              "البريد الإلكتروني",
              "رقم الهاتف",
              "قطاع النشاط",
              "الكمية أو الحاجة التقديرية",
              "الرسالة والمعلومات المرتبطة بطلبك",
            ],
          },
          {
            title: "أسباب جمع البيانات",
            body:
              "يمكن استعمال هذه البيانات للرد على الاستفسارات، إعداد عروض تجارية، تقديم توجيه تقني، تنظيم المتابعة وتحسين جودة الخدمة.",
          },
          {
            title: "مدة الاحتفاظ بالبيانات",
            body:
              "يتم الاحتفاظ بالبيانات للمدة اللازمة لمعالجة الطلبات، وتدبير المتابعة التجارية، والالتزام بالمتطلبات المطبقة.",
          },
          {
            title: "حقوق المستخدم",
            body:
              "حسب القانون المطبق، قد تكون لديك حقوق الوصول أو التصحيح أو الاعتراض أو الحذف أو تقييد المعالجة عبر التواصل مع Barakah Perlite.",
          },
          {
            title: "إجراءات الأمان",
            body:
              "تعتمد Barakah Perlite تدابير معقولة لحماية المعلومات المتوصل بها من الوصول غير المصرح به أو الفقدان أو سوء الاستعمال.",
          },
          {
            title: "التواصل",
            body:
              "لأي سؤال حول هذه السياسة، تواصل مع Barakah Perlite عبر info@barakahperlite.com.",
          },
        ],
      },
      cookies: {
        header: {
          eyebrow: "سياسة ملفات تعريف الارتباط",
          title: "استعمال ملفات الارتباط على barakahperlite.com.",
          description:
            "توضح هذه السياسة فئات ملفات تعريف الارتباط التي يمكن استعمالها على موقع Barakah Perlite.",
        },
        sections: [
          {
            title: "ما هي ملفات تعريف الارتباط؟",
            body:
              "ملف تعريف الارتباط هو ملف صغير يحفظه الموقع على جهازك لتمكين وظائف معينة أو حفظ التفضيلات أو قياس استعمال الموقع.",
          },
          {
            title: "الملفات الأساسية",
            body:
              "قد يستعمل الموقع ملفات ضرورية للتشغيل التقني والأمان والتنقل وتذكر بعض الاختيارات مثل اللغة المحددة.",
          },
          {
            title: "ملفات التحليلات",
            body:
              "قد يستعمل الموقع قياسا محدودا للجمهور لفهم الصفحات التي تمت زيارتها والتنزيلات والتفاعلات المهمة بهدف تحسين جودة الخدمة.",
          },
          {
            title: "الخدمات الخارجية",
            body:
              "قد تعتمد بعض الخدمات الخارجية الضرورية لتشغيل الموقع أو الخرائط أو التواصل أو قياس الجمهور قواعد الخصوصية الخاصة بها.",
          },
          {
            title: "كيفية التحكم في ملفات الارتباط",
            body:
              "يمكنك التحكم في ملفات الارتباط أو حذفها من إعدادات المتصفح. قد يؤدي حظر الملفات الأساسية إلى الحد من بعض وظائف الموقع.",
          },
          {
            title: "التواصل",
            body:
              "لأي سؤال حول سياسة ملفات الارتباط، تواصل مع Barakah Perlite عبر info@barakahperlite.com.",
          },
        ],
      },
      terms: {
        header: {
          eyebrow: "الشروط والأحكام",
          title: "شروط استعمال الموقع.",
          description:
            "تنظم هذه الشروط استعمال موقع barakahperlite.com والمعلومات المنشورة من طرف Barakah Perlite.",
        },
        sections: [
          {
            title: "استعمال الموقع",
            body:
              "يتطلب الوصول إلى barakahperlite.com استعمالا مطابقا للقوانين المطبقة، دون محاولة تعديل الموقع أو استغلاله بشكل مفرط أو التأثير على تشغيله.",
          },
          {
            title: "إخلاء مسؤولية معلومات المنتجات",
            body:
              "المعلومات المتعلقة بالبيرلايت والتطبيقات والفوائد تقدم لأغراض إعلامية عامة ولا تعوض التحقق التقني الملائم للمشروع أو الركيزة أو الدفعة أو سياق الاستعمال.",
          },
          {
            title: "إخلاء مسؤولية البيانات التقنية",
            body:
              "قد تكون الجداول والقيم ومراجع الأوراق التقنية إرشادية أو خاضعة للتحقق. يجب تأكيد الخصائص النهائية عبر ورقة تقنية رسمية أو عينة أو عرض مكتوب.",
          },
          {
            title: "طلبات العروض",
            body:
              "إرسال نموذج أو طلب عرض لا يشكل طلبية نهائية. يجب تأكيد أي عرض تجاري أو توفر أو أجل أو سعر أو شرط لوجستي كتابيا من طرف Barakah Perlite.",
          },
          {
            title: "الملكية الفكرية",
            body:
              "محتوى الموقع، بما في ذلك النصوص والمرئيات والهوية البصرية والشعارات والبنية، محمي. يمنع النسخ أو الاستعمال غير المصرح به دون موافقة كتابية مسبقة.",
          },
          {
            title: "حدود المسؤولية",
            body:
              "تسعى Barakah Perlite إلى نشر معلومات موثوقة لكنها لا تضمن خلو الموقع من الأخطاء أو الانقطاعات. يبقى المستخدم مسؤولا عن التحقق من ملاءمة المعلومات لاستعماله الخاص.",
          },
          {
            title: "معلومات الاتصال",
            body:
              "لأي سؤال حول هذه الشروط، تواصل مع Barakah Perlite عبر info@barakahperlite.com.",
          },
        ],
      },
    },
    applications: [
      {
        title: "الزراعة",
        description:
          "ركائز بستانية، هيدروبونيك، مشاتل، بيوت محمية وزراعات بدون تربة عالية الدقة.",
        icon: "sprout",
        href: "/agriculture",
        accent: "emerald",
      },
      {
        title: "الصناعة",
        description:
          "عزل وترشيح وامتصاص وحرارة عالية وركام خفيف لدفاتر التحملات التقنية.",
        icon: "factory",
        href: "/industrie",
        accent: "sand",
      },
      {
        title: "المساحات الخضراء",
        description:
          "بستنة مهنية، تربة حضرية، مسطحات خضراء، غرس وخلطات تصريف لجذور أفضل تهوية.",
        icon: "leaf",
        href: "/agriculture",
        accent: "clay",
      },
    ] satisfies ApplicationTranslation[],
    technicalSpecs: [
      {
        label: "الأصل",
        value: "صخر بركاني طبيعي",
        note: "القيم النهائية تؤكد حسب المحجر والدفعة.",
      },
      {
        label: "pH",
        value: "6 – 8",
        note: "طابع متعادل حسب الدرجة والتطبيق.",
      },
      {
        label: "الكثافة الظاهرية",
        value: "60 – 100 kg/m³",
        note: "نطاق إرشادي حسب المقاس الحبيبي والتمدد.",
      },
      {
        label: "التوصيل الحراري",
        value: "0.04 – 0.06 W/mK",
        note: "أداء عزل إرشادي.",
      },
      {
        label: "المقاس الحبيبي",
        value: "1–4 / 3–6 / <1.5 mm / 50–100 µm",
        note: "درجات للزراعة والصناعة والترشيح.",
      },
      {
        label: "الثبات",
        value: "خامل، غير قابل للاشتعال، قابل لإعادة الاستخدام",
        note: "مادة معدنية متينة وغير تفاعلية.",
      },
      {
        label: "التعبئة",
        value: "أكياس 100 لتر، بيغ باغ 1 م³، سائب",
        note: "صيغ لوجستية تؤكد حسب الطلب.",
      },
    ] satisfies TechnicalSpecTranslation[],
    home: {
      hero: {
        eyebrow: "بيرلايت مغربي · زراعة دقيقة",
        title: "البيرلايت المغربي لخدمة زراعة أكثر أداء",
        subtitle:
          "ركيزة طبيعية خفيفة ومستدامة لتحسين التهوية واحتفاظ الماء ونمو الجذور.",
        ctaPrimary: "طلب عرض سعر",
        ctaSecondary: "اكتشف البيرلايت",
        visualLabel: "نظام معدني أطلسي",
        cardOneKicker: "ركيزة",
        cardOneTitle: "متعادل وخامل",
        cardTwoKicker: "الجذور",
        cardTwoTitle: "هواء + ماء",
      },
      stats: [
        {
          value: "100%",
          label: "طبيعي",
          detail: "صخر بركاني ممدد بدون إضافات كيميائية.",
        },
        {
          value: "pH",
          label: "متعادل",
          detail: "دعم ثابت للتسميد المتحكم فيه.",
        },
        {
          value: "3-4x",
          label: "احتفاظ بالماء",
          detail: "قدرة عالية دون خنق الجذور.",
        },
        {
          value: "فائق",
          label: "الخفة",
          detail: "مناولة ولوجستيك وخلطات أكثر كفاءة.",
        },
      ],
      why: {
        eyebrow: "لماذا البيرلايت",
        title: "ركيزة معدنية تمنح الزراعة دقة أعلى.",
        description:
          "تقدم Barakah Perlite البيرلايت كأداة تقنية: يحسن الأكسجة، يثبت الرطوبة ويوفر للمنتجين وسطا موثوقا للزراعات الحديثة.",
        features: [
          {
            title: "هواء، ماء، جذور: التوازن الصحيح",
            description:
              "البنية المسامية للبيرلايت تخلق مناطق هواء ورطوبة تساعد الجذور على التنفس والامتصاص والنمو دون انضغاط.",
            icon: "wind",
          },
          {
            title: "تحكم دقيق في الري",
            description:
              "في البيوت المحمية أو المشاتل أو الهيدروبونيك، يجعل البيرلايت إدارة الماء أوضح ويدعم انتظام دورات التغذية.",
            icon: "droplets",
          },
          {
            title: "وسط نظيف ومتعادل",
            description:
              "خامل ومعقم وبدون مساهمة كيميائية غير متوقعة، مما يساعد المنتجين على التحكم في التسميد بثقة.",
            icon: "shield",
          },
        ] satisfies FeatureTranslation[],
      },
      applications: {
        eyebrow: "التطبيقات",
        title: "الزراعة، الصناعة، الأثاث والمساحات الخضراء.",
        description:
          "من الركائز البستانية إلى البستنة المهنية، ومن التركيبات الصناعية إلى الحشوات الخفيفة للأثاث، يفتح البيرلايت استخدامات تقنية ومستدامة.",
      },
      origin: {
        visualTitle: "أصل مغربي وطموح دولي",
        visualCaption:
          "حضور صناعي مغربي منظم حول المادة المعدنية والجودة والموثوقية في التصدير.",
        eyebrow: "خبرة محلية",
        title: "تارودانت قاعدة صناعية، والمغرب توقيع الجودة.",
        description:
          "تنطلق Barakah Perlite من أرض معدنية وزراعية. الهدف واضح: تقديم بيرلايت موثوق وموثق وجاهز لمعايير الأسواق المغربية والإفريقية والدولية.",
        cards: [
          {
            label: "الزراعة",
            body:
              "استجابة لاحتياجات البيوت المحمية والمشاتل والزراعة بدون تربة وأنظمة الري الدقيقة.",
          },
          {
            label: "الصناعة",
            body:
              "مادة تقنية للعزل والترشيح والامتصاص والتطبيقات الحرارية والحشوات الخفيفة.",
          },
        ],
      },
      advantages: {
        eyebrow: "المزايا التقنية",
        title: "أداء واضح يصعب تعويضه.",
        description:
          "قوة البيرلايت في توازنه: خفيف لكنه ثابت، مسامي لكنه متين، متعادل لكنه مفيد في مواصفات مختلفة جدا.",
        features: [
          {
            title: "pH متعادل",
            description:
              "توافق عال مع برامج الري بالتسميد والمحاصيل الحساسة.",
            icon: "gauge",
          },
          {
            title: "مسامية عالية",
            description:
              "تحسين دوران الهواء وتصريف متحكم فيه وتقليل خطر اختناق الجذور.",
            icon: "wind",
          },
          {
            title: "كفاءة مائية",
            description:
              "توفر أفضل للماء في منطقة الجذور يمكن أن يقلل الفاقد حسب النظام.",
            icon: "droplets",
          },
          {
            title: "مادة مستدامة",
            description:
              "معدنية وقابلة لإعادة الاستخدام حسب التطبيق ومناسبة للضيعات الباحثة عن حلول أنظف.",
            icon: "recycle",
          },
        ] satisfies FeatureTranslation[],
      },
      process: {
        eyebrow: "العملية والجودة",
        title: "سلسلة مصممة لانتظام الدفعات.",
        description:
          "تعتمد الميزة الصناعية المستقبلية لـ Barakah Perlite على التحكم في المادة الخام والتمدد والمقاس الحبيبي والتتبع.",
      },
      cta: {
        title: "هل أنت جاهز لتحديد بيرلايت أعلى أداء؟",
        description:
          "حدثنا عن محصولك أو تركيبتك أو دفتر التحملات. نوجهك نحو الشكل والمقاس الحبيبي المناسبين.",
      },
    },
    product: {
      header: {
        eyebrow: "منتجنا",
        title: "بيرلايت مغربي ممدد للزراعة والصناعة والتصدير.",
        description:
          "مادة طبيعية وخفيفة وثابتة للركائز الزراعية والاحتياجات الصناعية وسلاسل التوريد الموثوقة.",
        sampleCta: "طلب عينة",
        technicalCenterCta: "المركز التقني",
        datasheetCta: "الورقة التقنية",
        msdsCta: "ورقة بيانات السلامة MSDS",
      },
      what: {
        eyebrow: "ما هو البيرلايت؟",
        title: "مادة معدنية طبيعية ببنية مسامية فريدة.",
        description:
          "البيرلايت صخر بركاني يحتوي على ماء مرتبط. عند تسخينه يتمدد بقوة ويصبح مادة بيضاء وخفيفة ونظيفة وثابتة. هذا التحول يخلق مسامات تحتفظ بالماء مع إبقاء الهواء متاحا.",
        facts: [
          {
            label: "طبيعي",
            value: "بالتمدد الحراري",
            description:
              "أصل معدني بدون إضافات، يتحول بالتمدد الحراري.",
            icon: "mountain",
          },
          {
            label: "ثابت",
            value: "خامل وغير قابل للتحلل",
            description:
              "سلوك منتظم في الركائز والترشيح والعزل والخلطات التقنية.",
            icon: "shield",
          },
          {
            label: "تقني",
            value: "مسامي وخفيف ومعاير",
            description:
              "بنية بيضاء ممددة للتحكم في الهواء والماء والوزن والعزل.",
            icon: "gauge",
          },
        ] satisfies ProductFactTranslation[],
        moreLabel: "اعرف المزيد",
        visualTitle: "البيرلايت الممدد",
        visualCaption:
          "حبيبات بيضاء ممددة، بنية معدنية واضحة ومقاسات حبيبية مدروسة للاستخدامات الزراعية والصناعية.",
      },
      benefits: {
        eyebrow: "فوائد المنتج",
        title: "مادة تقنية ونظيفة ومتعددة الاستخدامات.",
        description:
          "بيرلايت Barakah موجه للمهنيين الذين يحتاجون مادة واضحة ومنتظمة وسهلة الإدماج في بروتوكولاتهم.",
        features: [
          {
            title: "خفة متحكم فيها",
            description:
              "بنية ممددة تقلل الأحمال وتسهل النقل وتحسن الخلطات.",
            icon: "feather",
          },
          {
            title: "وسط معقم",
            description:
              "ركيزة نظيفة تحد من مخاطر الممرضات وتثبت انطلاق المحاصيل.",
            icon: "shield",
          },
          {
            title: "خمول كيميائي",
            description:
              "لا يطلق البيرلايت عناصر غذائية غير متوقعة، مما يتيح تحكما دقيقا في التسميد.",
            icon: "beaker",
          },
          {
            title: "pH متعادل",
            description:
              "قاعدة متوافقة مع أنواع نباتية وأسمدة وتركيبات متعددة.",
            icon: "gauge",
          },
          {
            title: "تهوية عالية",
            description:
              "المسامية المفتوحة تزيد أكسجة الجذور وتقلل انضغاط الركائز.",
            icon: "wind",
          },
          {
            title: "احتفاظ مفيد",
            description:
              "يبقى الماء متاحا في منطقة الجذور دون تحويل الركيزة إلى وسط مشبع.",
            icon: "droplets",
          },
          {
            title: "قابل لإعادة الاستخدام",
            description:
              "مادة معدنية متينة، يمكن إعادة استخدامها حسب التطبيق وضمن منطق أكثر اقتصادا.",
            icon: "recycle",
          },
        ] satisfies FeatureTranslation[],
      },
      technicalProfile: {
        eyebrow: "بيانات المادة",
        title: "التركيب المعدني والخصائص الفيزيائية والمقاس الحبيبي.",
        description:
          "يتم تقديم بيرلايت Barakah الممدد كمادة معدنية تقنية: خفيفة، مسامية، ثابتة وقابلة للتكييف مع الاستخدامات الزراعية والصناعية والترشيح.",
        groups: [
          {
            title: "تركيب إرشادي",
            description:
              "مادة بركانية مكونة أساسا من السيليكا والألومينا، ببنية كيميائية مستقرة.",
            rows: [
              {
                label: "السيليكا (SiO₂)",
                value: "74 – 76 %",
                note: "المكون المعدني الرئيسي.",
              },
              {
                label: "الألومينا (Al₂O₃)",
                value: "12 – 13 %",
                note: "تساهم في ثبات المادة.",
              },
              {
                label: "الأكاسيد القلوية (Na₂O, K₂O)",
                value: "6 – 8 %",
                note: "موجودة طبيعيا في المصفوفة البركانية.",
              },
              {
                label: "أكسيد الحديد (Fe₂O₃)",
                value: "< 1.5 %",
                note: "نسبة إرشادية حسب الدفعة.",
              },
              {
                label: "معادن أخرى",
                value: "آثار",
                note: "تؤهل بتحليل الدفعة.",
              },
            ] satisfies TechnicalSpecTranslation[],
          },
          {
            title: "خصائص فيزيائية",
            description:
              "التمدد الحراري بالهواء الساخن يطور بنية بيضاء وخفيفة ومسامية ومقاومة.",
            rows: [
              {
                label: "الكثافة الظاهرية",
                value: "60 – 100 kg/m³",
                note: "حسب المقاس الحبيبي ودرجة التمدد.",
              },
              {
                label: "pH",
                value: "متعادل (6 – 8)",
                note: "مناسب للركائز والتركيبات التقنية.",
              },
              {
                label: "التوصيل الحراري",
                value: "0.04 – 0.06 W/mK",
                note: "نطاق إرشادي لاستخدامات العزل.",
              },
              {
                label: "السلوك",
                value: "خامل، متين، غير قابل للاشتعال",
                note: "ثابت في البيئات المتطلبة.",
              },
              {
                label: "دورة المادة",
                value: "قابل لإعادة الاستخدام",
                note: "يساهم في حلول أخف وأكثر متانة.",
              },
            ] satisfies TechnicalSpecTranslation[],
          },
          {
            title: "مقاسات حبيبية نموذجية",
            description:
              "يسمح التحكم في المقاس الحبيبي بتكييف الأداء مع الركائز أو التصريف أو البناء أو الترشيح.",
            rows: [
              {
                label: "1 – 4 mm",
                value: "ركائز زراعية وبستنة",
                note: "تهوية وتصريف واحتفاظ مفيد.",
              },
              {
                label: "3 – 6 mm",
                value: "تصريف وعزل",
                note: "درجات أكثر انفتاحا للتدفق وتخفيف الوزن.",
              },
              {
                label: "< 1.5 mm",
                value: "تطبيقات تقنية وبناء",
                note: "تركيبات دقيقة وملاط وحشوات معدنية.",
              },
              {
                label: "50 – 100 microns",
                value: "ترشيح صناعي",
                note: "درجة تؤهل حسب العملية.",
              },
            ] satisfies TechnicalSpecTranslation[],
          },
        ] satisfies TechnicalDataGroupTranslation[],
      },
      specs: {
        eyebrow: "المواصفات",
        title: "الورقة التقنية.",
        description:
          "سيتم تثبيت القيم عبر نتائج المختبر الرسمية والأوراق التقنية الخاصة بـ Barakah Perlite.",
        download: "الورقة التقنية",
        msdsDownload: "ورقة بيانات السلامة MSDS",
      },
      packaging: {
        visualTitle: "تعبئة مهنية",
        visualCaption:
          "صيغ مهنية مصممة لتسهيل النقل والتخزين والمناولة وتحضير الطلبات.",
        eyebrow: "التعبئة",
        title: "أكياس وبيغ باغ وسائب جاهزة للقنوات المهنية.",
        description:
          "اختر الصيغة المناسبة للبيت المحمي أو المشروع أو المشتل أو الخط الصناعي. تعد Barakah إجابة واضحة حسب الحجم والاستخدام والوجهة.",
        formatsTitle: "الصيغ المتاحة",
        formats: ["أكياس 100 لتر", "بيغ باغ 1 م³", "سائب"],
        formatsNote:
          "تم تصميم التعبئة لتسهيل النقل والتخزين والاستخدام في الموقع حسب الكميات المطلوبة.",
      },
      techniqueTrust: {
        eyebrow: "السلامة والثبات",
        title: "مادة آمنة طبيعيا عند التعامل معها.",
        description:
          "البيرلايت مادة معدنية ثابتة وغير تفاعلية، مناسبة للبيئات الزراعية والصناعية.",
        features: [
          {
            title: "غير سام وبدون رائحة",
            description:
              "مادة معدنية بدون رائحة، موجهة لاستخدامات مهنية مضبوطة.",
            icon: "shield",
          },
          {
            title: "غير قابل للذوبان في الماء",
            description:
              "ثباته يحد من التفاعلات غير المرغوبة مع المحاليل الغذائية أو العمليات الصناعية.",
            icon: "droplets",
          },
          {
            title: "أثر لوجستي أخف",
            description:
              "خفته تقلل الأحمال المنقولة وتسهل المناولة داخل الموقع.",
            icon: "feather",
          },
        ] satisfies FeatureTranslation[],
      },
    },
    productDetails: {
      naturelle: {
        backLabel: "العودة إلى المنتج",
        hero: {
          eyebrow: "بيرلايت طبيعي",
          title: "صخر بركاني يتحول بالتمدد الحراري دون إضافات.",
          description:
            "البيرلايت صخر بركاني طبيعي يحتوي على ماء مرتبط. عبر التمدد الحراري يتبخر هذا الماء، فتتمدد الحبيبة وتصبح بيضاء وخفيفة ومسامية: قاعدة معدنية نظيفة للركائز الزراعية والتركيبات الصناعية.",
          visualTitle: "أصل معدني مراقب",
          visualCaption:
            "مادة بركانية طبيعية تتحول بالتمدد الحراري إلى حبيبات بيضاء وخفيفة ومسامية.",
        },
        technical: {
          eyebrow: "شرح تقني",
          title: "الحرارة تحول الصخر إلى بنية مفيدة.",
          description:
            "التمدد الحراري يفتح مسامات دقيقة داخل الحبيبة. هذه البنية تمنح البيرلايت خفته وبياضه ومساميته وسلوكه المتعادل في بيئات زراعية وصناعية مختلفة.",
          points: [
            {
              title: "صخر بركاني",
              description:
                "مادة معدنية طبيعية يتم اختيارها لقدرتها على التمدد.",
              icon: "mountain",
            },
            {
              title: "تمدد حراري",
              description:
                "البخار الداخلي يزيد الحجم ويخلق حبيبة بيضاء أخف بكثير.",
              icon: "flame",
            },
            {
              title: "مسامية مفتوحة",
              description:
                "المسام تدعم الهواء والماء والعزل والامتصاص حسب المقاس الحبيبي.",
              icon: "sparkles",
            },
          ] satisfies FeatureTranslation[],
        },
        agriculture: {
          eyebrow: "الزراعة",
          title: "قاعدة معدنية طبيعية لجذور نشطة.",
          description:
            "في الزراعة يحسن البيرلايت التهوية والتصريف والاحتفاظ المفيد بالماء والأكسجة حول الجذور. كما يساعد على تقليل انضغاط التربة ويثبت توازن الهواء والماء في الركائز الحديثة.",
          useCases: [
            {
              title: "الهيدروبونيك",
              description:
                "حامل خفيف للأنظمة بدون تربة حيث يجب أن يبقى الري والتسميد واضحين وقابلين للتحكم.",
              metric: "هواء + ماء",
            },
            {
              title: "البيوت المحمية والمشاتل",
              description:
                "مكون في الخلطات البستانية لتحسين التصريف وتقليل مناطق التشبع.",
              metric: "جذور مؤكسجة",
            },
            {
              title: "الإنبات وتحسين التربة",
              description:
                "يقلل الانضغاط، ويدعم تثبيت الجذور، ويسهل التعامل مع الركائز.",
              metric: "بنية دائمة",
            },
          ],
        },
        industry: {
          eyebrow: "الصناعة",
          title: "مادة معدنية متعددة الاستخدامات للمواصفات التقنية.",
          description:
            "يستخدم البيرلايت الممدد الطبيعي كحشوة خفيفة أو مادة عزل أو مساعد ترشيح أو مادة امتصاص في البناء والترشيح والكيمياء والتبريد والتطبيقات عالية الحرارة.",
          useCases: [
            {
              title: "العزل والبناء",
              description:
                "ركام خفيف لتحسين الأداء الحراري وتقليل وزن التركيبات المعدنية.",
              metric: "كثافة منخفضة",
            },
            {
              title: "الترشيح",
              description:
                "بنية مسامية مناسبة كمساعد ترشيح في العمليات الصناعية الدقيقة.",
              metric: "سطح مسامي",
            },
            {
              title: "الامتصاص والعمليات",
              description:
                "حامل معدني غير سام للامتصاص والتطبيقات الحرارية والتركيبات الخفيفة.",
              metric: "معدن نظيف",
            },
          ],
        },
        specs: {
          eyebrow: "بيانات إرشادية",
          title: "معايير يجب تأهيلها حسب الاستخدام النهائي.",
          description:
            "تنظم هذه القيم الورقة التقنية لـ Barakah Perlite حسب المقاس الحبيبي والدفعة والتطبيق.",
          rows: [
            {
              label: "الطبيعة",
              value: "بالتمدد الحراري",
              note: "مادة معدنية طبيعية تتحول بالتمدد الحراري.",
            },
            {
              label: "اللون بعد التمدد",
              value: "أبيض إلى أبيض مائل",
              note: "مؤشر بصري على التمدد والنظافة.",
            },
            {
              label: "البنية",
              value: "خفيفة ومسامية",
              note: "تدعم التهوية والعزل والاحتفاظ المفيد.",
            },
            {
              label: "المجالات",
              value: "الزراعة، الترشيح، العزل، الصناعة",
              note: "تحدد حسب الدرجة والمقاس الحبيبي.",
            },
          ] satisfies TechnicalSpecTranslation[],
          cards: [
            {
              title: "بدون إضافات",
              description:
                "الأداء يأتي من التمدد الفيزيائي للزجاج البركاني.",
              icon: "check",
            },
            {
              title: "سهل التعامل",
              description:
                "الخفة تسهل الخلط والجرعات واللوجستيك.",
              icon: "feather",
            },
            {
              title: "متعدد الأسواق",
              description:
                "قاعدة معدنية واحدة يمكن معايرتها للزراعة أو الصناعة.",
              icon: "globe",
            },
          ] satisfies FeatureTranslation[],
        },
        comparisons: {
          eyebrow: "مقارنات",
          title: "ما الذي تغيره البنية المعدنية الطبيعية في التركيبات.",
          description:
            "البيرلايت ليس مدخلا عضويا غير مستقر، بل مصفوفة معدنية متعادلة بدور فيزيائي واضح وقابل للتوقع.",
          cards: [
            {
              title: "البيرلايت مقابل المادة العضوية",
              leftLabel: "عضوي",
              left: "قد يتحلل ويتغير وينضغط مع الوقت.",
              rightLabel: "بيرلايت",
              right: "لا يتحلل ويحافظ على وظيفة بنيوية.",
            },
            {
              title: "البيرلايت مقابل تربة مدمجة",
              leftLabel: "تربة وحدها",
              left: "خطر تهوية ضعيفة وتصريف غير منتظم.",
              rightLabel: "خلطة مع بيرلايت",
              right: "تحسن توازن الهواء والماء حول الجذور.",
            },
            {
              title: "البيرلايت مقابل حشوة ثقيلة",
              leftLabel: "حشوة كثيفة",
              left: "تزيد الوزن وتصعب المناولة.",
              rightLabel: "بيرلايت ممدد",
              right: "يخفف التركيبات ويضيف المسامية.",
            },
          ],
        },
        why: {
          eyebrow: "لماذا هذا مهم",
          title: "مورد طبيعي بسلوك مهني.",
          description:
            "بالنسبة للمنتجين والمصنعين والمشترين الصناعيين تأتي قيمة البيرلايت من جمعه بين الأصل المعدني والحياد والخفة والمسامية المفيدة.",
          cards: [
            {
              title: "ثقة تقنية",
              body: "المادة سهلة الشرح لفرق الجودة والعملاء الدوليين.",
            },
            {
              title: "مرونة الاستخدام",
              body: "الزراعة والعزل والترشيح والامتصاص تستفيد من نفس المنطق الفيزيائي: حبيبة خفيفة ومسامية.",
            },
            {
              title: "صورة تصديرية",
              body: "بيرلايت مغربي موثق يمكن أن يلبي توقعات الانتظام والتتبع.",
            },
          ],
        },
        cta: {
          title: "حدد بيرلايت طبيعي يناسب استخدامك.",
          description:
            "شاركنا القطاع والمقاس الحبيبي المطلوب وقيود التعبئة، وسنجهز ردا تقنيا منظما.",
        },
      },
      stable: {
        backLabel: "العودة إلى المنتج",
        hero: {
          eyebrow: "بيرلايت ثابت",
          title: "خامل، معقم، غير سام وغير قابل للتحلل.",
          description:
            "يوفر البيرلايت الممدد ثباتا فيزيائيا وكيميائيا مطلوبا في الركائز الزراعية والهيدروبونيك والترشيح والبناء والتطبيقات الصناعية التي لا يجب أن تضيف فيها المادة اضطرابا للعملية.",
          visualTitle: "ثبات الحبيبة الممددة",
          visualCaption:
            "درجة معايرة، سلوك ثابت وقراءة جودة مناسبة للاستخدامات المهنية.",
        },
        technical: {
          eyebrow: "شرح تقني",
          title: "مادة متعادلة تترك النظام يعمل بدقة.",
          description:
            "البيرلايت مستقر كيميائيا، خامل، معقم بعد التمدد، غير سام وغير قابل للتحلل. لا يضيف متغيرات بيولوجية أو كيميائية غير ضرورية إلى بروتوكولات الزراعة أو التركيبات الصناعية.",
          points: [
            {
              title: "خمول كيميائي",
              description:
                "لا يطلق عناصر غذائية غير متوقعة ويدعم تحكما دقيقا في التسميد.",
              icon: "beaker",
            },
            {
              title: "وسط معقم",
              description:
                "التمدد الحراري العالي يخلق حاملا نظيفا لانطلاق المحاصيل والاستخدامات الدقيقة.",
              icon: "shield",
            },
            {
              title: "غير قابل للتحلل",
              description:
                "البنية المعدنية لا تتحلل مثل جزء عضوي تقليدي.",
              icon: "recycle",
            },
          ] satisfies FeatureTranslation[],
        },
        agriculture: {
          eyebrow: "الزراعة",
          title: "تحكم أكبر في الركائز والري.",
          description:
            "في البيوت المحمية والمشاتل والهيدروبونيك والخلطات البستانية يقلل ثبات البيرلايت عدم اليقين: يصبح الهواء والماء والتغذية أسهل في الإدارة.",
          useCases: [
            {
              title: "هيدروبونيك مضبوط",
              description:
                "حامل خامل يفصل إدارة التغذية عن البنية الفيزيائية للركيزة.",
              metric: "تحكم دقيق",
            },
            {
              title: "المشاتل",
              description:
                "وسط نظيف للشتلات والإنبات والتجذير في بروتوكولات قابلة للتكرار.",
              metric: "انطلاقة نظيفة",
            },
            {
              title: "خلطات الركائز",
              description:
                "يقلل الانضغاط ويثبت توازن الهواء والماء دون تحلل.",
              metric: "تراص أقل",
            },
          ],
        },
        industry: {
          eyebrow: "الصناعة",
          title: "ثبات مفيد عندما لا تتحمل العملية المفاجآت.",
          description:
            "في العزل والترشيح والامتصاص والركام الخفيف يعمل البيرلايت كمصفوفة معدنية مستقرة: خفيفة ومسامية ومتوافقة مع تركيبات عديدة.",
          useCases: [
            {
              title: "الترشيح الصناعي",
              description:
                "مساعد ترشيح معدني للعمليات التي تحتاج نظافة وانتظاما.",
              metric: "سلوك منتظم",
            },
            {
              title: "البناء",
              description:
                "حشوة خفيفة غير قابلة للتحلل للملاط والطلاءات والخرسانة الخفيفة.",
              metric: "متانة معدنية",
            },
            {
              title: "التبريد والحرارة",
              description:
                "عزل معدني مستقر للبيئات الحرارية المتطلبة حسب الدرجة.",
              metric: "عزل ثابت",
            },
          ],
        },
        specs: {
          eyebrow: "بيانات إرشادية",
          title: "ثبات يجب توثيقه عبر مراقبة الجودة.",
          description:
            "هذه المعايير تنظم الورقة التقنية المستقبلية للعملاء الذين يحتاجون التكرارية والتتبع والتوافق مع العمليات.",
          rows: [
            {
              label: "السلوك الكيميائي",
              value: "مستقر / خامل",
              note: "يوثق عبر أوراق الجودة وتحاليل الدفعات.",
            },
            {
              label: "السمية",
              value: "غير سام",
              note: "مادة معدنية تستخدم مع تعليمات الغبار ومعدات الوقاية.",
            },
            {
              label: "التحلل",
              value: "غير قابل للتحلل",
              note: "لا يتحول إلى مادة عضوية داخل الركيزة.",
            },
            {
              label: "pH إرشادي",
              value: "متعادل",
              note: "النطاق يؤكد حسب الدرجة والتحليل الرسمي.",
            },
          ] satisfies TechnicalSpecTranslation[],
          cards: [
            {
              title: "قابل للتكرار",
              description:
                "يساعد على حفظ سلوك مشابه من خلطة إلى أخرى.",
              icon: "gauge",
            },
            {
              title: "متوافق",
              description:
                "يندمج في برامج الري بالتسميد والتركيبات المعدنية.",
              icon: "flask",
            },
            {
              title: "قابل للتخزين",
              description:
                "مادة معدنية سهلة التخزين عندما تكون محمية ومعبأة.",
              icon: "packageCheck",
            },
          ] satisfies FeatureTranslation[],
        },
        comparisons: {
          eyebrow: "مقارنات",
          title: "لماذا يقلل الثبات المخاطر التشغيلية.",
          description:
            "المادة المستقرة تساعد الضيعات والعمليات الصناعية على تقليل المتغيرات غير المرغوبة في أنظمتها.",
          cards: [
            {
              title: "البيرلايت مقابل الحوامل العضوية",
              leftLabel: "عضوي",
              left: "قد يتغير أو يتخمر أو ينضغط مع الوقت.",
              rightLabel: "بيرلايت",
              right: "يبقى معدنيا وخاملا وبنيويا.",
            },
            {
              title: "البيرلايت مقابل وسط ضعيف التصريف",
              leftLabel: "تصريف ضعيف",
              left: "خطر اختناق الجذور وصعوبة الري.",
              rightLabel: "بيرلايت ثابت",
              right: "يحافظ على فراغات الهواء ويقلل الانضغاط.",
            },
            {
              title: "البيرلايت مقابل حشوة تفاعلية",
              leftLabel: "حشوة تفاعلية",
              left: "قد تغير العملية أو التركيبة.",
              rightLabel: "حشوة خاملة",
              right: "تضيف وزنا أقل ومسامية دون إزعاج النظام.",
            },
          ],
        },
        why: {
          eyebrow: "لماذا هذا مهم",
          title: "الثبات يخلق ثقة صناعية.",
          description:
            "مع زيادة الأحجام يريد العملاء مادة قابلة للتوقع. يجيب البيرلايت عن ذلك بدور فيزيائي واضح وتوافق واسع.",
          cards: [
            {
              title: "عدم يقين أقل",
              body: "المنتجون يديرون الري والأكسجين والتغذية بدقة أكبر.",
            },
            {
              title: "عمليات أوضح",
              body: "المستخدمون الصناعيون يدمجون حشوة خفيفة دون متغير نشط غير مرغوب.",
            },
            {
              title: "جودة للتصدير",
              body: "الثبات يدعم الأوراق التقنية وتدقيق الجودة والعقود المتكررة.",
            },
          ],
        },
        cta: {
          title: "هل تحتاج بيرلايت ثابتا لتركيبتك؟",
          description:
            "أرسل التطبيق وقيود pH والمقاس الحبيبي والكثافة والتعبئة، وسنجهز قاعدة مواصفات.",
        },
      },
      technique: {
        backLabel: "العودة إلى المنتج",
        hero: {
          eyebrow: "بيرلايت تقني",
          title: "خفة ومسامية ومعايرة للاستخدامات المتطلبة.",
          description:
            "تأتي القيمة التقنية للبيرلايت الممدد من بنيته البيضاء والخفيفة وعالية المسامية. فهو يحسن التهوية والتصريف واحتفاظ الماء وأكسجة الجذور، كما يخدم العزل والترشيح والتبريد والامتصاص والركام الخفيف.",
          visualTitle: "المقاس الحبيبي والمسامية",
          visualCaption:
            "تساعد المقاسات الحبيبية المختلفة على ضبط التهوية والتصريف والترشيح والعزل والخفة.",
        },
        technical: {
          eyebrow: "شرح تقني",
          title: "بنية الحبيبة تتحكم في الأداء.",
          description:
            "بعد التمدد تعمل كل حبيبة كبنية دقيقة مسامية. حسب المقاس الحبيبي يمكنها إضافة الهواء إلى الركيزة، الاحتفاظ بماء مفيد، تخفيف التركيبة أو المساهمة في العزل الحراري.",
          points: [
            {
              title: "خفيف جدا",
              description:
                "كثافة ظاهرية منخفضة لتقليل الوزن وتسهيل المناولة.",
              icon: "feather",
            },
            {
              title: "عالي المسامية",
              description:
                "شبكة مسامات مفيدة للهواء والماء والترشيح والعزل.",
              icon: "wind",
            },
            {
              title: "قابل للمعايرة",
              description:
                "مقاسات حبيبية تناسب البذور والركائز والخلطات الصناعية ومساعدات الترشيح.",
              icon: "barChart",
            },
          ] satisfies FeatureTranslation[],
        },
        agriculture: {
          eyebrow: "الزراعة",
          title: "هندسة هواء/ماء في خدمة الجذور.",
          description:
            "في الهيدروبونيك والبيوت المحمية والمشاتل والإنبات وتحسين التربة، يساعد البيرلايت على توفير بيئة جذور مؤكسجة وذات تصريف وأقل انضغاطا.",
          useCases: [
            {
              title: "ركائز البيوت المحمية",
              description:
                "يحسن بنية الخلطة ويدعم ريا أكثر انتظاما.",
              metric: "توازن هواء/ماء",
            },
            {
              title: "الإنبات",
              description:
                "وسط خفيف ونظيف لدعم تثبيت الجذور الشابة.",
              metric: "حامل ناعم",
            },
            {
              title: "تحسين التربة",
              description:
                "يقلل الانضغاط ويخلق مسارات هواء وماء حول النظام الجذري.",
              metric: "تربة أكثر تنفسا",
            },
          ],
        },
        industry: {
          eyebrow: "الصناعة",
          title: "مسامية تعمل خارج الزراعة أيضا.",
          description:
            "نفس الخصائص الفيزيائية تفسر الاستخدامات الصناعية: العزل الحراري، البناء، الترشيح، التطبيقات عالية الحرارة، التبريد، الامتصاص والركام الخفيف.",
          useCases: [
            {
              title: "العزل الحراري",
              description:
                "حبيبة ممددة خفيفة لأنظمة العزل والحشوات والتركيبات المعدنية.",
              metric: "موصلية أقل",
            },
            {
              title: "الترشيح والامتصاص",
              description:
                "مسامية وسطح الحبيبة يدعمان عمليات الفصل والامتصاص.",
              metric: "بنية دقيقة فعالة",
            },
            {
              title: "الركام الخفيف",
              description:
                "يخفف الملاط والطلاءات والخرسانة التقنية مع الحفاظ على قاعدة معدنية.",
              metric: "وزن أقل",
            },
          ],
        },
        specs: {
          eyebrow: "بيانات إرشادية",
          title: "المقاس الحبيبي يحدد الاستخدام.",
          description:
            "يجب أن تربط الأوراق المستقبلية كل درجة بنطاق حبيبي وكثافة ظاهرية وأداء متوقع.",
          rows: [
            {
              label: "الكثافة الظاهرية",
              value: "60 – 120 kg/m³",
              note: "قيمة تؤكد حسب التمدد والمقاس.",
            },
            {
              label: "المقاس الحبيبي",
              value: "0-1 / 1-3 / 3-6 mm",
              note: "درجات إرشادية تؤكد مع الإنتاج.",
            },
            {
              label: "الوظائف الرئيسية",
              value: "تهوية، تصريف، احتفاظ، عزل",
              note: "الوظيفة المهيمنة حسب الدرجة.",
            },
            {
              label: "الصيغ",
              value: "أكياس، بيغ باغ، سائب",
              note: "تحديد الأوزان والباليتات وأوراق PDF.",
            },
          ] satisfies TechnicalSpecTranslation[],
          cards: [
            {
              title: "هواء الجذور",
              description:
                "المسامية تحافظ على فراغات هواء حول الجذور.",
              icon: "wind",
            },
            {
              title: "احتفاظ مفيد",
              description:
                "جزء من الماء يبقى متاحا دون تشبيع الوسط.",
              icon: "droplets",
            },
            {
              title: "عزل خفيف",
              description:
                "الحبيبة الممددة تقلل الكتلة وتساهم في العزل الحراري.",
              icon: "thermometer",
            },
          ] satisfies FeatureTranslation[],
        },
        comparisons: {
          eyebrow: "مقارنات",
          title: "الأداء يأتي من الدرجة المناسبة في المكان المناسب.",
          description:
            "يجب التعامل مع البيرلايت التقني كمكون معاير وليس كمسحوق عام.",
          cards: [
            {
              title: "بيرلايت ناعم مقابل خشن",
              leftLabel: "ناعم",
              left: "مفيد للبذور والخلطات الناعمة وبعض استخدامات الترشيح.",
              rightLabel: "خشن",
              right: "يضيف مسامية كبرى وتصريفا وخفة أكبر.",
            },
            {
              title: "البيرلايت مقابل تربة كثيفة",
              leftLabel: "تربة كثيفة",
              left: "قد تحتفظ بماء زائد وتحد من الأكسجين.",
              rightLabel: "خلطة بيرلايت",
              right: "تحسن التنفس وتوزيع الماء.",
            },
            {
              title: "البيرلايت مقابل ركام ثقيل",
              leftLabel: "ركام ثقيل",
              left: "يرفع الحمل ويقلل كفاءة اللوجستيك.",
              rightLabel: "ركام خفيف",
              right: "يخفف التركيبة ويسهل المناولة.",
            },
          ],
        },
        why: {
          eyebrow: "لماذا هذا مهم",
          title: "المادة التقنية المحددة جيدا تباع أفضل.",
          description:
            "لإقناع الضيعات ومكاتب الدراسات والمشترين الصناعيين والموزعين، يجب أن يربط Barakah Perlite كل درجة بفائدة قابلة للقياس واستخدام واضح.",
          cards: [
            {
              title: "قرار أسرع",
              body: "يفهم العملاء أي درجة يطلبون ولماذا.",
            },
            {
              title: "أخطاء استخدام أقل",
              body: "المقاس المناسب يتجنب خلطات شديدة التصريف أو ناعمة جدا أو ثقيلة.",
            },
            {
              title: "تموقع ممتاز",
              body: "البيانات التقنية تحول سلعة معدنية إلى حل مهني.",
            },
          ],
        },
        cta: {
          title: "لننشئ الورقة التقنية المناسبة لاستخدامك.",
          description:
            "صف تطبيقك الزراعي أو الصناعي، وسنساعدك في اختيار المقاس والصيغة والبيانات التي يجب توثيقها.",
        },
      },
    } satisfies Record<ProductDetailKey, ProductDetailTranslation>,
    agriculture: {
      header: {
        eyebrow: "الزراعة",
        title: "ركيزة زراعية تقنية للبيوت المحمية والهيدروبونيك والمحاصيل عالية الأداء.",
        description:
          "تساعد Barakah Perlite المنتجين على بناء ركائز أخف وأكثر تهوية وملاءمة للري الحديث.",
      },
      intro: {
        visualTitle: "بيوت محمية وزراعات بدون تربة",
        visualCaption:
          "ركائز حديثة للبيوت المحمية والهيدروبونيك والمشاتل والزراعات ذات الري المتحكم فيه.",
        eyebrow: "الاستخدامات الزراعية",
        title: "البيرلايت يمنح البنية لأنظمة الزراعة الحديثة.",
        description:
          "الهيدروبونيك، المشاتل، الخضر داخل البيوت المحمية أو الخلطات البستانية: يسمح بيرلايت Barakah بضبط التصريف والهواء والاحتفاظ حسب هدف المنتج.",
        checklist: [
          "الهيدروبونيك والري بالتسميد",
          "بيوت محمية للخضر",
          "مشاتل ونباتات فتية",
          "تحسين التربة الثقيلة",
          "الإنبات والعقل",
          "البستنة المهنية",
        ],
      },
      useCases: {
        eyebrow: "حالات الاستخدام",
        title: "تطبيقات زراعية: ركيزة، تحسين وخلطات.",
        description:
          "في الزراعة يحسن البيرلايت بنية التربة والركائز: تهوية الجذور، التصريف، احتفاظ متوازن بالماء ودعم ثابت للمحاصيل الحديثة.",
        features: [
          {
            title: "الهيدروبونيك",
            description:
              "دعم معدني نظيف للزراعة المائية والأنظمة المروية ودورات التغذية المتحكم فيها.",
            icon: "droplets",
          },
          {
            title: "البيوت المحمية",
            description:
              "ركيزة خفيفة للمحاصيل المحمية مع تصريف أفضل وأكسجة للجذور.",
            icon: "leaf",
          },
          {
            title: "المشاتل",
            description:
              "يعزز التجذير السريع ويحد من الانضغاط خلال المراحل الحساسة.",
            icon: "sprout",
          },
          {
            title: "تحسين التربة",
            description:
              "يخفف التربة الثقيلة، يقلل الانضغاط ويحسن إدارة الرطوبة.",
            icon: "mountain",
          },
          {
            title: "الإنبات",
            description:
              "بنية دقيقة وثابتة لإنبات متجانس للبذور والنباتات الفتية.",
            icon: "shield",
          },
          {
            title: "خلطات الركائز",
            description:
              "مكون ثابت لخلطات ممتازة للزهور والفواكه الحمراء والأعشاب ونباتات الزينة.",
            icon: "flask",
          },
        ] satisfies FeatureTranslation[],
      },
      benefits: {
        eyebrow: "فوائد للمنتجين",
        title: "محاصيل أوضح وجذور مخدومة بشكل أفضل.",
        description:
          "في نظام مضبوط، يصبح البيرلايت أداة انتظام: ري أنظف، تجذير أصح وركيزة أكثر ثباتا.",
        features: [
          {
            title: "جذور أكثر نشاطا",
            description:
              "وصول أفضل للأكسجين يدعم حيوية الجذور ويسرع مراحل الاستئناف.",
            icon: "sprout",
          },
          {
            title: "انضغاط أقل",
            description:
              "البنية المعدنية تحافظ على انفتاح الخلطة حتى مع دورات الري المتكررة.",
            icon: "wind",
          },
          {
            title: "ري أكثر كفاءة",
            description:
              "يحتفظ البيرلايت بالرطوبة المفيدة مع تصريف الماء الزائد، مما يساعد على تقليل الإجهاد المائي.",
            icon: "droplets",
          },
          {
            title: "أكسجة منتظمة",
            description:
              "ركيزة أكثر تنفسا تقلل الظروف التي تسبب إجهاد الجذور.",
            icon: "leaf",
          },
        ] satisfies FeatureTranslation[],
      },
      comparisons: {
        eyebrow: "مقارنات",
        title: "اختر البيرلايت للسبب الصحيح.",
        description:
          "البيرلايت ليس وعدا سحريا: إنه مادة فيزيائية تحسن سلوك الركيزة عندما تضبط جرعته جيدا.",
        cards: [
          {
            title: "البيرلايت مقابل التربة",
            body:
              "لا يعوض البيرلايت التربة دائما: بل يغير سلوكها. يقلل الانضغاط، يضيف الهواء ويثبت الرطوبة حول الجذور.",
          },
          {
            title: "البيرلايت مقابل الكوكوبيت",
            body:
              "الكوكوبيت يحتفظ بالماء بقوة. البيرلايت يضيف تهوية أكبر ويسمح بضبط المسامية في الخلطات المهنية.",
          },
          {
            title: "البيرلايت في الخلطات",
            body:
              "مع البيتموس أو الكوكو أو الكمبوست أو الوسائط المعدنية، يصبح أداة دقة للتصريف والأكسجين والري.",
          },
        ],
      },
      cta: {
        title:
          "بيوت محمية وضيعات ومشاتل: اطلب توصية بالمقاس الحبيبي.",
        description:
          "اذكر محصولك ونظام الري والكميات والأهداف. ستجهز Barakah Perlite إجابة موجهة للاستخدام، وليس فقط سعرا للكيس.",
      },
    },
    industry: {
      header: {
        eyebrow: "الصناعة",
        title: "مادة معدنية خفيفة لدفاتر تحملات تقنية.",
        description:
          "البناء، الترشيح، الكيمياء، الامتصاص أو التبريد العميق: يقدم البيرلايت الممدد ملفا نادرا، خفيفا وخاملا وعازلا ومساميا.",
      },
      intro: {
        eyebrow: "التطبيقات الصناعية",
        title: "مادة هادئة لكنها أساسية في الأنظمة المتطلبة.",
        description:
          "القيمة الصناعية للبيرلايت تأتي من جمعه بين الكثافة المنخفضة والثبات والمسامية والعزل والتوافق مع مصفوفات متعددة.",
        checklist: [
          "العزل الحراري والصوتي",
          "مساعد ترشيح للسوائل الصناعية",
          "مواد حرارية ومقاومة للحرارة العالية",
          "امتصاص الزيوت والمواد الكيميائية",
          "العزل في التبريد العميق",
          "ركام خفيف وتركيبات معدنية",
        ],
        visualTitle: "بيرلايت للأنظمة الصناعية",
        visualCaption:
          "مادة خفيفة وثابتة للعزل والترشيح والخلطات التقنية وتطبيقات البناء.",
      },
      domains: {
        eyebrow: "المجالات",
        title: "سبعة استخدامات صناعية ومنطق أداء واحد.",
        description:
          "بنيته المسامية وخفته وثباته الكيميائي تجعله مناسبا لدفاتر تحملات صناعية متطلبة.",
        features: [
          {
            title: "عزل البناء",
            description:
              "حشوات وملاط تقني وخرسانة خفيفة لتحسين الراحة الحرارية والصوتية.",
            icon: "building",
          },
          {
            title: "الترشيح",
            description:
              "مساعد ترشيح معدني لتصفية السوائل والزيوت والتدفقات الصناعية.",
            icon: "waves",
          },
          {
            title: "الصناعة الكيميائية",
            description:
              "دعم خامل للتركيبات والحشوات التقنية والعمليات التي تحتاج ثباتا.",
            icon: "beaker",
          },
          {
            title: "حرارة عالية",
            description:
              "مواد تقنية عالية الحرارة ومكونات حرارية وحمايات حرارية.",
            icon: "thermometer",
          },
          {
            title: "الامتصاص",
            description:
              "حبيبات مسامية لامتصاص الزيوت والسوائل والانسكابات الصناعية.",
            icon: "packageCheck",
          },
          {
            title: "التبريد العميق",
            description:
              "عزل الخزانات والبيئات ذات الحرارة المنخفضة جدا بفضل بنيته الخفيفة.",
            icon: "snowflake",
          },
          {
            title: "ركام خفيف",
            description:
              "تخفيف التركيبات المعدنية والملاط والألواح والأنظمة التقنية.",
            icon: "boxes",
          },
          {
            title: "رؤية تصدير",
            description:
              "تموقع جودة للشركاء الصناعيين في المغرب وإفريقيا وأوروبا.",
            icon: "globe",
          },
        ] satisfies FeatureTranslation[],
      },
      technical: {
        eyebrow: "منهج تقني",
        title: "البيانات الصحيحة قبل الطلب الصحيح.",
        description:
          "يجب أن يوضح العرض الصناعي المقاس الحبيبي والكثافة والرطوبة والنقاء والتوصيل الحراري والتعبئة والنقل ووثائق الجودة.",
        cta: "تحدث مع الفريق",
      },
      cta: {
        title: "هل لديك دفتر تحملات صناعي؟",
        description:
          "أرسل قيودك: المقاس الحبيبي، الكثافة، الحجم، بلد التسليم، الاستخدام النهائي ومتطلبات الجودة. سيجهز الفريق إجابة تقنية واضحة.",
      },
    },
    about: {
      header: {
        eyebrow: "من نحن",
        title: "علامة مغربية مصممة لبناء الثقة في الأسواق التقنية.",
        description:
          "تهدف Barakah Perlite إلى تحويل البيرلايت المغربي من منتج معدني إلى حل مهني موثق وموثوق وجاهز للتصدير.",
      },
      story: {
        eyebrow: "قصة العلامة",
        title: "من أرض معدنية مغربية إلى صناعة موثوقة.",
        description:
          "Barakah Perlite شركة مغربية متخصصة في إنتاج وتسويق البيرلايت. دورها هو تزويد القطاعين الزراعي والصناعي بمادة ثابتة ونظيفة وعالية الأداء، مع جودة واضحة وعلاقة تجارية جدية.",
        body:
          "الطموح واضح: توفير شريك مغربي موثوق للمنتجين ومهنيي المساحات الخضراء والموزعين والمشترين الصناعيين في مشاريع التوريد المحلي والتصدير.",
        visualTitle: "الفريق والمصنع والمادة الخام",
        visualCaption:
          "تنظيم مبني حول الموقع الصناعي والمادة الخام ومراقبة الجودة والوثائق التقنية.",
      },
      values: {
        eyebrow: "الالتزامات",
        title: "الجودة والموثوقية والاستدامة: ثلاث إثباتات يجب بناؤها.",
        description:
          "يهيئ الموقع حضورا دوليا يمكن فيه دعم كل وعد بأوراق تقنية وصور وشهادات وتحاليل وعمليات.",
        features: [
          {
            title: "مورد طبيعي",
            description:
              "مادة من أصل بركاني يتم تثمينها بمنهج تقني ومسؤول.",
            icon: "mountain",
          },
          {
            title: "جودة موثوقة",
            description:
              "طموح لانتظام الدفعات والتتبع ووثائق واضحة للعملاء.",
            icon: "shield",
          },
          {
            title: "زراعة مستدامة",
            description:
              "ركائز تساعد على إدارة الماء والهواء والجذور بشكل أفضل في الزراعات الحديثة.",
            icon: "leaf",
          },
          {
            title: "رؤية تصدير",
            description:
              "تموقع مغربي جاهز للحوار مع الأسواق الإفريقية والأوروبية والدولية.",
            icon: "globe",
          },
        ] satisfies FeatureTranslation[],
      },
      focusCards: [
        {
          title: "الزراعة",
          body:
            "خدمة المنتجين والبيوت المحمية والمشاتل والموزعين بركيزة طبيعية أكثر تقنية.",
        },
        {
          title: "الصناعة",
          body:
            "تلبية استخدامات العزل والترشيح والامتصاص والحرارة العالية ببيانات منتج واضحة.",
        },
        {
          title: "الاستدامة",
          body:
            "تثمين مورد معدني متين ومرافقة العملاء نحو حلول أكثر اقتصادا.",
        },
      ],
    },
    contactPage: {
      header: {
        eyebrow: "اتصال",
        title: "اطلب عرض سعر أو توصية تقنية.",
        description:
          "اذكر استخدامك وقطاعك وكمياتك ووجهتك. يجيب فريق Barakah Perlite بتوجيه واضح.",
      },
      formIntro: {
        eyebrow: "نموذج مهني",
        title: "حدثنا عن حاجتك.",
        description:
          "شاركنا قطاعك والكمية المطلوبة والصيغة المفضلة وبلد التسليم. سنوجهك بسرعة نحو الحل المناسب.",
      },
      detailsHeading: "بيانات الاتصال",
      whatsapp: "واتساب التجاري",
      mapTitle: "الخريطة والوصول",
      mapCaption:
        "المكتب: N°5 ET.3 Imm. El Khiati, Avenue Hassan II, Taroudant. مشروع المصنع: Zone industrielle Ahl Rmel, Oulad Teima, Taroudant.",
      form: {
        name: "الاسم",
        company: "الشركة",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        sector: "القطاع",
        quantity: "الكمية المطلوبة",
        message: "الرسالة",
        requiredMark: "*",
        sectorPlaceholder: "اختر",
        quantityPlaceholder: "مثال: 10 أطنان، 500 كيس، 2 بيغ باغ",
        messagePlaceholder:
          "صف التطبيق، المقاس الحبيبي المطلوب، بلد التسليم أو القيود التقنية.",
        note: "رد تجاري خلال 24-48 ساعة عمل بعد التحقق الداخلي.",
        submit: "إرسال الطلب",
        loading: "جار الإرسال...",
        success: "تم استلام الطلب",
        error:
          "تعذر إرسال الطلب حاليا. جرب واتساب أو البريد الإلكتروني.",
        errors: {
          name: "الاسم مطلوب.",
          email: "البريد الإلكتروني مطلوب.",
          invalidEmail: "البريد الإلكتروني غير صالح.",
          phone: "الهاتف مطلوب.",
          sector: "القطاع مطلوب.",
          message: "الرسالة مطلوبة.",
        },
        sectors: [
          "الزراعة",
          "الصناعة",
          "البناء",
          "الترشيح",
          "التوزيع / التصدير",
        ],
      },
    },
    gallery: {
      header: {
        eyebrow: "المعرض",
        title: "مكتبة بصرية جاهزة لإثباتات الميدان.",
        description:
          "مساحة مميزة لعرض صور Barakah Perlite المستقبلية: المادة والبيوت المحمية والمصنع والتعبئة والتطبيقات الصناعية مع تصفح واضح حسب الفئة.",
      },
      categories: ["الزراعة", "الصناعة", "المنتج", "المصنع"],
      items: [
        {
          category: "الزراعة",
          title: "جذور داخل ركيزة بيرلايت",
          caption:
            "تطبيقات البيوت المحمية والهيدروبونيك والمشاتل لتحسين توازن الهواء والماء حول الجذور.",
        },
        {
          category: "المنتج",
          title: "حبيبات بيضاء معايرة",
          caption:
            "حبيبات ممددة ذات بنية مسامية للركائز والخلطات التقنية والتطبيقات الصناعية.",
        },
        {
          category: "الصناعة",
          title: "تطبيقات تقنية",
          caption:
            "العزل والترشيح والامتصاص والركام الخفيف لبيئات تقنية متطلبة.",
        },
        {
          category: "المصنع",
          title: "خط التحويل",
          caption:
            "التحويل ومراقبة الجودة والتخزين والتعبئة مصممة للعملاء المهنيين.",
        },
        {
          category: "الزراعة",
          title: "التجارب والنتائج الميدانية",
          caption:
            "متابعة تطور الجذور وبروتوكولات الري والنتائج الميدانية.",
        },
        {
          category: "المنتج",
          title: "تعبئة للتصدير",
          caption:
            "أكياس وبيغ باغ وباليتات وعلامات منتج للقنوات الزراعية والصناعية والتصدير.",
        },
      ],
      noteTitle: "مكتبة صور مهنية",
      noteBody:
        "الأماكن جاهزة لصور محسنة، وتعليقات معتمدة، ووسوم SEO، ومحتوى متعدد اللغات.",
    },
    experience: {
      header: {
        eyebrow: "الخبرة",
        title: "إثباتات ميدانية تسرع بناء الثقة.",
        description:
          "صفحة مصممة لعرض التعاونات والتجارب الزراعية وقصص العملاء والتطبيقات الصناعية بشكل منظم وموثوق للمشترين الدوليين.",
      },
      cards: [
        {
          kicker: "التعاونات",
          title: "شركاء زراعيون وصناعيون",
          body:
            "إضافة التعاونات المسموح بنشرها مع ضيعات وموزعين ومختبرات ومكاتب دراسات أو صناعيين.",
          metric: "شبكة",
        },
        {
          kicker: "نتائج ميدانية",
          title: "متابعة المحاصيل والجذور",
          body:
            "دمج قياسات حقيقية للتهوية والري والانضغاط وتطور الجذور.",
          metric: "إثبات",
        },
        {
          kicker: "العملاء",
          title: "قصص استخدام قابلة للتحقق",
          body:
            "إعداد حالات عملاء معتمدة تشمل القطاع والحجم والمشكلة والنتيجة الملاحظة.",
          metric: "ثقة",
        },
        {
          kicker: "تجارب زراعية",
          title: "هيدروبونيك وبيوت محمية ومشاتل",
          body:
            "توثيق بروتوكولات الزراعة والخلطات والإنبات وكفاءة الري.",
          metric: "زراعة تقنية",
        },
        {
          kicker: "الصناعة",
          title: "العزل والترشيح والامتصاص",
          body:
            "إضافة تطبيقات صناعية مؤهلة مع القيود التقنية والدرجات والتعبئة.",
          metric: "تقني",
        },
      ],
    },
    adminContent: {
      eyebrow: "نموذج داخلي",
      title: "إدارة محتوى Barakah Perlite.",
      description:
        "واجهة غير وظيفية لتأطير إدارة المحتوى المستقبلية. لا يوجد ولوج حقيقي ولا تعديل ولا بيانات حساسة متصلة.",
      securityNote:
        "نموذج بصري فقط: يجب حماية النسخة المستقبلية من جهة الخادم قبل أي نشر إنتاجي.",
      login: {
        title: "نموذج تسجيل الدخول",
        email: "بريد المدير",
        password: "كلمة المرور",
        button: "تسجيل الدخول معطل",
      },
      dashboard: {
        title: "لوحة المحتوى",
        stats: ["صور المعرض", "التعليقات", "الخبرات", "التعاونات"],
      },
      managers: [
        {
          title: "إدارة صور المعرض",
          description:
            "نموذج لرفع وتصنيف واعتماد صور الزراعة والصناعة والمنتج والمصنع مستقبلا.",
          items: ["رفع الصور", "الفئات", "حالة النشر"],
        },
        {
          title: "إدارة التعليقات",
          description:
            "نموذج لإعداد التعليقات متعددة اللغات ووصف SEO والنصوص القصيرة.",
          items: ["FR / EN / AR", "SEO للصور", "اعتماد المحتوى"],
        },
        {
          title: "إدارة الخبرات",
          description:
            "نموذج لتنظيم التجارب الميدانية ونتائج العملاء والتطبيقات التقنية.",
          items: ["تجارب زراعية", "حالات عملاء", "استخدامات صناعية"],
        },
        {
          title: "إدارة التعاونات",
          description:
            "نموذج للشركاء وحالات الإذن ونقاط الإثبات القابلة للنشر.",
          items: ["الشركاء", "الأذونات", "الوثائق"],
        },
      ],
      todos: [
        "مصادقة حقيقية من جهة الخادم",
        "middleware للحماية",
        "قاعدة بيانات",
        "تخزين رفع الصور",
        "صلاحيات دور المدير",
        "حماية API",
        "CRUD حقيقي",
      ],
    },
    admin: {
      header: {
        eyebrow: "الإدارة",
        title: "لوحة تحكم Barakah Perlite.",
        description:
          "مساحة مبدئية جاهزة للتطبيق المستقبلي: عروض، منتجات، محتوى، CRM وإدارة متعددة اللغات.",
      },
      modules: [
        {
          title: "إدارة العروض",
          description:
            "ربط النماذج ومسار البيع والحالات والإشعارات وتصدير CRM.",
          icon: "fileText",
        },
        {
          title: "كتالوج المنتجات",
          description:
            "إدارة المقاسات الحبيبية، أوراق PDF، التعبئة، المخزون والمرئيات.",
          icon: "barChart",
        },
        {
          title: "ولوج آمن",
          description:
            "إضافة المصادقة والأدوار وسجل النشاط وصلاحيات الإدارة.",
          icon: "lock",
        },
        {
          title: "العملاء",
          description:
            "تتبع الحسابات والطلبات والوثائق والعقود وتاريخ الاتصال.",
          icon: "users",
        },
      ] satisfies FeatureTranslation[],
    },
    client: {
      header: {
        eyebrow: "بوابة العميل",
        title: "مساحة مستقبلية للعملاء والموزعين والشركاء.",
        description:
          "تمت هيكلة الموقع كتطبيق قابل للتطور: الوثائق والعروض والطلبات والدعم والإشعارات يمكن إضافتها دون إعادة بناء القاعدة.",
      },
      modules: [
        {
          title: "تتبع العروض",
          description:
            "عرض الطلبات والعروض والحالات والكميات والتواريخ والمتدخلين.",
          icon: "fileCheck",
        },
        {
          title: "الوثائق",
          description:
            "تحميل الأوراق التقنية والشهادات والفواتير ووثائق الجودة.",
          icon: "download",
        },
        {
          title: "الطلبات",
          description:
            "تتبع التعبئة والشحنات والسجل وإعادة الطلب.",
          icon: "packageSearch",
        },
        {
          title: "ولوج العميل",
          description:
            "إضافة المصادقة وملفات الشركة والصلاحيات والإشعارات.",
          icon: "lock",
        },
      ] satisfies FeatureTranslation[],
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
