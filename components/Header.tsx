import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href={"/"} passHref>
        <p className="text-4xl uppercase header-text">Menu</p>
      </Link>
      <div>
        <button>
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 19H25M1 1H25H1ZM1 10H25H1Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
