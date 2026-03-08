import { Hero } from './Hero';
import { Products } from './Products';
import { SportsCarousel } from './SportsCarousel';
import { Features } from './Features';
import { LogoTicker } from './LogoTicker';
import { TikTokSlides } from './TikTokSlides';
import { Footer } from './Footer';
import { TickerBanner } from './TickerBanner';
import { PerformanceSection } from './PerformanceSection';

export function Home() {
  return (
    <>
      <Hero />
      <TickerBanner />
      <Products />
      <PerformanceSection />
      <SportsCarousel />
      <Features />
      <LogoTicker style={{ paddingTop: '-1px', paddingRight: '19px', paddingBottom: '-1px', paddingLeft: '19px' }} />
      <TikTokSlides />
      <Footer />
    </>
  );
}