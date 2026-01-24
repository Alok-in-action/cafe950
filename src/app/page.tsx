import { menuSections } from '@/lib/menu';
import MenuHeader from '@/components/menu/menu-header';
import MenuFooter from '@/components/menu/menu-footer';
import MenuBody from '@/components/menu/menu-body';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto min-h-screen border-x-2 border-[#8B4A27]/10 shadow-2xl bg-[#F3E2C9]/90 backdrop-blur-sm relative overflow-hidden">
      <MenuHeader />
      <MenuBody allSections={menuSections} />
      <MenuFooter />
    </div>
  );
}
