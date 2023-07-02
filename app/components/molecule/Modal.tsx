import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface IProps {
  setClose: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ setClose, children }: PropsWithChildren<IProps>) {
  const onClose = () => setClose(false);

  return (
    <div className="absolute top-1/2 left-1/2 p-6 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-xl bg-white">
      <AiFillCloseCircle
        className="absolute right-1 top-1 cursor-pointer"
        size={20}
        onClick={onClose}
      />
      {children}
    </div>
  );
}
