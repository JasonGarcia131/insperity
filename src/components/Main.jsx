import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";

const Main = () => {
  // Tracks the current check rendered
  const [currentCheck, setCurrentCheck] = useState(0);

  // Hard coding data for the profile card components
  const myProfileContent = (
    <div className="flex">
      <div className="w-[100px] h-[100px] border border-black p-2">
        <FaUser className="w-full h-full" />
      </div>
      <div className="flex flex-col mx-2">
        <p>John Doe</p>
        <p>Warehouse Supervisor</p>
        <p>Length of Service: 4 Years</p>
        <p>Anniversary: 1/1/2020</p>
      </div>
    </div>
  );

  const notificationContent = (
    <div>
      <p>No Notifications</p>
    </div>
  );

  // Mock data for the checks array.
  const checks = [
    {
      date: "1/2/2024",
      number: "A12345",
    },
    {
      date: "1/3/2024",
      number: "B41565",
    },
    {
      date: "1/4/2024",
      number: "C30965",
    },
    {
      date: "1/5/2024",
      number: "D34234",
    },
    {
      date: "1/6/2024",
      number: "F34255",
    },
  ];

  const myPayContent = (
    <div className="w-full mx-auto mt-[100px] flex justify-around items-center lg:w-1/2">
      <button className="w-[30px] h-[30px] rounded-full bg-tertairy">
        <FaArrowLeft className="text-white m-auto" />
      </button>
      <p>{checks[currentCheck].date}</p>
      <p>{checks[currentCheck].number}</p>
      <button className="w-[30px] h-[30px] rounded-full bg-tertairy">
        <FaArrowRight
          onClick={() => checkScroll(currentCheck)}
          className="text-white m-auto"
        />
      </button>
    </div>
  );

  // Sets the current check to be displayed.
  const checkScroll = (currentCheck) => {
    if (currentCheck < checks.length - 1) return setCurrentCheck((prev) => prev + 1);
    setCurrentCheck(0);
  };

  const humanResourcesContent = (
    <div className="flex">
      <div className="w-[100px] h-[100px] border border-black p-2">
        <FaUser className="w-full h-full" />
      </div>
      <div className="flex flex-col mx-2">
        <p>Jane Doe</p>
        <p>CFO</p>
        <p>123-456-7890</p>
        <p>email@email.com</p>
      </div>
    </div>
  );

  return (
    <main className="bg-black h-full py-6 flex flex-col justify-center bg-white lg:w-full lg:flex lg:flex-col lg:justify-center">
      <div className="flex justify-between items-center">
        <h1 className="text-black text-4xl ml-12 font-bold lg:text-center lg:text-6xl lg:mt-[150px]">
          Welcome back, John
        </h1>
        <button className="w-[140px] h-[25px] mr-12 rounded-md bg-tertairy text-white lg:mt-[150px]">
          iSolved University
        </button>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-2">
        {/* Can map through an array of objects with the mock data for DRY code */}
        <ProfileCard header={"MY PROFILE"} content={myProfileContent} />
        <ProfileCard header={"NOTIFICATIONS"} content={notificationContent} />
        <ProfileCard header={"MY PAY"} content={myPayContent} />
        <ProfileCard
          header={"MY HUMAN RESOURCES"}
          content={humanResourcesContent}
        />
      </div>
    </main>
  );
};

export default Main;
