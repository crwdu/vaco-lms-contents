import Footer from "../Footer"
import Header from "../Header";
import Meta from "../Meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="w-full h-100vh flex justify-between flex-wrap min-h-[800px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
