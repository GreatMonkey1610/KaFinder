import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL ['https://kafinder.com/'],
  keywords: ['kafinder','ka finder','Ka Finder','Ka finder'],
  title: "KaFinder",
  description: "Find Your Heart's Way",
  openGraph: {
    title: 'Kafinder',
    description: 'Kafinder is a place where you can find your self.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
