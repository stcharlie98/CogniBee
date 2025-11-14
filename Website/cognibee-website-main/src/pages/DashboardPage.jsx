import React, { useState, useEffect } from 'react';
import { t, getCurrentLanguage } from '../i18n';
import { LayoutDashboard, BarChart2, Calendar, Bell, Settings, User } from 'lucide-react';

// --- Page Components for each tab ---

const OverviewSection = () => (
    <div className="bg-white rounded-lg shadow-xl h-full flex items-center justify-center">
        <p className="text-gray-500 text-lg">
            {t('contentComingSoon')} <span className="font-semibold">{t('db_overview')}</span> {t('dashboard_content_coming_soon_2')}
        </p>
    </div>
);

const RealTimeDataSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">{t('db_rt_weight_label')}</h3>
            <img src="/assets/img/graph-realtime-weight.png" alt={t('alt_graph_realtime_weight')} className="w-full h-48 object-cover bg-gray-200 rounded"/>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">{t('db_rt_temp_label')}</h3>
            <img src="/assets/img/graph-realtime-temp.png" alt={t('alt_graph_realtime_temp')} className="w-full h-48 object-cover bg-gray-200 rounded"/>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">{t('db_rt_humidity_label')}</h3>
            <img src="/assets/img/gauge-humidity.png" alt={t('alt_gauge_humidity')} className="w-full h-48 object-cover bg-gray-200 rounded"/>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
             <h3 className="font-semibold text-center">{t('db_rt_acoustic_label')}</h3>
        </div>
    </div>
);

const HistoricalDataSection = () => (
    <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
            <label className="font-semibold text-gray-700">{t('db_hist_timerange_label')}</label>
            {/* This is a non-functional mock */}
            <input type="text" readOnly value="01/05/2024 - 31/05/2024" className="mt-2 bg-gray-100 p-2 rounded-md w-full md:w-auto"/>
        </div>
        <div>
            <h3 className="font-semibold mb-2">{t('db_hist_graph_label')}</h3>
            <img src="/assets/img/graph-historical.png" alt={t('alt_graph_historical')} className="w-full h-96 object-cover bg-gray-200 rounded"/>
        </div>
    </div>
);

const AlertsSection = () => (
    <div className="bg-white rounded-lg shadow-xl h-full flex items-center justify-center">
        <p className="text-gray-500 text-lg">
            {t('contentComingSoon')} <span className="font-semibold">{t('db_alerts')}</span> {t('dashboard_content_coming_soon_2')}
        </p>
    </div>
);

const SettingsSection = () => (
    <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">{t('db_settings_profile_title')}</h3>
            <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-cognibee-accent-light rounded-full flex items-center justify-center">
                    <User size={32} className="text-cognibee-primary"/>
                </div>
                <div>
                    <p>{t('db_settings_profile_name')}</p>
                    <p>{t('db_settings_profile_email')}</p>
                    <p>{t('db_settings_profile_plan')}</p>
                </div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">{t('db_settings_notifications_title')}</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span>{t('db_settings_email_label')}</span>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <span>{t('db_settings_push_label')}</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
);


const DashboardPage = () => {
    const [activeView, setActiveView] = useState('overview');
    const [, setLanguage] = useState(getCurrentLanguage());

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(getCurrentLanguage());
        };

        window.addEventListener('languageChange', handleLanguageChange);

        return () => {
            window.removeEventListener('languageChange', handleLanguageChange);
        };
    }, []);

    const renderContent = () => {
        switch (activeView) {
            case 'overview':
                return <OverviewSection />;
            case 'realtime':
                return <RealTimeDataSection />;
            case 'history':
                return <HistoricalDataSection />;
            case 'alerts':
                return <AlertsSection />;
            case 'settings':
                return <SettingsSection />;
            default:
                return <OverviewSection />;
        }
    };
    
    const navItems = [
        { id: 'overview', labelKey: 'db_overview', icon: LayoutDashboard },
        { id: 'realtime', labelKey: 'db_realtime', icon: BarChart2 },
        { id: 'history', labelKey: 'db_history', icon: Calendar },
        { id: 'alerts', labelKey: 'db_alerts', icon: Bell },
        { id: 'settings', labelKey: 'db_settings', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-cognibee-light-gray font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-cognibee-primary text-cognibee-white flex flex-col">
                <div className="flex items-center justify-center h-20 shadow-md">
                    <img src="/logo-white.svg" alt={t('company_name')} className="h-10" />
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {navItems.map(item => (
                         <a href="#"
                           key={item.id}
                           onClick={(e) => { e.preventDefault(); setActiveView(item.id); }}
                           className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors ${activeView === item.id ? 'bg-cognibee-accent text-cognibee-primary font-semibold' : 'hover:bg-cognibee-dark/50'}`}>
                            <item.icon size={18} className="mr-3"/>
                            {t(item.labelKey)}
                        </a>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">{t(navItems.find(i => i.id === activeView)?.labelKey || '')}</h1>
                     <div className="flex items-center space-x-3">
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                            <User size={20} className="text-gray-600"/>
                        </button>
                        <button className="bg-cognibee-accent p-2 rounded-full shadow-md hover:bg-yellow-500 transition relative">
                            <Bell size={20} className="text-cognibee-primary"/>
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-cognibee-accent"></span>
                        </button>
                    </div>
                </div>
                
                <div className="h-[calc(100vh-150px)]">
                   {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default DashboardPage; 