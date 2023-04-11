import Image from "next/image";

import logo from "../../public/images/logo/logo_type-bl.png";

export default function Header() {
  return (
    <>
      <header className="flex justify-center items-center h-full w-full border-b border-[#D9DBE0]">
        <div className="flex items-center justify-between w-[1200px] h-[70px]">
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
    </>
  );
}
