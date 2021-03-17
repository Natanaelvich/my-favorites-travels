import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import LinkWrapper from 'components/LinkWrapper';
import { NextSeo } from 'next-seo';

import * as S from './styles';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <NextSeo
      title={`${heading} - Travel`}
      description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
      canonical="https://myfavoritetravels.vercel.app"
      openGraph={{
        url: 'https://myfavoritetravels.vercel.app',
        title: `${heading} - My Facorite Travels`,
        description:
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
      }}
    />
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
);

export default PageTemplate;
