import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inika:wght@400;700&family=Montserrat&display=swap" rel="stylesheet" />

        {/* Primary Meta Tags */}
        <meta name="title" content="IBM - Instituto Brasileiro de Microfisioterapia"/>
        <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.ibmicrofisioterapia.com.br/"/>
        <meta property="og:title" content="IBM - Instituto Brasileiro de Microfisioterapia"/>
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
        <meta property="og:image" content="https://i.ibb.co/tZfKg7J/Whats-App-Image-2022-06-15-at-08-54-58.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.ibmicrofisioterapia.com.br/"/>
        <meta property="twitter:title" content="IBM - Instituto Brasileiro de Microfisioterapia"/>
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
        <meta property="twitter:image" content="https://i.ibb.co/tZfKg7J/Whats-App-Image-2022-06-15-at-08-54-58.jpg"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}