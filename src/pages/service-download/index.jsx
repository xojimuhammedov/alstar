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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
      <Link className="position-link" href={'/alstar-product/0ee58348-529c-497b-ac1f-f12a8a1afea0'}>
        ALSTAR™ A2
      </Link>
    </>
  );
}

export default Service;
