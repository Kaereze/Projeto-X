export const profile = {
  name: "João Carlos",
  role: "Desenvolvedor Front-End",
  tagline: {
    prefix: "Criando",
    highlight1: "soluções",
    middle: ", construindo o",
    highlight2: "futuro",
    suffix: ".",
  },
  bio: "Buscando primeira oportunidade como Desenvolvedor Front-End, focado em criar interfaces modernas e responsivas.",
  email: "joaocarlossilvazeroum@gmail.com",
  whatsapp: "https://wa.me/5548991329291",
  github: "https://github.com/Kaereze",
  linkedin: null, // ainda não criado
  location: "Brasil",
  availability: "Seg - Sex: 08:00 - 18:00",
};

export const navLinks = [
  { to: "/", label: "Início", icon: "house" },
  { to: "/sobre", label: "Sobre", icon: "user" },
  { to: "/skills", label: "Skills", icon: "code" },
  { to: "/projetos", label: "Projetos", icon: "briefcase" },
  { to: "/mail-analytics", label: "Mail Analytics", icon: "envelope" },
  { to: "/contato", label: "Contato", icon: "comment" },
];

export const floatingTech = [
  { icon: "code", pos: { top: "12%", left: "8%" } },
  { icon: "window", pos: { top: "10%", right: "8%" } },
  { icon: "terminal", pos: { top: "42%", left: "2%" } },
  { icon: "cloud", pos: { top: "42%", right: "2%" } },
  { icon: "database", pos: { bottom: "14%", left: "10%" } },
  { icon: "gear", pos: { bottom: "14%", right: "10%" } },
];

export const aboutMe = {
  title: "Sobre Mim",
  subtitle: "Front-End em Formação · Curioso · Aprendiz Contínuo",
  paragraphs: [
    "Olá! Sou o João Carlos — minha jornada em programação começou com curiosidade e muita vontade de criar coisas que funcionam de verdade.",
    "Comecei estudando HTML, CSS e Git, e sigo evoluindo todos os dias, sempre testando novas ideias.",
    "Acredito que tecnologia bem feita resolve problemas reais — este portfólio é prova disso: construído do zero, peça por peça.",
  ],
  stats: [
    { icon: "terminal", label: "Início na Programação", value: "2025" },
    { icon: "code", label: "Tecnologias Estudadas", value: "9" },
    { icon: "rocket", label: "Projetos em Construção", value: "2" },
  ],
};

export const skillGroups = [
  {
    title: "Front-End & Versionamento",
    items: [
      {
        name: "HTML5",
        icon: "html5",
        color: "#e34c26",
        pct: 40,
        desc: "Estrutura páginas semânticas, acessíveis e otimizadas para SEO.",
        tags: ["Semântica", "Acessibilidade", "SEO"],
        link: "https://github.com/Kaereze/Projeto-X/blob/main/index.html",
      },
      {
        name: "CSS3",
        icon: "css3",
        color: "#264de4",
        pct: 30,
        desc: "Crio layouts responsivos com Flexbox, Grid e animações.",
        tags: ["Flexbox", "Grid", "Responsivo"],
        link: "https://github.com/Kaereze/Projeto-X/blob/main/style.css",
      },
      {
        name: "Git",
        icon: "git",
        color: "#f05033",
        pct: 10,
        desc: "Controlo versões do código com commits organizados e branches.",
        tags: ["Commits", "Branches", "Merge"],
        link: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        icon: "github",
        color: "#ffffff",
        pct: 30,
        desc: "Publico e documento projetos, com deploy automático via GitHub Pages.",
        tags: ["Pages", "Deploy", "Versionamento"],
        link: "https://github.com/Kaereze",
      },
      {
        name: "JavaScript",
        icon: "js",
        color: "#f7df1e",
        pct: 15,
        desc: "Estou aprendendo a dar interatividade e lógica às páginas, do zero.",
        tags: ["DOM", "Eventos", "Em andamento"],
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      },
    ],
  },
  {
    title: "Dados & Automação",
    items: [
      {
        name: "Excel",
        icon: "excel",
        color: "#1d6f42",
        pct: 35,
        desc: "Planilhas, fórmulas e automações para organizar e cruzar dados no dia a dia.",
        tags: ["Fórmulas", "Tabelas", "Automação"],
        link: "https://support.microsoft.com/pt-br/excel",
      },
      {
        name: "Apps Script",
        icon: "table",
        color: "#0f9d58",
        pct: 25,
        desc: "Automação de planilhas do Google Sheets, com menus e robôs próprios.",
        tags: ["Google Sheets", "Menus", "Automação"],
        link: "https://developers.google.com/apps-script",
      },
      {
        name: "Integração de APIs",
        icon: "plug",
        color: "#00b4d8",
        pct: 20,
        desc: "Conexão e consumo de dados externos para alimentar automações.",
        tags: ["Outlook", "Integração", "Dados"],
        link: "https://developer.mozilla.org/pt-BR/docs/Web/API",
      },
      {
        name: "Dashboards & Automação",
        icon: "chart",
        color: "#ffbd2e",
        pct: 30,
        desc: "Geração automática de gráficos e relatórios informativos a partir dos dados coletados.",
        tags: ["Gráficos", "Relatórios", "Automação"],
        link: "/mail-analytics",
      },
    ],
  },
];

export const projects = [
  {
    title: "Projeto X",
    icon: "X",
    desc: "Meu primeiro portfólio oficial desenvolvido do zero para consolidar meus conhecimentos em HTML5, CSS3, Git e versionamento.",
    tags: ["HTML5", "CSS3", "Git"],
    link: "https://github.com/Kaereze/Projeto-X",
    external: true,
  },
  {
    title: "Mail Analytics",
    icon: "robot",
    desc: "Automação em Python que gera, todos os dias às 07:00, um relatório de e-mails recebidos, enviados e notas fiscais emitidas.",
    tags: ["Python", "Google Sheets", "Apps Script"],
    link: "/mail-analytics",
    external: false,
  },
];

export const mailAnalytics = {
  badge: "Futuro & Inteligência Artificial",
  description:
    "Todos os dias às 07:00, um robô puxa os dados direto do Outlook, organiza tudo no Google Sheets e gera dashboards separados por agente e por hotel. O objetivo agora é evoluir com IA: sentimento de e-mails, alertas e insights automáticos.",
  status: "Em Desenvolvimento",
  stats: [
    { value: "07:00", label: "Execução Diária" },
    { value: "4", label: "Agentes Monitorados" },
    { value: "68", label: "Hotéis (17 por Agente)" },
  ],
  agents: [
    { name: "João", hoteis: 17 },
    { name: "Cristian", hoteis: 17 },
    { name: "Clara", hoteis: 17 },
    { name: "Bernardo", hoteis: 17 },
  ],
  roadmap: [
    { icon: "envelope-open", title: "Coleta Automática", desc: "Robô lê a caixa do Outlook todos os dias às 07:00." },
    { icon: "table-cells", title: "Organização em Planilha", desc: "Dados estruturados no Google Sheets por agente e hotel." },
    { icon: "chart-pie", title: "Dashboards Diários", desc: "Relatórios visuais gerados automaticamente a cada execução." },
    { icon: "brain", title: "IA & Insights (próximo passo)", desc: "Sentimento de e-mails, alertas e sugestões automáticas." },
  ],
};

export const contact = {
  items: [
    { icon: "envelope", label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "location-dot", label: "Localização", value: profile.location },
    { icon: "clock", label: "Disponibilidade", value: profile.availability },
  ],
};
