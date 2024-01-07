import Image from "next/image";
import Link from "next/link";
import { api } from "~/trpc/server";

export default async function Home() {
  const menuItems = await api.menuItems.getLatest.query();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="w-full py-12">
        <div className="container mx-auto grid max-w-xl gap-6 px-4 md:gap-8 md:px-6 lg:max-w-none">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Our Menu</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Discover our selection of delicious dishes.
              </p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="group relative grid gap-6">
              <Link href="#">
                {menuItems?.imageUrl && (
                  <Image
                    src={menuItems.imageUrl}
                    width={320}
                    height={480}
                    alt=""
                  />
                )}
                <div className="grid gap-1">
                  <h3 className="font-semibold">{menuItems?.name}</h3>
                  <p className="text-sm leading-none">
                    {menuItems?.description}
                  </p>
                  <p className="font-semibold">{`€ ${menuItems?.price}`}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
