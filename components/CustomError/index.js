import Image from "next/image";
import logo from "../../public/images/logo/logo_type-bk.png";
import ErrorDisplay from "../ErrorDisplay";
import Footer from "../Footer";

export default function CustomError({ message }) {
  return (
    <>
      <header className="h-[70px] w-full border-b border-[#D9DBE0]">
        <div className="flex items-center justify-between w-full h-70">
          <a href="/">
            <div className="ml-[40px]">
              <Image
                src={logo}
                alt="vanillacoding logo"
                width={130}
                height={50}
              />
            </div>
          </a>
        </div>
      </header>

      <ErrorDisplay
        message={message}
      />

      <Footer />
    </>
  );
}
