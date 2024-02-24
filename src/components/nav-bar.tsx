import { CartButton } from "./cart-button";

export const NavBar = () => {
  return (
    <div className="flex w-full justify-between">
      <nav>
        <a href="#">Home</a>
      </nav>
      <CartButton />
    </div>
  );
};
