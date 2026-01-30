import Image from "next/image";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0b1320", color: "#ffffff", minHeight: "100vh" }}>
      
      {/* TOPO / HERO */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <Image
          src="/logo.png"
          alt="Kap Corp. Lda"
          width={160}
          height={160}
          priority
        />

        <h1 style={{ fontSize: "36px", marginTop: "20px" }}>
          Kap Corp. Lda
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.85 }}>
          Soluções Tecnológicas • Segurança • Inovação
        </p>
      </section>

      {/* SOBRE */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        <h2>Sobre a Empresa</h2>
        <p>
          A Kap Corp. Lda é uma empresa angolana focada em soluções tecnológicas
          modernas, segurança eletrónica e infraestrutura de redes, atuando com
          profissionalismo, inovação e compromisso com resultados.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        <h2>Nossos Serviços</h2>
        <ul>
          <li>Serviços Informáticos e Suporte Técnico</li>
          <li>Segurança Eletrónica e Digital</li>
          <li>Redes e Infraestrutura</li>
          <li>Consultoria Tecnológica</li>
        </ul>
      </section>

      {/* CONTACTOS */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2>Contactos</h2>
        <p>📞 +244 956 100 044</p>
        <p>📧 kap.corp.lda@gmail.com</p>
      </section>

    </main>
  );
}
