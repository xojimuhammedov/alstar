import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React from 'react';
import Header from './_components/Header';
import Form from './_components/Form';

function Contact() {
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
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Contact;