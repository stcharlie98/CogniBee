import React, { useState, useEffect, useRef } from 'react';
import { t, setCurrentLanguage, getCurrentLanguage } from '../i18n';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLanguage] = useState(getCurrentLanguage()); // State to trigger re-render

  const solutionsTimeoutRef = useRef(null);
  const mobileMenuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(getCurrentLanguage());
    };

    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    clearTimeout(mobileMenuTimeoutRef.current);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    mobileMenuTimeoutRef.current = setTimeout(() => {
        setIsMobileMenuOpen(false);
    }, 150);
  };

  const handleSolutionsMouseEnter = () => {
    clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsDropdownOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsDropdownOpen(false);
    }, 200);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(solutionsTimeoutRef.current);
      clearTimeout(mobileMenuTimeoutRef.current);
    };
  }, []);

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
    handleMobileLinkClick();
  };

  const navLinks = [
    { href: '#why-cognibee', key: 'nav_why_cognibee' },
    { href: '#technology', key: 'nav_technology' },
    { href: '#data-platform', key: 'nav_data_platform' },
    { href: '#mobile-app', key: 'nav_mobile_app' },
    { href: '#hardware', key: 'nav_hardware' },
    { href: '#pricing', key: 'nav_pricing' },
    { href: '#resources', key: 'nav_resources' },
    { href: '#contact', key: 'nav_contact_us' },
  ];

  const solutionLinks = [
      { href: '#solutions-beekeepers', key: 'nav_solutions_beekeepers' },
      { href: '#solutions-growers', key: 'nav_solutions_growers' },
      { href: '#solutions-researchers', key: 'nav_solutions_researchers' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans 
                     ${isScrolled 
                       ? 'bg-clarivita-dark-bg shadow-lg text-cognibee-white' 
                       : 'bg-transparent text-cognibee-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center">
              <a href="#home" className={`flex-shrink-0 rounded-xl transition-all duration-300 ${isScrolled ? 'bg-cognibee-accent/30 p-0.5' : ''}`}>
                <img 
                  className="h-14 md:h-16 w-auto" 
                  src={logo}
                  alt={t('company_name')}
                />
              </a>
              <nav className="hidden xl:flex items-center space-x-1 xl:space-x-2 ml-4">
                {navLinks.map(link => (
                  <a key={link.key} href={link.href} 
                     className="px-3 py-2 rounded-md text-sm font-medium hover:bg-cognibee-accent hover:text-cognibee-primary transition-colors duration-150 no-underline"
                  >
                    {t(link.key)}
                  </a>
                ))}
                <div 
                  className="relative" 
                  onMouseEnter={handleSolutionsMouseEnter} 
                  onMouseLeave={handleSolutionsMouseLeave}
                >
                  <button 
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-cognibee-accent hover:text-cognibee-primary transition-colors duration-150 flex items-center"
                  >
                    {t('nav_solutions')} <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-200 ${isSolutionsDropdownOpen ? 'transform rotate-180' : ''}`}></i>
                  </button>
                  {isSolutionsDropdownOpen && (
                    <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-cognibee-white ring-1 ring-black ring-opacity-5 focus:outline-none py-1">
                      {solutionLinks.map(solLink => (
                         <a key={solLink.key} href={solLink.href}
                            className="block px-4 py-2 text-sm text-cognibee-dark-text hover:bg-cognibee-light-gray hover:text-cognibee-primary transition-colors duration-150 no-underline"
                         >
                           {t(solLink.key)}
                         </a>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
          </div>

          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm">
              <button onClick={() => switchLanguage('en')} className="px-2 py-1 hover:text-cognibee-accent">{t('lang_en')}</button>
              <span>|</span>
              <button onClick={() => switchLanguage('pt')} className="px-2 py-1 hover:text-cognibee-accent">{t('lang_pt')}</button>
            </div>
            <a 
              href="#contact"
              className="bg-cognibee-accent text-cognibee-primary font-semibold px-5 py-2.5 rounded-md shadow hover:bg-opacity-90 transition-colors duration-150 text-sm no-underline whitespace-nowrap"
            >
              {t('nav_cta_button')}
            </a>
          </div>

          <div className="xl:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu} 
              className="text-cognibee-white hover:text-cognibee-accent focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden bg-clarivita-dark-bg shadow-xl absolute top-full left-0 right-0 z-40 pb-5">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map(link => (
              <a key={`mobile-${link.key}`} href={link.href} onClick={handleMobileLinkClick}
                 className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-cognibee-white hover:bg-cognibee-accent hover:text-cognibee-primary transition-colors duration-150 no-underline"
              >
                {t(link.key)}
              </a>
            ))}
            <div className="w-full text-center">
                <p className="px-3 py-3 text-base font-medium text-cognibee-accent">{t('nav_solutions')}</p>
                {solutionLinks.map(solLink => (
                    <a key={`mobile-${solLink.key}`} href={solLink.href} onClick={handleMobileLinkClick}
                       className="block w-full text-center px-3 py-2 text-sm text-gray-300 hover:bg-cognibee-accent hover:text-cognibee-primary transition-colors duration-150 no-underline"
                    >
                        {t(solLink.key)}
                    </a>
                ))}
            </div>
            <hr className="my-4 w-4/5 border-cognibee-border opacity-50"/>
            <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-cognibee-white">
              <button onClick={() => switchLanguage('en')} className="px-3 py-1 hover:text-cognibee-accent border border-transparent hover:border-cognibee-accent rounded-md">{t('lang_en')}</button>
              <span className="opacity-50">|</span>
              <button onClick={() => switchLanguage('pt')} className="px-3 py-1 hover:text-cognibee-accent border border-transparent hover:border-cognibee-accent rounded-md">{t('lang_pt')}</button>
            </div>
            <a 
              href="#contact" 
              onClick={handleMobileLinkClick}
              className="mt-6 w-4/5 max-w-xs text-center bg-cognibee-accent text-cognibee-primary font-semibold px-6 py-3 rounded-md shadow hover:bg-opacity-90 transition-colors duration-150 text-base no-underline"
            >
              {t('nav_cta_button')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 