"use client";
import { useCookies } from "react-cookie";

export const AddToCartButton = ({ id }: { id: string }) => {
  const [cookies, setCookie] = useCookies<string>(["cart"]);

  const cart = cookies.cart ? (cookies.cart as string)?.split(",") : [];

  const handleOnClick = (id: string) => {
    setCookie("cart", cart.concat(id).join(","), { path: "/" });
  };

  return <button onClick={() => handleOnClick(id)}>AddToCartButton</button>;
};
