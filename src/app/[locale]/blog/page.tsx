import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { use } from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function Blog({params}: Props) {
  const {locale} = use(params);
  
  setRequestLocale(locale);

  const t = useTranslations('BlogPage');

  const blogPosts = [
    {
      slug: '01-30-2026',
      date: 'January 30th, 2026',
    },
    {
      slug: '01-25-2026',
      date: 'January 25th, 2026',
    }
  ];

  return (
    <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
      <div className="text-4xl font-bold">
        <h1>{t('title')}</h1>
      </div>
      <div className="grid gap-6">
        {blogPosts.map((post) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const postT = useTranslations(`BlogPage.${post.slug}`);
          return (
            <Link 
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="block p-6 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
            >
              <h2 className="text-2xl font-semibold mb-2">{postT('title')}</h2>
              <p className="text-gray-500 text-sm mb-3">{post.date}</p>
              <p className="text-gray-700 line-clamp-3">{postT('content.paragraph1')}</p>
            </Link>
          );
        })}
      </div>
    </main>
  )
}
export default Blog