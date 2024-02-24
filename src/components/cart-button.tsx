"use client";

import { useAtom } from "jotai";
import { cartAtom } from "../store/atom";
import { useEffect, useState } from "react";

export const CartButton = () => {
  const [cart, setAtom] = useAtom(cartAtom);
  const [cartItems, setCartItems] = useState(0);

  //   useEffect(() => {
  //     setAtom(
  //       sessionStorage.getItem("cart") !== null
  //         ? sessionStorage.getItem("cart")!.split(",")
  //         : [],
  //     );
  //   }, []);

  useEffect(() => {
    setCartItems(Object.values(cart).reduce((a, b) => a + b, 0));
  }, [cart]);

  return <div>{`cart (${cartItems} items)`}</div>;
};
