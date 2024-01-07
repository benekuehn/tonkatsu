"use client";

import { useCookies } from "react-cookie";

export const NavBar = () => {
  const [cookies] = useCookies(["cart"]);

  const cartCount = (cookies.cart ? (cookies.cart as string)?.split(",") : [])
    .length;

  return (
    <div className="flex w-full justify-between">
      <nav>
        <a href="#">Home</a>
      </nav>
      <div>{`cart (${cartCount} items)`}</div>
    </div>
  );
};
