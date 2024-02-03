import UserCard from "./UserCard";

const DashCover = ()=>{
  return(
    <div className="relative">
      <div className="w-full flex">
        <img src="cover.png" alt="cover" className="w-full object-cover" />
      </div>
      <div className="bg-[#292828] text-[#ffffff80] py-[22px] flex justify-center font-gloria">John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now</div>
      <UserCard className="absolute bottom-[-60px] left-[122px]" /> 
    </div>
  )
}

export default DashCover;