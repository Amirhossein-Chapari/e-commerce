'use client';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '@/types/types';

type Props = {
  menuItems: MenuItem[];
};

function DescktopNav({ menuItems }: Props) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-3 items-center w-full h-16 bg-[rgba(255, 255, 255, 0.4)] px-4 rounded-lg">
      {/* Logo */}
      <div className="flex gap-2 justify-self-start">
        <Image src="/images/Logo.svg" alt="Logo" width={24} height={31} />
        <Image src="/images/TextLogo.svg" alt="Logo" width={140} height={29} />
      </div>

      {/* Menu Items */}
      <div className="flex gap-x-5 justify-center">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <div key={index} className="relative pb-1">
              <Link
                href={item.link}
                className={`font-dana-md px-2 ${
                  isActive
                    ? 'text-black text-xl font-semibold'
                    : 'text-[#666571]'
                }`}
              >
                {item.name}
              </Link>
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-orange-500 rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="justify-self-end">
        <Button className="font-dana-md">ثبت نام</Button>
      </div>
    </div>
  );
}

export default DescktopNav;
