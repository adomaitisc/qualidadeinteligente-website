import { ClerkProvider } from "@clerk/nextjs";
import "../../globals.css";
import { ptBR } from "@clerk/localizations";
import { dark } from "@clerk/themes";
import { AdminHeader } from "./components/admin-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        baseTheme: dark,
        elements: {
          footer: "hidden",
        },
      }}
    >
      <html lang="en">
        <body>
          <AdminHeader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
