export type MenuItem = {
  name: string;
  price?: number;
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
  items: MenuItem[];
};
