import type { InfoItemProps } from "../../types/CTASection/types";

export const InfoItem = ({ icon, text }: InfoItemProps) => {
  return (
    <div className="flex items-center gap-2 text-gray-700 font-medium">
      <i className={`bx ${icon} text-xl text-primary`}></i>
      <span>{text}</span>
    </div>
  );
};
