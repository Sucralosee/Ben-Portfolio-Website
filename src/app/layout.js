import "./globals.css";
import "../components/PageChange/page-Change.css";

import Menu from "@/components/Menu/menu";

import PageChange from '../components/PageChange/page-Change.js';

export const metadata = {
  title: "BL Porfolio",
  description: "A portfolio website for Ben Louis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* <PageChange> */}
          <Menu />
          {children}
        {/* </PageChange> */}
      </body>
    </html>
  );
}
