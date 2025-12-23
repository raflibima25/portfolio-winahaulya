import { Outfit } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: "Winah Aulya Indriana | Portfolio",
  description: "Sarjana Manajemen dengan spesialisasi Manajemen Sumber Daya Manusia. Memiliki kemampuan organisasi yang kuat, administrasi yang teliti, dan komunikasi yang efektif.",
  keywords: ["portfolio", "manajemen", "fresh graduate", "HRM", "administrasi", "Jakarta"],
  authors: [{ name: "Winah Aulya Indriana" }],
  openGraph: {
    title: "Winah Aulya Indriana | Portfolio",
    description: "Sarjana Manajemen dengan spesialisasi Manajemen SDM. Siap bekerja full-time.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={outfit.variable}>
      <body suppressHydrationWarning className={outfit.className}>{children}</body>
    </html>
  );
}
