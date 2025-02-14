import "./globals.css";
import "../components/PageChange/page-Change.css";

import Menu from "@/components/Menu/menu";
import Foot from "@/components/Foot/foot";

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
      <body >
        <Menu />
        <main>
          {children}
        </main>
        {/* <Foot /> */}
      </body>
    </html>
  );
}
