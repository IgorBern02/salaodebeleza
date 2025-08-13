import React from "react";
import type { ServicesProps } from "../../types/services/types";

export const ServicesCard: React.FC<ServicesProps> = ({ services }) => {
  return (
    <>
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-[var(--bg-light)] p-8 rounded-[15px] text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
        >
          <div className="text-[3rem] text-[var(--primary-color)] mb-4">
            <i className={service.icon}></i>
          </div>
          <h3 className="text-[1.5rem] mb-4 text-[var(--text-dark)]">
            {service.title}
          </h3>
          <p className="text-[var(--text-light)] leading-8">
            {service.description}
          </p>
        </div>
      ))}
    </>
  );
};
