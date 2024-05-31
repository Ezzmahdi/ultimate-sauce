import Theming from "@/Theme/Theming";
import "./globals.css";

import Headpage from "./Header/page";

 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" href="/favicon.ico" />
        <title>The Ultimate Sauce</title>
      <body>
        <Theming>
          <Headpage />
          <main>{children}</main>
        </Theming>
      </body>
    </html>
  );
}
