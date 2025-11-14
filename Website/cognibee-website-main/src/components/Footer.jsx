import React, { useState, useEffect } from 'react';
import { t, getCurrentLanguage } from '../i18n';
import logo from '../assets/logo.png';

const Footer = () => {
  const [, setLanguage] = useState(getCurrentLanguage());
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(getCurrentLanguage());
    };

    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  const productLinks = [
    { key: 'nav_why_cognibee', href: '#why-cognibee' },
    { key: 'nav_technology', href: '#technology' },
    { key: 'nav_data_platform', href: '#data-platform' },
    { key: 'nav_hardware', href: '#hardware' },
  ];

  const solutionLinks = [
    { key: 'nav_solutions_beekeepers', href: '#solutions' },
    { key: 'nav_solutions_growers', href: '#solutions' },
    { key: 'nav_solutions_researchers', href: '#solutions' },
  ];

  const companyLinks = [
    { key: 'nav_about_us', href: '#' },
    { key: 'nav_contact_us', href: '#contact' }, 
    { key: 'footer_blog', href: '#resources' }, 
  ];

  const legalLinks = [
    { key: 'footer_privacy_policy', href: '#' },
    { key: 'footer_terms_of_service', href: '#' },
    { key: 'footer_cookie_policy', href: '#' },
  ];

  return (
    <footer className="bg-cognibee-dark-text text-cognibee-light-gray font-sans">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-6 bg-cognibee-accent/30 p-0.5 rounded-xl">
              <img src={logo} alt={t('company_name')} className="h-16 w-auto" /> 
            </a>
            <p className="text-sm text-cognibee-secondary mb-6">
              {t('footer_about_snippet')}
            </p>
            <div className="text-sm text-cognibee-secondary space-y-2">
                <p>
                    {t('contact_address_full')}
                </p>
                 <p>
                    <a href={`mailto:${t('contact_email_info')}`} className="hover:text-cognibee-accent">{t('contact_email_info')}</a>
                </p>
            </div>
            <form className="mt-4">
              <p className="text-base font-semibold text-cognibee-white mb-2">{t('footer_newsletter_signup')}</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  className="w-full px-4 py-2.5 rounded-md bg-cognibee-primary border border-cognibee-border text-cognibee-light-gray focus:ring-2 focus:ring-cognibee-accent focus:border-cognibee-accent outline-none placeholder-cognibee-secondary text-sm" 
                  placeholder={t('footer_newsletter_placeholder')}
                />
                <button 
                  type="submit" 
                  className="bg-cognibee-accent text-cognibee-primary font-semibold px-5 py-2.5 rounded-md hover:bg-opacity-90 transition-colors duration-150 text-sm whitespace-nowrap"
                >
                  {t('footer_newsletter_button')}
                </button>
              </div>
            </form>
          </div>

          <div>
            <h5 className="text-base font-semibold text-cognibee-white mb-4 uppercase tracking-wider">{t('footer_product_nav')}</h5>
            <ul className="space-y-2">
              {productLinks.map(link => (
                <li key={link.key}><a href={link.href} className="text-sm hover:text-cognibee-accent transition-colors no-underline">{t(link.key)}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-base font-semibold text-cognibee-white mb-4 uppercase tracking-wider">{t('footer_solutions_nav')}</h5>
            <ul className="space-y-2">
              {solutionLinks.map(link => (
                <li key={link.key}><a href={link.href} className="text-sm hover:text-cognibee-accent transition-colors no-underline">{t(link.key)}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-base font-semibold text-cognibee-white mb-4 uppercase tracking-wider">{t('footer_company_nav')}</h5>
            <ul className="space-y-2 mb-6">
              {companyLinks.map(link => (
                <li key={link.key}><a href={link.href} className="text-sm hover:text-cognibee-accent transition-colors no-underline">{t(link.key)}</a></li>
              ))}
            </ul>
            <h5 className="text-base font-semibold text-cognibee-white mb-4 uppercase tracking-wider">{t('footer_legal_nav')}</h5>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.key}><a href={link.href} className="text-sm hover:text-cognibee-accent transition-colors no-underline">{t(link.key)}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 md:my-10 border-cognibee-border" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-cognibee-secondary mb-4 md:mb-0">
            {t('footer_copyright')}
          </p>
          <div className="flex space-x-5">
            <a href="#" aria-label="Facebook" className="hover:text-cognibee-accent transition-colors"><i className="fab fa-facebook-f text-lg"></i></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cognibee-accent transition-colors"><i className="fab fa-linkedin-in text-lg"></i></a>
            <a href="#" aria-label="Twitter" className="hover:text-cognibee-accent transition-colors"><i className="fab fa-twitter text-lg"></i></a>
            <a href="#" aria-label="Instagram" className="hover:text-cognibee-accent transition-colors"><i className="fab fa-instagram text-lg"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 