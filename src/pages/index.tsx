import SEO from '@/components/Seo';
import { Container } from '../styles/SingnIn/styles';

export default function Home() {
  return (
    <Container>
      <SEO
        title="Bem vindo"
        description="Projeto integrador ADS 4º período Unifacema 2020."
        shouldIndexPage
        image="Seo.png"
        shouldExcludeTitleSuffix={false}
      />
      <h1>inicio</h1>
      <h2>Test</h2>
    </Container>
  );
}
