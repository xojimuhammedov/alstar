import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Header from './_components/Header';
import Main from './_components/Main';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '@/api';

function AlstarProduct() {
  const router = useRouter().query.id;
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products/${router}`)
      .then((res) => setProducts(res?.data?.data))
      .catch((err) => console.log(err));
  }, [router]);
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
        <Header products={products} />
      </header>
      <main>
        <Main products={products} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AlstarProduct;
