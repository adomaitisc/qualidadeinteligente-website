import { Void } from "./void";
import { Header } from "./header";
import { Hero } from "./hero";
import { Services } from "./services";
import { About } from "./about";
import { Blog } from "./blog";
import { Join } from "./join";
import { Footer } from "./footer";
import { Cookie } from "./cookie";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-6xl overflow-hidden p-4 pb-0 text-white">
      <Header />
      <Cookie />

      {/* Hero */}
      <Hero />
      <Void size={72} />

      {/* Services */}
      <Services />
      <Void size={72} />

      {/* About */}
      <About />
      <Void size={72} />

      {/* Blog */}
      <Blog />
      <Void size={72} />

      {/* Join */}
      <Join />
      <Void size={72} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
