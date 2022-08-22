import Head from 'next/head';
import React from 'react';
import Footer from '../components/footer/Footer';
import Formacoes from '../components/formacoes/Formacoes';
import Header from '../components/header/Header';

function FormationsPage() {
  return (
    <div id="formacoes">
      <Head>
        <title>Formações | IBM - Instituto Brasileiro de Microfisioterapia</title>
        <meta name="description" content="IBM - Instituto Brasileiro de Microfisioterapia" />
      </Head>
      <Header />

      <main>
        <h1>Nossas Formações</h1>
        <p className='page__subtitle'>Formações em Microfisioterapia</p>
        <Formacoes />
      </main>

      <Footer />
    </div>
  )
}

export default FormationsPage;