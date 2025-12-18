import Footer from "./components/Footer";
import Hero from "./components/hero"
import NavBar from "./components/NavBar";
import Rekomendasi from "./components/Rekomendasi";
export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <main className="h-full">
        <NavBar/>
        <Hero />
        <Rekomendasi/>
        <Footer/>
      </main>
    </div>
  );
}
