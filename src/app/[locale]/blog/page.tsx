import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { use } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import TypingTitle from '@/components/typing-title';
import spratt from '@/public/spratt.jpg';
import warsh from '@/public/warsh.jpg';
import metamask from '@/public/metamask.png';
import immigration from '@/public/immigration.png';
import dna1 from '@/public/dna1.jpg';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function Blog({params}: Props) {
  const {locale} = use(params);

  setRequestLocale(locale);

  const t = useTranslations('BlogPage');

  const blogPosts: { slug: string; date: string; thumbnail: StaticImageData; thumbnailAlt: string }[] = [
    {
      slug: '08-27-2026',
      date: 'August 27th, 2026',
      thumbnail: dna1,
      thumbnailAlt: 'DNA double helix diagram',
    },
    {
      slug: '06-28-2026',
      date: 'June 28th, 2026',
      thumbnail: immigration,
      thumbnailAlt: 'Plane landing',
    },
    {
      slug: '03-23-2026',
      date: 'March 23rd, 2026',
      thumbnail: metamask,
      thumbnailAlt: 'MetaMask wallet',
    },
    {
      slug: '01-30-2026',
      date: 'January 30th, 2026',
      thumbnail: warsh,
      thumbnailAlt: 'Kevin Warsh',
    },
    {
      slug: '01-25-2026',
      date: 'January 25th, 2026',
      thumbnail: spratt,
      thumbnailAlt: 'Greenland landscape',
    },
  ];

  return (
    <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
      <div className="text-4xl font-bold">
        <TypingTitle text={t('title')} />
      </div>
      <div className="grid gap-6 w-full">
        {blogPosts.map((post) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const postT = useTranslations(`BlogPage.${post.slug}`);
          return (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="flex items-center gap-6 px-6 py-3 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
            >
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-semibold mb-2">{postT('title')}</h2>
                <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                <p className="text-gray-700 line-clamp-3">{postT('content.paragraph1')}</p>
              </div>
              <div className="flex-shrink-0 hidden sm:block">
                <Image
                  src={post.thumbnail}
                  alt={post.thumbnailAlt}
                  width={280}
                  height={Math.round(post.thumbnail.height * (280 / post.thumbnail.width))}
                  className="rounded-md"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  )
}
export default Blog