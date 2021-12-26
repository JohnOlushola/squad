import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const SquadPage: NextPage = () => {
  const { query } = useRouter();

  // parse query.squad to contain the squad name
  // remove url parameters
  const squadName = ((query?.squad || "kunle") as string).split("?")[0];

  return (
    <div>
      <div className="squad-member__image mt-4">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/squad-01.jpeg"
          alt="hero"
        />
      </div>
      <h2 className="uppercase mt-4 font-bold">{squadName}</h2>
      <p className="mt-8 font-semibold">
        <span className="capitalize">{squadName}</span> is the creative director
        of SQUAD. His goal is to bring Nigerian fashion into a worldwide
        spotlight. SQUAD is the pioneer agency transforming fashion in Nigeria
        and bringing togther a roast of independent spirits that challenge the
        status-quo. Our network of creative pieple have helped hundreds of
        designers and together, we are constantly evolving.
      </p>
    </div>
  );
};

export default SquadPage;
