import React, { useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { getCurrentLanguage, applyTranslations } from './i18n'; // Removed unused setCurrentLanguage
import './index.css'; // Main Tailwind CSS styles

function App() {
  useEffect(() => {
    // Set initial language and apply translations
    const initialLang = getCurrentLanguage();
    document.documentElement.lang = initialLang.startsWith('pt') ? 'pt-BR' : 'en-US';
    applyTranslations();

    // Listen for language changes triggered from anywhere (e.g., Header)
    const handleLanguageChange = () => {
      applyTranslations();
      // Update document lang attribute on language change as well
      const currentLang = getCurrentLanguage();
      document.documentElement.lang = currentLang.startsWith('pt') ? 'pt-BR' : 'en-US';
    };
    window.addEventListener('languageChange', handleLanguageChange);

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (event) => {
      const anchor = event.target.closest('a[href^="#"]'); // Ensure we get the anchor even if a child element is clicked
      if (anchor) {
        event.preventDefault();
        const id = anchor.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll, true); // Use capture phase for wider compatibility

    // Cleanup
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
      document.removeEventListener('click', handleSmoothScroll, true);
    };
  }, []);

  // The old dashboard navigation logic (navigateToDashboard, page, currentLang, setLang)
  // is removed as the new CogniBee structure is different. 
  // If a dashboard page is needed, it would be handled by a proper routing solution later.

  return (
    <>
      <Header />
      <HomePage /> 
      {/* <DashboardPage /> */}{/* Example if we had a dashboard, would be part of routing */}
      <Footer />
    </>
  );
}

export default App; 