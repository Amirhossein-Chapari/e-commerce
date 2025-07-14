'use client';
import { MenuItem } from '@/types/types';
import Image from 'next/image';
import { Link, Menu, ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

type Props = {
  menuItems: MenuItem[];
};

const MobileNavbar = ({ menuItems }: Props) => {
  return (
    <>
      <div className="flex justify-between items-center px-8 h-20 fixed top-0 right-0 left-0 bg-white z-50 shadow">
        {/* Sidebar Button */}
        <div>
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="flex">
                <SheetTitle className="text-left text-xl">
                  <Image
                    src="/images/TextLogo.svg"
                    alt="Logo"
                    width={140}
                    height={29}
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-4 text-black">
                {menuItems.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="text-lg text-left hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image src="/images/Logo.svg" alt="Logo" width={24} height={31} />
          <Image
            src="/images/TextLogo.svg"
            alt="Logo Text"
            width={140}
            height={29}
          />
        </div>

        {/* Cart */}
        <div>
          <ShoppingCart className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
