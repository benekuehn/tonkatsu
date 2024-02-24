import { MenuItem } from "../components/menu-item";
import { NavBar } from "../components/nav-bar";
import { Suspense } from "react";
import { MenuItemsSkeleton } from "@/components/menu-item-skeleton";

export default async function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar />
      <section className="ml-auto mr-auto flex w-[916px] flex-col justify-center py-12">
        <h1 className="text-2xl font-bold tracking-tight">Our Menu</h1>
        <h2 className="text-gray-500 dark:text-gray-400">
          Discover our selection of delicious dishes.
        </h2>
        <div className="mx-auto mt-8 grid max-w-xl gap-6 md:gap-8 lg:max-w-none">
          <div className="grid gap-8 lg:grid-cols-3">
            <Suspense fallback={<MenuItemsSkeleton />}>
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
