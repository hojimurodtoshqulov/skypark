import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Layout({ children }) {
  return (
    <>
      <header className="app-header">
        <nav>[navbar]</nav>
        <LanguageSwitcher />
      </header>
      <main className="app-body">{children}</main>
      <footer className="app-footer">[footer]</footer>
    </>
  );
}
