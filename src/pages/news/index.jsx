import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React from 'react';
import Header from './_components/Header';
import Main from './_components/Main';
import Link from 'next/link';

function Service() {
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
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
      <Link className="position-link" href={'/alstar-product/a2b670a8-6e0c-49f2-9733-82194833f761'}>
        ALSTAR A2
      </Link>
    </>
  );
}

export default Service;
