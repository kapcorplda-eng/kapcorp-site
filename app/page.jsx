export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#f8fafc",
        color: "#0f172a",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      {/* HEADER */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 60px auto" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Kap Corp. Lda
        </h1>
        <p style={{ fontSize: "18px", color: "#334155" }}>
          Soluções Tecnológicas, Segurança e Inovação
        </p>
        <p style={{ marginTop: "15px", color: "#475569", maxWidth: "700px" }}>
          A Kap Corp. Lda é uma empresa angolana especializada em serviços
          tecnológicos, segurança eletrónica e consultoria técnica,
          oferecendo soluções fiáveis para empresas e instituições.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 60px auto" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          Serviços
        </h2>
        <ul style={{ lineHeight: "1.9", color: "#1e293b" }}>
          <li>Serviços Informáticos e Suporte Técnico</li>
          <li>Segurança Eletrónica e Digital (CCTV, Controlo de Acessos)</li>
          <li>Redes e Infraestrutura (LAN, WAN, Wi-Fi Corporativo)</li>
          <li>Consultoria Tecnológica e Implementação de Projetos</li>
        </ul>
      </section>

      {/* COMERCIAL */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 60px auto" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          Comercial e Parcerias
        </h2>
        <p style={{ color: "#334155", maxWidth: "800px" }}>
          Atuamos no desenvolvimento de soluções empresariais,
          gestão de clientes e construção de parcerias estratégicas,
          identificando oportunidades de negócio alinhadas às
          necessidades do mercado.
        </p>
      </section>

      {/* CONTACTOS */}
      <section style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          Contactos
        </h2>
        <p>📞 +244 956 100 044</p>
        <p>📧 kap.corp.lda@gmail.com</p>
        <p style={{ marginTop: "15px" }}>
          Atendimento profissional e personalizado.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "80px",
          borderTop: "1px solid #e2e8f0",
          paddingTop: "20px",
          fontSize: "14px",
          color: "#64748b",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Kap Corp. Lda — Todos os direitos reservados
      </footer>
    </main>
  );
}
