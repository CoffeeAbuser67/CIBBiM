// HERE ComoUtilizar

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useWindowResize } from "../hooks/useWindowResize";

import { Box, Text, Heading, Strong } from "@radix-ui/themes";
import classNames from "classnames";
import { Card_Menu, Dropdown_Menu } from "../components/menu/Menu";
import CIBBiM_BG from "../assets/bg_cropped2.svg";

// ★ ComoUtilizar ✦────────────➤
const ComoUtilizar = () => {

  // ── ✦─DOM─➤

  return (
    <>
      <Helmet title="Como Utilizar Laboratórios e Equipamentos CIBBiM" />


      <Box id="comoutilizar_canvas" className="relative w-full h-screen mt-3">
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

          <Box className="flex flex-col gap-5 mb-10">
            <Heading color="blue" size="7" highContrast className="mt-10">
              Como utilizar
            </Heading>
            <Text as="div" highContrast className="text-sm md:text-base">
              Para solicitação de serviços e, ou uso dos laboratórios e
              equipamentos do CIBBiM será necessário um cadastro prévio do
              pesquisador ou representante da empresa, contendo informações
              sobre o projeto ou ensaio a ser executado, que estará sujeito à
              análise e aprovação pelo comitê gestor. Para a entrada nas
              dependências do CIBBiM é necessário que o usuário tenha curso
              sobre Biossegurança, uma vez que o Centro tem nível 2 de
              biossegurança. <br />
              <br />
              O pesquisador interessado em usufruir as facilidades do Centro
              deverá preencher o formulário de cadastramento, que pode ser
              obtido no site do CIBBiM, fazendo o download do Cadastro do
              Pesquisador na aba Formulários, e enviar eletronicamente para o
              e-mail: cibbim@uesc.br. O cadastro será avaliado pelo comitê
              gestor do Centro e a aprovação ou não, bem como eventuais
              modificações necessárias serão comunicadas ao candidato por
              e-mail.
              <br />
              <br />
              Os custos relativos ao processamento das amostras (inclusive
              material de consumo) deverão estar previstos no projeto (cadastro)
              do pesquisador ou da empresa, isentando-se o CIBBiM da
              responsabilidade de fornecer quaisquer reagentes ou consumíveis.
              <br />
              <br /> No caso de instituições privadas, se necessário, será
              cobrada uma taxa relativa ao custo operacional do equipamento, a
              qual será calculada de acordo com as atividades a serem
              realizadas, com o número de amostras e com o total de horas de uso
              dos equipamentos. Valores referentes a estes custos serão
              fornecidos pela coordenação do CIBBiM, após a análise do projeto
              apresentado.
            </Text>
            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>Horário de funcionamento do Centro:</Strong> Segunda à
              sexta-feira das 7:30 às 12:00 h e das 13:30 às 16:00 h.
            </Text>
            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>Processamento das amostras:</Strong> Todos os dias úteis.
            </Text>
            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>Horário de utilização dos equipamentos:</Strong> Os
              horários de utilização dos equipamentos multiusuários devem ser
              agendados com os técnicos responsáveis dos respectivos
              laboratórios.
              <br />O usuário deverá consultar o calendário de uso do
              equipamento, para escolher dentro da disponibilidade os dias e
              horários de sua conveniência. Em caso de cancelamento de horário,
              informar com 24 h de antecedência, para que o mesmo possa ser
              preenchido por outro usuário.
            </Text>
            <Text as="div" highContrast className="text-sm md:text-base">
              Há equipamentos que devido a características técnicas e
              complexidade são operados exclusivamente por técnicos ou
              professores do CIBBiM.
              <br />
              Os pesquisadores que utilizarem os equipamentos, deverão
              referir-se à Instituição (CIBBiM - UESC) no momento da publicação
              e, ou divulgação de seus resultados. Solicita-se ainda que, os
              eventuais trabalhos publicados que utilizaram a infraestrutura do
              Centro enviem uma cópia do artigo ao CIBBiM.
            </Text>

            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>IMPORTANTE!</Strong> Para o processamento das amostras é
              mandatório informar eventuais cuidados especiais de manuseio, ou
              se elas apresentam elementos nocivos que podem representar RISCO À
              SAÚDE OU SEGURANÇA do operador.
            </Text>
          </Box>
        </Box>

        <div
          // HERE CIBBiM_BG
          id="CIBBiM_BG"
          className="relative w-full h-[500px] bg-cover bg-center rotate-180 -mt-[470px] z-0"
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
}; // ★ ComoUtilizar ✦────────────➤

export default ComoUtilizar;
