import "../globals.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { Cookie } from "./cookie";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Cookie />
        {children}
        <Footer />
      </body>
    </html>
  );
}
