import { ReactNode } from "react";

interface ContactItemsProps {
  icon: ReactNode;
  children: ReactNode;
  noColor?: boolean;
}

const InfoLine = ({ icon, children, noColor }: ContactItemsProps) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-8 h-8 ${
          noColor ? "bg-white text-primary" : "bg-primary text-white"
        }  grid place-items-center`}
      >
        {icon}
      </div>
      <p className={`font-medium ${noColor ? "text-white" : "text-primary"}`}>
        {children}
      </p>
    </div>
  );
};

export default InfoLine;
