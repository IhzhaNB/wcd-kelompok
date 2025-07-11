import Image from "next/image";
import { ReactNode } from "react";

interface FeatureProps {
  src: string;
  title: string;
  children: ReactNode;
  text?: string;
}

const Feature = ({ src, children, title, text }: FeatureProps) => {
  return (
    <div className="text-center w-full p-4 md:w-1/2 lg:max-w-1/4">
      <Image
        src={src}
        alt={title}
        width={60}
        height={60}
        className="mx-auto mb-8"
      />
      <h5 className="h5 mb-2 font-bold">{title}</h5>
      <p className="text-sm">{children}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Feature;
