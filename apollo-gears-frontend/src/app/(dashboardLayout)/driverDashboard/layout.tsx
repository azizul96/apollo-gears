import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Apollo Gears",
  description: "Dashboard Apollo Gears App",
};

export default function DriverDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Driver Sidebar
      {children}
    </div>
  );
}
