import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Apollo Gears",
  description: "Public Apollo Gears App",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Common Navbar
      {children}
    </div>
  );
}
