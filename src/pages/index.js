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
        <title>ALSTAR</title>
        <meta name="description" content="ALSTAR —  бренд алюминиевых композитных панелей типа PE, FR-B1, FR-A2, принадлежащий “GOLDEN HAPPINESS” LLC." />
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
          href={'/alstar-product/a2b670a8-6e0c-49f2-9733-82194833f761'}>
          ALSTAR A2
        </Link>
      </>
    </>
  );
}
