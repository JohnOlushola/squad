import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/Header";

const Home: NextPage = () => {
  return (
    <div className="dark:text-squad">
      <Head>
        <title>Squad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-10 mx-4">
        <Header />
        <div className="mt-20">
          <h1 className="hero-text uppercase text-white tracking-loose">
            Squad
          </h1>
          <div className="hero-image mt-4">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/squad-01.jpeg"
              alt="hero"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
