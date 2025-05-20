import Link from 'next/link';
export default function Home() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-extrabold text-primary mb-6">Bem-vindo à DonaFlor</h1>
      <p className="text-xl text-gray-700 mb-8">Mais de 25 anos de arte floral e inovação com Inteligência Artificial.</p>
      <div className="space-x-4">
        <Link href="/galeria"><a className="px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90">Ver Galeria</a></Link>
        <Link href="/configurador"><a className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white">Configurar Bouquet</a></Link>
      </div>
    </section>
  );
}