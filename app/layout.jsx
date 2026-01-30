export const metadata = {
  title: "Kap Corp. Lda",
  description: "Soluções Tecnológicas, Segurança e Inovação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
