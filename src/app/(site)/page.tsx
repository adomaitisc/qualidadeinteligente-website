import { Void } from "./void";
import { Header } from "./header";
import { Hero } from "./hero";
import { Services } from "./services";
import { About } from "./about";
import { Blog } from "./blog";
import { Join } from "./join";
import { Footer } from "./footer";
import { Cookie } from "./cookie";

// fetch recent blogs

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-6xl overflow-hidden p-1 pb-0 text-white md:p-4">
      {/* Hero */}
      <Hero />
      <Void gap={24} />

      {/* Services */}
      <Services />
      <Void gap={72} />

      {/* About */}
      <About />
      <Void gap={72} />

      {/* Blog */}
      <Blog />
      <Void gap={72} />

      <Join />
      <Void gap={72} />
    </main>
  );
}
