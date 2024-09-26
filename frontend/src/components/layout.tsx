import React, { PropsWithChildren } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-[1920px]  m-auto flex flex-col">
      <>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </>
    </div>
  );
};

export default Layout;
