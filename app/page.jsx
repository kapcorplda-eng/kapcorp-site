<img
  src="/logo.png"
  alt="Kap Corp. Lda"
  style={{ height: 50, marginBottom: 16 }}
/>
export default function Home() {
  return (
    <>
      <head>
        <title>Kap Corp. Lda | Soluções Tecnológicas e Segurança</title>
        <meta
          name="description"
          content="Kap Corp. Lda é uma empresa angolana especializada em soluções tecnológicas, segurança eletrónica, redes e consultoria técnica."
        />
      </head>

      <main
        style={{
          fontFamily: "Segoe UI, Arial, sans-serif",
          backgroundColor: "#0b1220",
          color: "#e5e7eb",
          minHeight: "100vh",
          padding: "60px 20px",
        }}
      >
        {/* HEADER */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto 80px auto",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          import Image from "next/image";

<Image
  src="/logo.png"
  alt="Kap Corp. Lda"
  width={160}
  height={60}
  priority
/>
              Soluções Tecnológicas • Segurança • Inovação
            </p>
          </div>
        </section>

        {/* SOBRE */}
        <section style={{ maxWidth: "1100px", margin: "0 auto 70px auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
            Sobre a Empresa
          </h2>
          <p style={{ color: "#cbd5f5", maxWidth: "900px" }}>
            A Kap Corp. Lda é uma empresa angolana focada em soluções
            tecnológicas modernas, segurança eletrónica e infraestrutura
            de redes, atuando com profissionalismo, inovação e
            compromisso com os resultados dos seus clientes.
          </p>
        </section>

        {/* SERVIÇOS */}
        <section style={{ maxWidth: "1100px", margin: "0 auto 70px auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
            Nossos Serviços
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              "Serviços Informáticos e Suporte Técnico",
              "Segurança Eletrónica e CCTV",
              "Redes e Infraestrutura Corporativa",
              "Consultoria Tecnológica e Projetos",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#111827",
                  padding: "25px",
                  borderRadius: "8px",
                  border: "1px solid #1f2933",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{item}</h3>
                <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                  Soluções eficientes, seguras e adaptadas às
                  necessidades de cada cliente.
                </p>
              </div>
            ))}
          </div>
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
              marginTop: "25px",
              padding: "14px 28px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            Contactar via WhatsApp
          </a>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            borderTop: "1px solid #1f2937",
            paddingTop: "20px",
            textAlign: "center",
            color: "#9ca3af",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} Kap Corp. Lda — Todos os direitos reservados
        </footer>
      </main>
    </>
  );
}
