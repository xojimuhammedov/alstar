import About from '@/components/About';
import Company from '@/components/Company';
import Design from '@/components/Design';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import News from '@/components/News';
import Projects from '@/components/Projects';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <nav>
          <Navbar />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <About />
          <Company />
          <Design />
          <News />
        </main>
        <section>
          <Projects />
        </section>
        <footer>
          <Footer />
        </footer>
        <Link
          className="position-link"
          href={'/alstar-product/19cd21bb-10e4-4908-b170-fe9805cc4991'}>
          ALSTAR™ A2
        </Link>
      </>
    </>
  );
}
