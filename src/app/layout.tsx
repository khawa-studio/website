import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khawa Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tb">
      <body>{children}</body>
    </html>
  );
}
