import { menuSections } from '@/lib/menu';
import MenuClient from './MenuClient';

import settings from '../../content/settings.json';

export default async function Home() {
  return <MenuClient sections={menuSections} heroVideo={settings.heroVideo} />;
}
