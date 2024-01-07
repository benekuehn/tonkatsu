import { MenuItem } from "./_components/menu-item";
import { NavBar } from "./_components/nav-bar";

export default async function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar />
      <section className="ml-auto mr-auto flex max-w-[916px] justify-center py-12">
        <div className="mx-auto grid max-w-xl gap-6 px-4 md:gap-8 md:px-6 lg:max-w-none">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Our Menu</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Discover our selection of delicious dishes.
              </p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
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
          </div>
        </div>
      </section>
    </main>
  );
}
