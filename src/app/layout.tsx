import { Poppins } from "next/font/google";
import "./globals.css";



export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.className} >
      <head></head>
      <body>{children}</body>
    </html>
  );
}
