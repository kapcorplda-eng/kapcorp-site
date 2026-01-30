export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0b1220",
        color: "#ffffff",
      }}
    >
      <h1 style={{ fontSize: "40px", textAlign: "center" }}>
        Kap Corp. Lda
      </h1>

      <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "40px" }}>
        Tecnologia & Segurança Integrada
      </p>

      <section style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}>
        <h2>Quem Somos</h2>
        <p>
          A Kap Corp. Lda é uma empresa especializada em tecnologia da informação
          e soluções de segurança, atuando com profissionalismo, inovação e
          compromisso com resultados.
        </p>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}>
        <h2>Serviços</h2>
        <ul>
          <li>Tecnologia da Informação e Suporte Técnico</li>
          <li>Segurança Digital e Proteção de Dados</li>
          <li>Infraestrutura Tecnológica</li>
          <li>Consultoria Tecnológica</li>
        </ul>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}>
        <h2>Contactos</h2>
        <p>📞 +244 956 100 044</p>
        <p>📧 kap.corp.lda@gmail.com</p>
      </section>

      <footer style={{ textAlign: "center", opacity: 0.7 }}>
        © 2026 Kap Corp. Lda — Todos os direitos reservados
      </footer>
    </main>
  );
}
