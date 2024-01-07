"use client";

import { useAtom } from "jotai";
import { cartAtom } from "../store/atom";
import { useEffect, useState } from "react";
import { set } from "zod";

export const NavBar = () => {
  const [cart, setAtom] = useAtom(cartAtom);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setAtom(
      sessionStorage.getItem("cart") !== null
        ? sessionStorage.getItem("cart")!.split(",")
        : [],
    );
  }, []);

  useEffect(() => {
    setCartItems(cart.length);
  }, [cart]);

  return (
    <div className="flex w-full justify-between">
      <nav>
        <a href="#">Home</a>
      </nav>
      <div>{`cart (${cartItems} items)`}</div>
    </div>
  );
};
