export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-12">
      <div className="container mx-auto text-center space-y-2">
        <p>© {new Date().getFullYear()} DonaFlor - Flores e Festas</p>
        <p>
          <a href="/termos" className="underline">Termos e Condições</a> •
          <a href="/privacidade" className="underline ml-2">Política de Privacidade</a> •
          <a href="/cookies" className="underline ml-2">Política de Cookies</a>
        </p>
      </div>
    </footer>
  );
}