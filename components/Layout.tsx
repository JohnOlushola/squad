import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="text-squad my-10 mx-4">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
