import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/Banner';
import Header from '../components/header/Header';
import SectionFive from '../components/sectionFive/SectionFive';
import SectionFour from '../components/sectionFour/SectionFour';
import SectionSix from '../components/sectionSix/SectionSix';
import SectionThree from '../components/sectionThree/SectionThree';
import SectionTwo from '../components/sectionTwo/SectionTwo';

export default function Home() {
  return (
    <div id="home">
      <Head>
        <title>IBM - Instituto Brasileiro de Microfisioterapia</title>
        <meta name="description" content="IBM - Instituto Brasileiro de Microfisioterapia" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inika:wght@400;700&family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <Header />

      <main>
        <Banner />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>

      <footer>
      </footer>
    </div>
  )
}
