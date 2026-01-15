import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageDivider from '@/components/ImageDivider';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ImageDivider variant="smoke" />
        <About />
        <Gallery />
        <ImageDivider variant="fire" />
        <Products />
        <ImageDivider variant="smoke" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
