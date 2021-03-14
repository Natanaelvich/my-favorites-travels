import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';
import { NextSeo } from 'next-seo';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Favorites Travels"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://myfavoritetravels.vercel.app"
        openGraph={{
          url: 'https://myfavoritetravels.vercel.app',
          title: 'My Favorites Travels',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://myfavoritetravels.vercel.app/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Favorites Travels',
            },
          ],
          site_name: 'My Favorites Travels',
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
