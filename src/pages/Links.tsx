// HERE Links

import { Helmet } from "react-helmet-async";
import { Box, Card, Heading, Inset, Link, Table } from "@radix-ui/themes";
import classNames from "classnames";
import { Card_Menu, Dropdown_Menu } from "../components/menu/Menu";
import CIBBiM_BG from "../assets/bg_cropped2.svg";

import ASTMH from "../assets/link_logos/ASTMH.png";
import EMBRAPA from "../assets/link_logos/Embrapa.svg";
import FIOCRUZ from "../assets/link_logos/FIOCRUZ.png";
import ISSCR from "../assets/link_logos/ISSCR.png";
// import LNLS from "../assets/link_logos/LNLS2.svg";
import SBBC from "../assets/link_logos/SBBC.svg";
import SBBiotec from "../assets/link_logos/SBBiotec.png";
import SBI from "../assets/link_logos/SBI.png";
import SBM from "../assets/link_logos/SBM.png";
import SBV from "../assets/link_logos/SBV.png";

import { ReactElement, SVGProps } from "react";

// <●> LNLS
const LNLS = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    width={"136px"}
    height={"164px"}
    viewBox="0 0 171 205.3"
  >
    <defs>
      <style>
        {".cls-1,.cls-2{stroke-width:0}.cls-1{fill:#000}.cls-2{fill:#0077b8}"}
      </style>
    </defs>
    <g id="g128">
      <g id="g96">
        <g id="g85">
          <g id="g80">
            <path
              id="path78"
              d="M113.1 182.6c.6 1.4-.2 9.2.6 10.2.3-.4.3.1.9 0 .1.7.8.8.8 1.6 1.8.1 9.7.2 11.5.2-.1.2-2.3 0-2.6.1-1.5 0-7.6 0-8.9.2-.2.4-.8 1.8-1.3 1.6-.2 0 0 .4-.1.5-.2 0-.2-.3-.4-.3-.4 1.6-.3 6.6-.3 8.6-.6-1.4.5-9.2-1.3-8.7-.4-.5-.7-1.1-.9-1.5-.9-.6-8.3-.2-9.6-.4.9-.4 8.3-.1 9.5-.4.4-.8.8-1.8 1.9-1.9.2-1.5.1-8.1.2-9.8Z"
              className="cls-2"
            />
          </g>
        </g>
        <g id="g94">
          <g id="g89">
            <path
              id="path87"
              d="M113.8 193.9c.6-.6 2.9-2.8 3.5-3.3 0 .1-.2.3-.3.4-.5.5-2.6 2.6-3 3.1.1.2.3.9.1 1-.1.1.1.1.2.2-.1.1-.2 0-.3 0 .4.7 2.8 3 3.5 3.7-.7-.3-3.6-4-4.1-3.2-.3 0-.6-.1-.8-.2-.5.1-2.9 2.8-3.4 3.1.2-.4 2.8-2.9 3.1-3.4-.1-.4-.4-.9 0-1.3-.5-.6-3.4-3.5-3.9-4.1.7.3 3.7 3.9 4.4 3.9 0-.2.1 0 .3-.3.2.4.4.1.7.4Z"
              className="cls-2"
            />
          </g>
        </g>
      </g>
      <g id="g110">
        <path
          id="path98"
          d="M-.2 0v141.2h24.9c-2.2-3.9-3.5-8.4-3.5-13.2 0-14.7 11.9-26.6 26.6-26.6s26.6 11.9 26.6 26.6-1.3 9.3-3.5 13.2h63.2c-.6-.7-1.1-1.3-1.6-1.9-13.8-15.5-31.4-29.4-54.1-37.1-7.2-2.4-15.2-3.7-22.4-5 7.2-1.3 14.7-2 22.3-2 22.2 0 42.9 5.9 61.2 15.7 5.3 2.8 18.7 10.7 31 17.9V0H-.2ZM17 119.7c-1.3-7.2-2-14.7-2-22.3 0-22.2 6-42.9 15.7-61.2C35.1 28 40.9 18.3 48.5 5.6l34.7 20S67.4 35.8 59.1 43.3C43.6 57.1 29.7 74.7 22 97.3c-2.4 7.2-3.7 15.2-5 22.4Zm8.2-14.3c2.5-6.9 5.6-13.7 9.4-20.3 11.1-19.2 26.6-34.2 44.2-45.2 7.8-4.9 17.8-10.4 30.7-17.7l20.1 34.6s-18.8 1-29.7 3.3c-20.3 4.2-41.2 12.5-59.1 28.3-5.7 5.1-10.9 11.4-15.6 17Zm128.9 2.2s-16.7-8.6-27.3-12.1c-19.7-6.5-41.9-9.9-65.3-5.3-7.5 1.5-15 4.3-22 6.8 5.6-4.7 11.8-9 18.3-12.8C77 73.1 98 68 118.7 67.3c9.2-.3 20.7-.1 35.4.1v40.2Z"
          className="cls-2"
        />
        <g id="g108">
          <path
            id="polyline100"
            d="M46.1 149.2v21.3h7.1v-15.1l15.1 15.1h6.2v-21.3h-7.1v15.2l-15.2-15.2h-6.1"
            style={{
              fillRule: "evenodd",
              fill: "#000",
              strokeWidth: 0,
            }}
          />
          <path
            id="path102"
            d="M6.9 163.4c0 2 1.6 3.5 3.5 3.5h14.2v3.6H6.7c-3.9 0-7.1-3.1-7.1-7.1v-14.3h7.2v14.3"
            className="cls-1"
          />
          <path
            id="path104"
            d="M104.8 163.4c0 2 1.6 3.5 3.5 3.5h14.2v3.6h-17.9c-3.9 0-7.1-3.1-7.1-7.1v-14.3h7.2v14.3"
            className="cls-1"
          />
          <path
            id="path106"
            d="M151.9 158.1c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7h16.9v-3.6h-20.5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2h12.5c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-16.9v3.6h20.5c3.4 0 6.2-2.8 6.2-6.2s-2.8-6.2-6.2-6.2h-12.5"
            className="cls-1"
          />
        </g>
      </g>
      <g id="g124">
        <path
          id="path112"
          d="M138.2 197.1c0 .3-.1.5-.2.7s-.2.4-.4.6c-.2.2-.4.3-.6.4s-.5.1-.7.1h-5.8v-1.7h5.8q.1 0 .1-.1h.1c0-.2 0-.3-.1-.3l-4.9-2.9c-.3-.2-.5-.4-.7-.7-.2-.3-.3-.6-.3-1s.1-.5.2-.7.2-.4.4-.6c.2-.2.4-.3.6-.4s.5-.2.7-.2h4.9v1.7h-4.9q-.1 0-.2.1s-.1.1-.1.2c0 0 0 .1.1.2l4.9 2.9c.3.2.5.4.7.7.3.3.4.6.4 1Z"
          className="cls-1"
        />
        <path
          id="path114"
          d="M139.2 188.8v-1.7h1.7v1.7h-1.7Zm0 10.2v-8.5h1.7v8.5h-1.7Z"
          className="cls-1"
        />
        <path
          id="path116"
          d="M144.2 192.2c-.1 0-.2.1-.2.2v6.6h-1.7v-6.6c0-.3.1-.5.2-.7s.2-.4.4-.6c.2-.2.4-.3.6-.4s.5-.2.7-.2h4.9v1.7h-4.9Z"
          className="cls-1"
        />
        <path
          id="path118"
          d="M150.1 188.8v-1.7h1.7v1.7h-1.7Zm0 10.2v-8.5h1.7v8.5h-1.7Z"
          className="cls-1"
        />
        <path
          id="path120"
          d="M160.6 197.8c-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4s-.5.2-.8.2H155c-.5 0-1-.2-1.4-.6s-.6-.8-.6-1.4v-6.6h1.7v6.6q0 .1.1.2s.1.1.2.1h3.8q.1 0 .2-.1s.1-.1.1-.2v-6.6h1.7v6.6c0 .3-.1.6-.2.8Z"
          className="cls-1"
        />
        <path
          id="path122"
          d="M169.3 197.1c0 .3-.1.5-.2.7s-.2.4-.4.6c-.2.2-.4.3-.6.4s-.5.1-.7.1h-5.8v-1.7h5.8q.1 0 .1-.1h.1c0-.2 0-.3-.1-.3l-4.9-2.9c-.3-.2-.5-.4-.7-.7-.2-.3-.3-.6-.3-1s.1-.5.2-.7.2-.4.4-.6c.2-.2.4-.3.6-.4s.5-.2.8-.2h4.9v1.7h-4.9q-.1 0-.2.1s-.1.1-.1.2c0 0 0 .1.1.2l4.9 2.9c.3.2.5.4.7.7.2.3.3.6.3 1Z"
          className="cls-1"
        />
      </g>
      <path id="rect126" d="M-.2 178.4h170.8v.6H-.2z" className="cls-1" />
    </g>
  </svg>
);

// [●] LinkItem
interface LinkItem {
  img?: string;
  link: string;
  svg?: ReactElement<SVGProps<SVGSVGElement>>;
}

//  [✪] linksList
const linksList: LinkItem[] = [
  { img: ASTMH, link: "https://www.astmh.org/", svg: undefined },
  { img: SBV, link: "https://sbv.org.br/", svg: undefined },
  { img: SBM, link: "https://sbmicrobiologia.org.br/", svg: undefined },
  { img: SBI, link: "https://sbi.org.br/", svg: undefined },
  { img: SBBiotec, link: "https://www.sbbiotec.org.br/", svg: undefined },
  { img: SBBC, link: "https://sbbc.org.br/", svg: undefined },
  { img: undefined, link: "https://lnls.cnpem.br/about/", svg: <LNLS /> },
  { img: ISSCR, link: "https://www.isscr.org/", svg: undefined },
  { img: FIOCRUZ, link: "https://portal.fiocruz.br/", svg: undefined },
  { img: EMBRAPA, link: "https://www.embrapa.br/", svg: undefined },
];

// ★ Links ✦────────────➤
const Links = () => {
  // ── ✦─DOM─➤

  return (
    <>
      <Helmet title="Links CIBBiM" />
      <Box id="contato_canvas" className="relative w-full h-screen mt-3">
        <Box
          // _PIN_ panel1
          id="panel1"
          className={classNames(
            "relative flex flex-col mx-10 z-10",
            "lg:flex-row lg:mx-16 lg:px-16 lg:py-12 lg:gap-9"
          )}
        >
          <Box
            // {○} Card_Menu
            className="hidden w-[280px] lg:block"
          >
            <Card_Menu />
          </Box>

          <Box
            // {○} Dropdown_Menu
            className="relative flex lg:hidden mt-10"
          >
            <Dropdown_Menu />
          </Box>

          <Box className="flex flex-col gap-5">
            <Heading color="blue" size="7" highContrast className="mt-10">
              Links
            </Heading>

            <Box
              className={classNames(
                "flex flex-col gap-4 items-center justify-center",
                "md:grid md:grid-cols-3 md:gap-6"
              )}
            >
              {linksList.map((el, index) => (
                <Card
                  key={index}
                  variant="ghost"
                  className="flex flex-col className items-center gap-6 max-w-[300px] p-9"
                >
                  <Inset
                    clip="padding-box"
                    side="top"
                    className=" max-h-[200px]"
                  >
                    <Link href={el.link}>
                      {el.img ? (
                        <img // <○> Image
                          src={el.img}
                          alt="🔬"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        el.svg
                      )}
                    </Link>
                  </Inset>

                  <Link href={el.link}>{el.link}</Link>
                </Card>
              ))}
            </Box>

          </Box>
        </Box>

        <div
          // HERE CIBBiM_BG
          id="CIBBiM_BG"
          className="block w-full h-[500px] bg-cover bg-center rotate-180 z-0 -mt-[500px]"
          style={{ backgroundImage: `url(${CIBBiM_BG})` }}
        >
          <div
            // HERE Opacity Control
            id="opacity BG"
            className={classNames(
              "absolute w-full h-full bg-white bg-cover bg-center",
              "opacity-50"
            )}
          />
        </div>
      </Box>
    </>
  );
}; // ★ Links ✦────────────➤

export default Links;
