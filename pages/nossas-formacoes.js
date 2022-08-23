import Head from 'next/head';
import React from 'react';
import Footer from '../components/footer/Footer';
import Formacoes from '../components/formacoes/Formacoes';
import Header from '../components/header/Header';
import QaSec from '../components/QASec/QaSec';

function FormationsPage() {
  return (
    <div id="formacoes">
      <Head>
        <title>Formações | IBM - Instituto Brasileiro de Microfisioterapia</title>
        <meta name="description" content="IBM - Instituto Brasileiro de Microfisioterapia" />
      </Head>
      <Header />

      <main>
        <h1>Formação em Microfisioterapia</h1>
        <p className='page__subtitle'>Do Básico ao Avançado</p>
        <Formacoes />
        <QaSec />
      </main>

      <Footer />
    </div>
  )
}

export default FormationsPage;