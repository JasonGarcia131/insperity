import {FaUser, FaClock,  FaArrowDown, FaArrowUp} from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

const Nav = () => {

    // Toggles the navigation display between mobile and desktop view.
    const [toggle, setToggle] = useState({
        user: false,
        clock: false
    });

    // Toggles the users status when clocked in or clocked out.
    const [toggleClockIn, setToggleClockIn] = useState(false);

    // Used to display the users time when clocking in/ out.
    const [trackTransaction, setTrackTransaction] = useState("");

    // renders the loading component to simulate http request.
    const [isLoading, setIsLoading] = useState(false);

    // Gets the users time and sets the loading state.
    const transaction = () => {
        setToggleClockIn(!toggleClockIn)
        setIsLoading(true);
        var currentdate = new Date(); 
        var datetime =  (currentdate.getMonth()+1)  
                        + "/" + currentdate.getDate() + "/"
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();

        // Delays the function to render loading div to simulate http request.
        setTimeout(()=>{
        setTrackTransaction(datetime)
            setIsLoading(false)
        }
            , 1500);
    }

  return (
   <div className='sticky top-0 lg:w-[25%]'>
     <nav className='w-full text-white bg-tertairy flex justify-between px-2 lg:text-xl'>
        <div className='flex items-center' onClick={()=>setToggle((prev)=>({...toggle, user: !prev.user}))}>
            <FaUser/>
            <p className='mx-2'>Jason Garcia</p>
            {/* Dynamically renders the arrow when the drop down menu is active. */}
            {
                toggle.user ? <IoIosArrowUp className='active:hover:bg-red-900 lg:hidden'/>
                        : <IoIosArrowDown className='active:hover:bg-red-900 lg:hidden'/>
            }
        </div>
        <div className='flex items-center' onClick={()=>setToggle((prev)=>({...toggle, clock: !prev.clock}))}>
            <FaClock className='animate-pulse'/>
            <p className='ml-2'>Status: {toggleClockIn ? "OUT" : "IN"}</p>
        </div>
    </nav>
    <div className={`${toggle.user ? 'w-full h-full' : 'hidden'} text-white bg-black opacity-95 sidebar lg:w-full lg:h-screen lg:block lg:bg-black lg:text-white lg:opacity-100`}>
            <ul className='underline font-bold ml-2 py-2 lg:text-xl'>
                <li>Emergency Contact Updates</li>
                <li>Time</li>
                <li>Employee Welcome</li>
                <li>Employee Profile Picture</li>
                <li>Employee Profile</li>
                <li>Contact Information</li>
                <li>Documents</li>
                <li>Pay History</li>
                <li>Tax Forms</li>
                <li>Tax Updates Wizard</li>
                <li>Direct Deposit Updates</li>
            </ul>
        </div>
        <div className={`${toggle.clock ? 'w-[150px] h-[200px]' : 'hidden'} text-right rounded-md text-white bg-black opacity-95 sidebar absolute right-0 p-2 lg:top-[3%]`}>
            <ul className='underline'>
                <li onClick={()=>transaction()}>Clock {toggleClockIn ? "In" : "Out"}</li>
                <li>Submit Missed Punch</li>
            </ul>
            <div className='mt-2'>
                <p>Last Transaction:</p>
                {isLoading ? <div className='w-[30px] h-[30px] rounded-full float-right mt-2 border-4 border-tertairy border-b-tertairy/50 animate-spin'></div> 
                        : <p className={`${toggleClockIn ? 'text-red-500' : 'text-green-500'}`}>{trackTransaction}</p> }
            </div>
        </div>
    </div>
   
  )
}

export default Nav