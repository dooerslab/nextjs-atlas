import type { NextPage } from "next";
import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import Services from "../components/Services";
import FeatureOne from "../components/FeatureOne";
import FeatureTwo from "../components/FeatureTwo";
import Pricing from "../components/Pricing";
import Brands from "../components/Brands";
import ContactUs from "../components/ContactUs";
import { HeartIcon } from "@heroicons/react/outline";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS - ATLAS Landing page</title>
        <meta name="description" content="NextJS Atlas Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Jumbotron />
      <main>
        <Services />
        <FeatureOne />
        <FeatureTwo />
        <Pricing />
        <Brands />
        <ContactUs />
      </main>

      <footer className="bg-slate-900 text-white py-8 px-4 text-center">
        Coded with <HeartIcon className="w-4 inline-block text-red-500" /> by{" "}
        <a
          href="http://www.dooers.it/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          Dooers
        </a>
        . Designed by{" "}
        <a
          href="https://chenyiya.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Chen, Yi-Ya
        </a>
        .
      </footer>
    </>
  );
};

export default Home;
