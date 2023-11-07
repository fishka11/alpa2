'use client';
import Link from 'next/link';
// import styles from './menuItem.module.css';

export default function MenuItem({ slug, display, toggle, isActive }) {
  return (
    <li className="list-none ">
      <Link
        className={`${
          isActive ? 'before:w-full text-black/80' : ''
        } hover:before:w-full before:content-[''] before:absolute before:z-50 before:block before:left-0 before:-bottom-1 before:w-0 before:h-px before:transition-all transition-all before:bg-amber-500 relative block w-auto whitespace-nowrap pb-0 pt-5 text-right text-base font-[400] text-black/60 hover:bg-gray-50 active:text-black/80 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-black/80`}
        href={slug}
        onClick={() => toggle()}>
        {`${display.slice(0, 1).toUpperCase()}${display
          .slice(1)
          .toLowerCase()}`}
      </Link>
    </li>
  );
}
