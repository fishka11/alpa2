import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Brand() {
  const pathname = usePathname();
  return (
    <Link className="flex justify-start" href="/">
      <Image
        quality={100}
        alt="Logo Alpa Home Design"
        className={`${
          pathname === '/' ? 'active' : ''
        } ml-0 mr-3 block w-full md:w-auto max-h-10 md:max-h-12 my-1`}
        src="/images/logoAlpaInMenu.svg"
        height={50}
        width={300}
      />
    </Link>
  );
}
