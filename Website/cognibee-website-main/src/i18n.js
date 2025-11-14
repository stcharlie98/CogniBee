const translations = {
  en: {
    // CogniBee - Global
    company_name: "CogniBee",
    slogan: "From Hive to Thrive",
    lang_en: "EN",
    lang_pt: "PT-BR",
    video_unsupported: "Your browser does not support the video tag.",
    hero_video_fallback: "A dynamic video showcasing beehives and data visualizations.",

    // Header (CogniBee)
    nav_why_cognibee: "Why CogniBee?",
    nav_technology: "Technology",
    nav_data_platform: "Data Platform",
    nav_solutions: "Solutions",
    nav_solutions_beekeepers: "For Beekeepers",
    nav_solutions_growers: "For Growers",
    nav_solutions_researchers: "For Researchers",
    nav_hardware: "Hardware",
    nav_pricing: "Pricing",
    nav_resources: "Resources",
    nav_mobile_app: "Mobile App",
    nav_contact_us: "Contact Us",
    nav_cta_button: "Request a Demo",
    nav_about_us: "About Us",

    // Hero Section (CogniBee)
    hero_title: "Unlock the Secrets of Your Hives. Remotely & Intelligently.",
    hero_subtitle: "CogniBee provides real-time data and actionable insights to optimize bee health, pollination, and honey production.",
    hero_cta_main: "Explore Our Solution",
    hero_cta_secondary: "Watch Demo Video",

    // Why CogniBee Section
    why_us_title: "Modern Beekeeping Demands Modern Solutions.",
    why_us_intro: "Traditional beekeeping is based on intuition and frequent, disruptive inspections. CogniBee empowers you with hard data and predictive insights, allowing you to intervene only when necessary, ensuring healthier hives and greater productivity.",
    why_us_card1_title: "Reduce Losses & Costs",
    why_us_card1_desc: "Save time, reduce manual inspections, and proactively prevent colony collapse with early warnings.",
    why_us_card2_title: "Boost Productivity",
    why_us_card2_desc: "Optimize pollination strategies, maximize honey yield, and improve overall hive strength and resilience.",
    why_us_card3_title: "Gain Actionable Insights",
    why_us_card3_desc: "Understand deep hive behavior, accurately predict swarming events, and detect health anomalies before they become critical.",

    // Technology Section (CogniBee) - Placeholder
    tech_title: "Advanced Technology for Healthier Hives.",
    tech_intro: "Our sensor suite collects crucial data points, transmitted wirelessly to your dashboard for analysis.",
    tech_sensor1_title: "In-Hive Atmosphere",
    tech_sensor1_desc: "Monitors temperature, humidity, CO2, and VOCs for optimal hive conditions.",
    tech_sensor2_title: "Acoustic Monitoring",
    tech_sensor2_desc: "Analyzes hive sounds to detect queen status, swarming preparations, and stress levels.",
    tech_sensor3_title: "Brood Temperature",
    tech_sensor3_desc: "Tracks crucial brood nest temperature for healthy colony development.",
    tech_sensor4_title: "Hive Weight",
    tech_sensor4_desc: "Measures weight changes to monitor honey production, food stores, and swarming.",
    tech_sensor5_title: "Bee Traffic & Counting",
    tech_sensor5_desc: "Counts bees entering/leaving to assess foraging activity and colony strength.",
    tech_sensor6_title: "GPS & Theft Detection",
    tech_sensor6_desc: "Provides hive location tracking and alerts for unauthorized movement.",
    tech_diagram_title: "How It All Connects", // Optional

    // Data & Insights Platform Section (CogniBee)
    platform_title: "Transforming Data into Decisions.",
    platform_intro: "Access your hive data anytime, anywhere. Our intuitive platform visualizes complex information, making it easy to understand and act upon.",
    platform_cta: "Explore the Platform",
    platform_feat1_title: "Real-time Dashboards",
    platform_feat1_desc: "Monitor all your hives at a glance via our web and mobile apps with live data streams and key performance indicators.",
    platform_feat2_title: "Customizable Alerts",
    platform_feat2_desc: "Receive instant notifications via SMS/Email for critical events like swarming, theft, or health issues.",
    platform_feat3_title: "Historical Data & Trends",
    platform_feat3_desc: "Analyze long-term patterns, compare hive performance, and make informed historical decisions.",
    platform_feat4_title: "Predictive Analytics",
    platform_feat4_desc: "Leverage AI-powered insights for swarm prediction, disease early detection, and honey flow forecasting.",
    platform_feat5_title: "Comprehensive Reporting",
    platform_feat5_desc: "Generate detailed reports for compliance, record-keeping, or sharing insights with stakeholders.",
    platform_mockup_note: "Visualize your apiary's health and productivity with intuitive charts and maps.",
    platform_brazil_map_alt: "Map of Brazil highlighting CogniBee presence or data insights",

    // Mobile App Showcase Section
    mobile_app_headline: "Monitor Your Hives, Anywhere, Anytime",
    mobile_app_description: "The CogniBee mobile app for Android & iOS brings all your hive data, critical alerts, and smart insights directly to your fingertips. Stay connected to your apiary, no matter where you are.",
    mobile_app_feature1_title: "Instant Real-Time Alerts",
    mobile_app_feature1_desc: "Get immediate notifications for swarming, health issues, or theft.",
    mobile_app_feature2_title: "At-a-Glance Hive Status",
    mobile_app_feature2_desc: "Check the dashboard for a quick overview of all your hives.",
    mobile_app_feature3_title: "Full Historical Data",
    mobile_app_feature3_desc: "Access trends and past performance on the go.",
    mobile_app_feature4_title: "Intuitive Mobile Interface",
    mobile_app_feature4_desc: "Designed for ease of use in the field.",
    mobile_app_download_prompt: "Download the App (Coming Soon)",
    mobile_app_google_play_alt: "Get it on Google Play",
    mobile_app_app_store_alt: "Download on the App Store",
    mobile_app_screen_alt_1: "CogniBee mobile app dashboard view",
    mobile_app_screen_alt_2: "CogniBee mobile app alert notification",
    mobile_app_qr_prompt: "Scan to Learn More (Coming Soon)",

    // Solutions Section (CogniBee)
    solutions_title: "Tailored for Your Needs.",
    solutions_intro: "CogniBee offers specialized solutions designed to meet the unique challenges and goals of different stakeholders in the apiculture and agriculture sectors.",
    solutions_beekeepers_title: "For Commercial Beekeepers",
    solutions_beekeepers_b1: "Scalable monitoring for large apiaries.",
    solutions_beekeepers_b2: "Improve operational efficiency and reduce losses.",
    solutions_beekeepers_b3: "Maximize ROI with data-driven decisions.",
    solutions_growers_title: "For Growers & Agriculture",
    solutions_growers_b1: "Optimize pollination strategies for increased crop yield.",
    solutions_growers_b2: "Ensure hive health for effective pollination services.",
    solutions_growers_b3: "Data-backed insights for sustainable farming practices.",
    solutions_researchers_title: "For Researchers",
    solutions_researchers_b1: "Access to high-resolution, accurate hive data.",
    solutions_researchers_b2: "API access for custom data analysis and integration.",
    solutions_researchers_b3: "Customizable sensor parameters for specific studies.",
    solutions_learn_more_cta: "Learn More",

    // Hardware Showcase Section (CogniBee) - Placeholder
    hardware_title: "Robust & Reliable Monitoring Hardware.",
    hardware_intro: "Our durable, easy-to-install sensors are designed to withstand the elements and deliver precise data consistently.",
    hardware_prod1_name: "CogniBee HiveMonitor™",
    hardware_prod1_desc: "Comprehensive in-hive sensor for real-time tracking of temperature, humidity, acoustics, and brood health.",
    hardware_prod1_alt: "Image of CogniBee HiveMonitor sensor",
    hardware_prod2_name: "CogniBee ApiaryGateway™",
    hardware_prod2_desc: "Long-range LoRaWAN gateway connecting all your hive monitors to the cloud, ensuring reliable data transmission.",
    hardware_prod2_alt: "Image of CogniBee ApiaryGateway",
    hardware_prod3_name: "CogniBee HiveScale™",
    hardware_prod3_desc: "Precision hive weight scale for monitoring honey flow, consumption rates, and detecting swarming events.",
    hardware_prod3_alt: "Image of CogniBee HiveScale",
    hardware_learn_more_cta: "Learn More",
    hardware_cta_main: "View All Hardware Products",

    // Pricing Section
    pricing_title: "Flexible Plans for Every Apiary",
    pricing_subtitle: "Choose the right plan to unlock the full potential of your hives. All plans start with a 30-day free trial.",
    pricing_recommended: "Recommended",
    pricing_usd_disclaimer: "USD prices are approximate and based on an exchange rate of 1 BRL = 0.18 USD. Actual charges may vary.",
    
    pricing_plan1_name: "Essential Plan",
    pricing_plan1_currency_symbol: "$",
    pricing_plan1_amount: "5.22",
    pricing_plan1_period: "/mo",
    pricing_plan1_feat1: "Up to 6 Hives",
    pricing_plan1_feat2: "Core Data Monitoring",
    pricing_plan1_feat3: "Email Alerts",
    pricing_plan1_cta: "Start Trial",

    pricing_plan2_name: "Pro Plan",
    pricing_plan2_currency_symbol: "$",
    pricing_plan2_amount: "16.02",
    pricing_plan2_period: "/mo",
    pricing_plan2_feat1: "Up to 54 Hives",
    pricing_plan2_feat2: "All Essential Features",
    pricing_plan2_feat3: "Predictive Analytics (Swarm)",
    pricing_plan2_feat4: "SMS & Email Alerts",
    pricing_plan2_cta: "Choose Plan",

    pricing_plan3_name: "Enterprise Plan",
    pricing_plan3_price: "Coming Soon",
    pricing_plan3_feat1: "Unlimited Hives",
    pricing_plan3_feat2: "All Pro Features",
    pricing_plan3_feat3: "API Access & Integrations",
    pricing_plan3_feat4: "Dedicated Support",
    pricing_plan3_cta: "Contact Sales",

    // Resources Section (Blog/News)
    resources_title: "News & Insights",
    resources_subtitle: "Stay updated with the latest in beekeeping technology and insights from the CogniBee team.",
    blog_post1_title: "The Digital Beekeeper: How IoT is Transforming Apiculture",
    blog_post1_date: "May 20, 2024",
    blog_post1_snippet: "Explore the ways smart technology is providing beekeepers with unprecedented insights into their colonies.",
    blog_post2_title: "Case Study: Improving Pollination Yield by 15% with CogniBee",
    blog_post2_date: "May 12, 2024",
    blog_post2_snippet: "Learn how a commercial grower in Rio Grande do Norte leveraged our platform to boost their crop yield.",
    blog_post3_title: "Understanding Hive Acoustics: What Are Your Bees Telling You?",
    blog_post3_date: "April 28, 2024",
    blog_post3_snippet: "A deep dive into the science of acoustic monitoring and what it can tell you about queen status and hive health.",
    blog_post_read_more: "Read More",

    // Testimonials Section (CogniBee)
    testimonials_title: "Trusted by Beekeepers and Growers.",
    testimonial1_quote: "CogniBee transformed our apiary management. The early swarm alerts saved two of our strongest colonies this season. It's an indispensable tool.",
    testimonial1_name: "Carlos Ferreira",
    testimonial1_role: "Commercial Beekeeper, Minas Gerais",
    testimonial2_quote: "The data on pollination activity allowed us to optimize our hive placement for our melon crop, resulting in a 15% increase in yield. We couldn't be happier.",
    testimonial2_name: "Sofia Alves",
    testimonial2_role: "Fruit Grower, Rio Grande do Norte",
    testimonial3_quote: "As a researcher, having access to this level of granular, real-time data is a game-changer for studying colony behavior without invasive methods.",
    testimonial3_name: "Dr. Livia Costa",
    testimonial3_role: "Entomologist, Embrapa",

    // Contact Section
    contact_title: "Get in Touch",
    contact_intro: "Have a question or want a personalized demo? Fill out the form below and our team will get back to you shortly.",
    contact_form_name: "Your Name",
    contact_form_email: "Your Email",
    contact_form_message: "Your Message",
    contact_form_submit: "Send Message",
    contact_address_full: "Mescla Coworking, H11 - Campus I, PUC-Campinas, Av. Reitor Benedito José Barreto Fonseca - Parque das Universidades, Campinas - SP, 13086-900",
    contact_phone_mock: "+55 (19) 91234-5678",
    contact_email_info: "contato@cognibee.tech",

    // Final CTA Section (CogniBee) - Placeholder
    get_started_title: "Ready to Revolutionize Your Beekeeping?",
    get_started_cta: "Request a Personalized Demo",

    // Footer (CogniBee)
    footer_about_snippet: "CogniBee is dedicated to revolutionizing apiculture through smart technology, helping beekeepers and growers thrive.",
    footer_product_nav: "Product",
    footer_solutions_nav: "Solutions",
    footer_company_nav: "Company",
    footer_legal_nav: "Legal",
    footer_careers: "Careers",
    footer_blog: "Blog",
    footer_privacy_policy: "Privacy Policy",
    footer_terms_of_service: "Terms of Service",
    footer_cookie_policy: "Cookie Policy",
    footer_newsletter_signup: "Subscribe for updates",
    footer_newsletter_placeholder: "Enter your email address",
    footer_newsletter_button: "Subscribe",
    footer_copyright: `© ${new Date().getFullYear()} CogniBee. All Rights Reserved.`,

    // Fallback for any old keys if necessary (can be removed later)
    home: 'Home', // Example from old structure
    // Navbar
    howItWorks: 'How It Works',
    dashboard: 'Dashboard',
    features: 'Features',
    shop: 'Shop',
    faq: 'FAQ',
    contact: 'Contact',
    viewDashboard: 'View Dashboard Demo',
    // Hero
    heroTitle: 'Clarivita: Illuminating Your Hives, Empowering Your Decisions.',
    heroSubtitle: 'Gain clear, real-time insights into every hive\'s health and productivity. Proactive monitoring for thriving colonies, powered by intelligent sensing.',
    learnMore: 'Learn More',
    buyNow: 'Buy Now',
    // How it Works
    howItWorksTitle: 'How HiveGenie Works',
    step1Title: 'Install the Sensor',
    step1Desc: 'Easy attachment to your hive.',
    step2Title: 'Connect to the App',
    step2Desc: 'Data transmitted automatically.',
    step3Title: 'Monitor in Real Time',
    step3Desc: 'Weight, temperature, humidity, sound.',
    step4Title: 'Optimize Your Production',
    step4Desc: 'Smart alerts and reports.',
    // Dashboard Highlight
    dashboardHighlightTitle: 'See Your Data in Action',
    dashboardWebDesc: 'Track hive weight and detect swarms or collapses.',
    dashboardAppDesc: 'Monitor internal and external temperature and humidity.',
    dashboardAlertsDesc: 'Real-time alerts directly on your mobile.',
    // Key Benefits
    keyBenefitsTitle: 'Key Benefits',
    benefit1: 'Fewer unnecessary visits.',
    benefit2: 'Risk reduction.',
    benefit3: 'Increased productivity.',
    benefit4: 'Easy to use.',
    // Shop
    shopTitle: 'Our Products',
    productName: 'HiveGenie Sensor',
    productPrice: '$199.99',
    addToCart: 'Add to Cart',
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    q1: 'How is the sensor powered?',
    a1: 'The sensor is powered by a long-lasting, rechargeable battery.',
    q2: 'What is the sensor\'s range?',
    a2: 'The sensor communicates with the hub up to 5km away.',
    q3: 'Is the app free?',
    a3: 'Yes, the app is free to download and use.',
    // Footer
    address: '123 Bee Lane, Honeyville, USA',
    phone: '+1 234 567 890',
    email: 'info@hivegenie.com',
    // Dashboard Page
    dashboardPageTitle: 'My Hives Dashboard',
    // Hive Overview Section
    hiveOverviewTitle: 'Hives Overview',
    totalHives: 'Total Hives',
    activeAlerts: 'Active Alerts',
    overallHealth: 'Overall Health',
    // Hive Details Section
    hiveDetailsTitle: 'Hive Details',
    selectHive: 'Select a Hive',
    hive: 'Hive',
    // Real-Time Data Section
    realTimeDataTitle: 'Real-Time Data',
    weight: 'Weight',
    internalTemp: 'Internal Temp',
    externalTemp: 'External Temp',
    humidity: 'Humidity',
    // Historical Data Section
    historicalDataTitle: 'Historical Data',
    selectMetric: 'Select a Metric',
    selectTimeRange: 'Select Time Range',
    viewChart: 'View Chart',
    // Alerts Section
    alertsTitle: 'Alerts',
    noAlerts: 'No active alerts.',
    // Settings Section
    settingsTitle: 'Settings',
    alertPreferences: 'Alert Preferences',
    notificationEmail: 'Notification Email',
    saveSettings: 'Save Settings',
  },
  pt: {
    // CogniBee - Global
    company_name: "CogniBee",
    slogan: "Da Colmeia à Prosperidade",
    lang_en: "EN",
    lang_pt: "PT-BR",
    video_unsupported: "Seu navegador não suporta a tag de vídeo.",
    hero_video_fallback: "Um vídeo dinâmico mostrando colmeias e visualizações de dados.",

    // Header (CogniBee)
    nav_why_cognibee: "Por que CogniBee?",
    nav_technology: "Tecnologia",
    nav_data_platform: "Plataforma de Dados",
    nav_solutions: "Soluções",
    nav_solutions_beekeepers: "Para Apicultores",
    nav_solutions_growers: "Para Agricultores",
    nav_solutions_researchers: "Para Pesquisadores",
    nav_hardware: "Hardware",
    nav_pricing: "Preços",
    nav_resources: "Recursos",
    nav_mobile_app: "App Móvel",
    nav_contact_us: "Contato",
    nav_cta_button: "Solicitar Demo",
    nav_about_us: "Sobre Nós",

    // Seção Hero (CogniBee)
    hero_title: "Desvende os Segredos de Suas Colmeias. Remota e Inteligentemente.",
    hero_subtitle: "A CogniBee fornece dados em tempo real e insights acionáveis para otimizar a saúde das abelhas, a polinização e a produção de mel.",
    hero_cta_main: "Explore Nossa Solução",
    hero_cta_secondary: "Assistir Vídeo Demo",

    // Seção Por que CogniBee
    why_us_title: "A Apicultura Moderna Exige Soluções Modernas.",
    why_us_intro: "A apicultura tradicional baseia-se na intuição e em inspeções frequentes e disruptivas. A CogniBee capacita você com dados concretos e insights preditivos, permitindo que você intervenha apenas quando necessário, garantindo colmeias mais saudáveis e maior produtividade.",
    why_us_card1_title: "Reduza Perdas e Custos",
    why_us_card1_desc: "Economize tempo, reduza inspeções manuais e previna proativamente o colapso de colônias com alertas antecipados.",
    why_us_card2_title: "Aumente a Produtividade",
    why_us_card2_desc: "Otimize estratégias de polinização, maximize a produção de mel e melhore a força e a resiliência geral da colmeia.",
    why_us_card3_title: "Obtenha Insights Acionáveis",
    why_us_card3_desc: "Entenda o comportamento profundo da colmeia, preveja com precisão eventos de enxameação e detecte anomalias de saúde antes que se tornem críticas.",

    // Seção de Tecnologia (CogniBee) - Placeholder
    tech_title: "Tecnologia Avançada para Colmeias Mais Saudáveis.",
    tech_intro: "Nosso conjunto de sensores coleta pontos de dados cruciais, transmitidos sem fio para seu painel para análise.",
    tech_sensor1_title: "Atmosfera da Colmeia",
    tech_sensor1_desc: "Monitora temperatura, umidade, CO2 e VOCs para condições ideais na colmeia.",
    tech_sensor2_title: "Monitoramento Acústico",
    tech_sensor2_desc: "Analisa os sons da colmeia para detectar o status da rainha, preparativos para enxameação e níveis de estresse.",
    tech_sensor3_title: "Temperatura da Cria",
    tech_sensor3_desc: "Acompanha a temperatura crucial do ninho de cria para o desenvolvimento saudável da colônia.",
    tech_sensor4_title: "Peso da Colmeia",
    tech_sensor4_desc: "Mede mudanças de peso para monitorar a produção de mel, reservas de alimento e enxameação.",
    tech_sensor5_title: "Tráfego e Contagem de Abelhas",
    tech_sensor5_desc: "Conta as abelhas que entram/saem para avaliar a atividade de forrageamento e a força da colônia.",
    tech_sensor6_title: "GPS e Detecção de Roubo",
    tech_sensor6_desc: "Fornece rastreamento da localização da colmeia e alertas para movimentos não autorizados.",
    tech_diagram_title: "Como Tudo se Conecta", // Opcional

    // Seção Plataforma de Dados e Insights (CogniBee)
    platform_title: "Transformando Dados em Decisões.",
    platform_intro: "Acesse os dados da sua colmeia a qualquer hora, em qualquer lugar. Nossa plataforma intuitiva visualiza informações complexas, tornando-as fáceis de entender e agir.",
    platform_cta: "Explore a Plataforma",
    platform_feat1_title: "Dashboards em Tempo Real",
    platform_feat1_desc: "Monitore todas as suas colmeias de relance através de nossos aplicativos web e móvel com fluxos de dados ao vivo e indicadores de desempenho chave.",
    platform_feat2_title: "Alertas Personalizáveis",
    platform_feat2_desc: "Receba notificações instantâneas via SMS/Email para eventos críticos como enxameação, roubo ou problemas de saúde.",
    platform_feat3_title: "Dados Históricos e Tendências",
    platform_feat3_desc: "Analise padrões de longo prazo, compare o desempenho das colmeias e tome decisões históricas informadas.",
    platform_feat4_title: "Análises Preditivas",
    platform_feat4_desc: "Aproveite os insights baseados em IA para previsão de enxames, detecção precoce de doenças e previsão do fluxo de néctar.",
    platform_feat5_title: "Relatórios Abrangentes",
    platform_feat5_desc: "Gere relatórios detalhados para conformidade, manutenção de registros ou compartilhamento de insights com as partes interessadas.",
    platform_mockup_note: "Visualize a saúde e a produtividade do seu apiário com gráficos e mapas intuitivos.",
    platform_brazil_map_alt: "Mapa do Brasil destacando a presença da CogniBee ou insights de dados",
    
    // Seção de Showcase do App Móvel
    mobile_app_headline: "Monitore Suas Colmeias, de Onde Estiver",
    mobile_app_description: "O aplicativo móvel CogniBee para Android & iOS traz todos os dados de sua colmeia, alertas críticos e insights inteligentes diretamente para a ponta dos seus dedos. Fique conectado ao seu apiário, não importa onde você esteja.",
    mobile_app_feature1_title: "Alertas Instantâneos em Tempo Real",
    mobile_app_feature1_desc: "Receba notificações imediatas sobre enxameação, problemas de saúde ou roubo.",
    mobile_app_feature2_title: "Status da Colmeia de Relance",
    mobile_app_feature2_desc: "Verifique o dashboard para uma visão geral rápida de todas as suas colmeias.",
    mobile_app_feature3_title: "Dados Históricos Completos",
    mobile_app_feature3_desc: "Acesse tendências e desempenho passado em qualquer lugar.",
    mobile_app_feature4_title: "Interface Móvel Intuitiva",
    mobile_app_feature4_desc: "Projetado para facilidade de uso no campo.",
    mobile_app_download_prompt: "Baixe o Aplicativo (Em Breve)",
    mobile_app_google_play_alt: "Disponível no Google Play",
    mobile_app_app_store_alt: "Baixar na App Store",
    mobile_app_screen_alt_1: "Visão do dashboard do aplicativo móvel CogniBee",
    mobile_app_screen_alt_2: "Notificação de alerta do aplicativo móvel CogniBee",
    mobile_app_qr_prompt: "Escaneie para Saber Mais (Em Breve)",
    
    // Seção de Soluções (CogniBee)
    solutions_title: "Adaptado às Suas Necessidades.",
    solutions_intro: "A CogniBee oferece soluções especializadas projetadas para atender aos desafios e objetivos únicos de diferentes partes interessadas nos setores de apicultura e agricultura.",
    solutions_beekeepers_title: "Para Apicultores Comerciais",
    solutions_beekeepers_b1: "Monitoramento escalável para grandes apiários.",
    solutions_beekeepers_b2: "Melhore a eficiência operacional e reduza perdas.",
    solutions_beekeepers_b3: "Maximize o ROI com decisões baseadas em dados.",
    solutions_growers_title: "Para Agricultores",
    solutions_growers_b1: "Otimize estratégias de polinização para maior rendimento da colheita.",
    solutions_growers_b2: "Garanta a saúde da colmeia para serviços de polinização eficazes.",
    solutions_growers_b3: "Insights baseados em dados para práticas agrícolas sustentáveis.",
    solutions_researchers_title: "Para Pesquisadores",
    solutions_researchers_b1: "Acesso a dados de alta resolução e precisos da colmeia.",
    solutions_researchers_b2: "Acesso à API para análise de dados personalizada e integração.",
    solutions_researchers_b3: "Parâmetros de sensor personalizáveis para estudos específicos.",
    solutions_learn_more_cta: "Saiba Mais",
    
    // Seção de Hardware (CogniBee) - Placeholder
    hardware_title: "Hardware de Monitoramento Robusto e Confiável.",
    hardware_intro: "Nossos sensores duráveis e fáceis de instalar são projetados para resistir aos elementos e fornecer dados precisos de forma consistente.",
    hardware_prod1_name: "CogniBee HiveMonitor™",
    hardware_prod1_desc: "Sensor abrangente na colmeia para rastreamento em tempo real de temperatura, umidade, acústica e saúde da cria.",
    hardware_prod1_alt: "Imagem do sensor CogniBee HiveMonitor",
    hardware_prod2_name: "CogniBee ApiaryGateway™",
    hardware_prod2_desc: "Gateway LoRaWAN de longo alcance que conecta todos os seus monitores de colmeia à nuvem, garantindo transmissão de dados confiável.",
    hardware_prod2_alt: "Imagem do CogniBee ApiaryGateway",
    hardware_prod3_name: "CogniBee HiveScale™",
    hardware_prod3_desc: "Balança de precisão para colmeia para monitorar o fluxo de mel, taxas de consumo e detectar eventos de enxameação.",
    hardware_prod3_alt: "Imagem da CogniBee HiveScale",
    hardware_learn_more_cta: "Saiba Mais",
    hardware_cta_main: "Ver Todos os Produtos de Hardware",
    
    // Seção de Preços
    pricing_title: "Planos Flexíveis para Cada Apiário",
    pricing_subtitle: "Escolha o plano certo para liberar todo o potencial de suas colmeias. Todos os planos começam com um teste gratuito de 30 dias.",
    pricing_recommended: "Recomendado",
    pricing_usd_disclaimer: "Os preços em USD são aproximados e baseados em uma taxa de câmbio de 1 BRL = 0,18 USD. As cobranças reais podem variar.",
    
    pricing_plan1_name: "Plano Essencial",
    pricing_plan1_currency_symbol: "R$",
    pricing_plan1_amount: "29",
    pricing_plan1_period: "/mês",
    pricing_plan1_feat1: "Até 6 Colmeias",
    pricing_plan1_feat2: "Monitoramento de Dados Essenciais",
    pricing_plan1_feat3: "Alertas por Email",
    pricing_plan1_cta: "Iniciar Teste",
    
    pricing_plan2_name: "Plano Pro",
    pricing_plan2_currency_symbol: "R$",
    pricing_plan2_amount: "89",
    pricing_plan2_period: "/mês",
    pricing_plan2_feat1: "Até 54 Colmeias",
    pricing_plan2_feat2: "Todos os Recursos do Essencial",
    pricing_plan2_feat3: "Análise Preditiva (Enxame)",
    pricing_plan2_feat4: "Alertas por SMS e Email",
    pricing_plan2_cta: "Escolher Plano",
    
    pricing_plan3_name: "Plano Enterprise",
    pricing_plan3_price: "Em Breve",
    pricing_plan3_feat1: "Colmeias Ilimitadas",
    pricing_plan3_feat2: "Todos os Recursos do Pro",
    pricing_plan3_feat3: "Acesso à API e Integrações",
    pricing_plan3_feat4: "Suporte Dedicado",
    pricing_plan3_cta: "Falar com Vendas",
    
    // Seção de Recursos (Blog/Notícias)
    resources_title: "Notícias e Insights",
    resources_subtitle: "Mantenha-se atualizado com as últimas novidades em tecnologia apícola e insights da equipe CogniBee.",
    blog_post1_title: "O Apicultor Digital: Como a IoT Está Transformando a Apicultura",
    blog_post1_date: "20 de Maio de 2024",
    blog_post1_snippet: "Explore as maneiras como a tecnologia inteligente está fornecendo aos apicultores insights sem precedentes sobre suas colônias.",
    blog_post2_title: "Estudo de Caso: Aumentando o Rendimento da Polinização em 15% com a CogniBee",
    blog_post2_date: "12 de Maio de 2024",
    blog_post2_snippet: "Saiba como um agricultor comercial no Rio Grande do Norte alavancou nossa plataforma para aumentar o rendimento de sua safra.",
    blog_post3_title: "Entendendo a Acústica da Colmeia: O Que Suas Abelhas Estão Dizendo?",
    blog_post3_date: "28 de Abril de 2024",
    blog_post3_snippet: "Um mergulho profundo na ciência do monitoramento acústico e o que ele pode dizer sobre o status da rainha e a saúde da colmeia.",
    blog_post_read_more: "Leia Mais",
    
    // Seção de Depoimentos (CogniBee)
    testimonials_title: "Aprovado por Apicultores e Agricultores.",
    testimonial1_quote: "A CogniBee transformou nossa gestão de apiário. Os alertas precoces de enxame salvaram duas de nossas colônias mais fortes nesta temporada. É uma ferramenta indispensável.",
    testimonial1_name: "Carlos Ferreira",
    testimonial1_role: "Apicultor Comercial, Minas Gerais",
    testimonial2_quote: "Os dados sobre a atividade de polinização nos permitiram otimizar a localização de nossas colmeias para nossa safra de melão, resultando em um aumento de 15% no rendimento. Não poderíamos estar mais felizes.",
    testimonial2_name: "Sofia Alves",
    testimonial2_role: "Produtora de Frutas, Rio Grande do Norte",
    testimonial3_quote: "Como pesquisadora, ter acesso a este nível de dados granulares e em tempo real é um divisor de águas para estudar o comportamento da colônia sem métodos invasivos.",
    testimonial3_name: "Dra. Livia Costa",
    testimonial3_role: "Entomologista, Embrapa",
    
    // Seção de Contato
    contact_title: "Entre em Contato",
    contact_intro: "Tem alguma pergunta ou quer uma demonstração personalizada? Preencha o formulário abaixo e nossa equipe entrará em contato em breve.",
    contact_form_name: "Seu Nome",
    contact_form_email: "Seu Email",
    contact_form_message: "Sua Mensagem",
    contact_form_submit: "Enviar Mensagem",
    contato_endereco_full: "Mescla Coworking, H11 - Campus I, PUC-Campinas, Av. Reitor Benedito José Barreto Fonseca - Parque das Universidades, Campinas - SP, 13086-900",
    contato_telefone_mock: "+55 (19) 91234-5678",
    contato_email_info: "contato@cognibee.tech",
    
    // Seção Final de CTA (CogniBee) - Placeholder
    get_started_title: "Pronto para Revolucionar Sua Apicultura?",
    get_started_cta: "Solicitar uma Demonstração Personalizada",
    
    // Rodapé (CogniBee)
    footer_about_snippet: "A CogniBee se dedica a revolucionar a apicultura através de tecnologia inteligente, ajudando apicultores e agricultores a prosperar.",
    footer_product_nav: "Produto",
    footer_solutions_nav: "Soluções",
    footer_company_nav: "Empresa",
    footer_legal_nav: "Legal",
    footer_careers: "Carreiras",
    footer_blog: "Blog",
    footer_privacy_policy: "Política de Privacidade",
    footer_terms_of_service: "Termos de Serviço",
    footer_cookie_policy: "Política de Cookies",
    footer_newsletter_signup: "Inscreva-se para novidades",
    footer_newsletter_placeholder: "Digite seu endereço de email",
    footer_newsletter_button: "Inscrever-se",
    footer_copyright: `© ${new Date().getFullYear()} CogniBee. Todos os Direitos Reservados.`,
    
    // Fallback para quaisquer chaves antigas, se necessário (pode ser removido mais tarde)
    home: 'Início', // Exemplo da estrutura antiga
    // Navbar
    howItWorks: 'Como Funciona',
    dashboard: 'Painel',
    features: 'Recursos',
    shop: 'Loja',
    faq: 'FAQ',
    contact: 'Contato',
    viewDashboard: 'Ver Painel Demo',
    // Hero
    heroTitle: 'Clarivita: Iluminando suas Colmeias, Fortalecendo suas Decisões.',
    heroSubtitle: 'Obtenha insights claros e em tempo real sobre a saúde e produtividade de cada colmeia. Monitoramento proativo para colônias prósperas, com sensores inteligentes.',
    learnMore: 'Saiba Mais',
    buyNow: 'Compre Agora',
    // Como Funciona
    howItWorksTitle: 'Como o HiveGenie Funciona',
    step1Title: 'Instale o Sensor',
    step1Desc: 'Fácil de acoplar à sua colmeia.',
    step2Title: 'Conecte ao Aplicativo',
    step2Desc: 'Dados transmitidos automaticamente.',
    step3Title: 'Monitore em Tempo Real',
    step3Desc: 'Peso, temperatura, umidade, som.',
    step4Title: 'Otimize Sua Produção',
    step4Desc: 'Alertas e relatórios inteligentes.',
    // Destaque do Painel
    dashboardHighlightTitle: 'Veja Seus Dados em Ação',
    dashboardWebDesc: 'Acompanhe o peso da colmeia e detecte enxames ou colapsos.',
    dashboardAppDesc: 'Monitore a temperatura e umidade interna e externa.',
    dashboardAlertsDesc: 'Alertas em tempo real diretamente no seu celular.',
    // Benefícios Chave
    keyBenefitsTitle: 'Principais Benefícios',
    benefit1: 'Menos visitas desnecessárias.',
    benefit2: 'Redução de riscos.',
    benefit3: 'Aumento da produtividade.',
    benefit4: 'Fácil de usar.',
    // Loja
    shopTitle: 'Nossos Produtos',
    productName: 'Sensor HiveGenie',
    productPrice: 'R$999,99',
    addToCart: 'Adicionar ao Carrinho',
    // FAQ
    faqTitle: 'Perguntas Frequentes',
    q1: 'Como o sensor é alimentado?',
    a1: 'O sensor é alimentado por uma bateria recarregável de longa duração.',
    q2: 'Qual o alcance do sensor?',
    a2: 'O sensor se comunica com o hub a até 5km de distância.',
    q3: 'O aplicativo é gratuito?',
    a3: 'Sim, o download e uso do aplicativo são gratuitos.',
    // Rodapé
    address: 'Rua das Abelhas, 123, Melópolis, Brasil',
    phone: '+55 11 98765-4321',
    email: 'info@hivegenie.com.br',
    // Dashboard Page
    dashboardPageTitle: 'Painel das Minhas Colmeias',
    // Seção de Visão Geral das Colmeias
    hiveOverviewTitle: 'Visão Geral das Colmeias',
    totalHives: 'Total de Colmeias',
    activeAlerts: 'Alertas Ativos',
    overallHealth: 'Saúde Geral',
    // Seção de Detalhes da Colmeia
    hiveDetailsTitle: 'Detalhes da Colmeia',
    selectHive: 'Selecione uma Colmeia',
    hive: 'Colmeia',
    // Seção de Dados em Tempo Real
    realTimeDataTitle: 'Dados em Tempo Real',
    weight: 'Peso',
    internalTemp: 'Temp. Interna',
    externalTemp: 'Temp. Externa',
    humidity: 'Umidade',
    // Seção de Dados Históricos
    historicalDataTitle: 'Dados Históricos',
    selectMetric: 'Selecione uma Métrica',
    selectTimeRange: 'Selecione o Período',
    viewChart: 'Ver Gráfico',
    // Seção de Alertas
    alertsTitle: 'Alertas',
    noAlerts: 'Nenhum alerta ativo.',
    // Seção de Configurações
    settingsTitle: 'Configurações',
    alertPreferences: 'Preferências de Alerta',
    notificationEmail: 'Email de Notificação',
    saveSettings: 'Salvar Configurações',
    // Dashboard translations from user
    dashboard_page_title: "Painel de Controle",
    overview_section_title: "Visão Geral das Colmeias",
    total_hives_label: "Total de Colmeias",
    active_alerts_label: "Alertas Ativos",
    overall_health_label: "Saúde Geral",
    honey_production_label: "Produção de Mel (Últimos 30d)",
    view_all_hives_button: "Ver Todas as Colmeias",
    recent_activity_title: "Atividade Recente",
    hive_details_section_title: "Detalhes da Colmeia",
    select_hive_prompt: "Selecione uma Colmeia",
    real_time_data_title: "Dados em Tempo Real",
    weight_label: "Peso",
    internal_temp_label: "Temp. Interna",
    humidity_label: "Umidade",
    battery_level_label: "Nível da Bateria",
    historical_data_title: "Dados Históricos",
    select_metric_prompt: "Selecione a Métrica",
    select_time_range_prompt: "Selecione o Período",
    view_chart_button: "Visualizar Gráfico",
    alerts_section_title: "Alertas e Notificações",
    no_alerts_message: "Nenhum alerta ativo no momento.",
    settings_section_title: "Configurações",
    alert_prefs_subtitle: "Preferências de Alertas",
    swarm_alert_label: "Alerta de Enxameação (Previsão)",
    high_temp_alert_label: "Alerta de Temperatura Alta",
    low_battery_alert_label: "Alerta de Bateria Baixa",
    notification_prefs_subtitle: "Notificações",
    email_notifications_label: "Notificações por Email",
    sms_notifications_label: "Notificações por SMS (Em Breve)",
    save_settings_button: "Salvar Configurações",
    kg_unit: "kg",
    celsius_unit: "°C",
    percentage_unit: "%",
    last_updated_label: "Última atualização",
    sidebar_overview: "Visão Geral",
    sidebar_alerts: "Alertas",
    sidebar_reports: "Relatórios",
    sidebar_settings: "Configurações",
    sidebar_support: "Suporte",
    sidebar_logout: "Sair",
    // Dashboard - English translations
    dashboard_page_title_en: "Dashboard",
    overview_section_title_en: "Hive Overview",
    total_hives_label_en: "Total Hives",
    active_alerts_label_en: "Active Alerts",
    overall_health_label_en: "Overall Health",
    honey_production_label_en: "Honey Production (Last 30d)",
    view_all_hives_button_en: "View All Hives",
    recent_activity_title_en: "Recent Activity",
    hive_details_section_title_en: "Hive Details",
    select_hive_prompt_en: "Select a Hive",
    real_time_data_title_en: "Real-Time Data",
    weight_label_en: "Weight",
    internal_temp_label_en: "Internal Temp",
    humidity_label_en: "Humidity",
    battery_level_label_en: "Battery Level",
    historical_data_title_en: "Historical Data",
    select_metric_prompt_en: "Select Metric",
    select_time_range_prompt_en: "Select Time Range",
    view_chart_button_en: "View Chart",
    alerts_section_title_en: "Alerts & Notifications",
    no_alerts_message_en: "No active alerts at the moment.",
    settings_section_title_en: "Settings",
    alert_prefs_subtitle_en: "Alert Preferences",
    swarm_alert_label_en: "Swarm Alert (Prediction)",
    high_temp_alert_label_en: "High Temperature Alert",
    low_battery_alert_label_en: "Low Battery Alert",
    notification_prefs_subtitle_en: "Notifications",
    email_notifications_label_en: "Email Notifications",
    sms_notifications_label_en: "SMS Notifications (Coming Soon)",
    save_settings_button_en: "Save Settings",
    kg_unit_en: "kg",
    celsius_unit_en: "°C",
    percentage_unit_en: "%",
    last_updated_label_en: "Last updated",
    sidebar_overview_en: "Overview",
    sidebar_alerts_en: "Alerts",
    sidebar_reports_en: "Reports",
    sidebar_settings_en: "Settings",
    sidebar_support_en: "Support",
    sidebar_logout_en: "Logout",
    // Dashboard - General
    current_view_title: "Visão Geral",
    hive_overview_section_title: "Visão Geral da Colmeia",
    hive_overview_description: "Informações gerais sobre o seu apiário.",
    hive_overview_total_hives: "Total de Colmeias",
    hive_overview_active_alerts: "Alertas Ativos",
    hive_overview_overall_health: "Saúde Geral",
    real_time_data_section_title: "Dados em Tempo Real",
    historical_data_section_title: "Dados Históricos",
    settings_section_title_full: "Configurações da Conta",
    alt_logo: "Logo da CogniBee",
    alt_user_avatar: "Avatar do usuário",
    alt_gauge_weight: "Medidor: Peso atual da colmeia",
    alt_gauge_temp: "Medidor: Temperatura interna atual",
    alt_gauge_humidity: "Medidor: Umidade interna atual",
    alt_graph_historical: "Gráfico: Tendências históricas de dados da colmeia",
  },
};

let currentLanguage = 'pt'; // Default language

export const getCurrentLanguage = () => {
  return currentLanguage;
};

export const setCurrentLanguage = (lang) => {
  if (translations[lang]) {
    currentLanguage = lang;
    applyTranslations();
    // Dispatch a custom event to notify components of language change
    window.dispatchEvent(new CustomEvent('languageChange'));
  } else {
    console.warn(`Language '${lang}' not found.`);
  }
};

export const t = (key) => {
  // Fallback to English if the key is not found in the current language
  return translations[currentLanguage][key] || translations.en[key] || key;
};

// Function to apply translations to the DOM
export const applyTranslations = () => {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = t(key);
    if (translation) {
      element.innerHTML = translation;
    }
  });

  // For elements that need attribute translations (e.g., placeholder, alt)
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    element.placeholder = t(key);
  });

  document.querySelectorAll('[data-translate-alt]').forEach(element => {
    const key = element.getAttribute('data-translate-alt');
    element.alt = t(key);
  });

  // You can add more attribute handlers here if needed (e.g., title)
};

document.addEventListener('DOMContentLoaded', () => {
  const storedLanguage = localStorage.getItem('language');
  if (storedLanguage && translations[storedLanguage]) {
    currentLanguage = storedLanguage;
  }
  applyTranslations();

  // Example of how to change the language
  // setCurrentLanguage('en'); 
});
