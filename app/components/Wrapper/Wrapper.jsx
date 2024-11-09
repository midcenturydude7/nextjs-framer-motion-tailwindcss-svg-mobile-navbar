import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default function Wrapper() {
  return (
    <div className="flex min-h-screen flex-col space-y-4">
      <Header />
      <Main children={children} />
      <Footer />
    </div>
  );
}
