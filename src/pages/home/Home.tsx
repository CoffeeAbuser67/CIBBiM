// HERE Home

{
  /* NOTE Breakpoint prefix
          sm	640px	
          md	768px	
          lg	1024px	
          xl	1280px	
          2xl	1536px
          ---
          size 2 = text-sm
          size 3 = text-base
        */
}

import classNames from "classnames";
import CIBBiM_BG from "../../assets/bg_cropped2.svg";
import TESTECIBBBIMBG from "../../assets/TESTECIBBBIMBG3.svg";

import { Helmet } from "react-helmet-async";

import { Box, Text, Heading, Strong, Flex } from "@radix-ui/themes";

// import { useWindowResize } from "../../hooks/useWindowResize";

import { Dropdown_Menu, Card_Menu } from "../../components/menu/Menu";

import logo_cibbim from "../../assets/logo_Cibbim.png";
import { useEffect, useRef, useState } from "react";

// . . . 
// WARN Experimenting
// ✪ useIsVisible
const useIsVisible = (ref: unknown) =>  {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
    } 
    );
    // @ts-ignore
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
} // . . . 

// ★ Home ✦─────────────────➤
const Home = () => {

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  // WARN  windowSize and useWindowResize. Remove in production!!

  // const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  // useWindowResize((width, height) => {
  //   setWindowSize({ width, height });
  // });

  // ── ✦─DOM─➤

  return (
    <>
      <Helmet title="CIBBiM - Centro de Inovação em Biologia e Biotecnologia Microbiana" />

      <Box id="home_canvas" className="relative w-full h-screen">
        <div
          //HERE CIBBiM_BG
          id="CIBBiM_BG"
          className="absolute top-0 w-full h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${CIBBiM_BG})` }}
        />
        
        {/* 
        <Box
          className="fixed top-10 rounded-2xl right-10 bg-slate-600 p-2"
        >
          <Text color="tomato" size="3" highContrast>
            🦀{` wdith: ${windowSize.width}`} <br />
            🦀{` height: ${windowSize.height}`}
          </Text>
        </Box> */}

        <Box
          // . . . . . . . . . . . . . .
          // _PIN_ panel1
          id="panel1"
          className={classNames(
            "flex flex-col mx-10 mb-2",
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

          <Box className="flex flex-col gap-6">
            <Heading
              className="relative mt-10"
              color="blue"
              size="7"
              highContrast
            >
              Centro de Inovação em Biologia e Biotecnologia Microbiana
            </Heading>

            <Flex align={"center"} justify={"center"} className="relative mt-2">
              <img
                // HERE logo_cibbim
                src={logo_cibbim}
                alt="🔬"
                className="w-4/5 md:w-2/5"
              />
            </Flex>

            {/* <Box
              className="flex items-center justify-center"
            >
              <CIBBiM_LOGO_SVG />
            </Box> */}

            <Box className=" flex flex-col">
              <Text as="p" my="5" size="3" highContrast>
                A construção da estrutura física do Centro de Inovação em
                Biologia e Biotecnologia Microbiana (CIBBiM) é fruto do
                planejamento de quase duas décadas de um grupo professores do
                Programa de Pós-Graduação em Biologia e Biotecnologia (PPGBBM)
                da UESC. Estes professores são responsáveis por laboratórios
                distribuídos em diversas edificações do campus Soane Nazaré de
                Andrade onde os projetos em cooperação com pesquisadores da UESC
                e de outras instituições são desenvolvidos utilizando a
                infraestrutura física e de equipamentos descentralizados. Com a
                construção e funcionamento do CIBBiM, estes laboratórios estão
                disponíveis, de forma organizada, coerente e centralizada, para
                instituições de ensino, saúde e pesquisa públicas e privadas em
                um prédio único de caráter multiusuário e multidisciplinar.
                <br /> <br />O CIBBiM, funcionando dentro de uma única
                edificação, facilita e agiliza a execução de estudos, ensaios,
                exames e análises diversas envolvendo a biologia e biotecnologia
                de microrganismos nas áreas de saúde humana e animal, ambiental
                e industrial, dentre outras. A alocação dos 10 diferentes
                laboratórios centralizada no CIBBiM permite maximizar bem como
                racionalizar o uso de equipamentos, especialmente os de grande
                porte que que têm elevado custo de manutenção.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          // . . . . . . . . . . . . . .

          //_PIN_ panel2
          id="panel2"
          className="relative bg-[#036D60] w-full h-[520px] mb-2"
        >
          <Box
            // ○ useIsVisible
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ref={ref1}
            // HERE jungleMicroscopeBG
            id="jungleMicroscopeBG"
            className= {classNames(
              "absolute w-full h-full bg-cover bg-center ",
              `transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`,
            )}
            style={{ backgroundImage: `url(${TESTECIBBBIMBG})` }}
          />

          <Box
            // HERE Opacity Control
            id="opacity BG"
            className={classNames(
              "absolute w-full h-full bg-[#036D60] bg-cover bg-center",
              "opacity-80",
              "xl:opacity-0"
            )}
          />

          <Box
            id="Bg_txt"
            className={classNames(
              "absolute w-full h-full flex items-center justify-center p-10",
              "xl:w-[520px] h-[520px] xl:right-0",
              "2xl:mr-24"
            )}
          >
            <Text as="div" my="5"  highContrast className="text-sm sm:text-base text-neutral-100">
              <Strong>
                Por estar situado no interior da Bahia, o CIBBiM tem como missão
                atender à comunidade interna (universidade) e externa (empresas,
                clínicas, hospitais, institutos) na identificação fenotípica e
                genotípica de microrganismos, bem como de metabólitos
                provenientes de bactérias e fungos, visando o desenvolvimento de
                processos e produtos biotecnológicos. <br />
                <br />
              </Strong>

              <Strong>
                Ao desenvolver pesquisas que promovam o equilíbrio e saúde do
                ecossistema (conceito de One Health) e ao avançar o conhecimento
                sobre os microrganismos e suas aplicações tecnológicas em uma
                região reconhecida como hotspot da biodiversidade do planeta
                (bioma Mata Atlântica do sul da Bahia), o CIBBiM se constitui
                como uma ferramenta estratégica do estado na promoção do
                bem-estar da sociedade.
              </Strong>
            </Text>
          </Box>
        </Box>

        <Box
          // . . . . . . . . . . . . . .
          //_PIN_ panel3
          className="relative flex justify-center items-center w-full mb-5"
        >
          <Text
            as="div"
            my="5"
            highContrast
            className={classNames(
              "w-full mx-10 mb-10",
              "lg:mx-16 lg:px-16 lg:py-12"
            )}
          >
            Por ser um Centro que lida com microrganismos, o prédio do CIBBiM
            apresenta nível de Biossegurança 2 e assim o sendo, os usuários têm
            necessidade de realizar além do cadastro para as atividades de
            pesquisa e análises, também um curso de biossegurança para
            frequentar as instalações. Para tanto, este Centro tem como política
            ofertar treinamentos periódicos em biossegurança e uso de
            equipamentos de análise microbiana aos usuários. Os laboratórios e
            equipamentos do CIBBiM estão disponíveis para usuários cadastrados e
            habilitados realizarem seus estudos, exames e ensaios envolvendo a
            biodiversidade e aplicabilidade dos microrganismos. <br />
            <br />
            <Strong>
              Seja um(a) usuário(a) do CIBBiM! <br />
              <br />
            </Strong>
            Veja como utilizar os laboratórios, equipamentos e serviços do
            Centro de Inovação em Biologia e Biotecnologia Microbiana da UESC.
          </Text>
        </Box>
      </Box>
    </>
  );
}; //★ Home ✦─────────────────➤

export default Home;
