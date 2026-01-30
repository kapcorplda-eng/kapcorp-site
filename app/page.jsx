export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0f172a",
        color: "#e5e7eb",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      {/* HERO */}
      <section style={{ maxWidth: "900px", margin: "0 auto 60px auto" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Kap Corp. Lda
        </h1>
        <p style={{ fontSize: "18px", color: "#cbd5f5" }}>
          Soluções Tecnológicas, Segurança e Inovação
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ maxWidth: "900px", margin: "0 auto 60px auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Nossos Serviços
        </h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>💻 Serviços Informáticos</li>
          <li>🔐 Segurança Eletrónica</li>
          <li>🌐 Redes e Infraestrutura</li>
          <li>📊 Consultoria Tecnológica</li>
        </ul>
      </section>

      {/* CONTACTOS */}
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2>Contactos</h2>
        <p>📞 +244 956 100 044</p>
        <p>✉️ kap.corp.lda@gmail.com</p>
      </section>
    </main>
  );
}
