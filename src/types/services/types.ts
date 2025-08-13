export interface Service {
  icon: string; // classe do ícone, ex: "bx bx-cut"
  title: string;
  description: string;
}

export interface ServicesProps {
  services: Service[];
}
