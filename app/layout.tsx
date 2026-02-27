import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "🧠 Brain Fitness Challenge | Eisai Thailand",
  description: "Brain Fitness Challenge - Eisai Well-being Program 2026",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
