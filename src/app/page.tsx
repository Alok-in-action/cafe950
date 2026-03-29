import { fetchMenuSections } from '@/lib/fetchMenu';
import MenuClient from './MenuClient';

// Revalidate the page every 5 minutes so sheet edits appear without a redeploy
export const revalidate = 300;

export default async function Home() {
  const sections = await fetchMenuSections();
  return <MenuClient sections={sections} />;
}
