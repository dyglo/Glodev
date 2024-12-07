import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
import Portfolio from '../components/Portfolio';
import Statistics from '../components/Statistics';
import Process from '../components/Process';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ServiceCards />
      <Statistics />
      <Portfolio />
      <Process />
      <Footer />
    </main>
  );
}
