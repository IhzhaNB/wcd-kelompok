import { ReactNode } from "react";

interface PretitleProps {
  children: ReactNode;
  kami?: boolean;
}

const Pretitle = ({ children, kami }: PretitleProps) => {
  return (
    <div>
      <h2 className={`h2 uppercase! ${!kami && "text-white!"}`}>
        {children} {kami && <span className="text-accent">Kami</span>}
      </h2>
    </div>
  );
};

export default Pretitle;
