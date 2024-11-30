// HERE Publicações

import { Helmet } from "react-helmet-async";
import { Box, Heading, Link, Text } from "@radix-ui/themes";
import classNames from "classnames";
import { Card_Menu, Dropdown_Menu } from "../components/menu/Menu";
import CIBBiM_BG from "../assets/bg_cropped2.svg";

// [●] publiItem
interface publiItem {
  text: string;
  link: string;
}

//  [✪] publiList
const publiList: publiItem[] = [
  {
    text: "Souza, M. S., Farias, J. P., Andreata‐Santos, R., Silva, M. P., Brito, R. D. D. S., Duarte Barbosa da Silva, M., ... & Amorim, J. H. (2024). Neutralizing antibody response after immunization with a COVID‐19 bivalent vaccine: Insights to the future. Journal of Medical Virology, 96(2), e29416. ",
    link: "https://doi.org/10.1002/jmv.29416",
  },

  {
    text: "de Miranda, F. S., Claudio, L. M. A., de Almeida, D. S. M., Nunes, J. B., Barauna, V. G., Luiz, W. B., ... & Campos, L. C. G. (2024). Cell-Free Nuclear and Mitochondrial DNA as Potential Biomarkers for Assessing Sepsis Severity. Biomedicines, 12(5), 933. ",
    link: "https://doi.org/10.3390/biomedicines12050933",
  },

  {
    text: "Rouws, L., Barauna, A., Beukes, C., Rouws, J. R., de Faria, S. M., Gross, E., ... & James, E. K. (2024). Soil characteristics drive contrasting patterns of association between symbiotic rhizobia of endemic and widespread Mimosa species in Brazil. Applied Soil Ecology, 204, 105741. ",
    link: "https://doi.org/10.1016/j.apsoil.2024.105741",
  },

  {
    text: "de Carvalho, L. R., Santos, D. R., dos Santos Lima, C. S., Peralta, R. M., de Souza, C. G. M., Uetanabaro, A. P. T., ... & da Costa, A. M. (2024). Stable Polyphenol Oxidase Produced by Pleurotus pulmonarius from Fermented Peach-Palm and Cocoa Wastes. BioEnergy Research, 17(1), 198-207.",
    link: "https://doi.org/10.1007/s12155-023-10628-0",
  },

  {
    text: "de Carvalho Cardoso, E. S., Martins, N. Q., Azevedo, R. A., Palmeira, L. S., Quintanilha-Peixoto, G., Andrade, B., ... & da Costa, A. M. (2024). Production and application of inulinase by new isolates of Aspergillus welwitschiae from fermented peach-palm waste for the production of fructooligosaccharides. Food Chemistry, 41978. ",
    link: "https://doi.org/10.1016/j.foodchem.2024.141978",
  },

  {
    text: "Duarte, D. S., Luzardo, F. H., Velasco, F. G., de Almeida, O. N., Bedon, G. D., Nascimento, G. G., ... & Salay, L. C. (2023). Adsorption of BSA Protein in Aqueous Medium Using Vegetable Tannin Resin from Acacia mearnsii (Mimosa) and Modified Lignocellulosic Fibers from the Bark of Eucalyptus citriodora. Journal of Polymers and the Environment, 31(8), 3418-3432. ",
    link: "https://doi.org/10.1007/s10924-023-02790-5",
  },

  {
    text: "Farias, K. S., Ferreira, M. M., Amaral, G. V., Zugaib, M., Santos, A. S., Gomes, F. P., ... & Pirovani, C. P. (2023). BASIDIN as a New Protein Effector of the Phytopathogen Causing Witche’s Broom Disease in Cocoa. International Journal of Molecular Sciences, 24(14), 11714. ",
    link: "https://doi.org/10.3390/ijms241411714",
  },

  {
    text: "de Faria, S. M., Ringelberg, J. J., Gross, E., Koenen, E. J., Cardoso, D., Ametsitsi, G. K., ... & James, E. K. (2022). The innovation of the symbiosome has enhanced the evolutionary stability of nitrogen fixation in legumes. New Phytologist, 235(6), 2365-2377. ",
    link: "https://doi.org/10.1111/nph.18321",
  },

  {
    text: "Bozzi, A., & Stevens, D. A. (2021). Induced pluripotent stem cells for modeling Chagas disease. In iPSCs for Studying Infectious Diseases (pp. 239-254). Academic Press. ",
    link: "https://doi.org/10.1016/B978-0-12-823808-0.00003-1",
  },

  {
    text: "Lima, C. O. D. C., De Castro, G. M., Solar, R., Vaz, A. B., Lobo, F., Pereira, G., ... & Góes-Neto, A. (2022). Unraveling potential enzymes and their functional role in fine cocoa beans fermentation using temporal shotgun metagenomics. Frontiers in Microbiology, 13, 994524. ",
    link: "https://doi.org/10.3389/fmicb.2022.994524",
  },

  {
    text: "Lima, C. O. D. C., Vaz, A. B., De Castro, G. M., Lobo, F., Solar, R., Rodrigues, C., ... & Góes-Neto, A. (2021). Integrating microbial metagenomics and physicochemical parameters and a new perspective on starter culture for fine cocoa fermentation. Food Microbiology, 93, 103608. ",
    link: "https://doi.org/10.1016/j.fm.2020.103608",
  },

  {
    text: "Dotivo, N. C., Rezende, R. P., Pessoa, T. B. A., Salay, L. C., Huachaca, N. S. M., Romano, C. C., ... & Dias, J. C. T. (2021). Immobilization of PR4A3 enzyme in pluronic F127 polymeric micelles against colorectal adenocarcinoma cells and increase of in vitro bioavailability. International Journal of Biological Macromolecules, 166, 1238-1245. ",
    link: "https://doi.org/10.1016/j.ijbiomac.2020.11.006",
  },

  {
    text: "Pereira, C. F., Costa, A. Z. M., Niella, G. R., Bezerra, J. L., Uetanabaro, A. P. T., Aguiar-Oliveira, E. (2021) Brewer's residues and cocoa pod shells as a substrate for cultivation of Pleurotus ostreatus CCIBt 2339 and enzymes production. African Journal of Biotechnology, 3, 115-121. ",
    link: "https://doi.org/10.5897/AJB2020.17242",
  },

  {
    text: "Koelher, B. T. A.; De Souza, S. M. M.; Da Costa, A. M.; Aguiar-Oliveira, E. (2021). Applicability of Saccharomyces cerevisiae strains for the production of fruit wines using cocoa honey complemented with cocoa pulp. Food Technology and Biotechnology, 60, 192-201. ",
    link: "https://doi.org/10.17113/ftb.60.02.22.7285",
  },

  {
    text: "Santos, D. S., Rezende, R. P., Dos Santos, T. F., Marques, E. D. L. S., Ferreira, A. C. R., e Silva, A. B. D. C., ... & Bisneto, J. D. T. (2020). Fermentation in fine cocoa type Scavina: Change in standard quality as the effect of use of starters yeast in fermentation. Food Chemistry, 328, 127110. ",
    link: "https://doi.org/10.3390/ijms241411714",
  },
];

// ★ Publicações ✦────────────➤
const Publicações = () => {
  // ── ✦─DOM─➤

  return (
    <>
      <Helmet title="Serviços prestados CIBBiM" />
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
            <Heading color="blue" size="7" highContrast className="mt-10 ">
              Publicações
            </Heading>

            <Box className="flex flex-col gap-5 mb-2">
              {publiList.map((el, index) => (
                // [○] publiList
                <Text key={index} className="text-sm sm:text-base">
                  ◆ {el.text} <Link href={el.link}> {el.link} </Link>
                </Text>
              ))}
            </Box>

            <Box className="flex flex-col gap-5 mb-10">
              <Heading color="blue" size="5" highContrast className="mt-10 ">
                Patentes depositadas
              </Heading>

              <Text className="text-sm sm:text-base">
                ◆ PIROVANI, C. P. et al. rBASIDINA, Proteína recombinante e seus
                fragmentos, processo de obtenção e purificação, gene sintético,
                vetor recombinante, e uso da proteína recombinante para preparar
                uma composição para emprego como indutor de resistência a pragas
                e crescimento em plantas. 2024, Brasil. Patente: Privilégio de
                Inovação. Número do registro: BR1020160007712, INPI. Depósito:
                17/07/2024.
              </Text>

              <Text className="text-sm sm:text-base">
                ◆ CAPIM, S. L. et al. Formulação farmacêutica contendo látex
                natural e uso da mesma para o tratamento de ferimentos cutâneos.
                2021, Brasil. Patente: Privilégio de Inovação. Número do
                registro: BR1020210054719. INPI Depósito: 23/03/2021. Patente
                com produto comercializado no mercado{" "}
                <Link href="https://cicatribio.com.br/"> CICATRIBIOVET</Link>{" "}
                para uso veterinário.
              </Text>

              <Text className="text-sm sm:text-base">
                ◆ LOPES, A. T. S. et al. Teste multiplex para detecção e
                quantificação simultânea de Salmonella spp., Escherichia coli e
                Staphylococcus aureus em alimentos através da técnica de reação
                em cadeia da polimerase em tempo real (qPCR). 2021, Brasil.
                Patente: Modelo de Utilidade. Número do registro: BR20210214210
                INPI. Depósito: 28/09/2021.
              </Text>
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
}; // ★ Publicações ✦────────────➤

export default Publicações;
