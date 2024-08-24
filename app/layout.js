import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import TopBtn from "./components/TopBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Origo Business Services",
  description: "Connecting Markets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/origo_business_services_logo.jpg" type="image/jpeg" />
      </head>
      <body className={inter.className}>
        <TopBtn/>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
