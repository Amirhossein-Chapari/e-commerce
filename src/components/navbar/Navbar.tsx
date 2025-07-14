import DescktopNav from "./DescktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {

  const menuItems: { name: string; link: string }[] = [
    { name: 'خانه', link: '/' },
    { name: 'دوره ها', link: '/courses' },
    { name: 'مسیر یادگیری', link: '/roadmap' },
    { name: 'درباره', link: '/about' },
  ];

  return (
   <>
   <div className="block lg:hidden"><MobileNav menuItems={menuItems} /></div>
   <div className="hidden lg:block sticky top-4"><DescktopNav  menuItems={menuItems} /></div>
   </>
  );
};

export default Navbar;
