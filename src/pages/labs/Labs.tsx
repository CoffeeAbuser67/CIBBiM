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
  // . . .
  {
    // [●] alimentos_bebidas
    Id: "alimentos_bebidas",
    LabName: "Laboratório de Alimentos e Bebidas Fermentadas",
    LabResponsible: "Dra. Ana Paula Trovatti Uetanabaro",
    ResponsibleEmail: "(aptuetanabaro@gmail.com)",
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text size="2" highContrast className=" whitespace-pre-wrap">
          Campus Soane Nazaré de Andrade{"\n"}
          Rodovia Jorge Amado, km 16, Bairro Salobrinho{"\n"}
          CEP 45662-900. Ilhéus-Bahia{"\n"}
        </Text>

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
    // [●] enzimologia
    Id: "enzimologia",
    LabName: "Laboratório de Enzimologia Microbiana",
    LabResponsible: "Dra. Andréa Miura Costa",
    ResponsibleEmail: "(amcosta@uesc.br)",
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text size="2" highContrast className=" whitespace-pre-wrap">
          Campus Soane Nazaré de Andrade Rodovia Jorge Amado, km 16, Bairro
          Salobrinho{"\n"}
          CEP 45662-900. Ilhéus-Bahia{"\n"}
          <Strong>Email:</Strong> labmicroagro@gmail.com {"\n"}
          <Strong>Telefone:</Strong> (73) 3680-5190/5275{"\n"}
          <Strong>Instagram:</Strong>: @labma.uesc{"\n"}
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Pesquisadora responsável:</Strong> Dra. Andréa Miura Costa
          {"\n"}
          (amcosta@uesc.br)
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Área de atuação:</Strong> Biotecnologia microbiana.
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Expertise:</Strong> Enzimas de origem microbiana e aplicações
          em alimentos, bebidas, controle biológico, produção de
          biocombustíveis, de biopolímeros, tratamento de efluentes
        </Text>

        <Box className="flex flex-col gap-2">
          <Strong> Expertises do grupo: </Strong>
          <Text>
            ◆ Utilização de resíduos agroindustriais para produção de enzimas de
            interesse industrialveis.
          </Text>

          <Text>
            ◆ Prospecção de enzimas microbianas de interesse biotecnológicorias.
          </Text>

          <Text>
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
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text size="2" highContrast className=" whitespace-pre-wrap">
          Campus Soane Nazaré de Andrade{"\n"}
          Rodovia Jorge Amado, km 16, Bairro Salobrinho{"\n"}
          CEP 45662-900. Ilhéus-Bahia{"\n"}
        </Text>

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
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text size="2" highContrast className=" whitespace-pre-wrap">
          Campus Soane Nazaré de Andrade{"\n"}
          Rodovia Jorge Amado, km 16, Bairro Salobrinho{"\n"}
          CEP 45662-900. Ilhéus-Bahia{"\n"}
          <Strong>Email:</Strong> labmiuesc@gmail.com {"\n"}
          <Strong>Telefone:</Strong> (73) 3680 5435{"\n"}
          <Strong>Instagram:</Strong> @labmiuesc{"\n"}
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Pesquisadora responsável:</Strong> Dra. Rachel Passos Rezende
          {"\n"}
          (rachel@uesc.br)
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Áreas de atuação:</Strong> biotecnologia microbiana, genética
          de microrganismos, microbiologia clássica.
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
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

        <Text size="3" highContrast className=" whitespace-pre-wrap">
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
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text size="2" highContrast className=" whitespace-pre-wrap">
          Campus Soane Nazaré de Andrade{"\n"}
          Rodovia Jorge Amado, km 16, Bairro Salobrinho{"\n"}
          CEP 45662-900. Ilhéus-Bahia{"\n"}
          <Strong>Telefone:</Strong> (73) 3680-5151{"\n"}
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Pesquisadores responsáveis:{"\n"}</Strong>Dr. João Carlos
          Teixeira Dias (jctdias@uesc.br)
          {"\n"}
          Prof. Eduardo Gross (egross@uesc.br)
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
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

        <Text size="3" highContrast className=" whitespace-pre-wrap">
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
    DescriptionComponent: () => (
      <Box className="flex flex-col gap-3">
        <Text size="2" highContrast className=" whitespace-pre-wrap">
          Campus Soane Nazaré de Andrade{"\n"}
          Rodovia Jorge Amado, km 16, Bairro Salobrinho{"\n"}
          CEP 45662-900. Ilhéus-Bahia{"\n"}
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
          <Strong>Pesquisadora responsável:</Strong> Dra. Carla Cristina Romano
          {"\n"}
          (ccromano@uesc.br)
        </Text>

        <Text size="3" highContrast className=" whitespace-pre-wrap">
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
]; // [✪] labsList ✦────────➤
