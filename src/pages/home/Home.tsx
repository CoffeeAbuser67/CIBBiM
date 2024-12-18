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
import TESTECIBBBIMBG from "../../assets/TESTECIBBBIMBG.svg";

import { Helmet } from "react-helmet-async";

import { Box, Text, Heading, Strong, Flex } from "@radix-ui/themes";

// import { useWindowResize } from "../../hooks/useWindowResize";

import { Dropdown_Menu, Card_Menu } from "../../components/menu/Menu";

import logo_cibbim from "../../assets/logo_Cibbim.png";

// // <✪> CIBBiM_LOGO_SVG
// const CIBBiM_LOGO_SVG = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     id="Layer_1"
//     data-name="Layer 1"
//     viewBox="0 0 670 160"
//     width="543px"
//     height="130px"
//   >
//     <defs>
//       <style>
//         {
//           ".cls-1{fill:none;stroke:#010101;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px}.cls-2{fill:#000}.cls-2,.cls-3,.cls-4,.cls-5{stroke-width:0}.cls-3{fill:#1c5228}.cls-4{fill:#0e7d3f}.cls-5{fill:#010101}"
//         }
//       </style>
//     </defs>
//     <g id="Logo">
//       <g id="bixo">
//         <g id="cauda2">
//           <path
//             d="M611.92 24.47c6.88-5.31 16.16 4.2 20.49 9.09 2.52 2.98 4.67 6.27 6.66 9.54 2.96 4.78 6.21 9.7 11.5 11.93 3.52 1.47 7.59 1.37 11.1 3.15 7.14 3.55 5.11 10.02 1.69 15.51-1.76 3.02-3.12 7.41-.29 10.12.18.15.19.42.04.6s-.42.19-.6.04c-3.24-2.95-1.91-7.95-.02-11.22 2.95-4.96 5.19-10.87-1.35-13.96-3.44-1.67-7.46-1.51-11.07-2.98-5.6-2.24-9.26-7.5-12.31-12.35-2.04-3.26-4.15-6.4-6.64-9.27-3.58-3.99-12.42-12.94-17.87-8.7-.98.88-2.32-.62-1.32-1.5Z"
//             className="cls-5"
//           />
//           <path
//             d="M611.68 27.94c3.06-.79 6.38-.15 8.92 1.65 2.48 1.77 3.76 4.43 5.68 6.62 3.88 4.95 8.35 6.18 14.46 6.15 2.88.14 5.89-.12 8.63 1.09 3.12 1.33 5.47 4.64 5.21 8.12-.22 2.36-1.01 4.97-.73 7.31.42 2.66 1.54 5.47 3.81 6.97.17.11.22.34.11.5-.11.17-.33.21-.5.11-2.55-1.64-3.79-4.58-4.3-7.47-.41-2.98.71-5.86.57-8.48-.3-2.63-2.19-4.98-4.64-5.98-2.53-1.07-5.45-.74-8.18-.83-6.51.17-11.43-1.18-15.71-6.41-1.96-2.16-3.35-4.79-5.46-6.2-2.11-1.45-4.91-1.92-7.34-1.23-1.26.35-1.82-1.58-.52-1.93Z"
//             className="cls-5"
//           />
//         </g>
//         <g id="PERNAS">
//           <path
//             d="M591.38 6.72c.22-.76.64-1.43 1.17-1.88M598.79 9.29c.41-.63.91-1.23 1.49-1.76M605.18 12.46c.06-.71.52-1.39 1.32-1.95M583.65 8.03c-.08-.17-.22-.3-.34-.45s-.24-.31-.25-.5M579.99 18.61l-.89.39M582.86 24.16c-.21.48-.42.95-.64 1.43M600.9 29.46c-.19.91-.42 1.81-.66 2.7M592.32 27.41c-.38.68-.69 1.4-.93 2.15M608.29 32.2c.5.78.53.86.99 1.66M612.69 18.08c.83-.39.9-.41 1.74-.78"
//             className="cls-1"
//           />
//         </g>
//         <path
//           id="mass"
//           d="M605.17 32.68c-2.06-.7-19.78-6.71-21.76-7.54-7.18-3.02-2.27-19.33 5.06-20.42 3.78-.56 15.51 4.79 22.33 9.43 9.51 6.47 5.08 22.15-5.64 18.52Z"
//           className="cls-2"
//         />
//         <g id="pintas">
//           <path
//             d="M594.54 19.16c-.09-.26-.21-.53-.47-.65a.986.986 0 0 0-.38-.07c-1.4-.04-1.42 1.48-.64 2.22.32.3.73.28 1.09.02.53-.38.58-.98.39-1.52ZM588.81 20.63c.35-.21.62-.57.71-.96.05-.23.04-.47 0-.7a3.32 3.32 0 0 0-.48-1.28c-.06-.09-.13-.19-.22-.24-.13-.08-.3-.08-.46-.07-.5.03-1.03.21-1.33.61-.16.21-.24.47-.3.73-.13.6-.15 1.45.33 1.91.41.39 1.28.29 1.74.01ZM596.16 13.76c.09-.09.17-.19.23-.3.15-.31.08-.68-.02-1-.16-.49-.45-1-.96-1.13-.39-.1-.83.07-1.1.38s-.39.72-.35 1.12c.03.42.27 1.15.69 1.34.46.21 1.17-.07 1.51-.4ZM599.27 17.3c.16 0 .31.08.46.08.17 0 .33-.1.43-.23s.16-.29.19-.45a.94.94 0 0 0-.11-.62c-.08-.12-.19-.22-.31-.31a.719.719 0 0 0-.28-.13c-.11-.02-.23 0-.35.04-.26.09-.5.28-.58.53-.06.18-.03.37.03.54.09.25.21.53.51.55ZM589.61 13.14c.13-.2.16-.44.18-.67.03-.47 0-.94-.08-1.4-.03-.19-.08-.38-.2-.52-.11-.13-.27-.2-.44-.24-.59-.13-1.24.16-1.69.59-.14.14-.27.3-.34.48-.09.23-.08.49-.04.73.08.49.24 1.3.76 1.51s1.52.02 1.85-.48Z"
//             className="cls-3"
//           />
//         </g>
//       </g>
//       <g id="microscopio">
//         <path
//           d="M124.28 156.51v-17.39h20.39V82.39h-20.39V65.01h60.39v17.38h-20.39v56.73h20.39v17.39h-60.39ZM221.01 156.51v-91.5h46.27c7.14 0 13.16.89 18.04 2.68 4.88 1.79 8.56 4.38 11.05 7.78 2.48 3.4 3.73 7.45 3.73 12.16 0 5.14-1.44 9.46-4.31 12.94-2.88 3.49-7.15 5.97-12.81 7.45l.39-2.61c3.92.87 7.54 2.33 10.85 4.38 3.31 2.05 5.93 4.69 7.84 7.91 1.92 3.22 2.88 7.02 2.88 11.37 0 5.06-.96 9.35-2.88 12.88-1.92 3.53-4.55 6.34-7.91 8.43-3.36 2.09-7.12 3.64-11.31 4.64-4.18 1-8.54 1.5-13.07 1.5h-48.76Zm18.82-54.77h27.06c2.61 0 4.99-.41 7.12-1.24 2.13-.83 3.77-1.98 4.9-3.46 1.13-1.48 1.7-3.27 1.7-5.36 0-3.31-1.35-5.75-4.05-7.32-2.7-1.57-6.27-2.35-10.72-2.35h-26.01v19.74Zm0 37.78h29.93c3.14 0 5.88-.41 8.24-1.24 2.35-.83 4.18-2.09 5.49-3.79 1.31-1.7 1.96-3.77 1.96-6.21 0-2.62-.81-4.73-2.42-6.34-1.61-1.61-3.66-2.79-6.14-3.53-2.48-.74-5.08-1.11-7.78-1.11h-29.28v22.22ZM334.73 156.51v-91.5H381c7.14 0 13.16.89 18.04 2.68 4.88 1.79 8.56 4.38 11.05 7.78 2.48 3.4 3.73 7.45 3.73 12.16 0 5.14-1.44 9.46-4.31 12.94-2.88 3.49-7.15 5.97-12.81 7.45l.39-2.61c3.92.87 7.54 2.33 10.85 4.38 3.31 2.05 5.93 4.69 7.84 7.91 1.92 3.22 2.88 7.02 2.88 11.37 0 5.06-.96 9.35-2.88 12.88-1.92 3.53-4.55 6.34-7.91 8.43-3.36 2.09-7.12 3.64-11.31 4.64-4.18 1-8.54 1.5-13.07 1.5h-48.76Zm18.82-54.77h27.06c2.61 0 4.99-.41 7.12-1.24 2.13-.83 3.77-1.98 4.9-3.46 1.13-1.48 1.7-3.27 1.7-5.36 0-3.31-1.35-5.75-4.05-7.32-2.7-1.57-6.27-2.35-10.72-2.35h-26.01v19.74Zm0 37.78h29.93c3.14 0 5.88-.41 8.24-1.24 2.35-.83 4.18-2.09 5.49-3.79 1.31-1.7 1.96-3.77 1.96-6.21 0-2.62-.81-4.73-2.42-6.34-1.61-1.61-3.66-2.79-6.14-3.53-2.48-.74-5.08-1.11-7.78-1.11h-29.28v22.22ZM472.68 91.58c0-2.44-1.98-4.42-4.42-4.42h-15.82c-2.44 0-4.42 1.98-4.42 4.42 0 1.99 1.32 3.65 3.13 4.21-.02.22-.06.42-.06.64v50.81c0 5.12 4.15 9.27 9.27 9.27s9.27-4.15 9.27-9.27V96.43c0-.22-.05-.43-.06-.64 1.81-.56 3.13-2.22 3.13-4.21ZM467.62 64.27c2.31 0 4.18-1.88 4.18-4.18 0-2.31-1.88-4.18-4.18-4.18-2.31 0-4.18 1.88-4.18 4.18s1.88 4.18 4.18 4.18ZM455.52 81.57c1.67 0 3.22-.55 4.47-1.49-.15-.57-.23-1.17-.23-1.79 0-2.4 1.21-4.53 3.05-5.81-.74-3.34-3.73-5.84-7.28-5.84-4.11 0-7.46 3.35-7.46 7.46 0 4.11 3.35 7.46 7.46 7.46Z"
//           className="cls-5"
//         />
//         <path
//           d="M466.84 72.5c-3.19 0-5.79 2.6-5.79 5.79s2.6 5.79 5.79 5.79a5.8 5.8 0 0 0 5.79-5.79 5.8 5.8 0 0 0-5.79-5.79ZM508.05 156.51v-91.5h17.91L564 117.82l-10.85-.13 38.17-52.68h17.65v91.5h-19.22v-32.16c0-7.49.17-14.4.52-20.72.35-6.32 1.05-12.7 2.09-19.15l2.09 6.54-31.76 41.96h-8.63l-31.63-42.09 2.22-6.41c1.05 6.27 1.74 12.55 2.09 18.82.35 6.27.52 13.29.52 21.04v32.16h-19.22Z"
//           className="cls-5"
//         />
//         <rect
//           width={33.33}
//           height={12.52}
//           x={71.98}
//           y={130.31}
//           className="cls-5"
//           rx={1.53}
//           ry={1.53}
//           transform="rotate(45 88.647 136.579)"
//         />
//         <path
//           d="M80.23 132.35c-1.28.82-2.63 1.64-4.07 2.44-2.79 1.56-5.86 2.79-9.22 3.71-3.36.92-7.09 1.27-11.18 1.06-4.44-.23-8.61-1.08-12.5-2.55-3.9-1.47-7.32-3.52-10.28-6.16-2.96-2.64-5.22-5.81-6.77-9.51-1.56-3.7-2.21-7.81-1.98-12.34.23-4.44 1.31-8.4 3.23-11.87 1.92-3.48 4.39-6.36 7.39-8.65s6.36-4.01 10.09-5.17c3.72-1.16 7.55-1.64 11.46-1.43 4 .21 7.63.88 10.89 2 3.26 1.13 6.23 2.61 8.93 4.45 2.7 1.84 5.21 3.91 7.53 6.22l12.51-14.14c-2.64-3.02-5.92-5.74-9.85-8.17-3.93-2.43-8.32-4.4-13.18-5.92a60.087 60.087 0 0 0-14.98-2.67c-7.23-.37-14.01.41-20.34 2.35-6.34 1.94-11.97 4.92-16.89 8.94s-8.86 8.81-11.81 14.38c-2.95 5.56-4.6 11.74-4.95 18.53-.36 6.96.59 13.43 2.86 19.39 2.26 5.96 5.62 11.18 10.05 15.64 4.44 4.46 9.71 7.96 15.82 10.5 6.11 2.54 12.77 4 20 4.37 5.39.28 10.63-.15 15.71-1.28 5.07-1.13 9.65-2.66 13.72-4.59 4.07-1.93 7.34-3.92 9.8-5.97l-6.27-11.58-5.71-1.97Z"
//           className="cls-5"
//         />
//         <rect
//           width={75.94}
//           height={23.93}
//           x={34.47}
//           y={55.27}
//           className="cls-5"
//           rx={3.37}
//           ry={3.37}
//           transform="rotate(54.63 72.44 67.244)"
//         />
//         <rect
//           width={12.62}
//           height={11.69}
//           x={89.87}
//           y={94.83}
//           className="cls-4"
//           rx={2.04}
//           ry={2.04}
//           transform="rotate(54.63 96.176 100.69)"
//         />
//         <circle cx={61.98} cy={73.98} r={8.24} className="cls-3" />
//       </g>
//     </g>
//     <g id="Logo-2" data-name="Logo">
//       <g id="bixo-2" data-name="bixo">
//         <g id="cauda2-2" data-name="cauda2">
//           <path
//             d="M611.92 24.47c6.88-5.31 16.16 4.2 20.49 9.09 2.52 2.98 4.67 6.27 6.66 9.54 2.96 4.78 6.21 9.7 11.5 11.93 3.52 1.47 7.59 1.37 11.1 3.15 7.14 3.55 5.11 10.02 1.69 15.51-1.76 3.02-3.12 7.41-.29 10.12.18.15.19.42.04.6s-.42.19-.6.04c-3.24-2.95-1.91-7.95-.02-11.22 2.95-4.96 5.19-10.87-1.35-13.96-3.44-1.67-7.46-1.51-11.07-2.98-5.6-2.24-9.26-7.5-12.31-12.35-2.04-3.26-4.15-6.4-6.64-9.27-3.58-3.99-12.42-12.94-17.87-8.7-.98.88-2.32-.62-1.32-1.5Z"
//             className="cls-5"
//           />
//           <path
//             d="M611.68 27.94c3.06-.79 6.38-.15 8.92 1.65 2.48 1.77 3.76 4.43 5.68 6.62 3.88 4.95 8.35 6.18 14.46 6.15 2.88.14 5.89-.12 8.63 1.09 3.12 1.33 5.47 4.64 5.21 8.12-.22 2.36-1.01 4.97-.73 7.31.42 2.66 1.54 5.47 3.81 6.97.17.11.22.34.11.5-.11.17-.33.21-.5.11-2.55-1.64-3.79-4.58-4.3-7.47-.41-2.98.71-5.86.57-8.48-.3-2.63-2.19-4.98-4.64-5.98-2.53-1.07-5.45-.74-8.18-.83-6.51.17-11.43-1.18-15.71-6.41-1.96-2.16-3.35-4.79-5.46-6.2-2.11-1.45-4.91-1.92-7.34-1.23-1.26.35-1.82-1.58-.52-1.93Z"
//             className="cls-5"
//           />
//         </g>
//         <g id="PERNAS-2" data-name="PERNAS">
//           <path
//             d="M591.38 6.72c.22-.76.64-1.43 1.17-1.88M598.79 9.29c.41-.63.91-1.23 1.49-1.76M605.18 12.46c.06-.71.52-1.39 1.32-1.95M583.65 8.03c-.08-.17-.22-.3-.34-.45s-.24-.31-.25-.5M579.99 18.61l-.89.39M582.86 24.16c-.21.48-.42.95-.64 1.43M600.9 29.46c-.19.91-.42 1.81-.66 2.7M592.32 27.41c-.38.68-.69 1.4-.93 2.15M608.29 32.2c.5.78.53.86.99 1.66M612.69 18.08c.83-.39.9-.41 1.74-.78"
//             className="cls-1"
//           />
//         </g>
//         <path
//           id="mass-2"
//           d="M605.17 32.68c-2.06-.7-19.78-6.71-21.76-7.54-7.18-3.02-2.27-19.33 5.06-20.42 3.78-.56 15.51 4.79 22.33 9.43 9.51 6.47 5.08 22.15-5.64 18.52Z"
//           className="cls-2"
//           data-name="mass"
//         />
//         <g id="pintas-2" data-name="pintas">
//           <path
//             d="M594.54 19.16c-.09-.26-.21-.53-.47-.65a.986.986 0 0 0-.38-.07c-1.4-.04-1.42 1.48-.64 2.22.32.3.73.28 1.09.02.53-.38.58-.98.39-1.52ZM588.81 20.63c.35-.21.62-.57.71-.96.05-.23.04-.47 0-.7a3.32 3.32 0 0 0-.48-1.28c-.06-.09-.13-.19-.22-.24-.13-.08-.3-.08-.46-.07-.5.03-1.03.21-1.33.61-.16.21-.24.47-.3.73-.13.6-.15 1.45.33 1.91.41.39 1.28.29 1.74.01ZM596.16 13.76c.09-.09.17-.19.23-.3.15-.31.08-.68-.02-1-.16-.49-.45-1-.96-1.13-.39-.1-.83.07-1.1.38s-.39.72-.35 1.12c.03.42.27 1.15.69 1.34.46.21 1.17-.07 1.51-.4ZM599.27 17.3c.16 0 .31.08.46.08.17 0 .33-.1.43-.23s.16-.29.19-.45a.94.94 0 0 0-.11-.62c-.08-.12-.19-.22-.31-.31a.719.719 0 0 0-.28-.13c-.11-.02-.23 0-.35.04-.26.09-.5.28-.58.53-.06.18-.03.37.03.54.09.25.21.53.51.55ZM589.61 13.14c.13-.2.16-.44.18-.67.03-.47 0-.94-.08-1.4-.03-.19-.08-.38-.2-.52-.11-.13-.27-.2-.44-.24-.59-.13-1.24.16-1.69.59-.14.14-.27.3-.34.48-.09.23-.08.49-.04.73.08.49.24 1.3.76 1.51s1.52.02 1.85-.48Z"
//             className="cls-3"
//           />
//         </g>
//       </g>
//       <g id="microscopio-2" data-name="microscopio">
//         <path
//           d="M124.28 156.51v-17.39h20.39V82.39h-20.39V65.01h60.39v17.38h-20.39v56.73h20.39v17.39h-60.39ZM221.01 156.51v-91.5h46.27c7.14 0 13.16.89 18.04 2.68 4.88 1.79 8.56 4.38 11.05 7.78 2.48 3.4 3.73 7.45 3.73 12.16 0 5.14-1.44 9.46-4.31 12.94-2.88 3.49-7.15 5.97-12.81 7.45l.39-2.61c3.92.87 7.54 2.33 10.85 4.38 3.31 2.05 5.93 4.69 7.84 7.91 1.92 3.22 2.88 7.02 2.88 11.37 0 5.06-.96 9.35-2.88 12.88-1.92 3.53-4.55 6.34-7.91 8.43-3.36 2.09-7.12 3.64-11.31 4.64-4.18 1-8.54 1.5-13.07 1.5h-48.76Zm18.82-54.77h27.06c2.61 0 4.99-.41 7.12-1.24 2.13-.83 3.77-1.98 4.9-3.46 1.13-1.48 1.7-3.27 1.7-5.36 0-3.31-1.35-5.75-4.05-7.32-2.7-1.57-6.27-2.35-10.72-2.35h-26.01v19.74Zm0 37.78h29.93c3.14 0 5.88-.41 8.24-1.24 2.35-.83 4.18-2.09 5.49-3.79 1.31-1.7 1.96-3.77 1.96-6.21 0-2.62-.81-4.73-2.42-6.34-1.61-1.61-3.66-2.79-6.14-3.53-2.48-.74-5.08-1.11-7.78-1.11h-29.28v22.22ZM334.73 156.51v-91.5H381c7.14 0 13.16.89 18.04 2.68 4.88 1.79 8.56 4.38 11.05 7.78 2.48 3.4 3.73 7.45 3.73 12.16 0 5.14-1.44 9.46-4.31 12.94-2.88 3.49-7.15 5.97-12.81 7.45l.39-2.61c3.92.87 7.54 2.33 10.85 4.38 3.31 2.05 5.93 4.69 7.84 7.91 1.92 3.22 2.88 7.02 2.88 11.37 0 5.06-.96 9.35-2.88 12.88-1.92 3.53-4.55 6.34-7.91 8.43-3.36 2.09-7.12 3.64-11.31 4.64-4.18 1-8.54 1.5-13.07 1.5h-48.76Zm18.82-54.77h27.06c2.61 0 4.99-.41 7.12-1.24 2.13-.83 3.77-1.98 4.9-3.46 1.13-1.48 1.7-3.27 1.7-5.36 0-3.31-1.35-5.75-4.05-7.32-2.7-1.57-6.27-2.35-10.72-2.35h-26.01v19.74Zm0 37.78h29.93c3.14 0 5.88-.41 8.24-1.24 2.35-.83 4.18-2.09 5.49-3.79 1.31-1.7 1.96-3.77 1.96-6.21 0-2.62-.81-4.73-2.42-6.34-1.61-1.61-3.66-2.79-6.14-3.53-2.48-.74-5.08-1.11-7.78-1.11h-29.28v22.22ZM472.68 91.58c0-2.44-1.98-4.42-4.42-4.42h-15.82c-2.44 0-4.42 1.98-4.42 4.42 0 1.99 1.32 3.65 3.13 4.21-.02.22-.06.42-.06.64v50.81c0 5.12 4.15 9.27 9.27 9.27s9.27-4.15 9.27-9.27V96.43c0-.22-.05-.43-.06-.64 1.81-.56 3.13-2.22 3.13-4.21ZM467.62 64.27c2.31 0 4.18-1.88 4.18-4.18 0-2.31-1.88-4.18-4.18-4.18-2.31 0-4.18 1.88-4.18 4.18s1.88 4.18 4.18 4.18ZM455.52 81.57c1.67 0 3.22-.55 4.47-1.49-.15-.57-.23-1.17-.23-1.79 0-2.4 1.21-4.53 3.05-5.81-.74-3.34-3.73-5.84-7.28-5.84-4.11 0-7.46 3.35-7.46 7.46 0 4.11 3.35 7.46 7.46 7.46Z"
//           className="cls-5"
//         />
//         <path
//           d="M466.84 72.5c-3.19 0-5.79 2.6-5.79 5.79s2.6 5.79 5.79 5.79a5.8 5.8 0 0 0 5.79-5.79 5.8 5.8 0 0 0-5.79-5.79ZM508.05 156.51v-91.5h17.91L564 117.82l-10.85-.13 38.17-52.68h17.65v91.5h-19.22v-32.16c0-7.49.17-14.4.52-20.72.35-6.32 1.05-12.7 2.09-19.15l2.09 6.54-31.76 41.96h-8.63l-31.63-42.09 2.22-6.41c1.05 6.27 1.74 12.55 2.09 18.82.35 6.27.52 13.29.52 21.04v32.16h-19.22Z"
//           className="cls-5"
//         />
//         <rect
//           width={33.33}
//           height={12.52}
//           x={71.98}
//           y={130.31}
//           className="cls-5"
//           rx={1.53}
//           ry={1.53}
//           transform="rotate(45 88.647 136.579)"
//         />
//         <path
//           d="M80.23 132.35c-1.28.82-2.63 1.64-4.07 2.44-2.79 1.56-5.86 2.79-9.22 3.71-3.36.92-7.09 1.27-11.18 1.06-4.44-.23-8.61-1.08-12.5-2.55-3.9-1.47-7.32-3.52-10.28-6.16-2.96-2.64-5.22-5.81-6.77-9.51-1.56-3.7-2.21-7.81-1.98-12.34.23-4.44 1.31-8.4 3.23-11.87 1.92-3.48 4.39-6.36 7.39-8.65s6.36-4.01 10.09-5.17c3.72-1.16 7.55-1.64 11.46-1.43 4 .21 7.63.88 10.89 2 3.26 1.13 6.23 2.61 8.93 4.45 2.7 1.84 5.21 3.91 7.53 6.22l12.51-14.14c-2.64-3.02-5.92-5.74-9.85-8.17-3.93-2.43-8.32-4.4-13.18-5.92a60.087 60.087 0 0 0-14.98-2.67c-7.23-.37-14.01.41-20.34 2.35-6.34 1.94-11.97 4.92-16.89 8.94s-8.86 8.81-11.81 14.38c-2.95 5.56-4.6 11.74-4.95 18.53-.36 6.96.59 13.43 2.86 19.39 2.26 5.96 5.62 11.18 10.05 15.64 4.44 4.46 9.71 7.96 15.82 10.5 6.11 2.54 12.77 4 20 4.37 5.39.28 10.63-.15 15.71-1.28 5.07-1.13 9.65-2.66 13.72-4.59 4.07-1.93 7.34-3.92 9.8-5.97l-6.27-11.58-5.71-1.97Z"
//           className="cls-5"
//         />
//         <rect
//           width={75.94}
//           height={23.93}
//           x={34.47}
//           y={55.27}
//           className="cls-5"
//           rx={3.37}
//           ry={3.37}
//           transform="rotate(54.63 72.44 67.244)"
//         />
//         <rect
//           width={12.62}
//           height={11.69}
//           x={89.87}
//           y={94.83}
//           className="cls-4"
//           rx={2.04}
//           ry={2.04}
//           transform="rotate(54.63 96.176 100.69)"
//         />
//         <circle cx={61.98} cy={73.98} r={8.24} className="cls-3" />
//       </g>
//     </g>
//   </svg>
// );

// ★ Home ✦─────────────────➤
const Home = () => {
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
                alt="BRASAO UESC "
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
            // HERE jungleMicroscopeBG
            id="jungleMicroscopeBG"
            className="absolute w-full h-full bg-cover bg-center"
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
            <Text as="div" my="5" highContrast className="text-sm sm:text-base">
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
