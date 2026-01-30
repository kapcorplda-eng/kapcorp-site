import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0b1220",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* LOGO */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Image
          src="/logo.png"
          alt="Kap Corp. Lda"
          width={140}
          height={140}
          priority
        />
      </div>

      {/* HERO */}
      <h1 style={{ fontSize: "40px", textAlign: "center" }}>
        Kap Corp. Lda
      </h1>
      <p style={{ textAlign: "center", fontSize: "18px", opacity: 0.8 }}>
        Soluções Tecnológicas • Segurança • Inovação
      </p>

      {/* SOBRE */}
      <section style={{ maxWidth: "900px", margin: "60px auto" }}>
        <h2>Sobre a Empresa</h2>
        <p style={{ lineHeight: "1.6", opacity: 0.9 }}>
          A Kap Corp. Lda é uma empresa angolana focada em soluções tecnológicas
          modernas, segurança eletrónica e infraestrutura de redes, atuando
          com profissionalismo, inovação e compromisso com resultados.
        </p>
      </section>

      {/* CONTACTOS */}
      <section style={{ maxWidth: "900px", margin: "60px auto" }}>
        <h2>Contactos</h2>
        <p>📞 +244 956 100 044</p>
        <p>📧 kap.corp.lda@gmail.com</p>
      </section>
    </main>
  );
}
