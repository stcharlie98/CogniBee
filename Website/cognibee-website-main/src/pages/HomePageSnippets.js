export const TechnologySection = () => {
    const sensors = [
        {
            key: 'sensor1',
            icon: 'fas fa-thermometer-half',
            titleKey: 'tech_sensor1_title',
            descKey: 'tech_sensor1_desc',
            status: 'active' // In-Hive Atmosphere (Temp & Humidity)
        },
        {
            key: 'sensor2',
            icon: 'fas fa-microphone-alt',
            titleKey: 'tech_sensor2_title',
            descKey: 'tech_sensor2_desc',
            status: 'future'
        },
        {
            key: 'sensor3',
            icon: 'fas fa-temperature-low',
            titleKey: 'tech_sensor3_title',
            descKey: 'tech_sensor3_desc',
            status: 'future'
        },
        {
            key: 'sensor4',
            icon: 'fas fa-balance-scale-right',
            titleKey: 'tech_sensor4_title',
            descKey: 'tech_sensor4_desc',
            status: 'active' // Hive Weight
        },
        {
            key: 'sensor5',
            icon: 'fas fa-fly',
            titleKey: 'tech_sensor5_title',
            descKey: 'tech_sensor5_desc',
            status: 'future'
        },
        {
            key: 'sensor6',
            icon: 'fas fa-map-marker-alt',
            titleKey: 'tech_sensor6_title',
            descKey: 'tech_sensor6_desc',
            status: 'future'
        }
    ];

    return (
      <section id="technology" className="py-16 lg:py-24 bg-cognibee-light-gray text-cognibee-dark-text">
          <div className="container mx-auto px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-6">{t('tech_title')}</h2>
              <p className="text-lg text-cognibee-secondary text-center mb-16 max-w-3xl mx-auto">{t('tech_intro')}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {sensors.map(sensor => {
                      const isFuture = sensor.status === 'future';
                      return (
                          <div key={sensor.key} className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center h-full relative overflow-hidden ${isFuture ? 'opacity-70' : ''}`}>
                              {isFuture && (
                                <div className="absolute top-2.5 right-[-34px] bg-cognibee-accent text-white text-xs font-semibold px-8 py-1 transform rotate-45">
                                  {t('coming_soon_badge')}
                                </div>
                              )}
                              <div className="text-cognibee-accent text-5xl mb-5">
                                  <i className={sensor.icon}></i>
                              </div>
                              <h5 className="text-xl font-semibold font-montserrat text-center mb-3">{t(sensor.titleKey)}</h5>
                              <p className="font-sans text-center text-sm text-cognibee-secondary">{t(sensor.descKey)}</p>
                          </div>
                      );
                  })}
              </div>
          </div>
      </section>
  );
} 