import Link from 'next/link'
export default function NavBar({ className }) {
  return (
    <header className={className}>
      <Link href="/">
      <img className="cursor-pointer" src="/icons/CatLogoBrown.svg" alt="cat logo" />
      </Link>
    </header>
  );
}
