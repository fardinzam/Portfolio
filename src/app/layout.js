import { Manuale } from "next/font/google";
import "./globals.css";

const inter = Manuale({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Dean | Portfolio",
  description: "Dean's personal portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen flex flex-col text-portfolio-alabaster bg-portfolio-black`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
