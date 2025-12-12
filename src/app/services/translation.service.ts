import { Injectable, signal, computed } from '@angular/core';

type Language = 'en' | 'pt';

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Language>('en');
  
  private translations: Translations = {
    // Header
    'nav.home': { en: 'HOME', pt: 'INÍCIO' },
    'nav.about': { en: 'ABOUT', pt: 'SOBRE' },
    'nav.experience': { en: 'EXPERIENCE', pt: 'EXPERIÊNCIA' },
    'nav.projects': { en: 'PROJECTS', pt: 'PROJETOS' },
    
    // Home
    'home.initializing': { en: '> INITIALIZING_PROFILE...', pt: '> INICIALIZANDO_PERFIL...' },
    'home.welcome': { en: '> WELCOME, ', pt: '> BEM-VINDO, ' },
    'home.user': { en: 'USER', pt: 'USUÁRIO' },
    'home.displaying': { en: '> DISPLAYING: RENAN_CRUZ.PORTFOLIO', pt: '> EXIBINDO: RENAN_CRUZ.PORTFOLIO' },
    'home.subtitle': { 
      en: '// FULLSTACK DEVELOPER. BUILDING ROBUST SYSTEMS. OPTIMIZING USER INTERFACES.', 
      pt: '// DESENVOLVEDOR FULLSTACK. CONSTRUINDO SISTEMAS ROBUSTOS. OTIMIZANDO INTERFACES.' 
    },
    'home.viewProjects': { en: 'VIEW_PROJECTS', pt: 'VER_PROJETOS' },
    'home.contactMe': { en: 'CONTACT_ME', pt: 'CONTATO' },
    
    // About
    'about.title': { en: '> ABOUT_ME', pt: '> SOBRE_MIM' },
    'about.description1': { 
      en: '// CORE_FUNCTION: Full Stack Web Developer. Building and maintaining both front-end and back-end web applications. Ensuring product success and smooth operation.', 
      pt: '// FUNÇÃO_PRINCIPAL: Desenvolvedor Web Full Stack. Construindo e mantendo aplicações web front-end e back-end. Garantindo sucesso e operação suave do produto.' 
    },
    'about.description2': { 
      en: '// PORTFOLIO_ACCESS: Refer to Projects section.', 
      pt: '// ACESSO_PORTFÓLIO: Consulte a seção Projetos.' 
    },
    'about.description3': { 
      en: '// AVAILABILITY: Open to opportunities for contribution, learning, and growth.', 
      pt: '// DISPONIBILIDADE: Aberto a oportunidades de contribuição, aprendizado e crescimento.' 
    },
    'about.description4': { 
      en: '// INQUIRIES: Contact me if skills match requirements.', 
      pt: '// CONSULTAS: Entre em contato se as habilidades corresponderem aos requisitos.' 
    },
    'about.downloadResume': { en: 'DOWNLOAD_RESUME', pt: 'BAIXAR_CURRÍCULO' },
    'about.contactMe': { en: 'CONTACT_ME', pt: 'CONTATO' },
    'about.techStack': { en: '> TECH_STACK', pt: '> STACK_TÉCNICA' },
    'about.frontend': { en: 'FRONT-END', pt: 'FRONT-END' },
    'about.backend': { en: 'BACK-END', pt: 'BACK-END' },
    'about.tools': { en: 'TOOLS & OTHERS', pt: 'FERRAMENTAS E OUTROS' },
    
    // Experience
    'experience.title': { en: '> EXPERIENCE_LOG', pt: '> LOG_EXPERIÊNCIA' },
    'experience.2023.role': { 
      en: '// ROLE: Intern, Servimex Logística.', 
      pt: '// FUNÇÃO: Estagiário, Servimex Logística.' 
    },
    'experience.2023.tasks': { 
      en: '// TASKS: Python, Flask, PHP, SQL Server for Servimex Online Website development/refactoring.', 
      pt: '// TAREFAS: Python, Flask, PHP, SQL Server para desenvolvimento/refatoração do Site Servimex Online.' 
    },
    'experience.2024.promotion': { 
      en: '// PROMOTION: Advanced to board goals.', 
      pt: '// PROMOÇÃO: Avançado para metas da diretoria.' 
    },
    'experience.2024.tools': { 
      en: '// TOOLS: Python, Flask, SQL Server.', 
      pt: '// FERRAMENTAS: Python, Flask, SQL Server.' 
    },
    'experience.2024.projects': { 
      en: '// PROJECTS:', 
      pt: '// PROJETOS:' 
    },
    'experience.2024.project1': { 
      en: '* Container Tracking Project [COMPLETED]', 
      pt: '* Projeto de Rastreamento de Contêineres [CONCLUÍDO]' 
    },
    'experience.2024.project2': { 
      en: '* Siscomex Debt Forecast [IN_PROGRESS]', 
      pt: '* Previsão de Dívidas Siscomex [EM_PROGRESSO]' 
    },
    
    // Projects
    'projects.title': { en: '> PROJECTS_LIST', pt: '> LISTA_PROJETOS' },
    'projects.tech': { en: '// TECH:', pt: '// TECH:' },
    'projects.viewCode': { en: 'VIEW_CODE', pt: 'VER_CÓDIGO' },
    
    // Footer
    'footer.status': { 
      en: '// STATUS: Building the web with precision and passion.', 
      pt: '// STATUS: Construindo a web com precisão e paixão.' 
    },
    'footer.copyright': { 
      en: '// LOG_ENTRY: © 2024 Renan Cruz. All rights reserved.', 
      pt: '// LOG_ENTRADA: © 2024 Renan Cruz. Todos os direitos reservados.' 
    },
    
    // Common
    'loading': { en: 'LOADING...', pt: 'CARREGANDO...' },
  };

  translate(key: string): string {
    const lang = this.currentLang();
    return this.translations[key]?.[lang] || key;
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }

  constructor() {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang) {
        this.currentLang.set(savedLang);
      }
    }
  }
}
