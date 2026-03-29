import { fetchMenuSections } from '@/lib/fetchMenu';
import MenuClient from './MenuClient';

// Revalidate the page every 1 minute so sheet edits appear without a redeploy
export const revalidate = 60;

export default async function Home() {
  const sections = await fetchMenuSections();
  return <MenuClient sections={sections} />;
}
