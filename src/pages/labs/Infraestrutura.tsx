// HERE Infraestrutura

import {
  Box,
  Card,
  Avatar,
  Flex,
  Text,
  Button,
  Heading,
  DropdownMenu,
  Dialog,
  Table,
  Inset,
  Strong,
} from "@radix-ui/themes";
import classNames from "classnames";
import { Link } from "react-router-dom";

import FOTO1 from "../../assets/alimentos_bebidas_lab/FOTO1.jpg";
import FOTO2 from "../../assets/alimentos_bebidas_lab/FOTO2.jpg";
import FOTO3 from "../../assets/alimentos_bebidas_lab/FOTO3.jpg";

interface ButtonProps {
  name: string;
  path: string;
}

// {●} buttons
const buttons: ButtonProps[] = [
  { name: "Apresentação", path: "/" },
  { name: "Como utilizar", path: "/como_utilizar" },
  { name: "Infraestrutura", path: "/infraestrutura" },
  { name: "Serviços prestados", path: "/servicos_prestados" },
  { name: "Formulários", path: "/formularios" },
  { name: "Comitê Gestor", path: "/comite_gestor" },
  { name: "Publicações", path: "/publicacoes" },
  { name: "Links", path: "/links" },
  { name: "Contato", path: "/contato" },
]; // . . . . . . . . .

// {✪} Dropdown_Menu
const Dropdown_Menu: React.FC = () => {
  return (
    <Flex gap="3" align="center">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button
            variant="ghost"
            size="2"
            highContrast
            color="gray"
            className="cursor-pointer"
          >
            <Text weight="bold" size="3" className="mr-1">
              Menu
            </Text>

            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          size="2"
          color="gray"
          variant="soft"
          highContrast
          className="bg-gray-100 border-none shadow drop-shadow-xl shadow-white"
        >
          {buttons.map(
            (
              item // {○} buttons
            ) => (
              <DropdownMenu.Item key={item.path} asChild>
                <Link
                  to={item.path}
                  className="flex justify-start w-full px-4 py-4 cursor-pointer"
                >
                  <Text weight="bold" size="2" highContrast>
                    {item.name}
                  </Text>
                </Link>
              </DropdownMenu.Item>
            )
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );
}; // . . . . . . . . .

// {✪} Card_Menu
const Card_Menu: React.FC = () => {
  return (
    <Card
      id="Card_Menu"
      variant="ghost"
      className=" flex w-[280px] justify-start p-8 mr-2 bg-gray-100 border-none shadow drop-shadow-xl shadow-white"
    >
      <ul className="space-y-2 w-full">
        {buttons.map(
          (
            button // {○} buttons
          ) => (
            <li key={button.path}>
              <Button
                variant="ghost"
                size="4"
                color="gray"
                className=" w-full"
                highContrast
              >
                <Link to={button.path} className="flex w-full justify-start">
                  <Text weight="bold" size="3">
                    {button.name}
                  </Text>
                </Link>
              </Button>
            </li>
          )
        )}
      </ul>
    </Card>
  );
}; // . . . . . . . . . . . . . . . . . . . . . . . . . . .

// [●] Equipaments
interface Equipaments {
  Title: string;
  Desc: string;
  Image: string | undefined;
} // . . .

// [●] Lab
interface Lab {
  Id: string;
  LabName: string;
  LabResponsible: string;
  ResponsibleEmail: string | undefined;
  DescriptionComponent: () => JSX.Element;
  EquipamentsQtd: number;
  EquipamentsIntro: string;
  EquipamentsList: Equipaments[];
} // . . .

// [✪] labsList
const labsList: Lab[] = [
  {
    // [●] alimentos_bebidas
    Id: "alimentos_bebidas",
    LabName: "Laboratório de Alimentos e Bebidas Fermentadas",
    LabResponsible: "Dra. Ana Paula Trovatti Uetanabaro",
    ResponsibleEmail: "(aptuetanabaro@gmail.com)",
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-2">
        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Pesquisadora responsável:</Strong> Dra. Ana Paula Trovatti
          Uetanabaro
          {"\n"}
          (aptuetanabaro@gmail.com)
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Grande área de atuação:</Strong> Projetos e pesquisa aplicados
          em biotecnologia microbiana
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Expertise:</Strong> Isolamento e seleção de microrganismos de
          fermentações naturais e artesanais para aplicações industriais:
          Cerveja Artesanal; Cachaça Artesanal; Cafés especiais da Chapada da
          Diamantina; Probióticos isolados da fermentação do cacau para uso
          humano e animal; Kombucha; Cogumelos comestíveis.
        </Text>

        <Box className="flex flex-col gap-1">
          <Strong> Expertises do grupo: </Strong>
          <Text>
            ● Coleta e isolamento de microrganismos em campo, especialmente de
            diversas origens, como fermentação do cacau, cachaça artesanal,
            kombucha, vinagre, endofíticos e cogumelos comestíveis.
          </Text>

          <Text>
            ● Processamento de amostras, isolamento, cultivo, preservação,
            caracterização e identificação fenotípica (fisiologia) e genotípica
            (biomol) de leveduras e bactérias.
          </Text>

          <Text>
            ● Utilização de resíduos agroindustriais para produção de enzimas de
            interesse industrial.
          </Text>

          <Text>
            ● Prospecção de enzimas microbianas de interesse biotecnológico.
          </Text>
          <Text>
            ● Pesquisas para a seleção de microrganismos com potencial
            biotecnológico para a produção/fermentação de: Cerveja, Cachaça,
            Iogurte, Café e Kombucha.
          </Text>
          <Text>
            ● Análises de resultados, preparo de relatório bem fundamentados,
            escrita de projetos científicos nas áreas de nossa expertise.
          </Text>
        </Box>
      </Box>
    ),
    EquipamentsQtd: 3,
    EquipamentsIntro: "Equipamentos de uso coletivo no LABMA:",
    EquipamentsList: [
      {
        Title: "Cabine de Segurança Biológica (CBS)",
        Desc: "A Cabine de Segurança Biológica é um equipamento essencial para garantir a segurança em laboratórios que trabalham com agentes biológicos. Ela protege o usuário, o ambiente e o produto, contribuindo para a realização de trabalhos com segurança e confiabilidade. Na CSB Classe II são realizadas atividades de isolamento, repique de microrganismos e manipulação de reagentes.",
        Image: FOTO1,
      },
      {
        Title: "Ultrafreezer",
        Desc: "São equipamentos essenciais em laboratórios, especialmente aqueles que trabalham com amostras biológicas sensíveis à temperatura. Eles são utilizados para armazenar materiais a temperaturas extremamente baixas, geralmente entre -40°C e -86°C. O ultrafreezer, mantido na temperatura de -86°C, é especialmente utilizado para a preservação de amostras celulares e de DNA. O principal objetivo do ultrafreezer é preservar a integridade e viabilidade de amostras biológicas por longos períodos.",
        Image: FOTO2,
      },
      {
        Title: "Ultracentrífuga de bancada",
        Desc: "A ultracentrífuga de bancada é um equipamento de laboratório de alta rotação, projetado para separar partículas muito pequenas em suspensão em um líquido com base em suas massas e densidades. Essas partículas podem ser desde moléculas grandes (como proteínas e ácidos nucleicos) até organelas celulares. Possuem uma ampla gama de aplicações em diversos campos da ciência, incluindo: Isolamento de ácidos nucleicos (DNA e RNA), purificação de proteínas, análise de sedimentação de partículas virais, fracionamento de organelas celulares (mitocôndrias, núcleos), estudo da interação entre moléculas, análise da densidade de gradiente para separar partículas subcelulares, purificação de fármacos e estudos de estabilidade.",
        Image: FOTO3,
      },
    ],
  }, // . . .
]; // . . . . . . .

// <✪> LabTemplate
const LabTemplate = () => {
  return (
    <>
      {labsList.map((lab, index) => (
        <Dialog.Root key={index}>
          <Dialog.Trigger>
            <Card
              // <●> triggerCard
              // <○> Id
              id={`triggerCard_${lab.Id}`}
              variant="surface"
              size="1"
              className={classNames(
                "max-w-[420px]",
                "opacity-75 overflow-hidden bg-gray-100 shadow-md",
                "hover:shadow-lg hover:opacity-100",
                "transition duration-300 ease-in-out transform hover:-translate-y-1",
                "cursor-pointer"
              )}
            >
              <Flex gap="4" align="center">
                <Avatar size="4" radius="medium" fallback="T" color="indigo" />
                <Box>
                  <Text
                    // <○> LabName
                    as="div"
                    weight="bold"
                    highContrast
                  >
                    {lab.LabName}
                  </Text>
                  <Text
                    // <○> LabResponsible
                    as="div"
                    color="gray"
                  >
                    {lab.LabResponsible}
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Dialog.Trigger>

          <Dialog.Content
            className={classNames(
              "bg-gray-100",
              "w-[75vw] min-h-[600px] max-w-[12000px]", // Dialog width: 90% of the viewport, capped at 700px
              "rounded-lg", // Rounded corners
              "p-12", // Padding
              "shadow-lg", // Shadow for aesthetics
              "overflow-y-auto" // Ensure no horizontal scroll
            )}
          >
            <Box
              // . . .
              // <●> contentBox
              // <○> Id
              id={`contentBox${lab.Id}`}
              className="flex flex-col w-full gap-9"
            >
              <Dialog.Title>
                <Heading
                  // <○> LabName
                  color="green"
                  size="5"
                  className="mb-1"
                  highContrast
                >
                  {lab.LabName}
                </Heading>
                <Heading size="4">
                  Centro de Inovação em Biologia e Biotecnologia Microbiana
                </Heading>
                <Heading size="4">
                  Universidade Estadual de Santa Cruz, Ilhéus, Bahia, Brasil
                </Heading>
              </Dialog.Title>

              <Dialog.Description
              // <○> DescriptionComponent
              >
                <lab.DescriptionComponent />
              </Dialog.Description>

              <Box id="equipamentosPanel" className="flex flex-col gap-9">
                <Text
                  // <○> EquipamentsIntro
                  as="div"
                  weight="bold"
                  highContrast
                >
                  {lab.EquipamentsIntro}
                </Text>

                <Box // . . . . . . . . .
                  // HERE  EQUIPAMENTOS GRID
                  className="columns-2 md:columns-3 gap-4 items-center"
                >
                  {lab.EquipamentsList.map((Equipament, index) => (
                    <Card // _PIN_ Equipaments Cards
                      className="flex flex-col gap-5 shadow-md bg-slate-200"
                      size="2"
                      mb="6"
                      key={index}
                    >
                      <Inset clip="border-box" side="top">
                        <img // <○> Image
                          src={Equipament.Image}
                          alt="Bold typography"
                          className="h-full w-full object-cover"
                        />
                      </Inset>
                      <Box className="flex flex-col gap-2">
                        <Heading // <○> Title
                        size="2">{Equipament.Title}</Heading>
                        <Text // <○> Desc
                          as="p"
                          size="2"
                          wrap="wrap"
                          className="line-clamp-6"
                        >
                          {Equipament.Desc}
                        </Text>
                      </Box>
                    </Card>
                  ))}
                </Box>
              </Box>

              <Flex gap="3" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    🦀
                  </Button>
                </Dialog.Close>
              </Flex>
            </Box>
          </Dialog.Content>
        </Dialog.Root>
      ))}
    </>
  );
}; // . . . . . . . . . . . . . . . .

// ★ Infraestrutura ✦───────────────────────➤
const Infraestrutura = () => {
  // WARN  Missing helmet

  // ── ✦─DOM─➤
  return (
    <Box id="infraestrutura_canvas" className="relative w-full h-screen">
      <Box
        // _PIN_  Panel1
        id="Pane"
        className="mx-16 p-16 overflow-hidden"
      >
        <Box className="grid grid-rows-6 grid-flow-col gap-6">
          <Box
            className="row-span-6"
            //{○} Card_Menu
          >
            <Card_Menu />
          </Box>

          <Box className="col-span-2">
            <Heading color="green" size="7" highContrast>
              Infraestrutura
            </Heading>
          </Box>

          <Box className="col-span-2">
            <Flex direction="column">
              <Text color="gray" size="3" highContrast>
                Conheça os laboratórios que compõem o CIBBiM, juntamente com os
                respectivos equipamentos disponíveis para a comunidade.
              </Text>
            </Flex>
          </Box>

          <Box className="row-span-4 col-span-2">
            <Table.Root size="2" className="max-w-[900px]">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Laboratórios</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell
                  // <○> LabTemplate
                  >
                    <LabTemplate />
                  </Table.RowHeaderCell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; // ★ Infraestrutura ✦───────────────────────➤

export default Infraestrutura;
