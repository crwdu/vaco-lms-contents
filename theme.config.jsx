import React from "react";
import Image from "next/image";

import logo from "./public/images/logo/logo_header.png";
import mediumIcon from "./public/icons/medium.png";
import instagramIcon from "./public/icons/instagram.png";
import facebookIcon from "./public/icons/facebook.png";
import youTubeIcon from "./public/icons/youTube.png";
import favicon from "./public/icons/favicon.png";

const mediumUrl = "https://medium.com/vanilla-coding";
const instagramUrl = "https://www.instagram.com/vanilla_coding";
const facebookUrl = "https://www.facebook.com/vcoding";
const youtubeUrl = "https://www.youtube.com/channel/UCqw3KRd7EBORZPqpxU4XLEA";
const refundPolicy =
  "https://www.notion.so/vanillacoding/Refund-Regulation-5fb4e6da39ae4665b5f376eb1172cf4b";

const config = {
  toc: {
    float: false,
  },
  gitTimestamp: null,
  darkMode: false,
  logo: <Image alt="vaco-logo" src={logo} width={140} height={35} />,
  logoLink: `${process.env.NEXT_PUBLIC_URI}`,
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: null,
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type, level }) => {
      return (
        <div
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {title}
        </div>
      );
    },
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="바닐라코딩" />
      <meta property="og:description" content="바닐라코딩" />
      <title>바닐라코딩</title>
      <link rel="icon" href={favicon.src} type="image/png" />
    </>
  ),
  footer: {
    text: () => {
      return (
        <div className="flex w-full justify-between">
          <div>
            <strong className="font-bold text-sm">㈜크라우드에듀케이션</strong>
            <p className="leading-[25px] mt-6 text-sm">
              대표 허근행 | 개인정보책임자 허근행
              <br />
              사업자 등록번호 843-81-02398
              <br />
              주소 서울특별시 강남구 대치 2동 테헤란로 522, 7층
              <br />
              문의 info@vanillacoding.co
            </p>
            <div className="mt-[50px]">
              <a
                href="/starterkit/files/policy.pdf"
                target="_blank"
                className="text-sm text-gray-5 font-bold block sm:inline-block"
                title="이용약관 및 개인정보 보호정책"
              >
                이용약관 및 개인정보 보호정책
              </a>
              <a
                href={refundPolicy}
                target="_blank"
                className="text-sm text-gray-5 font-bold ml-0 sm:ml-10 block sm:inline-block"
                title="코스 환불 규정"
              >
                코스 환불 규정
              </a>
            </div>
          </div>

          <div className="flex items-end">
            <a href={mediumUrl} target="_blank" title="medium">
              <div className="flex mr-[44px]">
                <Image
                  src={mediumIcon}
                  alt="medium icon"
                  width={32}
                  height={32}
                />
              </div>
            </a>
            <a href={instagramUrl} target="_blank" title="instagram">
              <div className="flex mr-[44px]">
                <Image
                  src={instagramIcon}
                  alt="instagram icon"
                  width={32}
                  height={32}
                />
              </div>
            </a>
            <a href={facebookUrl} target="_blank" title="facebook">
              <div className="flex mr-[44px]">
                <Image
                  src={facebookIcon}
                  alt="facebook icon"
                  width={32}
                  height={32}
                />
              </div>
            </a>
            <a href={youtubeUrl} target="_blank" title="youtube">
              <div className="flex mr-[44px]">
                <Image
                  src={youTubeIcon}
                  alt="youtube icon"
                  width={32}
                  height={32}
                />
              </div>
            </a>
          </div>
        </div>
      );
    },
  },
};

export default config;
