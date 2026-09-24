import Header from "./components/Header";
import Hero from "./components/Hero";
import NetworkMap from "./components/NetworkMap";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NetworkMap />
        <About />
      </main>
      <Footer />
    </>
  );
}
