import Head from 'next/head';
import React from 'react';
import Artigos from '../components/artigos/Artigos';
import Footer from '../components/footer/Footer';
import Formacoes from '../components/formacoes/Formacoes';
import Header from '../components/header/Header';
import QaSec from '../components/QASec/QaSec';

function ArtigosPage() {
  return (
    <div id="artigos">
      <Head>
        <title>Artigos | IBM - Instituto Brasileiro de Microfisioterapia</title>
        <meta name="description" content="IBM - Instituto Brasileiro de Microfisioterapia" />
      </Head>
      <Header />

      <main>
        <h1>Artigos</h1>
        <p className='page__subtitle'>Lorem ipsum</p>
        <Artigos />
      </main>

      <Footer />
    </div>
  )
}

export default ArtigosPage;