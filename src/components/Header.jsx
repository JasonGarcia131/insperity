const Header = () => {
  return (
    <header className="w-full h-[50px] flex jusitfy-between bg-header border-b-2 border-stone-700 text-white p-2">
      <img
        src="https://insperity.myisolved.com/Content/Images/isolvedLogo.png"
        alt="logo"
      />
      <div className="flex flex-col justify-around text-[9px] mx-2">
        <p>DELIVERED BY</p>
        <p>INSPERITY</p>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-[30px] h-[30px] rounded-full border-2 border-tertairy bg-white lg:hidden"></div>
        <img className="hidden lg:block" src="https://insperity.myisolved.com/Content/Images/MarketingPanel/ExploreIsolvedPeopleCloudButton.png" alt=""/>
      </div>
    </header>
  );
};

export default Header;
