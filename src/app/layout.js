import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { CookieProvider } from "@/content/cookieContext";
import { ThemeProvider } from "@/content/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vercel Postgres and useContext",
  description: "Attemped by Theo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <CookieProvider>
            <Header />
            {children}
          </CookieProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
