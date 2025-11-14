import React from 'react';
import { t, getCurrentLanguage } from '../i18n';

const BRL_TO_USD_RATE = 0.18;

const PricingSection = () => {
  const currentLang = getCurrentLanguage();

  const tiers = [
    {
      nameKey: 'pricing_plan1_name',
      amountKey: 'pricing_plan1_amount',
      currencyKey: 'pricing_plan1_currency_symbol',
      periodKey: 'pricing_plan1_period',
      features: [
        'pricing_plan1_feat1',
        'pricing_plan1_feat2',
        'pricing_plan1_feat3',
      ],
      ctaKey: 'pricing_plan1_cta',
      recommended: false,
    },
    {
      nameKey: 'pricing_plan2_name',
      amountKey: 'pricing_plan2_amount',
      currencyKey: 'pricing_plan2_currency_symbol',
      periodKey: 'pricing_plan2_period',
      features: [
        'pricing_plan2_feat1',
        'pricing_plan2_feat2',
        'pricing_plan2_feat3',
        'pricing_plan2_feat4',
      ],
      ctaKey: 'pricing_plan2_cta',
      recommended: true,
    },
    {
      nameKey: 'pricing_plan3_name',
      priceKey: 'pricing_plan3_price', // Special case for "Contact Us"
      features: [
        'pricing_plan3_feat1',
        'pricing_plan3_feat2',
        'pricing_plan3_feat3',
        'pricing_plan3_feat4',
      ],
      ctaKey: 'pricing_plan3_cta',
      recommended: false,
      disabled: true,
    },
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-cognibee-white text-cognibee-dark-text">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">{t('pricing_title')}</h2>
          <p className="text-lg text-cognibee-secondary mb-12">{t('pricing_subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const isNumeric = tier.amountKey && tier.currencyKey && tier.periodKey;
            const brlAmount = isNumeric ? parseFloat(t(tier.amountKey)) : 0;

            return (
              <div 
                key={tier.nameKey} 
                className={`border rounded-lg shadow-lg p-8 flex flex-col ${tier.recommended ? 'border-cognibee-accent bg-cognibee-light-gray scale-105' : 'border-cognibee-border'}`}
              >
                {tier.recommended && (
                  <div className="text-center mb-4">
                    <span className="bg-cognibee-accent text-cognibee-primary text-xs font-bold px-3 py-1 rounded-full uppercase">{t('pricing_recommended')}</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold font-montserrat text-center mb-2">{t(tier.nameKey)}</h3>
                
                {isNumeric ? (
                  <>
                    <p className="text-4xl font-bold text-center">
                      {t(tier.currencyKey)}{t(tier.amountKey)}
                      <span className="text-lg font-normal text-cognibee-secondary">{t(tier.periodKey)}</span>
                    </p>
                    {currentLang === 'pt-br' && (
                       <p className="text-sm text-cognibee-secondary text-center mb-6">
                         (approx. US$ {(brlAmount * BRL_TO_USD_RATE).toFixed(2)})
                       </p>
                    )}
                  </>
                ) : (
                  <p className="text-4xl font-bold text-center mb-6">{t(tier.priceKey)}</p>
                )}
                
                <ul className="space-y-4 text-cognibee-secondary mb-8 flex-grow">
                  {tier.features.map(feature => (
                    <li key={feature} className="flex items-center">
                      <i className="fas fa-check-circle text-cognibee-accent mr-3"></i>
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={tier.disabled ? '#' : '#contact'} 
                  className={`w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 no-underline
                    ${tier.recommended 
                      ? 'bg-cognibee-accent text-cognibee-primary font-montserrat shadow-lg hover:bg-opacity-90 transform hover:scale-105 text-lg' 
                      : 'bg-cognibee-primary text-cognibee-white hover:bg-opacity-90'}
                    ${tier.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {t(tier.ctaKey)}
                </a>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-12">
            <p className="text-xs text-cognibee-secondary">{t('pricing_usd_disclaimer')}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 