// HERE Labs

import { Box, Text, Strong } from "@radix-ui/themes";

import FOTO1 from "../../assets/alimentos_bebidas_lab/FOTO1.jpg";
import FOTO2 from "../../assets/alimentos_bebidas_lab/FOTO2.jpg";
import FOTO3 from "../../assets/alimentos_bebidas_lab/FOTO3.jpg";

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
]; // [✪] labsList ✦────────➤
