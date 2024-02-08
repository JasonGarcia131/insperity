import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[38px] flex jusitfy-between bg-black text-white p-2">
      <img
        src="https://insperity.myisolved.com/Content/Images/isolvedLogo.png"
        alt="logo"
      />
      <div className="flex flex-col justify-around text-[5px] mx-2">
        <p>DELIVERED BY</p>
        <p>INSPERITY</p>
      </div>
      <div className="w-full flex justify-end">
        <button className="w-[22px] h-full rounded-full border border-1 border-red-500 bg-white"></button>
      </div>
    </header>
  );
};

export default Header;
