"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./header.css";

const Header = ({ title = "Header" }) => {
  return (
    <div className="header-container">
        {/* <div className="my-logo">
          <Link href="/">
            <Image src="/white-BL.svg" alt="logo" width={75} height={75} />
          </Link>
        </div> */}
      <h1 className="header-title">{title}</h1>
    </div>
  );
}

export default Header;