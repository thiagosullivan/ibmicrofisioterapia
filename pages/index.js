import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SectionEight from '../components/sectionEight/SectionEight';
import SectionFive from '../components/sectionFive/SectionFive';
import SectionFour from '../components/sectionFour/SectionFour';
import SectionNine from '../components/sectionNine/SectionNine';
import SectionSeven from '../components/sectionSeven/SectionSeven';
import SectionSix from '../components/sectionSix/SectionSix';
import SectionThree from '../components/sectionThree/SectionThree';
import SectionTwo from '../components/sectionTwo/SectionTwo';

export default function Home() {
  return (
    <div id="home">
      <Head>
        <title>IBM - Instituto Brasileiro de Microfisioterapia</title>
        <meta name="description" content="IBM - Instituto Brasileiro de Microfisioterapia" />
      </Head>
      <Header />

      <main>
        <Banner />
        <SectionTwo />
        <SectionThree />
        <SectionNine />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
      </main>

      <Footer />
    </div>
  )
}
