export const NavBar = () => {
  return (
    <div className="flex w-full justify-between">
      <nav>
        <a href="#">Menu</a>
      </nav>
      {/* <div>{`cart (${cart?.length} items)`}</div> */}
      <div>{`cart (0 items)`}</div>
    </div>
  );
};
