import React from 'react';
import { t } from '../i18n';

const ResourcesSection = () => {
  const posts = [
    {
      imgSrc: "/assets/img/blog-post-placeholder-1.png",
      titleKey: "blog_post1_title",
      dateKey: "blog_post1_date",
      snippetKey: "blog_post1_snippet",
    },
    {
      imgSrc: "/assets/img/blog-post-placeholder-2.png",
      titleKey: "blog_post2_title",
      dateKey: "blog_post2_date",
      snippetKey: "blog_post2_snippet",
    },
    {
      imgSrc: "/assets/img/blog-post-placeholder-3.png",
      titleKey: "blog_post3_title",
      dateKey: "blog_post3_date",
      snippetKey: "blog_post3_snippet",
    },
  ];

  return (
    <section id="resources" className="py-16 lg:py-24 bg-cognibee-light-gray text-cognibee-dark-text">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">{t('resources_title')}</h2>
          <p className="text-lg text-cognibee-secondary mb-12">{t('resources_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.titleKey} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img src={post.imgSrc} alt={t(post.titleKey)} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-cognibee-secondary mb-2">{t(post.dateKey)}</p>
                <h3 className="text-xl font-semibold font-montserrat mb-3 flex-grow">{t(post.titleKey)}</h3>
                <p className="text-cognibee-secondary font-sans text-sm mb-4">{t(post.snippetKey)}</p>
                <a href="#" className="text-sm font-semibold text-cognibee-accent hover:text-cognibee-primary self-start no-underline">
                  {t('blog_post_read_more')} <i className="fas fa-arrow-right text-xs ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection; 