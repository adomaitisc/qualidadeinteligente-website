import { AboutUs } from "./about-us";
import { Services } from "./services";
import { Blog } from "./blog";
import { Hero } from "./hero";
import { Header } from "./header";
import { Orgs } from "./orgs";
import { Void } from "./void";
import { Footer } from "./footer";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-6xl overflow-hidden p-4 pb-0 pt-48 text-white">
      <Header />

      {/* Hero */}
      <Hero />
      <Void size={10} />

      {/* Orgs */}
      <Orgs />
      <Void size={72} />

      {/* Services */}
      <Services />
      <Void size={72} />

      {/* About */}
      <AboutUs />
      <Void size={72} />

      {/* Blog */}
      {/* <Blog /> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
