import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/homePage/Navbar";
import Footer from "./components/homePage/Footer";
import { FitLogProvider } from "./context/FitLogContext";
import { ToastContainer } from "react-toastify";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog",
  description: "Track your workouts and build consistency.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FitLogProvider>
          <Navbar />

          {children}

          <Footer />
          <ToastContainer position="top-right" autoClose={2000} theme="dark" />
        </FitLogProvider>
      </body>
    </html>
  );
}
