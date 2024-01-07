import Link from "next/link";
import { api } from "@/trpc/server";
import Image from "next/image";

export const MenuItem = async () => {
  const menuItems = await api.menuItems.getLatest.query();

  return (
    <div className="group relative grid gap-6">
      <Link href="#">
        {menuItems?.imageUrl && (
          <Image src={menuItems.imageUrl} width={320} height={480} alt="" />
        )}
        <div className="mt-4 grid gap-1">
          <h3 className="font-semibold">{menuItems?.name}</h3>
          <div className="text-sm leading-none">{menuItems?.description}</div>
          <div className="font-semibold">{`€ ${menuItems?.price}`}</div>
        </div>
      </Link>
    </div>
  );
};
