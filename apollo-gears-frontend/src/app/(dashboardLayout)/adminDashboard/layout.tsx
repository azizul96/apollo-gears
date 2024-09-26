import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Apollo Gears",
  description: "Dashboard Apollo Gears App",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Admin Sidebar
      {children}
    </div>
  );
}
