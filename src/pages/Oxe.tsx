import CIBBiM_BG from "../assets/bg_cibbim_teste.svg";
import classNames from "classnames";
import { Box, Dialog } from "@radix-ui/themes";

// ★ Oxe  ✦──────────────────────➤

const CustomData = {
  nestTest: { el1: "1", el2: "2", el3: "3" },
};

const Oxe = () => {
  // ── ✦─DOM─➤
  return (
    <Box id="Oxe_Canvas" className=" relative w-full h-screen">
      <Dialog.Root>
        <Dialog.Trigger>
          <div className="mt-20 hover:bg-blue-500">
            🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀🦀 🦀 🦀 🦀 🦀 🦀 🦀
            🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀
          </div>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title> 🦀 </Dialog.Title>

          <Dialog.Description className = "text-xs lg:text-xl">
            {Object.entries(CustomData.nestTest).map(([key, value]) => (
              <span key={key} className="block">
                <strong>{key}</strong>: {value}
              </span>
            ))}
          </Dialog.Description>

        </Dialog.Content>
      </Dialog.Root>
    </Box>
  );
}; // ★ Oxe  ✦──────────────────────➤

export default Oxe;
