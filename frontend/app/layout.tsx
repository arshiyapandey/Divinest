import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Divinest",
  description: "Premium E-commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        
        {/* Top Bar */}
        <AnnouncementBar />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}
