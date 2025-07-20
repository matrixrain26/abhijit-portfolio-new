import { Metadata } from 'next';
import Header from '@/client-components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/client-components/Projects';
import Contact from '@/client-components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Abhijit Khadilkar | Product Manager',
  description: 'Personal portfolio of Abhijit Khadilkar, a Product Manager with 10 years of experience in fintech and hedge fund servicing.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
