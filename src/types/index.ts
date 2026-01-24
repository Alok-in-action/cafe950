export type MenuItem = {
  name: string;
  price?: number | string;
  prices?: {
    ny: number;
    neap: number;
  };
  description?: string;
  isSignature?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  preheader?: string;
  items: MenuItem[];
};
