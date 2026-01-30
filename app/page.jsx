export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#f8fafc",
        color: "#0f172a",
        minHeight: "100vh",
        padding: "60px 20px",
        lineHeight: "1.6",
      }}
    >
      {/* HERO */}
      <section style={{ maxWidth: "1100px", margin: "0 auto 70px auto" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Kap Corp. Lda
        </h1>
        <p style={{ fontSize: "18px", color: "#334155" }}>
          Soluções Tecnológicas, Segurança e Inovação
        </p>
        <p style={{ marginTop: "20px", color: "#475569", maxWidth: "800px" }}>
          A Kap Corp. Lda é uma empresa angolana especializada em soluções
          tecnológicas, segurança eletrónica e consultoria técnica,
          oferecendo serviços fiáveis e personalizados para empresas,
          instituições e organizações.
        </p>
      </section>

      {/* SOBRE NÓS */}
      <section style={{ maxWidth: "1100px", margin: "0 auto 70px auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Sobre Nós
        </h2>
        <p style={{ color: "#334155", maxWidth: "900px" }}>
          Atuamos com foco na inovação, eficiência e confiança,
          desenvolvendo soluções tecnológicas adaptadas às necessidades
          dos nossos clientes. Nossa atuação é orientada por boas práticas,
          compromisso profissional e melhoria contínua.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ maxWidth: "1100px", margin: "0 auto 70px auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Serviços
        </h2>
        <ul style={{ color: "#1e293b", maxWidth: "900px" }}>
          <li>Serviços Informáticos e Suporte Técnico</li>
          <li>Implementação e Manutenção de Sistemas</li>
          <li>Segurança Eletrónica e Digital (CCTV, Controlo de Acessos)</li>
          <li>Redes e Infraestrutura (LAN, WAN, Wi-Fi Corporativo)</li>
          <li>Consultoria Tecnológica e Gestão de Projetos</li>
        </ul>
      </section>

      {/* COMERCIAL */}
      <section style={{ maxWidth: "1100px", margin: "0 auto 70px auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Comercial & Parcerias
        </h2>
        <p style={{ color: "#334155", maxWidth: "900px" }}>
          Desenvolvemos relações comerciais sólidas, focadas na gestão de
          clientes, parcerias estratégicas e identificação de oportunidades
          de negócio, garantindo soluções alinhadas às necessidades do mercado.
        </p>
      </section>

      {/* CONTACTOS */}
      <section style={{ maxWidth: "1100px", margin: "0 auto 70px auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Contactos
        </h2>
        <p>📞 +244 956 100 044</p>
        <p>📧 kap.corp.lda@gmail.com</p>

        <a
          href="https://wa.me/244956100044"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 28px",
            backgroundColor: "#0f172a",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
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
