import { InfoItem } from "./InfoItem";

export const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-wrap justify-center gap-12">
      <InfoItem icon="bx-time" text="Seg-Sáb: 9h às 19h" />
      <InfoItem icon="bx-phone" text="(11) 4444-5555" />
    </div>
  );
};
