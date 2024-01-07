import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative flex justify-center items-center h-10 z-20 justify-self-end self-end">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Efiamotu-1/portfolio-v2"
        className="text-snow font-cutive text-sm hover:text-aqua"
      >
        DESIGNED & BUILT BY HABEEB EFIAMOTU MUSA WITH DESIGN INSPIRATION FROM PETER BESHARA
      </Link>
    </footer>
  );
}
