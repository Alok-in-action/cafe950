import { menuSections } from '@/lib/menu';
import MenuClient from './MenuClient';

export default async function Home() {
  return <MenuClient sections={menuSections} />;
}
