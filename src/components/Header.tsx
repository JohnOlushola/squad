import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <Link href={"/"} passHref>
        <a className="text-3xl uppercase">Menu</a>
      </Link>
      <button className="relative w-6 h-6">
        <Image layout="fill" src="/icons/menu.svg" alt="menu" />
      </button>
    </div>
  );
};

export default Header;
