import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React from 'react';
import Header from '../_components/Header';
import Main from '../_components/Main';
import { useRouter } from 'next/router';
import { newsData } from '@/api/data';
// import Section from './_components/Section';

function Service() {
  const router = useRouter();
  const newsAboutData = newsData.find((item) => item?.id === Number(router.query.id));
  return (
    <>
      <Head>
        <title>ALSTAR</title>
        <meta
          name="description"
          content="ALSTAR —  бренд алюминиевых композитных панелей типа PE, FR-B1, FR-A2, принадлежащий “GOLDEN HAPPINESS” LLC."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <Main newsAboutData={newsAboutData} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Service;