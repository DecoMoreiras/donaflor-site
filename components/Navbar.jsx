import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">DonaFlor</a>
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/galeria"><a>Galeria</a></Link></li>
          <li><Link href="/configurador"><a>Configurador</a></Link></li>
          <li><Link href="/checkout"><a>Loja</a></Link></li>
          <li><Link href="/admin"><a className="text-accent">Admin</a></Link></li>
        </ul>
      </div>
    </nav>
  );
}