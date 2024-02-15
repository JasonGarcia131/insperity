
//The footer is positioned at the bottom in mobile view but on the top of the main component in desktop view
const Footer = () => {
  return (
    <footer className='w-full h-full border-t-white text-white bg-header md:h-[120px] lg:h-[140px] lg:border-b-2 lg:border-tertairy lg:bg-none lg:right-0 lg:w-[79.9%] lg:text-xl lg:absolute lg:top-[4%]'>
        <div className='w-[95%] h-full flex flex-col flex-wrap justify-between items-start m-auto py-6 lg:items-center lg:flex-row lg:justify-between lg:text-black lg:text-2xl'>
        <p><b>Employee #:</b> 4015</p>
        <p><b>Pay Group:</b> Semi Monthly</p>
        <p><b>Hire Date:</b> 2/13/2024</p>
        <p><b>Hourly</b> ####.##</p>
        <p><b>Working Location:</b> City, State</p>
        <p><b>Department:</b> WRHS - Warehouse</p>
        <p><b>Client:</b> 431234 - Company</p>
        <p><b>Company:</b> Company Name</p>
        </div>
       
    </footer>
  )
}

export default Footer