// HERE Labs

import { Box, Text, Strong } from "@radix-ui/themes";

import AB_FOTO1 from "../../assets/alimentos_bebidas_lab/FOTO1.jpg";
import AB_FOTO2 from "../../assets/alimentos_bebidas_lab/FOTO2.jpg";
import AB_FOTO3 from "../../assets/alimentos_bebidas_lab/FOTO3.jpg";


import IMUNO_FOTO1 from "../../assets/imunibiologia/FOTO1.jpg"

import IMUNO_FOTO2 from "../../assets/imunibiologia/FOTO2.jpg"
import IMUNO_FOTO3 from "../../assets/imunibiologia/FOTO3.jpg"
import IMUNO_FOTO4 from "../../assets/imunibiologia/FOTO4.jpg"

// [●] Equipaments
interface Equipaments {
  Title: string;
  Desc: string;
  Image: string | undefined;
}

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

// [✪] labsList ✦────────➤
export const labsList: Lab[] = [
  {
    // [●] alimentos_bebidas
    Id: "alimentos_bebidas",
    LabName: "Laboratório de Alimentos e Bebidas Fermentadas",
    LabResponsible: "Dra. Ana Paula Trovatti Uetanabaro",
    ResponsibleEmail: "(aptuetanabaro@gmail.com)",
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Pesquisadora responsável:</Strong> Dra. Ana Paula Trovatti
          Uetanabaro
          {"\n"}
          (aptuetanabaro@gmail.com)
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Áreas de atuação:</Strong> Projetos e pesquisa aplicados em
          biotecnologia microbiana
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Expertise:</Strong> Isolamento e seleção de microrganismos de
          fermentações naturais e artesanais para aplicações industriais:
          Cerveja Artesanal; Cachaça Artesanal; Cafés especiais da Chapada da
          Diamantina; Probióticos isolados da fermentação do cacau para uso
          humano e animal; Kombucha; Cogumelos comestíveis.
        </Text>

        <Box className="flex flex-col gap-2">
          <Strong> Expertises do grupo: </Strong>
          <Text>
            ◆ Coleta e isolamento de microrganismos em campo, especialmente de
            diversas origens, como fermentação do cacau, cachaça artesanal,
            kombucha, vinagre, endofíticos e cogumelos comestíveis.
          </Text>

          <Text>
            ◆ Processamento de amostras, isolamento, cultivo, preservação,
            caracterização e identificação fenotípica (fisiologia) e genotípica
            (biomol) de leveduras e bactérias.
          </Text>

          <Text>
            ◆ Utilização de resíduos agroindustriais para produção de enzimas de
            interesse industrial.
          </Text>

          <Text>
            ◆ Prospecção de enzimas microbianas de interesse biotecnológico.
          </Text>
          <Text>
            ◆ Pesquisas para a seleção de microrganismos com potencial
            biotecnológico para a produção/fermentação de: Cerveja, Cachaça,
            Iogurte, Café e Kombucha.
          </Text>
          <Text>
            ◆ Análises de resultados, preparo de relatório bem fundamentados,
            escrita de projetos científicos nas áreas de nossa expertise.
          </Text>
        </Box>
      </Box>
    ),
    EquipamentsQtd: 3,
    EquipamentsIntro: "Equipamentos do LABMA:",
    EquipamentsList: [
      {
        Title: "Cabine de Segurança Biológica (CBS)",
        Desc: "A Cabine de Segurança Biológica é um equipamento essencial para garantir a segurança em laboratórios que trabalham com agentes biológicos. Ela protege o usuário, o ambiente e o produto, contribuindo para a realização de trabalhos com segurança e confiabilidade. Na CSB Classe II são realizadas atividades de isolamento, repique de microrganismos e manipulação de reagentes.",
        Image: AB_FOTO1,
      },
      {
        Title: "Ultrafreezer",
        Desc: "São equipamentos essenciais em laboratórios, especialmente aqueles que trabalham com amostras biológicas sensíveis à temperatura. Eles são utilizados para armazenar materiais a temperaturas extremamente baixas, geralmente entre -40°C e -86°C. O ultrafreezer, mantido na temperatura de -86°C, é especialmente utilizado para a preservação de amostras celulares e de DNA. O principal objetivo do ultrafreezer é preservar a integridade e viabilidade de amostras biológicas por longos períodos.",
        Image: AB_FOTO2,
      },
      {
        Title: "Ultracentrífuga de bancada",
        Desc: "A ultracentrífuga de bancada é um equipamento de laboratório de alta rotação, projetado para separar partículas muito pequenas em suspensão em um líquido com base em suas massas e densidades. Essas partículas podem ser desde moléculas grandes (como proteínas e ácidos nucleicos) até organelas celulares. Possuem uma ampla gama de aplicações em diversos campos da ciência, incluindo: Isolamento de ácidos nucleicos (DNA e RNA), purificação de proteínas, análise de sedimentação de partículas virais, fracionamento de organelas celulares (mitocôndrias, núcleos), estudo da interação entre moléculas, análise da densidade de gradiente para separar partículas subcelulares, purificação de fármacos e estudos de estabilidade.",
        Image: AB_FOTO3,
      },
    ],
  }, // . . .

  {
    // [●] imunobiologia
    Id: "imunobiologia",
    LabName: "Laboratório de Imunobiologia",
    LabResponsible: "Dra. Jane Lima dos Santos",
    ResponsibleEmail: "(jlsantos@uesc.br)",
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Pesquisadora responsável:</Strong> Dra. Jane Lima dos Santos
          {"\n"}
          (aptuetanabaro@gmail.com)
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Áreas de atuação:</Strong> imunologia, bioprospecção de
          antimicrobianos, interação patógeno-hospedeiro.
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Expertises do grupo:</Strong> O laboratório de Imunobiologia da
          UESC compõe-se de profissionais qualificados nas áreas de Imunologia,
          Microbiologia e Parasitologia. A equipe é formada por docentes,
          pós-doutorando, e discentes de iniciação científica, mestrado e
          doutorado que desenvolvem pesquisa científica básica, aplicada e
          inovação tecnológica. O grupo possui pesquisas utilizando biomoléculas
          de fungos e plantas, com foco em bioprospecção no que se refere ao
          controle direto e indireto de patógenos bacterianos e protozoários. A
          equipe atua em estudos de interação patógeno hospedeiro e no potencial
          modulatório das biomoléculas em componentes celulares do sistema imune
          na saúde e na doença. Dessa forma a repercussão das pesquisas do grupo
          concentra-se na área da saúde, principalmente com a perspectiva de
          produção de fármacos à base de produtos naturais. A relevância dos
          estudos realizados pelo grupo é ampla por utilizar nas pesquisas
          biomoléculas derivadas de plantas e fungos da região sul da Bahia para
          controle de patógenos de ocorrência mundial.
        </Text>
      </Box>
    ),
    EquipamentsQtd: 4,
    EquipamentsIntro: "Equipamentos  do Laboratório de Imunobiologia",
    EquipamentsList: [
      {
        Title: "Centrífuga Hettich Universal 320 R",
        Desc: "Centrífuga compacta e versátil que executa centrifugação de tubos com diferentes diâmetros. Esse equipamento é utilizado para separar diferentes fases de uma amostra de cultura de células, por exemplo, de maneira muito eficiente. Essa separação se dá de acordo com a densidade, deslocando as partículas mais pesadas para o fundo do tubo.",
        Image: IMUNO_FOTO1,
      },

      {
        Title: "Cabine de Segurança Biológica ESCO Airstream",
        Desc: "O laboratório de Imunobiologia é equipado com uma capela de fluxo laminar classe II usada para processamento de amostras em condições assépticas, preparação de soluções e meios de cultura, e isolamentos de microrganismos. O equipamento fornece proteção ao operador e ao material biológico manipulado e apresenta fluxo de ar estável com um sistema de filtragem HEPA e lâmpadas ultravioleta e branca.",
        Image: IMUNO_FOTO2,
      },

      {
        Title: "Incubadora de CO2 Sanyo Incusafe",
        Desc: "O laboratório de Imunobiologia possui incubadora de CO2 para cultura de células usada para uma ampla gama de aplicações para as pesquisas em microbiologia. O equipamento de 164 L de capacidade, possui controle de CO2 (0 a 20%) por sensor infravermelho, estabilidade de temperatura (faixa 5 a 50 °C), sensor de baixo nível de água e interior de aço inoxidável enriquecido com cobre.",
        Image: IMUNO_FOTO3,
      },

      {
        Title: "Ultra Freezer SS Scientific",
        Desc: "Equipamento utilizado para armazenamento a longo prazo dos microrganismos utilizados nas pesquisas. Possui faixa de trabalho de -50 a -86 ºC e capacidade para 362 L.",
        Image: IMUNO_FOTO4,
      },
    ],
  }, // . . .
]; // [✪] labsList ✦────────➤
