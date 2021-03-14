import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Pagina não encontrada</h1>
      <h1>Você está perdido?</h1>
      <Link href="/">
        <a>Voltar para Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
