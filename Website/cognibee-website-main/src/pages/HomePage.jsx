import React, { useState, useEffect } from 'react';
import { t, getCurrentLanguage } from '../i18n';
import MobileAppShowcase from '../components/MobileAppShowcase';
import PricingSection from '../components/PricingSection';
import ResourcesSection from '../components/ResourcesSection';

// CogniBee Homepage Sections

const HeroSection = () => (
  <section 
    id="home"
    className="relative text-cognibee-white min-h-screen flex items-center justify-center overflow-hidden"
  >
    <video 
        autoPlay 
        muted 
        playsInline 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover scale-110"
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
      {t('hero_video_fallback')}
    </video>

    {/* Optional: Dark overlay for better text readability on background image/video */}
    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
    
    <div className="container mx-auto px-6 lg:px-8 text-center relative z-20 py-20">
      <h1 
        className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat leading-tight mb-6"
      >
        {t('hero_title')}
      </h1>
      <p 
        className="text-lg sm:text-xl md:text-2xl font-sans text-cognibee-light-gray mb-10 max-w-3xl mx-auto"
      >
        {t('hero_subtitle')}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a 
          href="#why-cognibee" // Scrolls to Why Us section
          className="bg-cognibee-accent text-cognibee-primary font-semibold font-montserrat px-10 py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg w-full sm:w-auto no-underline"
        >
          {t('hero_cta_main')}
        </a>
        {/* <button 
          // onClick={() => {/* TODO: Implement demo video modal * /}}
          className="bg-transparent border-2 border-cognibee-accent text-cognibee-accent font-semibold font-montserrat px-10 py-3 rounded-md shadow-lg hover:bg-cognibee-accent hover:text-cognibee-primary transition-all duration-300 ease-in-out transform hover:scale-105 text-lg w-full sm:w-auto"
          data-translate="hero_cta_secondary"
        >
          Watch Demo Video
        </button> */}
      </div>
    </div>
  </section>
);

const WhyCogniBeeSection = () => (
  <section id="why-cognibee" className="py-16 lg:py-24 bg-cognibee-white text-cognibee-dark-text">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">{t('why_us_title')}</h2>
      <p className="text-lg text-cognibee-secondary text-center mb-16 max-w-2xl mx-auto">{t('why_us_intro')}</p>
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Card 1 */}
        <div className="bg-cognibee-light-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-cognibee-accent text-4xl mb-4 text-center"> {/* Placeholder for icon */}
            <i className="fas fa-shield-alt"></i>
          </div>
          <h4 className="text-xl font-semibold font-montserrat text-center mb-3">{t('why_us_card1_title')}</h4>
          <p className="font-sans text-center">{t('why_us_card1_desc')}</p>
        </div>
        {/* Card 2 */}
        <div className="bg-cognibee-light-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-cognibee-accent text-4xl mb-4 text-center"> {/* Placeholder for icon */}
            <i className="fas fa-chart-line"></i>
          </div>
          <h4 className="text-xl font-semibold font-montserrat text-center mb-3">{t('why_us_card2_title')}</h4>
          <p className="font-sans text-center">{t('why_us_card2_desc')}</p>
        </div>
        {/* Card 3 */}
        <div className="bg-cognibee-light-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-cognibee-accent text-4xl mb-4 text-center"> {/* Placeholder for icon */}
            <i className="fas fa-brain"></i>
          </div>
          <h4 className="text-xl font-semibold font-montserrat text-center mb-3">{t('why_us_card3_title')}</h4>
          <p className="font-sans text-center">{t('why_us_card3_desc')}</p>
        </div>
      </div>
    </div>
  </section>
);

const TechnologySection = () => (
    <section id="technology" className="py-16 lg:py-24 bg-cognibee-light-gray text-cognibee-dark-text">
        <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-6">{t('tech_title')}</h2>
            <p className="text-lg text-cognibee-secondary text-center mb-16 max-w-3xl mx-auto">{t('tech_intro')}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Sensor Card 1: In-Hive Atmosphere */}
                <div className="bg-cognibee-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                    <div className="text-cognibee-accent text-5xl mb-5"> {/* Placeholder for icon */}
                        <i className="fas fa-thermometer-half"></i>
                    </div>
                    <h5 className="text-xl font-semibold font-montserrat text-center mb-3">{t('tech_sensor1_title')}</h5>
                    <p className="font-sans text-center text-sm text-cognibee-secondary">{t('tech_sensor1_desc')}</p>
                </div>

                {/* Sensor Card 2: Acoustic Monitoring */}
                <div className="bg-cognibee-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                    <div className="text-cognibee-accent text-5xl mb-5"> {/* Placeholder for icon */}
                        <i className="fas fa-microphone-alt"></i>
                    </div>
                    <h5 className="text-xl font-semibold font-montserrat text-center mb-3">{t('tech_sensor2_title')}</h5>
                    <p className="font-sans text-center text-sm text-cognibee-secondary">{t('tech_sensor2_desc')}</p>
                </div>

                {/* Sensor Card 3: Brood Temperature */}
                <div className="bg-cognibee-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                    <div className="text-cognibee-accent text-5xl mb-5"> {/* Placeholder for icon */}
                        <i className="fas fa-temperature-low"></i> {/* alt: fas fa-egg */}
                    </div>
                    <h5 className="text-xl font-semibold font-montserrat text-center mb-3">{t('tech_sensor3_title')}</h5>
                    <p className="font-sans text-center text-sm text-cognibee-secondary">{t('tech_sensor3_desc')}</p>
                </div>

                {/* Sensor Card 4: Hive Weight */}
                <div className="bg-cognibee-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                    <div className="text-cognibee-accent text-5xl mb-5"> {/* Placeholder for icon */}
                        <i className="fas fa-balance-scale-right"></i>
                    </div>
                    <h5 className="text-xl font-semibold font-montserrat text-center mb-3">{t('tech_sensor4_title')}</h5>
                    <p className="font-sans text-center text-sm text-cognibee-secondary">{t('tech_sensor4_desc')}</p>
                </div>

                {/* Sensor Card 5: Bee Traffic & Counting */}
                <div className="bg-cognibee-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                    <div className="text-cognibee-accent text-5xl mb-5"> {/* Placeholder for icon */}
                        <i className="fas fa-fly"></i> {/* Could be more bee-like: fas fa-bacterium or other creative icons*/}
                    </div>
                    <h5 className="text-xl font-semibold font-montserrat text-center mb-3">{t('tech_sensor5_title')}</h5>
                    <p className="font-sans text-center text-sm text-cognibee-secondary">{t('tech_sensor5_desc')}</p>
                </div>

                {/* Sensor Card 6: GPS & Theft Detection */}
                <div className="bg-cognibee-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                    <div className="text-cognibee-accent text-5xl mb-5"> {/* Placeholder for icon */}
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h5 className="text-xl font-semibold font-montserrat text-center mb-3">{t('tech_sensor6_title')}</h5>
                    <p className="font-sans text-center text-sm text-cognibee-secondary">{t('tech_sensor6_desc')}</p>
                </div>
            </div>
            
            {/* Optional Diagram Placeholder - can be developed later */}
            {/* 
            <div className="mt-20 text-center">
                <h3 className="text-2xl font-semibold font-montserrat mb-8" data-translate="tech_diagram_title">How It All Connects</h3>
                <img src="/assets/img/how-it-works-diagram.png" alt="CogniBee System Diagram" className="mx-auto rounded-lg shadow-xl" />
            </div>
            */}
        </div>
    </section>
);

const DataPlatformSection = () => {
  const features = [
    {
      key: "realtime_dashboards",
      icon: "fas fa-tachometer-alt",
      titleKey: "platform_feat1_title",
      descKey: "platform_feat1_desc",
      imgSrc: "/assets/img/dashboard-mockup.png",
      imgAlt: "platform_dashboard_alt"
    },
    {
      key: "custom_alerts",
      icon: "fas fa-bell",
      titleKey: "platform_feat2_title",
      descKey: "platform_feat2_desc",
      imgSrc: "/assets/img/dashboard-mockup.png",
      imgAlt: "platform_dashboard_alt"
    },
    {
      key: "historical_data",
      icon: "fas fa-chart-line",
      titleKey: "platform_feat3_title",
      descKey: "platform_feat3_desc",
      imgSrc: "/assets/img/dashboard-mockup.png",
      imgAlt: "platform_dashboard_alt"
    },
    {
      key: "predictive_analysis",
      icon: "fas fa-brain",
      titleKey: "platform_feat4_title",
      descKey: "platform_feat4_desc",
      imgSrc: "/assets/img/brazil-map-highlight.png",
      imgAlt: "platform_brazil_map_alt"
    },
    {
      key: "comprehensive_reports",
      icon: "fas fa-file-alt",
      titleKey: "platform_feat5_title",
      descKey: "platform_feat5_desc",
      imgSrc: "/assets/img/dashboard-mockup.png",
      imgAlt: "platform_dashboard_alt"
    },
  ];

  const [activeTab, setActiveTab] = useState(features[0].key);
  const [isFading, setIsFading] = useState(false);

  const activeFeature = features.find(f => f.key === activeTab);

  const handleTabClick = (tabKey) => {
    if (tabKey !== activeTab) {
      setIsFading(true);
      setTimeout(() => {
        setActiveTab(tabKey);
        setIsFading(false);
      }, 250); // Half of the transition duration
    }
  };

  return (
    <section id="data-platform" className="py-16 lg:py-24 bg-cognibee-white text-cognibee-dark-text">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-6">{t('platform_title')}</h2>
        <p className="text-lg text-cognibee-secondary text-center mb-16 max-w-3xl mx-auto">{t('platform_intro')}</p>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Column 1: Interactive Feature Tabs */}
          <div className="md:col-span-5 space-y-2">
            {features.map((feature) => (
              <button 
                key={feature.key} 
                onClick={() => handleTabClick(feature.key)}
                className={`w-full flex items-start space-x-4 p-4 rounded-lg text-left transition-all duration-300 ease-in-out
                  ${activeTab === feature.key 
                    ? 'bg-white shadow-lg scale-105 ring-2 ring-cognibee-accent/50' 
                    : 'bg-cognibee-light-gray/50 hover:bg-white hover:shadow-md'
                  }`
                }
              >
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-full transition-colors duration-300
                    ${activeTab === feature.key 
                      ? 'bg-cognibee-accent text-white' 
                      : 'bg-cognibee-accent/10 text-cognibee-accent'
                    }`
                  }>
                    <i className={`${feature.icon} text-xl w-6 text-center`}></i>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-semibold font-montserrat mb-1">{t(feature.titleKey)}</h5>
                  <p className="text-cognibee-secondary font-sans text-sm">{t(feature.descKey)}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Column 2: Image Content Panel */}
          <div className="md:col-span-7 mt-10 md:mt-0 md:sticky top-28">
            <div className={`text-center transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <img 
                src={activeFeature.imgSrc} 
                alt={t(activeFeature.imgAlt)}
                className="rounded-lg shadow-2xl mx-auto w-full" 
              />
              <p className="text-center text-sm text-cognibee-secondary mt-4">{t('platform_mockup_note')}</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" // Or link to a dedicated platform page e.g., /platform-tour
            className="bg-cognibee-accent text-cognibee-primary font-semibold font-montserrat px-10 py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg no-underline"
          >
            {t('platform_cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => (
    <section id="solutions" className="py-16 lg:py-24 bg-cognibee-light-gray text-cognibee-dark-text">
        <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-6">{t('solutions_title')}</h2>
            <p className="text-lg text-cognibee-secondary text-center mb-16 max-w-3xl mx-auto">{t('solutions_intro')}</p>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-cognibee-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col">
                    <div className="text-cognibee-accent text-4xl mb-4"><i className="fas fa-user-friends"></i></div>
                    <h4 className="text-xl font-semibold font-montserrat mb-3">{t('solutions_beekeepers_title')}</h4>
                    <ul className="list-none space-y-2 text-cognibee-secondary flex-grow">
                        <li>{t('solutions_beekeepers_b1')}</li>
                        <li>{t('solutions_beekeepers_b2')}</li>
                        <li>{t('solutions_beekeepers_b3')}</li>
                    </ul>
                    <div className="mt-6">
                        <a href="#" className="text-sm font-semibold text-cognibee-accent hover:text-cognibee-primary no-underline transition-colors duration-150">{t('solutions_learn_more_cta')}</a>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-cognibee-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col">
                    <div className="text-cognibee-accent text-4xl mb-4"><i className="fas fa-tractor"></i></div>
                    <h4 className="text-xl font-semibold font-montserrat mb-3">{t('solutions_growers_title')}</h4>
                    <ul className="list-none space-y-2 text-cognibee-secondary flex-grow">
                        <li>{t('solutions_growers_b1')}</li>
                        <li>{t('solutions_growers_b2')}</li>
                        <li>{t('solutions_growers_b3')}</li>
                    </ul>
                    <div className="mt-6">
                        <a href="#" className="text-sm font-semibold text-cognibee-accent hover:text-cognibee-primary no-underline transition-colors duration-150">{t('solutions_learn_more_cta')}</a>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-cognibee-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col">
                    <div className="text-cognibee-accent text-4xl mb-4"><i className="fas fa-flask"></i></div>
                    <h4 className="text-xl font-semibold font-montserrat mb-3">{t('solutions_researchers_title')}</h4>
                    <ul className="list-none space-y-2 text-cognibee-secondary flex-grow">
                        <li>{t('solutions_researchers_b1')}</li>
                        <li>{t('solutions_researchers_b2')}</li>
                        <li>{t('solutions_researchers_b3')}</li>
                    </ul>
                    <div className="mt-6">
                        <a href="#" className="text-sm font-semibold text-cognibee-accent hover:text-cognibee-primary no-underline transition-colors duration-150">{t('solutions_learn_more_cta')}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const HardwareSection = () => (
    <section id="hardware" className="py-16 lg:py-24 bg-cognibee-white text-cognibee-dark-text">
        <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-6">{t('hardware_title')}</h2>
            <p className="text-lg text-cognibee-secondary text-center mb-16 max-w-3xl mx-auto">{t('hardware_intro')}</p>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Product 1 */}
                <div className="bg-cognibee-light-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                    <img src="/assets/img/hardware-monitor.png" alt={t('hardware_prod1_alt')} className="h-24 mb-4"/>
                    <h5 className="text-xl font-semibold font-montserrat mb-3">{t('hardware_prod1_name')}</h5>
                    <p className="font-sans text-cognibee-secondary flex-grow">{t('hardware_prod1_desc')}</p>
                    <div className="mt-4">
                         <a href="#" className="text-sm font-semibold text-cognibee-accent hover:text-cognibee-primary no-underline transition-colors duration-150">{t('hardware_learn_more_cta')}</a>
                    </div>
                </div>
                {/* Product 2 */}
                <div className="bg-cognibee-light-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                     <img src="/assets/img/hardware-gateway.png" alt={t('hardware_prod2_alt')} className="h-24 mb-4"/>
                    <h5 className="text-xl font-semibold font-montserrat mb-3">{t('hardware_prod2_name')}</h5>
                    <p className="font-sans text-cognibee-secondary flex-grow">{t('hardware_prod2_desc')}</p>
                     <div className="mt-4">
                         <a href="#" className="text-sm font-semibold text-cognibee-accent hover:text-cognibee-primary no-underline transition-colors duration-150">{t('hardware_learn_more_cta')}</a>
                    </div>
                </div>
                {/* Product 3 */}
                <div className="bg-cognibee-light-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                    <img src="/assets/img/hardware-scale.png" alt={t('hardware_prod3_alt')} className="h-24 mb-4"/>
                    <h5 className="text-xl font-semibold font-montserrat mb-3">{t('hardware_prod3_name')}</h5>
                    <p className="font-sans text-cognibee-secondary flex-grow">{t('hardware_prod3_desc')}</p>
                    <div className="mt-4">
                        <a href="#" className="text-sm font-semibold text-cognibee-accent hover:text-cognibee-primary no-underline transition-colors duration-150">{t('hardware_learn_more_cta')}</a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-16">
                <a href="#contact" className="bg-cognibee-accent text-cognibee-primary font-semibold font-montserrat px-10 py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg no-underline">
                    {t('hardware_cta_main')}
                </a>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => {
    const testimonials = [
        { quoteKey: 'testimonial1_quote', nameKey: 'testimonial1_name', roleKey: 'testimonial1_role' },
        { quoteKey: 'testimonial2_quote', nameKey: 'testimonial2_name', roleKey: 'testimonial2_role' },
        { quoteKey: 'testimonial3_quote', nameKey: 'testimonial3_name', roleKey: 'testimonial3_role' },
    ];

    return (
        <section id="testimonials" className="py-16 lg:py-24 bg-cognibee-light-gray text-cognibee-dark-text">
            <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16">{t('testimonials_title')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.nameKey} className="bg-cognibee-white p-8 rounded-lg shadow-lg flex flex-col">
                            <i className="fas fa-quote-left text-cognibee-accent text-2xl mb-4"></i>
                            <p className="text-cognibee-secondary mb-6 flex-grow">"{t(testimonial.quoteKey)}"</p>
                            <div>
                                <p className="font-bold font-montserrat">{t(testimonial.nameKey)}</p>
                                <p className="text-sm text-cognibee-secondary">{t(testimonial.roleKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => (
    <section id="contact" className="py-16 lg:py-24 bg-cognibee-white text-cognibee-dark-text">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">{t('contact_title')}</h2>
                    <p className="text-lg text-cognibee-secondary mb-8">{t('contact_intro')}</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-map-marker-alt mt-1 text-cognibee-accent"></i>
                            <p className="text-cognibee-secondary">
                                {t('contact_address_full')}
                            </p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-phone-alt mt-1 text-cognibee-accent"></i>
                            <a href={`tel:${t('contact_phone_mock')}`} className="text-cognibee-secondary hover:text-cognibee-accent">{t('contact_phone_mock')}</a>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-envelope mt-1 text-cognibee-accent"></i>
                            <a href={`mailto:${t('contact_email_info')}`} className="text-cognibee-secondary hover:text-cognibee-accent">{t('contact_email_info')}</a>
                        </div>
                    </div>
                </div>
                <div>
                    <form 
                        name="contact" 
                        method="POST" 
                        data-netlify="true"
                        className="bg-cognibee-light-gray p-8 rounded-lg shadow-lg"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="mb-5">
                            <label htmlFor="name" className="block text-sm font-medium text-cognibee-secondary mb-2">{t('contact_form_name')}</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cognibee-accent focus:border-cognibee-accent" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-sm font-medium text-cognibee-secondary mb-2">{t('contact_form_email')}</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cognibee-accent focus:border-cognibee-accent" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-cognibee-secondary mb-2">{t('contact_form_message')}</label>
                            <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cognibee-accent focus:border-cognibee-accent"></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="bg-cognibee-accent text-cognibee-primary font-semibold font-montserrat px-8 py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105">
                                {t('contact_form_submit')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);


const FinalCTASection = () => (
    <section id="get-started" className="py-16 lg:py-24 bg-cognibee-primary text-cognibee-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-8">{t('get_started_title')}</h2>
            <a href="#contact" className="bg-cognibee-accent text-cognibee-primary font-bold font-montserrat px-10 py-4 rounded-md shadow-lg hover:bg-opacity-90 text-xl no-underline">
              {t('get_started_cta')}
            </a>
        </div>
    </section>
);


const HomePage = ({ navigateToDashboard }) => {
    const [, setLanguage] = useState(getCurrentLanguage());
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(getCurrentLanguage());
        };

        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('languageChange', handleLanguageChange);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('languageChange', handleLanguageChange);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-cognibee-white">
            <HeroSection />
            <WhyCogniBeeSection />
            <TechnologySection />
            <DataPlatformSection />
            <MobileAppShowcase />
            <SolutionsSection />
            <HardwareSection />
            <PricingSection />
            <ResourcesSection />
            <TestimonialsSection />
            <ContactSection />
            <FinalCTASection />
            
            {showBackToTop && (
                <a
                    href="#home"
                    className="fixed bottom-8 right-8 bg-cognibee-accent text-white w-12 h-12 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center z-50"
                    aria-label="Go to top"
                >
                    <i className="fas fa-arrow-up text-xl"></i>
                </a>
            )}
        </div>
    );
};

export default HomePage; 