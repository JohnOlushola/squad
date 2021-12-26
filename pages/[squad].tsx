import type { NextPage } from "next";
import Image from "next/image";

const SquadPage: NextPage = () => {
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
      <h2 className="uppercase mt-4 font-bold">REMI</h2>
      <p className="mt-8 font-semibold">
        Remi is the creative director of SQUAD. His goal is to bring Nigerian
        fashion into a worldwide spotlight. SQUAD is the pioneer agency
        transforming fashion in Nigeria and bringing togther a roast of
        independent spirits that challenge the status-quo. Our network of
        creative pieple have helped hundreds of designers and together, we are
        constantly evolving.
      </p>
    </div>
  );
};

export default SquadPage;
