import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EricN - Backend Developer",
  description: "Portfolio of Nguyen Hoang Nam - Backend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Outfit & Anton */}
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=Anton&display=swap" rel="stylesheet" />
        {/* FontAwesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
