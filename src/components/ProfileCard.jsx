const ProfileCard = ({header, content}) => {
  return (
    <div className='w-[90%] h-[200px] border-2 border-black rounded-md shadow-xl shadow-stone-500 m-auto p-2 bg-white text-black my-8 px-2 lg:w-[40%] lg:h-[250px]'>
        <h2 className='font-bold text-xl mb-8 lg:text-2xl'>{header}</h2>
        {content}
    </div>
  )
}

export default ProfileCard