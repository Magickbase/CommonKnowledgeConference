import { FC, PropsWithChildren } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export const InfoDialog: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="md:max-w-[800px] max-w-[calc(100vw-2rem)] bg-[#E5C895] border-[#B99B60] rounded-lg">
        <div className="flex flex-col gap-8">
          <p className="md:text-lg text-base">
            CKCon is a community gathering steered towards building, creating,
            and expanding the community building on Bitcoin and CKB.
          </p>
          <p className="md:text-lg text-base">
            CKB has always been driven forward by a grassroots movement,
            building on proven technologies such as PoW, UTXO's and RISC-V.
          </p>
          <p className="md:text-lg text-base">
            This will be the largest community gathering yet, bringing together
            the CKB community and those who seek to expand on the concepts of
            building on Bitcoin and other UTXO blockchains.
          </p>
          <p className="md:text-lg text-base">
            Don't miss this opportunity to expand your common knowledge!
          </p>

          <div className="flex justify-center">
            <DialogClose asChild>
              <button
                className="rounded-full border-2 border-black md:px-6 md:py-3 px-4 py-2 bg-[#CCA566]"
                type="button"
              >
                Close
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
