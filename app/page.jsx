export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0f172a",
      color: "#e5e7eb",
      minHeight: "100vh",
      padding: "40px 20px"
    }}>
      
      {/* HERO */}
      <section style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px", color: "#38bdf8" }}>
          Kap Corp. Lda
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Soluções Tecnológicas, Segurança e Inovação
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ maxWidth: "900px", margin: "60px auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#38bdf8" }}>
          Nossos Serviços
        </h2>
        <ul style={{ lineHeight: "1.8", fontSize: "16px" }}>
          <li>✔ Serviços Informáticos e Suporte Técnico</li>
          <li>✔ Segurança Eletrónica e Digital (CCTV, Acessos)</li>
          <li>✔ Redes e Infraestrutura (LAN, WAN, Wi-Fi)</li>
          <li>✔ Consultoria Tecnológica e Projetos</li>
        </ul>
      </section>

      {/* CONTACTOS */}
      <section style={{ maxWidth: "900px", margin: "60px auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#38bdf8" }}>
          Contactos
        </h2>
        <p>📞 +244 956 100 044</p>
        <p>📧 kap.corp.lda@gmail.com</p>

        <a
          href="https://wa.me/244956100044"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "14px 28px",
            backgroundColor: "#22c55e",
            color: "#022c22",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", marginTop: "80px", fontSize: "14px", color: "#94a3b8" }}>
        © {new Date().getFullYear()} Kap Corp. Lda — Todos os direitos reservados
      </footer>

    </main>
  );
}
