import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { push: routeTo } = useRouter();

  return (
    <div className="mt-20">
      <h1 className="hero-text uppercase text-white tracking-loose">Squad</h1>
      <div className="hero-image mt-4" onClick={() => routeTo("/kunle")}>
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/squad-01.jpeg"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Home;
