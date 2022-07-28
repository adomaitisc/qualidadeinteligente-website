import type { NextPage } from "next";
import Header from "../components/Header";
import Landing from "../components/Landing";
import SEO from "../components/SEO";

const Home: NextPage = () => {
  return (
    <>
      <SEO />

      <Header />

      <main className="container mx-auto flex flex-col h-screen p-4">
        <Landing />
      </main>
    </>
  );
};

export default Home;
