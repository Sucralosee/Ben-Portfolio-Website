import "./globals.css";

import Menu from "@/components/Menu/menu";

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
        <Menu />
        {children}
      </body>
    </html>
  );
}
