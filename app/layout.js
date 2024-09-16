import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import TopBtn from "./components/TopBtn";
export const metadata = {
  title: "Origo Business Services",
  description: "Connecting Markets",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/origo_business_services_logo.jpg" type="image/jpeg" />
        <link rel="icon" href='https://fonts.googleapis.com/css2?family=Sevillana&display=swap' />
      </head>
      <body>
        <TopBtn />
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
