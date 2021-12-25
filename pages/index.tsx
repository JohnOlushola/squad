import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="dark:text-squad">
      <Head>
        <title>Squad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-10 mx-4">
        <div className="flex justify-between">
          <Link href={"/"} passHref>
            <a className="text-3xl uppercase">Menu</a>
          </Link>
          <div className="relative w-6 h-6">
            <Image layout="fill" src="/icons/menu.svg" alt="menu" />
          </div>
        </div>
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
