import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DonaFlor - Flores e Festas</title>
        <meta name="description" content="Arte floral inovadora com IA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-secondary">
        <Component {...pageProps} />
        <Chatbot />
      </main>
      <Footer />
    </>
  );
}