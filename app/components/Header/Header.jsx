import Logo from "./Logo/Logo";
import MobileNav from "./MobileNav/MobileNav";

export default function Header() {
  return (
    <header className="flex border-b-[1px] border-slate-300/10 py-8 shadow-2xl">
      <Logo />
      <MobileNav />
    </header>
  );
}
