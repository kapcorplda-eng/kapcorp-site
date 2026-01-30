export default function Servicos() {
  return (
    <main
      style={{
        fontFamily: "Segoe UI, Arial, sans-serif",
        backgroundColor: "#0b1220",
        color: "#e5e7eb",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "38px", marginBottom: "15px" }}>
          Nossos Serviços
        </h1>

        <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
          Oferecemos soluções tecnológicas completas para empresas e
          organizações.
        </p>

        <ul style={{ lineHeight: "2", fontSize: "16px" }}>
          <li>✔️ Serviços Informáticos e Suporte Técnico</li>
          <li>✔️ Segurança Eletrónica e CCTV</li>
          <li>✔️ Redes e Infraestrutura Corporativa</li>
          <li>✔️ Consultoria Tecnológica</li>
        </ul>
      </section>
    </main>
  );
}
