import "./styles/styles.css";

import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import WhyCappro from "./components/WhyCappro/WhyCappro";
import Footer from "./components/Footer/Footer";
import CalculateTop from "./components/Calculate/CalculateTop";
import CalculateBottom from "./components/Calculate/CalculateBottom";
import CryptoCards from "./components/CryptoCards/CryptoCards";
import StartMining from "./components/StartMining/StartMining";

export default function Home() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <HeroSection />
        <WhyCappro />
      </div>
      <section className="trade-securely">
        <div className="container">
          <h2 className="trade-securely-h2">Check how much you can earn</h2>
          <p className="trade-securely-description">
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <CalculateTop />
        </div>
        <section className="white-page">
          <div className="container">
            <CalculateBottom />
            <div className="cryptocurrencies">
              <h2 className="cryptocurrencies-h2">
                Trade securely and market the high growth cryptocurrencies.
              </h2>
              <CryptoCards />
            </div>
          </div>
        </section>
      </section>
      <StartMining />
      <Footer />
    </div>
  );
}
