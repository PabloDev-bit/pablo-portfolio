export type Language = 'fr' | 'en' | 'es';

export const translations = {
  fr: {
    meta: {
      title: "Pablo Hernandez | Développeur & Expert IA",
      description: "Portfolio de Pablo Hernandez, développeur Full Stack."
    },
    nav: {
      about: "Parcours",
      skills: "Expertise",
      projects: "Réalisations",
      aiChat: "Assistant IA",
      contact: "Contact"
    },
    hero: {
      location: "Saint-Malo, France",
      role: "Développeur Full Stack & Créateur de Solutions IA",
      description: "Je conçois des architectures logicielles robustes et des interfaces intuitives, enrichies par une expertise en relation client et en intelligence artificielle.",
      viewProjects: "Explorer mon travail",
      askAi: "Discuter avec mon IA"
    },
    about: {
      title: "Mon Parcours",
      bio: "Développeur de 21 ans basé à Saint-Malo, je combine une forte technicité acquise au Canada avec une excellente maîtrise de la relation client. Mon objectif : créer des solutions technologiques qui répondent réellement aux besoins humains.",
      details: "Après avoir obtenu mon Baccalauréat en Relation Client en France, je me suis envolé pour le Canada afin de me spécialiser en informatique. Ces 4 années d'immersion outre-atlantique m'ont forgé un profil technique rigoureux et bilingue.",
      educationTitle: "Formation Académique",
      cards: {
        softSkillTag: "Atout clé",
        dualCompetenceTitle: "Relation Client",
        dualCompetenceDesc: "Une capacité naturelle à comprendre les besoins utilisateurs et à faciliter la communication dans les projets techniques.",
        locationTitle: "Basé à"
      },
      edu: {
        ipssi: {
          school: "IPSSI (Bordeaux)",
          degree: "Master Data & Intelligence Artificielle",
          desc: "Spécialisation à venir en Big Data, Machine Learning et conception d'architectures neuronales avancées."
        },
        cegepSherbrooke: {
          school: "Cégep de Sherbrooke (Québec)",
          degree: "Techniques de l'informatique",
          desc: "Spécialisation avancée en développement logiciel, architectures complexes et gestion de bases de données."
        },
        cegepStFelicien: {
          school: "Cégep de Saint-Félicien (Québec)",
          degree: "Techniques de l'informatique",
          desc: "Fondamentaux de la programmation, algorithmique et initiation aux technologies web modernes."
        },
        bac: {
          school: "Lycée (France)",
          degree: "Baccalauréat Métiers de la Relation Client",
          desc: "Développement des compétences en communication, négociation et analyse des besoins utilisateurs. Un atout clé pour comprendre les clients."
        }
      }
    },
    skills: {
      title: "Expertise Technique",
      subtitle: "Une maîtrise des technologies modernes pour des applications performantes."
    },
    projects: {
      title: "Réalisations Significatives",
      subtitle: "Une sélection de projets démontrant ma capacité à livrer des produits complets.",
      viewAll: "Voir toutes les archives",
      explore: "Explorer l'étude de cas",
      items: [
        {
          id: '1',
          title: 'MHNet – Nettoyage Textile',
          description: "Site vitrine premium pour le marché suisse (tarifs CHF). Design 'stellaire' violet immersif avec animations fluides pour présenter les services de nettoyage haut de gamme.",
        },
        {
          id: '2',
          title: 'CostCrafter',
          description: "Comparateur de coût de la vie urbain pour expatriés. Plateforme interactive analysant les données de logement, transport et alimentation.",
        },
        {
          id: '3',
          title: 'Finance Forecast Hub',
          description: "Dashboard analytique en temps réel connectant l'API Yahoo Finance pour visualiser les prévisions économiques et boursières.",
        }
      ],
      links: {
        code: "Code Source",
        demo: "Voir le site"
      }
    },
    aiChat: {
      tag: "Intelligence Artificielle",
      title: "Interface Neurale",
      subtitle: "Interagissez avec un jumeau numérique entraîné sur mes données professionnelles.",
      placeholder: "Ex: Quelles études a-t-il faites au Québec ?",
      inputPlaceholder: "> Entrez une commande ou une question...",
      processing: "L'IA traite la demande...",
      send: "Envoyer",
      greeting: "Bonjour. Je suis l'assistant virtuel de Pablo. Je connais parfaitement son parcours au Cégep de Sherbrooke, Saint-Félicien et ses compétences. En quoi puis-je vous aider ?"
    },
    contact: {
      title: "Démarrer une collaboration",
      ctaTitle: "Construisons quelque chose d'",
      ctaHighlight: "extraordinaire",
      ctaEnd: "ensemble.",
      desc: "Disponible pour des projets ambitieux nécessitant une double compétence technique et relationnelle.",
      email: "Email Professionnel",
      message: "Votre projet",
      send: "Envoyer la demande",
      placeholderEmail: "contact@entreprise.com",
      placeholderMsg: "Bonjour Pablo, nous avons un projet...",
      copyright: "© 2025 Pablo Hernandez. Tous droits réservés.",
      status: "État Opérationnel : Tous les systèmes normaux"
    }
  },
  en: {
    meta: {
      title: "Pablo Hernandez | Developer & AI Expert",
      description: "Portfolio of Pablo Hernandez, Full Stack Developer."
    },
    nav: {
      about: "Background",
      skills: "Expertise",
      projects: "Work",
      aiChat: "AI Agent",
      contact: "Contact"
    },
    hero: {
      location: "Saint-Malo, France",
      role: "Full Stack Developer & AI Solutions Architect",
      description: "Designing robust software architectures and intuitive interfaces, enhanced by expertise in client relations and artificial intelligence.",
      viewProjects: "View Selected Work",
      askAi: "Talk to my AI"
    },
    about: {
      title: "My Journey",
      bio: "A 21-year-old developer based in Saint-Malo, combining strong technical skills acquired in Canada with excellent client relation mastery. My goal: building tech solutions that truly meet human needs.",
      details: "After graduating in Client Relations in France, I moved to Canada to specialize in Computer Science. These 4 years abroad shaped a rigorous, bilingual technical profile.",
      educationTitle: "Academic Background",
      cards: {
        softSkillTag: "Key Strength",
        dualCompetenceTitle: "Client Relations",
        dualCompetenceDesc: "Natural ability to understand user needs and facilitate communication in technical projects.",
        locationTitle: "Based in"
      },
      edu: {
        ipssi: {
          school: "IPSSI (Bordeaux)",
          degree: "Master's in Data & AI",
          desc: "Upcoming specialization in Big Data, Machine Learning, and advanced neural architectures."
        },
        cegepSherbrooke: {
          school: "Cégep de Sherbrooke (Quebec)",
          degree: "Computer Science Technology",
          desc: "Advanced specialization in software development, complex architectures, and database management."
        },
        cegepStFelicien: {
          school: "Cégep de Saint-Félicien (Quebec)",
          degree: "Computer Science Technology",
          desc: "Programming fundamentals, algorithms, and introduction to modern web technologies."
        },
        bac: {
          school: "High School (France)",
          degree: "Baccalauréat in Client Relations",
          desc: "Development of communication, negotiation, and user needs analysis skills. A key asset for understanding clients."
        }
      }
    },
    skills: {
      title: "Technical Expertise",
      subtitle: "Mastery of modern technologies for high-performance applications."
    },
    projects: {
      title: "Selected Projects",
      subtitle: "A selection of projects demonstrating my ability to deliver complete products.",
      viewAll: "View all archives",
      explore: "Explore Case Study",
      items: [
        {
          id: '1',
          title: 'MHNet – Premium Textile Cleaning',
          description: 'Responsive showcase site for a Swiss company (CHF rates). Immersive "stellar" violet design with fluid animations to present high-end cleaning services.',
        },
        {
          id: '2',
          title: 'CostCrafter',
          description: 'Urban cost-of-living comparison platform for expatriates. Interactive tool analyzing housing, transport, and food data.',
        },
        {
          id: '3',
          title: 'Finance Forecast Hub',
          description: 'Real-time financial dashboard connecting to the Yahoo Finance API to visualize economic forecasts and market data.',
        }
      ],
      links: {
        code: "Source Code",
        demo: "Live Site"
      }
    },
    aiChat: {
      tag: "Artificial Intelligence",
      title: "Neural Interface",
      subtitle: "Interact with a digital twin trained on my professional data.",
      placeholder: "Ex: What did he study in Quebec?",
      inputPlaceholder: "> Type command or question...",
      processing: "AI is processing query...",
      send: "Send",
      greeting: "Hello. I am Pablo's virtual assistant. I know all about his studies at Cégep de Sherbrooke, Saint-Félicien, and his skills. How can I assist you?"
    },
    contact: {
      title: "Let's Collaborate",
      ctaTitle: "Let's build something ",
      ctaHighlight: "extraordinary",
      ctaEnd: " together.",
      desc: "Available for ambitious projects requiring dual technical and relational competence.",
      email: "Professional Email",
      message: "Your Project",
      send: "Send Request",
      placeholderEmail: "contact@company.com",
      placeholderMsg: "Hello Pablo, we have a project...",
      copyright: "© 2025 Pablo Hernandez. All rights reserved.",
      status: "Operational Status: All Systems Normal"
    }
  },
  es: {
    meta: {
      title: "Pablo Hernandez | Desarrollador y Experto en IA",
      description: "Portafolio de Pablo Hernandez, Desarrollador Full Stack."
    },
    nav: {
      about: "Trayectoria",
      skills: "Experiencia",
      projects: "Proyectos",
      aiChat: "Agente IA",
      contact: "Contacto"
    },
    hero: {
      location: "Saint-Malo, Francia",
      role: "Desarrollador Full Stack y Arquitecto de Soluciones IA",
      description: "Diseñando arquitecturas de software robustas e interfaces intuitivas, mejoradas por la experiencia en relaciones con clientes e inteligencia artificial.",
      viewProjects: "Ver Trabajo",
      askAi: "Hablar con mi IA"
    },
    about: {
      title: "Mi Trayectoria",
      bio: "Desarrollador de 21 años basado en Saint-Malo, combinando fuertes habilidades técnicas adquiridas en Canadá con un excelente dominio de la relación con el cliente.",
      details: "Después de graduarme en Relación Cliente en Francia, me mudé a Canadá para especializarme en Informática. Estos 4 años en el extranjero formaron un perfil técnico riguroso y bilingüe.",
      educationTitle: "Formación Académica",
      cards: {
        softSkillTag: "Punto Fuerte",
        dualCompetenceTitle: "Relación Cliente",
        dualCompetenceDesc: "Capacidad natural para entender las necesidades del usuario y facilitar la comunicación en proyectos técnicos.",
        locationTitle: "Basado en"
      },
      edu: {
        ipssi: {
          school: "IPSSI (Burdeos)",
          degree: "Máster en Datos e IA",
          desc: "Próxima especialización en Big Data, Machine Learning y arquitecturas neuronales avanzadas."
        },
        cegepSherbrooke: {
          school: "Cégep de Sherbrooke (Quebec)",
          degree: "Técnicas de Informática",
          desc: "Especialización avanzada en desarrollo de software, arquitecturas complejas y gestión de bases de datos."
        },
        cegepStFelicien: {
          school: "Cégep de Saint-Félicien (Quebec)",
          degree: "Técnicas de Informática",
          desc: "Fundamentos de programación, algoritmos e introducción a tecnologías web modernas."
        },
        bac: {
          school: "Lycée (Francia)",
          degree: "Bachillerato en Relación Cliente",
          desc: "Desarrollo de habilidades de comunicación, negociación y análisis de necesidades de usuarios."
        }
      }
    },
    skills: {
      title: "Experiencia Técnica",
      subtitle: "Dominio de tecnologías modernas para aplicaciones de alto rendimiento."
    },
    projects: {
      title: "Proyectos Seleccionados",
      subtitle: "Una selección de proyectos que demuestran mi capacidad para entregar productos completos.",
      viewAll: "Ver todos los archivos",
      explore: "Explorar Estudio de Caso",
      items: [
        {
          id: '1',
          title: 'MHNet – Limpieza Textil Premium',
          description: 'Sitio web showcase para el mercado suizo (tarifas CHF). Diseño "estelar" violeta inmersivo con animaciones fluidas para presentar servicios de limpieza de alta gama.',
        },
        {
          id: '2',
          title: 'CostCrafter',
          description: 'Comparador de costo de vida urbano para expatriados. Plataforma interactiva que analiza datos de vivienda, transporte y alimentación.',
        },
        {
          id: '3',
          title: 'Finance Forecast Hub',
          description: 'Panel financiero en tiempo real que conecta con la API de Yahoo Finance para visualizar previsiones económicas y datos bursátiles.',
        }
      ],
      links: {
        code: "Código Fuente",
        demo: "Ver Sitio"
      }
    },
    aiChat: {
      tag: "Inteligencia Artificial",
      title: "Interfaz Neuronal",
      subtitle: "Interactúa con un gemelo digital entrenado con mis datos profesionales.",
      placeholder: "Ej: ¿Qué estudió en Quebec?",
      inputPlaceholder: "> Escribe un comando o pregunta...",
      processing: "La IA está procesando...",
      send: "Enviar",
      greeting: "Hola. Soy el asistente virtual de Pablo. Conozco todo sobre sus estudios en Cégep de Sherbrooke, Saint-Félicien y sus habilidades."
    },
    contact: {
      title: "Colaboremos",
      ctaTitle: "Construyamos algo ",
      ctaHighlight: "extraordinario",
      ctaEnd: " juntos.",
      desc: "Disponible para proyectos ambiciosos que requieran competencia técnica y relacional.",
      email: "Email Profesional",
      message: "Su Proyecto",
      send: "Enviar Solicitud",
      placeholderEmail: "contacto@empresa.com",
      placeholderMsg: "Hola Pablo, tenemos un proyecto...",
      copyright: "© 2025 Pablo Hernandez. Todos los derechos reservados.",
      status: "Estado Operativo: Todos los sistemas normales"
    }
  }
};