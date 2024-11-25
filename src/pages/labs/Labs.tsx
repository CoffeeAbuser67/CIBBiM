// HERE Labs

import { Box, Text, Strong } from "@radix-ui/themes";

import AB_FOTO1 from "../../assets/alimentos_bebidas_lab/FOTO1.jpg";
import AB_FOTO2 from "../../assets/alimentos_bebidas_lab/FOTO2.jpg";
import AB_FOTO3 from "../../assets/alimentos_bebidas_lab/FOTO3.jpg";

import IMUNO_FOTO1 from "../../assets/imunibiologia/FOTO1.jpg";
import IMUNO_FOTO2 from "../../assets/imunibiologia/FOTO2.jpg";
import IMUNO_FOTO3 from "../../assets/imunibiologia/FOTO3.jpg";
import IMUNO_FOTO4 from "../../assets/imunibiologia/FOTO4.jpg";

import ENZIMO_FOTO1 from "../../assets/enzimologia/FOTO1.jpg";
import ENZIMO_FOTO2 from "../../assets/enzimologia/FOTO2.jpg";
import ENZIMO_FOTO3 from "../../assets/enzimologia/FOTO3.jpg";

import LABMI_FOTO1 from "../../assets/labmi/FOTO1.jpg";
import LABMI_FOTO2 from "../../assets/labmi/FOTO2.jpg";
import LABMI_FOTO3 from "../../assets/labmi/FOTO3.jpg";
import LABMI_FOTO4 from "../../assets/labmi/FOTO4.jpg";
import LABMI_FOTO5 from "../../assets/labmi/FOTO5.jpg";
import LABMI_FOTO6 from "../../assets/labmi/FOTO6.jpg";
import LABMI_FOTO7 from "../../assets/labmi/FOTO7.png";
import LABMI_FOTO8 from "../../assets/labmi/FOTO8.jpg";
import LABMI_FOTO9 from "../../assets/labmi/FOTO9.jpg";
import LABMI_FOTO10 from "../../assets/labmi/FOTO10.png";
import LABMI_FOTO11 from "../../assets/labmi/FOTO11.jpg";
import LABMI_FOTO12 from "../../assets/labmi/FOTO12.jpg";
import LABMI_FOTO13 from "../../assets/labmi/FOTO13.jpg";

import BIOPROD_FOTO1 from "../../assets/microbioprodutos/FOTO1.jpg";
import BIOPROD_FOTO2 from "../../assets/microbioprodutos/FOTO2.jpg";
import BIOPROD_FOTO3 from "../../assets/microbioprodutos/FOTO3.jpg";
import BIOPROD_FOTO4 from "../../assets/microbioprodutos/FOTO4.jpg";
import BIOPROD_FOTO5 from "../../assets/microbioprodutos/FOTO5.jpg";

import HOSP_FOTO1 from "../../assets/labminhosp/FOTO1.png";
import HOSP_FOTO2 from "../../assets/labminhosp/FOTO2.jpg";
import HOSP_FOTO3 from "../../assets/labminhosp/FOTO3.jpg";

import LAPAGEN_FOTO1 from "../../assets/lapagen/FOTO1.jpg";
import LAPAGEN_FOTO2 from "../../assets/lapagen/FOTO2.jpg";
import LAPAGEN_FOTO3 from "../../assets/lapagen/FOTO3.jpg";
import LAPAGEN_FOTO4 from "../../assets/lapagen/FOTO4.jpg";
import LAPAGEN_FOTO5 from "../../assets/lapagen/FOTO5.jpg";
import LAPAGEN_FOTO6 from "../../assets/lapagen/FOTO6.jpg";
import LAPAGEN_FOTO7 from "../../assets/lapagen/FOTO7.jpg";
import LAPAGEN_FOTO8 from "../../assets/lapagen/FOTO8.jpg";
import LAPAGEN_FOTO9 from "../../assets/lapagen/FOTO9.jpg";
import LAPAGEN_FOTO10 from "../../assets/lapagen/FOTO10.jpg";

import LEMIC_FOTO1 from "../../assets/lemic/FOTO1.jpg";

import LDVEX_FOTO1 from "../../assets/ldvex/FOTO1.jpg"
import LDVEX_FOTO2 from "../../assets/ldvex/FOTO2.jpg"
import LDVEX_FOTO3 from "../../assets/ldvex/FOTO3.jpg"
import LDVEX_FOTO4 from "../../assets/ldvex/FOTO4.jpg"
import LDVEX_FOTO5 from "../../assets/ldvex/FOTO5.jpg"
import LDVEX_FOTO6 from "../../assets/ldvex/FOTO6.png"
import LDVEX_FOTO7 from "../../assets/ldvex/FOTO7.png"
import LDVEX_FOTO8 from "../../assets/ldvex/FOTO8.jpg"
import LDVEX_FOTO9 from "../../assets/ldvex/FOTO9.jpg"
import LDVEX_FOTO10 from "../../assets/ldvex/FOTO10.jpg"




// [●] Equipaments
interface Equipaments {
  Title: string;
  Desc: string;
  Image: string | undefined;
}

type DescText = {
  [key: string]: string;
};

// [●] Lab
interface Lab {
  Id: string;
  LabName: string;
  LabResponsible: string;
  ResponsibleEmail: string | undefined;
  DescriptionText: DescText;
  DescriptionComponent: () => JSX.Element;
  EquipamentsQtd: number;
  EquipamentsIntro: string;
  EquipamentsList: Equipaments[];
} // . . .

// [✪] labsList ✦────────➤
export const labsList: Lab[] = [
  // . . .
  {
    // [●] alimentos_bebidas
    Id: "alimentos_bebidas",
    LabName: "Laboratório de Alimentos e Bebidas Fermentadas",
    LabResponsible: "Dra. Ana Paula Trovatti Uetanabaro",
    ResponsibleEmail: "(aptuetanabaro@gmail.com)",
    DescriptionText: {},
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisadora responsável:</Strong> Dra. Ana Paula Trovatti
          Uetanabaro
          {"\n"}
          (aptuetanabaro@gmail.com)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Áreas de atuação:</Strong> Projetos e pesquisa aplicados em
          biotecnologia microbiana
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Expertise:</Strong> Isolamento e seleção de microrganismos de
          fermentações naturais e artesanais para aplicações industriais:
          Cerveja Artesanal; Cachaça Artesanal; Cafés especiais da Chapada da
          Diamantina; Probióticos isolados da fermentação do cacau para uso
          humano e animal; Kombucha; Cogumelos comestíveis.
        </Text>

        <Box className="flex flex-col gap-2 text-sm sm:text-base">
          <Strong> Expertises do grupo: </Strong>

          <Text as="div" highContrast className="text-sm sm:text-base">
            ◆ Coleta e isolamento de microrganismos em campo, especialmente de
            diversas origens, como fermentação do cacau, cachaça artesanal,
            kombucha, vinagre, endofíticos e cogumelos comestíveis.
          </Text>

          <Text as="div" highContrast className="text-sm sm:text-base">
            ◆ Processamento de amostras, isolamento, cultivo, preservação,
            caracterização e identificação fenotípica (fisiologia) e genotípica
            (biomol) de leveduras e bactérias.
          </Text>

          <Text as="div" highContrast className="text-sm sm:text-base">
            ◆ Utilização de resíduos agroindustriais para produção de enzimas de
            interesse industrial.
          </Text>

          <Text as="div" highContrast className="text-sm sm:text-base">
            ◆ Prospecção de enzimas microbianas de interesse biotecnológico.
          </Text>
          <Text as="div" highContrast className="text-sm sm:text-base">
            ◆ Pesquisas para a seleção de microrganismos com potencial
            biotecnológico para a produção/fermentação de: Cerveja, Cachaça,
            Iogurte, Café e Kombucha.
          </Text>
          <Text as="div" highContrast className="text-sm sm:text-base">
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
    // [●] enzimologia
    Id: "enzimologia",
    LabName: "Laboratório de Enzimologia Microbiana",
    LabResponsible: "Dra. Andréa Miura Costa",
    ResponsibleEmail: "(amcosta@uesc.br)",
    DescriptionText: {
      Email: "labmicroagro@gmail.com",
      Telefone: "(73) 3680-5190/5275",
      Instagram: "@labma.uesc",
    },
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisadora responsável:</Strong> Dra. Andréa Miura Costa
          {"\n"}
          (amcosta@uesc.br)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Área de atuação:</Strong> Biotecnologia microbiana.
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Expertise:</Strong> Enzimas de origem microbiana e aplicações
          em alimentos, bebidas, controle biológico, produção de
          biocombustíveis, de biopolímeros, tratamento de efluentes
        </Text>

        <Box className="flex flex-col gap-2 text-sm sm:text-base">
          <Strong> Expertises do grupo: </Strong>
          <Text as="div" highContrast className="text-sm sm:text-base">
            ◆ Utilização de resíduos agroindustriais para produção de enzimas de
            interesse industrialveis.
          </Text>

          <Text as="div" highContrast className="text-sm sm:text-base">
            ◆ Prospecção de enzimas microbianas de interesse biotecnológicorias.
          </Text>

          <Text as="div" highContrast className="text-sm sm:text-base">
            ◆ Aplicações de enzimas microbianas em processos biotecnológicos e
            industriais.
          </Text>
        </Box>
      </Box>
    ),

    EquipamentsQtd: 3,
    EquipamentsIntro: "Equipamentos de uso coletivo no LABMA:",
    EquipamentsList: [
      {
        Title: "AKTA",
        Desc: "É um sistema de cromatografia líquida de alta performance (HPLC), especialmente projetado para a purificação de proteínas e outras biomoléculas. Utilizado em diversos campos da biotecnologia, como pesquisa farmacêutica, bioquímica e biologia molecular. Capaz de separar, purificar e analisar misturas complexas de biomoléculas, como proteínas e peptídeos. Diferentes tipos de colunas cromatográficas são utilizados para separar as moléculas com base em suas propriedades físicas e químicas. Em suma, o AKTA é uma ferramenta essencial para a purificação de proteínas (isolar proteínas específicas de uma amostra complexa); análise de proteínas (determinar a pureza e a concentração de proteínas); desenvolvimento de novos bioativos (purificar proteínas para estudos de função e desenvolvimento de novos medicamentos, p.e.) e em pesquisa básica (estudar a estrutura e função de proteínas).",
        Image: ENZIMO_FOTO1,
      },

      {
        Title: "Cabine de Segurança Biológica (CBS)",
        Desc: "A Cabine de Segurança Biológica é um equipamento essencial para garantir a segurança em laboratórios que trabalham com agentes biológicos. Ela protege o usuário, o ambiente e o produto, contribuindo para a realização de trabalhos com segurança e confiabilidade. A CSB Classe II é utilizada para manipulação de material estéril necessário aos experimentos envolvendo enzimas microbianas, bem como para repique dos microrganismos estudados.",
        Image: ENZIMO_FOTO2,
      },

      {
        Title: "Ultrafreezer",
        Desc: "São equipamentos essenciais em laboratórios, especialmente aqueles que trabalham com amostras biológicas sensíveis à temperatura. Eles são utilizados para armazenar materiais a temperaturas extremamente baixas, geralmente entre -40°C e -86°C. Mantido na temperatura de -86°C, o ultrafreezer é especialmente utilizado para a preservação de amostras celulares, enzimáticas e de reagentes. ",
        Image: ENZIMO_FOTO3,
      },
    ],
  }, // . . .
  {
    // [●] imunobiologia
    Id: "imunobiologia",
    LabName: "Laboratório de Imunobiologia",
    LabResponsible: "Dra. Jane Lima dos Santos",
    ResponsibleEmail: "(jlsantos@uesc.br)",
    DescriptionText: {},
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisadora responsável:</Strong> Dra. Jane Lima dos Santos
          {"\n"}
          (aptuetanabaro@gmail.com)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Áreas de atuação:</Strong> imunologia, bioprospecção de
          antimicrobianos, interação patógeno-hospedeiro.
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base ">
          <Strong>Expertises do grupo:</Strong> O laboratório de Imunobiologia
          da UESC compõe-se de profissionais qualificados nas áreas de
          Imunologia, Microbiologia e Parasitologia. A equipe é formada por
          docentes, pós-doutorando, e discentes de iniciação científica,
          mestrado e doutorado que desenvolvem pesquisa científica básica,
          aplicada e inovação tecnológica. O grupo possui pesquisas utilizando
          biomoléculas de fungos e plantas, com foco em bioprospecção no que se
          refere ao controle direto e indireto de patógenos bacterianos e
          protozoários. A equipe atua em estudos de interação patógeno
          hospedeiro e no potencial modulatório das biomoléculas em componentes
          celulares do sistema imune na saúde e na doença. Dessa forma a
          repercussão das pesquisas do grupo concentra-se na área da saúde,
          principalmente com a perspectiva de produção de fármacos à base de
          produtos naturais. A relevância dos estudos realizados pelo grupo é
          ampla por utilizar nas pesquisas biomoléculas derivadas de plantas e
          fungos da região sul da Bahia para controle de patógenos de ocorrência
          mundial.
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
  {
    // [●] labmi
    Id: "labmi",
    LabName: "Laboratório de Biotecnologia Microbiana",
    LabResponsible: "Dra. Rachel Passos Rezende",
    ResponsibleEmail: "(rachel@uesc.br)",
    DescriptionText: {
      Email: "labmiuesc@gmail.com",
      Telefone: "(73) 3680 5435",
      Instagram: "@labmiuesc",
    },
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisadora responsável:</Strong> Dra. Rachel Passos Rezende
          {"\n"}
          (rachel@uesc.br)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Áreas de atuação:</Strong> biotecnologia microbiana, genética
          de microrganismos, microbiologia clássica.
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Sobre o laboratório:</Strong> O Laboratório de Biotecnologia
          Microbiana (LABMI) é um laboratório multiusuários liderado e
          coordenado pela prof.ª Drª Rachel Passos Rezende, vinculada ao
          Programa de Pós-Graduação em Biologia e Biotecnologia de
          Microrganismos (PPGBBM) e Programa de Pós-Graduação em Genética e
          Biologia Molecular (PPGGBM). Ativo desde 2008 e possuindo nível de
          biossegurança 2 (NB2), ao longo desses anos o LABMI foi sede de
          diversas pesquisas envolvendo áreas como fermentação de cacau,
          metagenômica, biossurfactantes, biorremediação de borras oleosas,
          potencial probiótico microbiano, prospecção de microrganismos com
          atividades biotecnológicas promissoras, microbiologia de solos,
          microrganismos de cavernas, identificação molecular de microrganismos,
          produção de bebidas fermentadas, culturas starter para processos
          fermentativos, prospecção de microrganismos de origem ambiental,
          análise de potencial antimicrobiano, antibiofilme, antitumoral. Devido
          a sua estrutura, esse laboratório tem um extenso histórico de
          contribuição científica e formação de mão de obra qualificada na área
          de biotecnologia microbiana.
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Expertises do grupo:</Strong> Equipe capacitada em atividades
          de rotina microbiológica e experimentos com técnicas de microbiologia
          clássica repassadas de geração em geração pela Drª Rachel aos nossos
          pesquisadores. Algumas de nossas aptidões incluem coleta, isolamento e
          prospecção de atividades biotecnológicas em microrganismos de diversas
          fontes, incluindo alimentos, amostras ambientais, processos
          fermentativos etc. Ademais, a equipe é hábil no processamento de
          amostras, preservação e manutenção microbiana, caracterização
          morfológica e identificação fenotípica (fisiológica) e genotípica
          (abordagens de genética molecular) de microrganismos como leveduras e
          bactérias. Além disso, a equipe atua na prospecção de atividade
          biotecnológica de microrganismos para aplicação em diversos processos
          fermentativos como culturas starter atuando na seleção de
          microrganismos produtores de enzimas como amilase, pectinase,
          invertase, celulase, lipase, esterase. Por outro lado, os
          pesquisadores do LABMI são aptos em analisar resultados e desenvolver
          textos científicos e promover palestras, minicursos e aulas bem
          fundamentados na área de microbiologia e biotecnologia.
        </Text>
      </Box>
    ),
    EquipamentsQtd: 12,
    EquipamentsIntro:
      "Equipamentos do Laboratório de Biotecnologia Microbiana:",
    EquipamentsList: [
      {
        Title:
          "Autoclave Vertical Max Biomedical 75L e Autoclave Vertical Phoenix 18L",
        Desc: "O LABMI conta com duas autoclaves verticais, equipamentos utilizados para esterilização de diversas soluções e materiais através do método sob vapor saturado (temperatura/pressão). A tecnologia utiliza um vaso de pressão fabricado em aço inoxidável, de paredes espessas e fechamento hermético, que possui o objetivo de inativar todas as formas de microrganismos pela ação combinada de temperatura, pressão e umidade. O vapor saturado aquece as soluções e materiais e leva à inativação das células microbianas e demais organismos contaminantes. Todo o processo de autoclavagem dura entre 30 a 90 minutos e acontece em algumas etapas: Aquecimento: geração de vapor com aumento gradativo da pressão até atingir a temperatura de esterilização; Esterilização: o equipamento mantém a temperatura de esterilização pelo tempo determinado; Despressurização: remoção do vapor de forma lenta (sem vácuo).",
        Image: LABMI_FOTO1,
      },

      {
        Title: "7500 Fast Real-Time PCR System - Applied Biosystems",
        Desc: "O 7500 Fast Real-Time PCR System - Applied Biosystems é um robusto equipamento presente na estrutura do LABMI que é utilizado em análises de PCR em tempo real (RT qPCR) que permite a quantificação em tempo real de DNA ou RNA de maneira rápida e precisa podendo ser utilizado em atividades de pesquisa em genética e biotecnologia e até mesmo diagnóstico. Com este equipamento é possível realizar a quantificação absoluta e relativa de ácidos nucleicos (DNA ou RNA), estudos de expressão gênica, genotipagem e discriminação alélica e detecção de patógenos e diagnósticos moleculares, além de ensaios multiplex e análises de microRNA ou RNA, e amplificação de ácidos nucleicos.",
        Image: LABMI_FOTO2,
      },

      {
        Title: "Cabine MiniFlow I",
        Desc: "A cabine MiniFlow I é um equipamento presente no LABMI e utilizado para manipulação de amostras em ambiente controlado, fornecendo uma barreira de proteção ao pesquisador e ao ambiente ao redor, minimizando o risco de contaminação cruzada. Amplamente utilizada no manuseio de agentes biológicos de baixo risco (nível I), essa cabine no LABMI apresenta utilização restrita a experimentos de biologia molecular. Essa medida é relevante pois restringe ambientes de trabalho com biologia molecular e com microrganismos, evitando contaminações cruzadas e garantindo uma maior qualidade dos nossos trabalhos.",
        Image: LABMI_FOTO3,
      },

      {
        Title: "Cabine de Segurança Biológica Pachane",
        Desc: "O LABMI é equipado com um equipamento de fluxo laminar utilizado em microbiologia em processos que exigem condições assépticas como preparação de soluções e meios de cultura, semeaduras, isolamentos e experimentos microbiológicos. De maneira geral, o equipamento apresenta um fluxo horizontal e vertical, sistema de filtragem HEPA, lâmpada UV e branca.",
        Image: LABMI_FOTO4,
      },

      {
        Title: "Centrífuga Refrigerada 9700R Thoth",
        Desc: "O LABMI conta com uma centrífuga refrigerada que é capaz de manter temperaturas de centrifugação na faixa de -20ºC a +40ºC essencial para manter a temperatura de amostras sensíveis a temperatura e garantindo a estabilidade das amostras. Além disso, possui uma alta capacidade de amostras e pode chegar a elevadas velocidades de rotação. Esse modelo também é compatível com diversos rotores, e o LABMI conta com uma ampla gama de rotores disponíveis para utilização. Esse equipamento é utilizado para separar diferentes fases de uma amostra de maneira muito eficiente, essa separação se dá de acordo com suas densidades. O processo ocorre através da rotação rápida do recipiente que contém a mistura, criando forças centrífugas capazes de deslocar as partículas mais pesadas para o fundo do tubo. Essa tecnologia é amplamente utilizada em laboratórios de análises clínicas e de pesquisa. Através dela é possível separar células sanguíneas ou outras substâncias presentes em amostras líquidas, além de purificar ácidos nucleicos e proteínas.",
        Image: LABMI_FOTO5,
      },

      {
        Title:
          "Mastercycler Personal e Mastercycler Nexus Gradient Flexlid Eppendorf",
        Desc: "O Mastercycler Personal é um termociclador compacto presente no LABMI que foi adquirido com o intuito de fornecer um alto desempenho em reações de PCR com eficiência e portabilidade, já que é um equipamento de pequeno porte. É apto a menores volumes de amostras e, portanto, mais econômico e sustentável em termos de custos operacionais. Excelente para utilização em PCR convencional, ensino e treinamento, amplificação e preparo de poucas amostras para sequenciamento. \n\nJá o Mastercycler Nexus Gradient Flexlid é um termociclador avançado, utilizado principalmente para aplicações de Reação em Cadeia da Polimerase (PCR) em pesquisa de genética microbiana, biologia molecular, diagnóstico microbiológico e etc. Esse modelo em específico é reconhecido por possuir precisão térmica, flexibilidade e uso facilitado além de possuir a tecnologia flexlid que torna o equipamento adaptado a diferentes tipos de tubos e microplacas.",
        Image: LABMI_FOTO6,
      },

      {
        Title: "Espectrofotômetro ThermoScientific Evolution 60",
        Desc: "O espectrofotômetro é um instrumento que mede a quantidade de luz absorvida por uma substância, permitindo a determinação da concentração de uma solução e a análise de amostra com alto nível de precisão. Ele oferece flexibilidade em uma aplicação de pesquisa, seja para análise quantitativa, padronização de inóculos microbianos, quantificação de ácido nucléico, varredura de comprimento de onda e uma extensa gama de aplicações analíticas. Esse modelo abrange a faixa de comprimento UV-Visível (190 a 1100 nm) com uma taxa de varredura de até 6000 nm/min com sistema de fonte de luz dual.",
        Image: LABMI_FOTO7,
      },

      {
        Title: "Microscópio Motic B1 Advanced Series",
        Desc: "  O LABMI conta com microscópio Motic B1 Advanced Series que é um microscópio óptico de alta qualidade óptica e facilidade de uso, além de apresentar uma elevada versatilidade e conforto ergonômico. Esse equipamento é amplamente utilizado para visualização de lâminas coradas microbianas e lâminas a fresco de amostras microbianas.",
        Image: LABMI_FOTO8,
      },

      {
        Title: "Electrophoresis Power Supply - Loccus Biotecnologia",
        Desc: "  Fonte de alimentação projetada para realizar eletroforese em gel com energia controlada durante todo o processo podendo ser ajustada numa faixa de 10 a 300V e corrente de 1 a 400 mA permitindo a separação de moléculas como ácidos nucleicos e proteínas em gel de agarose ou poliacrilamida. Aplicado principalmente em eletroforese de ácidos nucleicos, proteínas.",
        Image: LABMI_FOTO9,
      },

      {
        Title: "Banho Seco Dry Block Nova Instruments",
        Desc: "  Equipamento de aquecimento controlado projetado para manter a temperatura de tubos de ensaio, microtubos e outras amostras de maneira precisa com controle de temperatura de +5 ºC até 150 ºC esse controle preciso é essencial para procedimentos sensíveis, capazes de garantir a estabilidade de temperatura ao longo do experimento. Os blocos são adaptados a diferentes tipos de tamanhos de tubos. O equipamento é aplicado em reações enzimáticas, preparação de amostras para PCR e qPCR, hibridização de ácidos nucleicos, imunoensaio e ELISA.",
        Image: LABMI_FOTO10,
      },

      {
        Title: "Centrífuga Pico 17 Hebraeus - Thermo Scientific",
        Desc: "  O LABMI conta com uma centrífuga compacta com alta performance com velocidade de até 17.000 rpm permitindo a separação rápida e eficiente de células, proteínas e ácidos nucleicos. O design é compacto, possui painel digital, sistema de bloqueio de tampa, baixo nível de ruído e compatibilidade com diferentes tubos eadaptadores, sendo compatível com tubos de 1,5 mL e 2,0 mL.",
        Image: LABMI_FOTO11,
      },

      {
        Title: "Estufa Bacteriológica EletroLab",
        Desc: "  A estufa bacteriológica fornece controle de temperatura preciso de 30ºC a 100ºC. Essencial para a incubação de microrganismos como bactérias e fungos que requerem temperaturas específicas de incubação para crescimento. Além desses equipamentos o LABMI conta com incubadoras shaker indicadas para incubação de microrganismos com agitação, sem controle de temperatura, banho-maria, balanças, vórtex, agitadores magnéticos, micro-ondas, geladeiras e freezers.",
        Image: LABMI_FOTO12,
      },

      {
        Title: "Cromatógrafo Shimadzu GC-2010",
        Desc: "  Equipamento robusto presente no LABMI ideal para análise de compostos voláteis e gases com confiabilidade com possibilidade de integração com espectrometria de massas (GC-MS) e infinito leque de aplicações para análise detalhada de voláteis. É compatível e oferece possibilidades com detectores de ionização ode chama (FID), detector de captura de elétrons (ECD) e detector de espectrometria de massas (MS). O controle do equipamento se dá por softwares intuitivos como por exemplo o LabSolutions que permite ajustes na temperatura do forno, fluxo de gás móvel, tempo de injeção, taxa de aumento de temperatura e outros, permitindo análises de dados em tempo real e resultados gráficos como cromatogramas para interpretação.",
        Image: LABMI_FOTO13,
      },
    ],
  }, // . . .

  {
    // [●] microbioprodutos
    Id: "microbioprodutos",
    LabName: "Laboratório de Microbioprodutos",
    LabResponsible: "Dr. João Carlos Teixeira Dias \nProf. Eduardo Gross",
    ResponsibleEmail: "(rachel@uesc.br)/(egross@uesc.br)",
    DescriptionText: { Telefone: "(73) 3680-5151" },
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisadores responsáveis:{"\n"}</Strong>Dr. João Carlos
          Teixeira Dias (jctdias@uesc.br)
          {"\n"}
          Prof. Eduardo Gross (egross@uesc.br)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Sobre o laboratório:</Strong> Como resolver problemas
          ambientais conhecendo e utilizando a vasta diversidade microbiana
          buscando promover o bem-estar da sociedade? Nossa missão no
          Laboratório de Microbioprodutos é desenvolver biotecnologias
          microbianas inovadoras para produção e processos mais sustentáveis,
          pesquisando aspectos básicos e aplicados de fungos, bactérias e
          arqueas. Os microrganismos representam a maior fração numérica da
          matéria viva na Terra e exibem grande diversidade metabólica devido à
          adaptação em uma ampla variedade de habitats. As comunidades
          microbianas fornecem múltiplos e imprescindíveis serviços ambientais à
          humanidade, por exemplo, tornando limpos a água e o solo poluídos,
          estimulando o crescimento e protegendo plantas alimentícias e gerando
          energia renovável. A importância global dos microrganismos está
          alicerçada no papel fundamental de ciclagem da matéria orgânica, e
          fluxo de energia e nutrientes na biosfera. A aplicação biotecnológica
          dos microrganismos contribui para solucionar adversidades e crises
          ambientais da nossa sociedade contemporânea. No Laboratório de
          Microbioprodutos, os pesquisadores realizam ensaios, experimentos e
          análises em uma variedade de microrganismos que auxiliam no
          monitoramento ambiental e biorremediação, no crescimento de cultivos
          alimentares sadios e na catálise de processos industriais bem como de
          conversão da biomassa em biocombustíveis. O Laboratório de
          Microbioprodutos contribui para a proteção ambiental integrativa
          difundindo o conhecimento científico e treinando a próxima geração de
          cientistas, o foco está principalmente no impacto na comunidade
          regional e na transferência de tecnologia. Nosso objetivo é
          desenvolver processos de produção sustentáveis para uma economia
          circular de base biológica. Cole com a gente na missão de desenvolver
          soluções transformadoras para uma sociedade mais sustentável econômica
          e ambientalmente!
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Equipamentos e facilidades:</Strong> Ao longo das últimas duas
          décadas, o Laboratório de Microbioprodutos (anteriormente chamado de
          Laboratório de Monitoramento Ambiental) vêm se estruturando para
          realização de estudos com as mais diversas amostras ambientais na
          prospecção do potencial biotecnológico dos microrganismos. O
          Laboratório de Microbioprodutos é uma instalação equipada para
          pesquisa em microbiologia clássica e ecologia microbiana. Análises de
          produtos microbianos como enzimas, metabólitos secundários e
          antibióticos bem como caracterização fenotípica e molecular (com
          suporte do CBG) que permitem a identificação polifásica de culturas
          puras bacterianas e fúngicas possibilitam entendimento da biologia e
          aplicabilidade de processos.
        </Text>
      </Box>
    ),
    EquipamentsQtd: 5,
    EquipamentsIntro:
      "Equipamentos disponíveis para pesquisadores e usuários do laboratório:",
    EquipamentsList: [
      {
        Title: "ESPECTROFOTÔMETRO DIGITAL TECNAL modelo ESPEC-V-5000",
        Desc: "Utilizado para análise de compostos orgânicos e inorgânicos na faixa de comprimento de onda de 325 a 1000 nm, medindo a quantidade de luz absorvida pela amostra e relacionando a com a concentração do analito. Equipamento essencial em laboratórios, com aplicação para diversas pesquisas.",
        Image: BIOPROD_FOTO1,
      },
      {
        Title: "ESTUFAS BACTERIOLOGICAS",
        Desc: "Estufas de DOB (demanda bioquímica de oxigênio) com temperaturas controladas entre 10 a 45 ºC, utilizada para cultivo de microrganismos.",
        Image: BIOPROD_FOTO2,
      },
      {
        Title: "AUTOCLAVE marca PHOENIX",
        Desc: "Autoclave da com capacidade de 50 l, que realiza esterilização de meios, material de cultivo de microrganismos e soluções.",
        Image: BIOPROD_FOTO3,
      },
      {
        Title: "CABINES DE FLUXO LAMINAR VERTICAL",
        Desc: "Possuem um sistema de purificação de ar que garante que o ar exausto seja limpo e livre de impurezas, através de filtros HEPA, de modo a garantir a segurança para a isolamento e manipulação de amostras biológicas.",
        Image: BIOPROD_FOTO4,
      },
      {
        Title: "SISTEMA DE CROMATOGRAFIA LIQUIDA DE ALTA PERFORMANCE (HPLC)",
        Desc: "O Laboratório é equipado com um sistema HPLC AC 210 da série Prominenc que inclui os módulos: propulsão de solvente por bomba de pistão duplo serial LC-20AT de alta exatidão e precisão de fluxo ajustável de 0,001 a 10,000mL/min; forno de coluna com controle de temperatura por circulação forçada de ar e regulagem entre 10°C abaixo da ambiente até 85°C; detectores  de absorção UV-Vis SPD-20A de alta sensibilidade, com lâmpada de D2 (190 a 700nm); fluorescência RF-20A/RF-20Axs, detector de índice de refração, coletor automático de frações e o controlar de sistema CBM-20A que possibilita a interface de até 8 módulos com o PC via Ethernet. Esse equipamento multiusuário possibilita a execução de pesquisa em diversas áreas sendo imprescindível para a purificação de biomoléculas, análises de hidrocarbonetos e a detecção e quantificação de metabólitos durante os mais diversos processos de fermentação.",
        Image: BIOPROD_FOTO5,
      },
    ],
  }, // . . .

  {
    // [●] labminhosp
    Id: "labminhosp",
    LabName: "Laboratório de Interação Microrganismos-hospedeiro",
    LabResponsible: "Dra. Carla Cristina Romano",
    ResponsibleEmail: "(ccromano@uesc.br)",
    DescriptionText: {},
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisadora responsável:</Strong> Dra. Carla Cristina Romano
          {"\n"}
          (ccromano@uesc.br)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Sobre o laboratório:</Strong> O Laboratório de Interação
          Microrganismos-Hospedeiro (LabMinHosp), coordenado pela Profa. Dra
          Carla Cristina Romano, possui nível de Biossegurança 2 (NB2) e tem
          caráter multiusuário. O laboratório conta com espaço para cultivo
          celular equipado com estufa de CO2, capela de fluxo laminar vertical,
          2 geladeiras, 1 microscópio invertido, 1 microscópio óptico, 1
          lavadora de microplaca, 1 leitora de microplaca, 1 incubadora shaker e
          1 citômetro de fluxo. O laboratório atende a várias demandas de
          pesquisa na área de interação microrganismo - hospedeiro, permeando
          indicadores que vão desde análise da ação biológica de microrganismos
          e seus compostos em modelos celulares, como produção de citocinas,
          ativação celular de macrófagos e linfócitos, expressão de fatores de
          virulência até cultivo e identificação de microrganismos isolados de
          amostras biológicas. As pesquisas desenvolvidas no laboratório
          colaboram com a formação de recursos humanos nos programas de
          pós-graduação em Biologia e Biotecnologia de Microrganismos (PPGBBM),
          Programa de Genética e Biologia Molecular (PPGGBM), Programa de
          Ciência Animal (PPGCA) com resultados principalmente nas áreas de:
          microbiologia médica e imunologia, com foco em análise de parâmetros
          imunológicos da interação microrganismo/célula. Na temática de doenças
          infecciosas, as atividades do laboratório objetivam entender o papel
          de fatores de virulência (principalmente biofilme) de bactérias
          isoladas em quadros de infecção relacionada com assistência à saúde
          (IRAS) com o curso da infecção e realizar abordagens inovadoras que
          possam potencializar o efeito de antimicrobianos e desinfetantes sobre
          esses microrganismos. Dentre as abordagens, está o uso de lactobacilos
          probióticos previamente isolados do cacau e seus sobrenadantes em
          modelos de infecção in vitro por Gardnerella vaginalis, Enterococcus
          faecalis, Staphylococcus aureus, Klebsiella pneumoniae, Escherichia
          coli enterotoxigênica, entre outras. O laboratório atua ainda em
          projetos junto à comunidade a fim de atender demandas de saúde pública
          que envolvem desde isolamento e identificação de microrganismos,
          capacitações e reciclagem de profissionais da área da saúde em
          temáticas de biossegurança e controle de infecção hospitalar até
          educação em saúde com foco em doenças humanas veiculadas pelas mãos.
        </Text>
      </Box>
    ),
    EquipamentsQtd: 3,
    EquipamentsIntro:
      "Equipamentos do Laboratório de Interação Microrganismos-hospedeiro:",
    EquipamentsList: [
      {
        Title: "Cabine de Segurança Biológica VECO Bio Seg 09",
        Desc: "O laboratório é equipado com uma cabine de segurança biológica Classe II Tipo A1 (CSB) – BIOSEG compactas. É um equipamento desenvolvido para manipulação de patógenos e proporciona tripla proteção (produto, operador e ambiente). O fluxo de ar vertical com filtragem HEPA garante área de trabalho ultralimpa classificada como ISO Classe 5 de acordo com a norma NBR ISO 14644-1.",
        Image: HOSP_FOTO1,
      },
      {
        Title: "Citômetro FC500 Beckman Coulter",
        Desc: "O laboratório possui também um citômetro da Beckman Coulter modelo FC500 MPL. Esse equipamento possui 2 lasers que podem excitar a amostra em 488 nm ou 633 nm, que permite a leitura de 5 cores e 7 parâmetros. Trata-se de equipamento multiusuário que permite múltiplas análises em suspensões celulares diversas. ",
        Image: HOSP_FOTO2,
      },
      {
        Title: "Lavadora de microplaca Well Wash",
        Desc: "O laboratório ainda possui uma lavadora de microplaca automatizada que permite lavagens de microplacas de 12 e 8 “wells”, através de ciclos de lavagens programados pelo usuário. Aplica-se para ensaios imunoenzimáticos.",
        Image: HOSP_FOTO3,
      },
    ],
  }, // . . .

  {
    // [●] lapagen
    Id: "lapagen",
    LabName: "Laboratório de Patologia Aplicada e Genética",
    LabResponsible: "Dra. Luciene C. Gastalho Campos Luiz ",
    ResponsibleEmail: "(lcgcluiz@uesc.br)",
    DescriptionText: { Email: "lapagen@uesc.br", Instagram: "@lapa.gen" },
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisadora responsável:</Strong> Dra. Luciene C. Gastalho
          Campos Luiz
          {"\n"}
          (lcgcluiz@uesc.br)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Grande área de atuação:</Strong> Genética Médica de doenças
          Infecciosas e crônico-degenerativas
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Expertise:</Strong> Uso de técnicas moleculares, como PCR,
          qPCR (PCR quantitativo) para detectar marcadores genéticos de agentes
          infecciosos e mutações relacionadas a doenças crônicas e identificação
          de mutações ou polimorfismos genéticos associados à suscetibilidade a
          infecções ou condições crônicas.
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Áreas de atuação:</Strong> Identificação de biomarcadores que
          possam prever suscetibilidade à doença, progressão ou resposta ao
          tratamento, incluindo o estudo das interações entre o hospedeiro e o
          patógeno em doenças infecciosas.
        </Text>
      </Box>
    ),
    EquipamentsQtd: 3,
    EquipamentsIntro:
      "Equipamentos do Laboratório de Interação Microrganismos-hospedeiro:",
    EquipamentsList: [
      {
        Title: "7500 Fast Real-Time PCR System - Applied Biosystems ",
        Desc: "O 7500 Fast Real-Time PCR System, é um equipamento de ponta utilizado para a reação em cadeia da polimerase em tempo real (qPCR), amplamente aplicado em pesquisas biomédicas, diagnósticos moleculares, e estudos genéticos. Este sistema é projetado para realizar análises rápidas e precisas de quantificação de ácidos nucleicos (DNA e RNA), o que o torna uma ferramenta essencial em laboratórios de biologia molecular e genética.\nEntre suas principais características está a capacidade de realizar ciclos de PCR em menos tempo comparado aos sistemas tradicionais. O equipamento utiliza tecnologia de detecção fluorescente para monitorar em tempo real a amplificação do material genético, garantindo alta precisão e sensibilidade nas análises.\nO sistema é compatível com uma ampla gama de reagentes e corantes fluorescentes, permitindo flexibilidade nos experimentos. Ele também possui software intuitivo que facilita a configuração das análises e o processamento dos dados, tornando-o acessível para os usuários.\nAlém disso, o 7500 Fast Real-Time PCR System oferece suporte para múltiplos ensaios simultâneos, o que é ideal para laboratórios que demandam produtividade e eficiência. Com opções de análise quantitativa absoluta e relativa, bem como a possibilidade de realizar detecção de polimorfismos de nucleotídeo único (SNP), este sistema é indicado tanto para pesquisa quanto para diagnósticos clínicos.\nNo contexto de aplicações práticas, o equipamento é amplamente utilizado em estudos de expressão gênica, análises de microRNA, detecção de patógenos, análise de mutações, e até mesmo em testes diagnóstico molecular, dada sua rapidez e confiabilidade na detecção de material genético.\nEssas características fazem do 7500 Fast Real-Time PCR System uma ferramenta de escolha em laboratórios que exigem precisão, velocidade e versatilidade nas análises de qPCR, contribuindo significativamente para avanços nas áreas de pesquisa biomédica e genética molecular.",
        Image: LAPAGEN_FOTO1,
      },
      {
        Title: "Workstation Loccus",
        Desc: "A workstation da Loccus é uma plataforma moderna e integrada projetada especificamente para aplicações em biologia molecular, oferecendo uma infraestrutura otimizada para experimentos que requerem precisão, automação e controle rigoroso das condições experimentais. Esta estação de trabalho é utilizada em laboratórios que realizam análises como PCR em tempo real, sequenciamento de DNA, clonagem gênica, e detecção de patógenos, entre outras técnicas avançadas de biologia molecular. \nEntre suas principais funcionalidades, a workstation da Loccus permite o manuseio seguro e eficiente de amostras e reagentes, minimizando o risco de contaminação e erro humano. A plataforma pode ser equipada com módulos de pipetagem automatizada, controle de temperatura, e sistemas de extração de DNA/RNA, o que proporciona um alto nível de reprodutibilidade nos resultados.",
        Image: LAPAGEN_FOTO2,
      },
      {
        Title: "Cabine biológica LUTECH",
        Desc: "A cabine biológica LUTECH é um equipamento desenvolvido para garantir segurança e proteção durante o manuseio de agentes biológicos e produtos químicos em laboratórios. Este tipo de cabine é essencial para áreas como microbiologia, biologia molecular e bioquímica, onde a manipulação de amostras potencialmente perigosas exige um ambiente controlado e seguro para evitar contaminações tanto para o operador quanto para o ambiente.\nProjetada com tecnologia de filtragem avançada, a cabine LUTECH utiliza filtros HEPA (High-Efficiency Particulate Air) ou ULPA (Ultra Low Penetration Air), que removem partículas e microrganismos do ar, criando uma barreira contra contaminações cruzadas e garantindo que o ar liberado ao ambiente externo seja limpo. Esse sistema de filtragem é ideal para a proteção de amostras, evitando que contaminantes externos interfiram nos resultados experimentais, e também protege o operador contra agentes potencialmente infecciosos",
        Image: LAPAGEN_FOTO3,
      },
      {
        Title: "Filtro de osmose reversa com UV integrada",
        Desc: "O filtro de osmose reversa com integração de luz ultravioleta (UV) é um sistema avançado de purificação de água que combina duas tecnologias eficazes para remover contaminantes e garantir a segurança microbiológica da água. Este tipo de filtro é amplamente utilizado em laboratórios que buscam água de alta pureza.\nA osmose reversa (OR) é um processo de filtração no qual a água passa através de uma membrana semipermeável, bloqueando até 99% das partículas, contaminantes químicos, sais, metais pesados e outros poluentes. A membrana de OR é projetada para permitir a passagem apenas das moléculas de água, retendo contaminantes maiores e resultando em uma água limpa e com baixo teor de sólidos dissolvidos.\nA integração com a luz ultravioleta oferece uma camada adicional de proteção contra contaminantes biológicos, como bactérias, vírus e protozoários. A luz UV atua diretamente no DNA dos microrganismos, impedindo sua reprodução e eliminando seu potencial patogênico. Esse processo é altamente eficaz, rápido e não deixa resíduos químicos na água, ao contrário de outros métodos de desinfecção.",
        Image: LAPAGEN_FOTO4,
      },
      {
        Title: "Centrífuga DTR 16000",
        Desc: "A centrífuga de laboratório modelo DTR 16000 é um equipamento de alta velocidade desenvolvido para separar componentes de uma amostra com eficiência e precisão. Projetada para atender a demandas de alta capacidade e versatilidade em laboratórios de pesquisa, clínicas e hospitais, a DTR 16000 oferece controle preciso de velocidade e tempo de centrifugação, tornando-a ideal para aplicações em biologia molecular, microbiologia, química clínica e outras áreas.\nCom uma capacidade de até 16.000 rpm, esta centrífuga possibilita a sedimentação rápida de partículas e a separação de componentes celulares, plasmáticos ou moleculares em curtos períodos de tempo. O modelo DTR 16000 é equipado com uma interface digital intuitiva, que permite aos usuários configurar e monitorar os parâmetros de operação, como velocidade, tempo e temperatura, garantindo condições ideais para diferentes tipos de amostras.\nAlém disso, a centrífuga DTR 16000 conta com sistemas de segurança avançados, incluindo travamento automático da tampa, proteção contra desequilíbrio de carga, e sistemas de monitoramento de temperatura para evitar o superaquecimento. Essas características aumentam a segurança operacional e minimizam o risco de acidentes durante o processo de centrifugação.\nA DTR 16000 também possui opções de rotores intercambiáveis, permitindo a adaptação para tubos de diferentes tamanhos e capacidades. Essa flexibilidade é particularmente importante em laboratórios que trabalham com amostras variadas, pois permite o ajuste do equipamento para cada tipo específico de análise, garantindo resultados consistentes e confiáveis.",
        Image: LAPAGEN_FOTO5,
      },

      {
        Title: "Centrífuga DTR 16000",
        Desc: "A centrífuga clínica é um equipamento essencial em laboratórios que fazem análises clínicas, utilizado principalmente para separar componentes de fluidos biológicos, como sangue, urina, e outros líquidos corporais. O funcionamento da centrífuga clínica baseia-se na aplicação de força centrífuga para separar os componentes das amostras, permitindo a sedimentação dos elementos celulares, proteínas, ou outras partículas, e facilitando a análise laboratorial de componentes específicos.\nEste tipo de centrífuga é ideal para procedimentos de separação de plasma e soro, preparação de amostras de hematócrito, e a análise de sedimentos urinários. A centrífuga clínica opera em faixas de velocidade moderada (entre 1.000 e 6.000 rpm) e conta com rotores específicos para tubos de diferentes volumes, o que proporciona flexibilidade",
        Image: LAPAGEN_FOTO6,
      },
      {
        Title: "Conjunto para eletroforese",
        Desc: "O conjunto de eletroforese é essencial em laboratórios de biologia molecular e genética, pois permite a separação de moléculas como DNA, RNA e proteínas com base em seu tamanho e carga. Esse conjunto geralmente inclui três componentes principais: a fonte de alimentação, a cuba de eletroforese e o transiluminador UV.\nFonte de Alimentação: A fonte de alimentação fornece a voltagem necessária para a corrida eletroforética. Ela permite o controle da tensão e da corrente aplicadas ao sistema, o que é fundamental para uma separação eficiente e precisa das amostras. A fonte gera um campo elétrico que impulsiona as moléculas através do gel de agarose ou poliacrilamida dentro da cuba.\nCuba de Eletroforese: A cuba é onde ocorre a separação eletroforética. Ela é preenchida com uma solução tampão que mantém o pH estável durante a corrida, essencial para a integridade das amostras. No gel dentro da cuba, as moléculas migram de acordo com seu tamanho, permitindo a visualização e análise posterior. O gel possui poços onde as amostras são inseridas, e as moléculas carregadas negativamente, como o DNA, migram em direção ao polo positivo.\nTransiluminador UV: Após a corrida, o transiluminador UV é utilizado para visualizar as moléculas fluorescentes no gel. Geralmente, as amostras são coradas com agentes intercalantes, como brometo de etídio ou SYBR Green, que emitem fluorescência sob luz ultravioleta. O transiluminador destaca as bandas de DNA ou RNA, permitindo a captura de imagens e a análise semi-quantitativa e qualitativa das amostras.",
        Image: LAPAGEN_FOTO7,
      },

      {
        Title: "Ultrafreezer",
        Desc: "O ultrafreezer é um equipamento essencial para o armazenamento seguro e prolongado de amostras biológicas em temperaturas extremamente baixas, geralmente entre -40°C e -86°C. Comumente usado em laboratórios de pesquisa, biologia molecular, e áreas clínicas, o ultrafreezer é projetado para manter a integridade de materiais sensíveis, como amostras de DNA, RNA, proteínas, tecidos, e células, preservando sua viabilidade e estrutura ao longo do tempo.",
        Image: LAPAGEN_FOTO8,
      },

      {
        Title: "Termociclador",
        Desc: "O SimpliAmp Thermal Cycler, da Applied Biosystems, é um termociclador moderno e versátil, utilizado para amplificação de DNA e RNA por meio da técnica de PCR (Reação em Cadeia da Polimerase). Esse equipamento é essencial para laboratórios de biologia molecular, genética e diagnósticos, oferecendo uma solução prática e eficiente para uma ampla gama de aplicações, incluindo clonagem, detecção de patógenos e análise de expressão genética.\nCom um design compacto e interface intuitiva, o SimpliAmp possui um sistema de controle térmico de alta precisão que permite uma rápida transição entre as temperaturas, garantindo resultados consistentes e repetíveis. Ele oferece uma capacidade de 96 poços, sendo compatível com tubos padrão e placas de PCR, o que facilita a integração com outros instrumentos de laboratório. O equipamento também possui conectividade com a nuvem, permitindo monitoramento e controle remoto, o que agiliza o fluxo de trabalho e facilita o gerenciamento das reações.\nOutro destaque do SimpliAmp é sua tecnologia de rampa de temperatura ajustável, que permite otimizar ciclos de amplificação para diferentes tipos de amostras e protocolos específicos. Essa flexibilidade é essencial para pesquisas que demandam precisão e adaptação a diferentes protocolos.",
        Image: LAPAGEN_FOTO9,
      },

      {
        Title: "Espectrofotômetro",
        Desc: "O espectrofotômetro é um equipamento de laboratório usado para medir a quantidade de luz absorvida por uma amostra em diferentes comprimentos de onda. Comumente utilizado em áreas como bioquímica, química e biologia molecular, o espectrofotômetro permite a análise precisa de substâncias, como proteínas, ácidos nucleicos e enzimas, tornando-se fundamental para pesquisas e diagnósticos. Ele é essencial para determinar a concentração de DNA e RNA em amostras, uma etapa importante para estudos genéticos e de biologia molecular.\nO princípio de funcionamento do espectrofotômetro baseia-se na capacidade das moléculas de absorver luz em comprimentos de onda específicos. A luz passa através de um monocromador, que a separa em diferentes comprimentos de onda. A amostra, colocada em uma cubeta, absorve parte dessa luz, e o equipamento mede a quantidade de luz transmitida. Com essa informação, é possível determinar a concentração da substância.",
        Image: LAPAGEN_FOTO10,
      },
    ],
  }, // . . .

  {
    // [●] lemic
    Id: "lemic",
    LabName: "Laboratório do Eixo Microbiota-Intestino-Cérebro",
    LabResponsible: "Dr. Eduardo Ary Villela Marinho",
    ResponsibleEmail: "(eavmarinho@uesc.br)",
    DescriptionText: {},
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisadora responsável:</Strong> Dra. Carla Cristina Romano
          {"\n"}
          (ccromano@uesc.br)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Sobre o laboratório:</Strong> O LEMIC - Laboratório do Eixo
          Microbiota-Intestino-Cérebro é um ambiente em que são realizados
          experimentos e ensaios sobre o comportamento de camundongos
          submetidos, por exemplo, a administração de bactérias probióticas. O
          laboratório é coordenado pelo Prof. Dr. Eduardo Ary Villela Marinho e
          que está vinculado ao Departamento de Ciências da Saúde e aos PPGs em
          Ciências da Saúde e em Biologia e Biotecnologia de Microrganismos.
          Discentes de graduação, mestrado e doutorado atuam no laboratório
          realizando experimentos de acompanhamento diário, devido às pesquisas
          com modelos de administração crônica de fármacos. Nos últimos 8 anos
          foram publicados 23 artigos, em revistas de boa qualidade,
          relacionados com os trabalhos desenvolvidos por docentes e discentes.
        </Text>
      </Box>
    ),
    EquipamentsQtd: 1,
    EquipamentsIntro: "",
    EquipamentsList: [
      {
        Title: "",
        Desc: "O laboratório conta com microscópio fotônico, balanças analíticas e outros equipamentos de pequeno porte necessários ao desenvolvimento das pesquisas. Um computador de alta performance (adquirido com verba FAPESB) com software Anymaze, para análise de imagens, também adquirido no mesmo projeto. \nExiste ainda no laboratório um aparelho de DVR que está conectado através de rede com o computador acima descrito e com quatro câmeras de alta definição que ficam em outras 4 salas individuais onde são feitos os experimentos comportamentais.",
        Image: LEMIC_FOTO1,
      },
    ],
  }, // . . .

  {
    // [●] labcet
    Id: "labcet",
    LabName: "Laboratório de Biotecnologia Celular e Tecidual",
    LabResponsible: "Dra. Adriana Bozzi",
    ResponsibleEmail: "(abozzi@uesc.br)",
    DescriptionText: {},
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisadora responsável:</Strong> Dra. Adriana Bozzi
          {"\n"}
          (abozzi@uesc.br)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Áreas de atuação:</Strong> morfologia, imunologia,
          microbiologia e biotecnologia.
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Sobre o laboratório:</Strong> O Laboratório de Biotecnologia
          Celular e Tecidual (LABCET) é um laboratório multiusuários liderado e
          coordenado pela Prof.ª Drª Adriana Bozzi, vinculado ao Centro de
          Inovação em Biologia e Biotecnologia Microbiana (CIBBiM), com
          discentes de graduação e de Pós-Graduação atuando. O LABCET está
          engajado com o estudo aprofundado da biologia celular e tecidual
          animal, com o objetivo de desenvolver soluções biotecnológicas
          inovadoras para a recuperação morfofisiológica de tecidos e órgãos
          afetados por desordens de diferentes origens. Através de abordagens
          multidisciplinares, o LABCET busca compreender os mecanismos celulares
          fundamentais envolvidos na regeneração e reparação de áreas orgânicas
          danificadas, com foco em promover a restauração funcional e
          estrutural. <br />
          Nossa missão é integrar conhecimentos avançados de biotecnologia,
          biologia celular, engenharia tecidual e medicina regenerativa, visando
          criar estratégias terapêuticas eficazes que possam ser aplicadas em
          diversas condições patológicas. As linhas de pesquisa do laboratório
          incluem, mas não se limitam a biotecnologia de células-tronco,
          modelamento do sistema imune, engenharia tecidual, nanopartículas e
          controle microbiológico, com ênfase na recuperação de tecidos
          lesionados por trauma, doenças degenerativas, processos inflamatórios
          ou distúrbios metabólicos. \nAlém de contribuir para o avanço da
          ciência, o LABCET se compromete a traduzir seus resultados em
          aplicações práticas, desenvolvendo novas tecnologias que possam ser
          utilizadas no tratamento de doenças e lesões em modelos pré-clínicos e
          clínicos. O laboratório trabalha em colaboração com instituições de
          ensino e pesquisa nacionais e internacionais, com o intuito de
          fomentar a inovação e o desenvolvimento de novas terapias que promovam
          a regeneração e a reabilitação dos tecidos afetados, melhorando a
          qualidade de vida dos indivíduos. \nAcreditamos que, por meio da
          pesquisa e do desenvolvimento de biotecnologias de ponta, o LABCET tem
          o potencial de fazer contribuições significativas no campo da
          biomedicina e da biotecnologia aplicada, estabelecendo novas
          fronteiras no tratamento e recuperação de desordens morfofisiológicas.
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Sobre a Equipe:</Strong> A equipe do LABCET é composta por
          estudantes de iniciação científica, mestrado e doutorado, professores
          pesquisadores do Departamento de Ciências Biológicas (DCB) e Ciências
          Agrárias (DCA) da UESC, além de colaboradores externos pertencentes ao
          Instituto René Rachou (IRR) da FIOCRUZ/Minas, Universidade Federal de
          Minas Gerais (UFMG), Universidade Federal de Juiz de Fora (UFJF),
          Stanford University, CA/USA e California Institute for Medical
          Research, CA/USA. <br /> Nossa equipe é capacitada em atividades de
          cultura celular, imunologia celular e molecular, modelos experimentais
          in vitro e in vivo, com expertise no desenvolvimento de técnicas de
          microscopia, imunológicas, colorações histológicas, citometria de
          fluxo, diferenciação celular, ensaios de citotoxicidade, expansão e
          caracterização de células-tronco mesenquimais, reprogramação celular,
          modelamento de doença in vitro, dentre outras. Os pesquisadores do
          LABCET são aptos em analisar resultados e desenvolver textos
          científicos e promover palestras, minicursos e aulas bem fundamentadas
          na área de morfologia e imunologia.
        </Text>
      </Box>
    ),
    EquipamentsQtd: 0,
    EquipamentsIntro: "",
    EquipamentsList: [],
  }, // . . .

  {
    // [●] ldvex
    Id: "ldvex",
    LabName:
      "Laboratório de Desenvolvimento de Vacinas Experimentais e Patogênese Microbiana",
    LabResponsible: "Dr Wilson Barros Luiz",
    ResponsibleEmail: "(wbluiz@uesc.br)",
    DescriptionText: { Instagram: "@lapa.gen", Email: "wbluiz@uesc.br" },
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Pesquisador responsável:</Strong> Dr Wilson Barros Luiz
          {"\n"}
          (abozzi@uesc.br)
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Grande área de atuação:</Strong> Microbiologia de
          microrganismos: genética de microrganismos e desenvolvimento de
          imunobiológicos
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Expertise:</Strong> Uso de técnicas moleculares e sorológicas,
          como PCR, qPCR (PCR quantitativo), ELISA, Westernblot, produção e
          purificação de antígenos, para detecção direta e indiretamente agentes
          infecciosos.
        </Text>

        <Text as="div" highContrast className="text-sm sm:text-base">
          <Strong>Áreas de atuação:</Strong>Realiza pesquisas relacionadas ao
          desenvolvimento de vacinas experimentais, produção de imunobiológicos,
          desenvolvimento de novas metodologias moleculares e sorológicas
          relacionadas ao diagnóstico de doenças infecciosas e crônicas,
          acompanhamento epidemiológico e de surtos de doenças emergentes, e a
          pesquisa de soluções inovadoras com baixo custo para a triagem de
          alterações do estado de saúde por inteligência artificial. Possuindo
          colaborações com pesquisadores da Universidade Federal da Bahia,
          Universidade Federal do Oeste da Bahia, Universidade Federal do
          Espirito Santo, Universidade Federal de Sergipe, Universidade Federal
          de Minas Gerais, Universidade de São Paulo, Instituo Butantan, além de
          parcerias com empresas e startups nacionais e cooperações
          internacionais.
        </Text>
      </Box>
    ),
    EquipamentsQtd: 10,
    EquipamentsIntro: "Equipamentos:",
    EquipamentsList: [

      {
        Title: "Cabines de contenção biológica LUTECH, classe II B2",
        Desc: "A cabine biológica LUTECH é um equipamento desenvolvido para garantir segurança e proteção durante o manuseio de agentes biológicos e produtos químicos em laboratórios. Este tipo de cabine é essencial para áreas como microbiologia, biologia molecular e bioquímica, onde a manipulação de amostras potencialmente perigosas exige um ambiente controlado e seguro para evitar contaminações tanto para o operador quanto para o ambiente. \n Projetada com tecnologia de filtragem avançada, a cabine LUTECH utiliza filtros HEPA (High-Efficiency Particulate Air) ou ULPA (Ultra Low Penetration Air), que removem partículas e microrganismos do ar, criando uma barreira contra contaminações cruzadas e garantindo que o ar liberado ao ambiente externo seja limpo. Esse sistema de filtragem é ideal para a proteção de amostras, evitando que contaminantes externos interfiram nos resultados experimentais, e também protege o operador contra agentes potencialmente infecciosos ",
        Image: LDVEX_FOTO1,
      },

      {
        Title:"",
        Desc: "",
        Image: LDVEX_FOTO2,
      },


      {
        Title: "Filtro de osmose reversa",
        Desc: "O filtro de osmose reversa com integração de luz ultravioleta (UV) é um sistema avançado de purificação de água que combina duas tecnologias eficazes para remover contaminantes e garantir a segurança microbiológica da água. Este tipo de filtro é amplamente utilizado em laboratórios que buscam água de alta pureza. \n A osmose reversa (OR) é um processo de filtração no qual a água passa através de uma membrana semipermeável, bloqueando até 99% das partículas, contaminantes químicos, sais, metais pesados e outros poluentes. A membrana de OR é projetada para permitir a passagem apenas das moléculas de água, retendo contaminantes maiores e resultando em uma água limpa e com baixo teor de sólidos dissolvidos. \n A integração com a luz ultravioleta oferece uma camada adicional de proteção contra contaminantes biológicos, como bactérias, vírus e protozoários. A luz UV atua diretamente no DNA dos microrganismos, impedindo sua reprodução e eliminando seu potencial patogênico. Esse processo é altamente eficaz, rápido e não deixa resíduos químicos na água, ao contrário de outros métodos de desinfecção.",
        Image: LDVEX_FOTO3,
      },
      

      {
        Title: "Conjunto para eletroforese de proteínas",
        Desc: "O conjunto de eletroforese é essencial em laboratórios de biologia molecular e genética, pois permite a separação de moléculas de proteínas com base em seu tamanho e carga. Esse conjunto geralmente inclui três componentes principais: a fonte de alimentação, a cuba de eletroforese e o transiluminador UV. \n Fonte de Alimentação: A fonte de alimentação fornece a voltagem necessária para a corrida eletroforética. Ela permite o controle da tensão e da corrente aplicadas ao sistema, o que é fundamental para uma separação eficiente e precisa das amostras. A fonte gera um campo elétrico que impulsiona as moléculas através do gel de agarose ou poliacrilamida dentro da cuba. \n Cuba de Eletroforese: A cuba é onde ocorre a separação eletroforética. Ela é preenchida com uma solução tampão que mantém o pH estável durante a corrida, essencial para a integridade das amostras. No gel dentro da cuba, as moléculas migram de acordo com seu tamanho, permitindo a visualização e análise posterior. O gel possui poços onde as amostras são inseridas, e as moléculas carregadas negativamente, como o DNA, migram em direção ao polo positivo.",
        Image: LDVEX_FOTO4,
      },
      

      {
        Title: "Estufa De Esterilização E Secagem Digital Microprocessada, Até 300ºc, Circulação E Renovação Forçada De Ar",
        Desc: "A Estufa Digital Microprocessada de Esterilização e Secagem com Circulação e Renovação de Ar até 300°C Vulcan possui uma tecnologia embarcada de última geração que garante um aquecimento rápido e preciso da câmara. \n Primeiramente, o microprocessador de última geração com sistema PID dá ao usuário acesso à funções de seleção de temperatura, seleção de tempo, temporizador e parada automática ao fim de cada processo. \n Junto a isso, seu display LCD de 5.3, permite uma perfeita visualização dos parâmetros de aquecimento, tempo e configurações do equipamento. Além disso, possui sistema de abertura e fechamento de aletas na lateral que permite a renovação e circulação do ar no interior do equipamento. \n A Estufa Digital de Esterilização e Secagem com Circulação e Renovação de Ar até 300°C possui um sistema de segurança digital, isso significa que, opcionalmente, pode ser solicitado sistema duplo de segurança com termostato mecânico. Assim sendo, limita a temperatura máxima estabelecida pelo usuário para evitar superaquecimento. E também, um alarme sonoro indicará ao usuário que o equipamento atingiu a temperatura desejada e quando o ciclo programado chegar ao fim.",
        Image: LDVEX_FOTO5,
      },
      
      {
        Title: "Incubadora BOD",
        Desc: "Estufa Incubadora para B.O.D. (demanda bioquímica de Oxigênio) e outras aplicações laboratoriais onde se requer ambiente em baixas e médias temperaturas. Montadas em gabinetes tipo geladeira, construídas em chapa de aço com tratamento anticorrosivo e fino acabamento em pintura eletrostática a pó. Internamente revestida em material sintético, que evita corrosão e facilita a limpeza. Isolação térmica em poliuretano expandido. Porta com vedação magnética. Temperatura de trabalho de -10 a 60ºC, com aferição especial em 37º e 56ºC. (maior faixa de temperatura sob consulta). Resistência tubular blindada em inox. Convecção de ar forçado quente/frio no sentido vertical, através de ventilador, proporcionando maior homogeneidade de temperatura no interior da câmara. Controle de temperatura PID microprocessado, com indicação digital. Sensor tipo PT-100 com encapsulamento em inox. Sistema de proteção de sobreaquecimento através de termostato hidráulico com ajuste de fábrica. Painel frontal em policarbonato, com comandos e lâmpadas indicadoras de função.",
        Image: LDVEX_FOTO6,
      },
      

      {
        Title: "Incubadora Shaker de Laboratório Refrigerada com movimento orbital",
        Desc: "Gabinete externo: aço carbono 1020, com tratamento anticorrosivo e pintura eletrostática em epóxi texturizado. Gabinete interno: acabamento interno construída em aço inox. Porta externa: em aço 1020 com pintura eletrostática, isolação térmica e vedação em perfil magnético. Condições Ambientais: temperatura ambiente entre 5°C a 40°C / Umidade relativa 80%, sem condensação. Controlador de Temperatura: digital microprocessado com sistema PID e auto-tuning, display com resolução de 0,1°C. Faixa de temperatura de trabalho: ambiente - 18°C até 70°C, com temperatura mínima de setpoint +4°C. Variação de temperatura: ± 0,2°C. Sensor de temperatura: PT 100. Display Digital: painel de controle eletrônico– Touch Screen, Colorido.Permite ao usuário a perfeita visualização de todos os parâmetros. Operação fácil, prática e segura. Timer: temporizador Digital 99hrs: 59min: 59seg. ou continuo, possibilitando programar o tempo de agitação. Movimento: orbital de 20 até 300 rpm",
        Image: LDVEX_FOTO7,
      },

      {
        Title: "Termociclador Com Gradiente",
        Desc: "O Termociclador com Gradiente Kasvi é utilizado para executar a técnica de Reação em Cadeia da Polimerase nas áreas de pesquisa, medicina, indústria de alimentos, ciência forense, biotecnologia, ciência ambiental, microbiologia, diagnóstico clínico, epidemiologia, genética, chips genéticos, testes genéticos, clonagem de genes, entre outras. \n O Termociclador com Gradiente Kasvi é equipado com sistema Peltier de alta performance, vida útil longa, com controle de circuitos independentes para diferentes segmentos de aquecimento. Possui controle preciso de temperatura, proteção de desligamento, gradiente de temperatura e conta com software interno de fácil utilização (interface user-friendly).",
        Image: LDVEX_FOTO8,
      },
      
      {
        Title: "Espectrofotômetro",
        Desc: "O espectrofotômetro é um equipamento de laboratório usado para medir a quantidade de luz absorvida por uma amostra em diferentes comprimentos de onda. Comumentente utilizado em áreas como bioquímica, química e biologia molecular, o espectrofotômetro permite a análise precisa de substâncias, como proteínas, ácidos nucleicos e enzimas, tornando-se fundamental para pesquisas e diagnósticos. Ele é essencial para determinar a concentração de DNA e RNA em amostras, uma etapa importante para estudos genéticos e de biologia molecular. \n O princípio de funcionamento do espectrofotômetro baseia-se na capacidade das moléculas de absorver luz em comprimentos de onda específicos. A luz passa através de um monocromador, que a separa em diferentes comprimentos de onda. A amostra, colocada em uma cubeta, absorve parte dessa luz, e o equipamento mede a quantidade de luz transmitida. Com essa informação, é possível determinar a concentração da substância.",
        Image: LDVEX_FOTO9,
      },
      
      {
        Title: "Autoclave vertical",
        Desc: "A Autoclave Vertical CS é utilizada para esterilização de materiais e utensílios diversos em laboratórios clínicos, bioquímicos, químicos, indústria farmacêutica e laboratórios de controle de qualidade. Autoclave Vertical com registro na ANVISA. \n O processo de esterilização da Autoclave Vertical é feito através do vapor de água saturado, onde certa quantidade de água é aquecida através de um conjunto de resistências elétricas, proporcionando assim a geração de vapor necessária. \n O Equipamento é equipado com manômetro de duas escalas, sendo uma 2 escala para indicação da pressão (kgf/cm ), e a outra correspondente para temperatura (ºC). \n Compõem o equipamento, válvula controladora, registro para liberação da pressão e ar interno, torneira de dreno e cesto interno para materiais. Possui painel de controle, situado na parte frontal do aparelho, possuí lâmpada piloto e chave comutadora de 3 (três) posições até 150 litros, e 2 (dois) posições de 225 a 300 litros, além das instruções de uso.",
        Image: LDVEX_FOTO10,
      }
      
    ],
  }, // . . .
]; // [✪] labsList ✦────────➤
