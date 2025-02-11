import "./globals.css";
import "../components/PageChange/page-Change.css";

import Menu from "@/components/Menu/menu";
import PageChange from '../components/PageChange/page-Change.js';

export const metadata = {
  title: "Porfolio | Ben Louis",
  description: "A portfolio website for Ben Louis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body>
        <Menu />  {/* This has to be here to be rendered on every page and that the animation is smooth between pages */}
        {children}
      </body>
    </html>
  );
}
