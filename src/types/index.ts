export type MenuItem = {
  name: string;
  price?: number | string;
  prices?: {
    ny: number;
    neap: number;
  };
  description?: string;
  isMostOrdered?: boolean;
  isSignature?: boolean;
  customTag?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  preheader?: string;
  items: MenuItem[];
};
