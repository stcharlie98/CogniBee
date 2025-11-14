import React from 'react';
import { t } from '../i18n';

const MobileAppShowcase = () => {
  const features = [
    { key: 'mobile_app_feature1', icon: 'fas fa-bell' },
    { key: 'mobile_app_feature2', icon: 'fas fa-tachometer-alt' },
    { key: 'mobile_app_feature3', icon: 'fas fa-history' },
    { key: 'mobile_app_feature4', icon: 'fas fa-mobile-alt' },
  ];

  return (
    <section id="mobile-app" className="py-16 lg:py-24 bg-cognibee-light-gray text-cognibee-dark-text">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">{t('mobile_app_headline')}</h2>
          <p className="text-lg text-cognibee-secondary mb-12">{t('mobile_app_description')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockups */}
          <div className="relative h-96 flex items-center justify-center group">
            {/* App UI Mockup (background) */}
            <img
              src="/assets/img/mobile-screen-1.png"
              alt={t('mobile_app_screen_alt_1')}
              loading="lazy"
              className="absolute w-auto h-full max-h-[24rem] rounded-2xl shadow-xl z-10 transition-transform duration-300 ease-in-out transform translate-x-12 translate-y-4 group-hover:translate-x-16 group-hover:translate-y-6"
            />
            {/* Smartphone Frame (foreground) */}
            <img
              src="/assets/img/mobile-screen-2.png"
              alt={t('mobile_app_screen_alt_2')}
              loading="lazy"
              className="absolute w-auto h-full max-h-[24rem] rounded-2xl shadow-2xl z-20 transition-transform duration-300 ease-in-out transform -translate-x-12 -translate-y-4 group-hover:-translate-x-16 group-hover:-translate-y-6"
            />
          </div>

          {/* Features & Download */}
          <div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map(feature => (
                <div key={feature.key} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="bg-cognibee-accent/10 text-cognibee-accent p-3 rounded-full">
                      <i className={`${feature.icon} text-xl`}></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-md font-semibold font-montserrat">{t(`${feature.key}_title`)}</h5>
                    <p className="text-cognibee-secondary font-sans text-sm">{t(`${feature.key}_desc`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-cognibee-border text-center">
               <h4 className="text-xl font-bold mb-4">{t('mobile_app_download_prompt')}</h4>
               <div className="flex justify-center mb-4">
                 <img 
                  src="/assets/img/store-badges-qr.png"
                  alt={t('app_download_badges_alt')}
                  loading="lazy"
                  className="max-w-xs w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('mobile_app_qr_prompt')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase; 