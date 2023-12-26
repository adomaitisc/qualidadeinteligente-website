import { AdminHeader } from "./components/admin-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}
