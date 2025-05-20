export default function Gallery() {
  const produtos = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    nome: `Bouquet ${i + 1}`,
    imagem: `/images/bouquet${i + 1}.jpg`,
    preco: (30 + i * 5).toFixed(2)
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {produtos.map(p => (
        <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={p.imagem} alt={p.nome} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{p.nome}</h3>
            <p className="text-accent font-bold">€{p.preco}</p>
          </div>
        </div>
      ))}
    </div>
  );
}