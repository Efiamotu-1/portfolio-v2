import { Montserrat, Cutive_Mono, Saira_Semi_Condensed } from 'next/font/google';
import { Navbar } from './Navbar';
import './globals.css';
import Social from './Social';

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const cutive = Cutive_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cutive',
});

const saira = Saira_Semi_Condensed({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-saira',
});

export const metadata = {
  title: 'Habeeb Efiamotu Musa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cutive.variable} ${saira.variable}`}>
      <body>
        <Navbar />
        <Social />
        {children}
      </body>
    </html>
  );
}
