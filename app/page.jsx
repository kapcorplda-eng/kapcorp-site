export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        fontFamily: "Segoe UI, Arial, sans-serif",
        backgroundColor: "#0b1220",
        color: "#e5e7eb",
      }}
    >
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Kap Corp. Lda
        </h1>
        <p style={{ fontSize: "18px", color: "#9ca3af" }}>
          Tecnologia & Segurança Integrada
        </p>
      </section>

      {/* QUEM SOMOS */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 60px auto" }}>
        <h2>Quem Somos</h2>
        <p>
          A Kap Corp. Lda é uma empresa especializada em tecnologia da informação
          e soluções de segurança, oferecendo serviços modernos, confiáveis e
          adaptados às necessidades de empresas e instituições.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 60px auto" }}>
        <h2>Serviços</h2>
        <ul>
          <li>Tecnologia da Informação e Suporte Técnico</li>
          <li>Segurança Digital e Proteção de Dados</li>
          <li>Infraestrutura Tecnológica</li>
          <li>Consultoria Tecnológica</li>
        </ul>
      </section>

      {/* ESTRUTURA */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 60px auto" }}>
        <h2>Estrutura Organizacional</h2>
        <p><strong>CEO & Diretor Geral:</strong> Manuel Rocha</p>
        <p><strong>Área Técnica & Tecnológica:</strong> Benilson Lino, Manuel Rocha</p>
        <p><strong>Comercial & Parcerias:</strong> Vanildo Sousa</p>
      </section>

      {/* CONTACTOS */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2>Contactos</h2>
        <p>📞 +244 956 100 044</p>
        <p>📧 kap.corp.lda@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", color: "#9ca3af" }}>
        © 2026 Kap Corp. Lda — Todos os direitos reservados
      </footer>
    </main>
  );
      }
