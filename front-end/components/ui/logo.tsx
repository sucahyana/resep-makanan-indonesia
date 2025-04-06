// components/Logo.tsx
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/images/RasaLokal.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Rasa Lokal">
      <div className="w-13 h-13 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200 p-1">
        <Image
          src={LogoImage}
          alt="Rasa Lokal Logo"
          width={32}
          height={32}
          priority
        />
      </div>
    </Link>
  );
}
