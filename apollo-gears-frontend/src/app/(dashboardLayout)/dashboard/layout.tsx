import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Apollo Gears",
  description: "Dashboard Apollo Gears App",
};

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Sidebar
      {children}
    </div>
  );
}
