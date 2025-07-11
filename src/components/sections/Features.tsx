import React from "react";
import Feature from "../composites/Feature";
import { FeaturesSch } from "@/data";

const Features = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-row flex-wrap justify-center">
        {FeaturesSch.map((item, index) => (
          <Feature
            key={index}
            src={item.image}
            text={item.text2}
            title={item.title}
          >
            {item.text}
          </Feature>
        ))}
      </div>
    </div>
  );
};

export default Features;
