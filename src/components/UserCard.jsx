const UserCard = ({className})=>{
  const user = {
    name : "DAN MACE",
    username : "/Johny_Films/",
    bio: "Simply a film fan creating original content for YouTube. Let’s Collaborate.",
    profileMode : 'Creator'
  }
  return(
    <div className={`border flex bg-[#b4b4b4] max-w-[571px] rounded-[24px] overflow-hidden ${className}`}>
      <div className="flex">
        <img src="creator.png" alt="creator" className="w-full object-cover" />
      </div>
      <div className="pt-[23px] pr-[50px] pb-[38px] pl-[31px] box-border">
        <div className="flex justify-between align-center">
          <div className="uppercase text-[#000] text-[24px] font-bold">{user.name}</div>
          <div className="text-[#696969]">{user.username}</div>
        </div>
        <div className="mt-[21px] text-[#696969]">
          <div className="font-bold">Bio</div>
          <div>{user.bio}</div>
        </div>
        <div className="w-full border-2 border-[#000] rounded-md mt-4 bg-[#00000065]">
          <div className="flex w-[50%] bg-[#fff] justify-center py-2 rounded-md border-r-2 border-[#000]">Creator</div>
        </div>
      </div>
    </div>
  )
}

export default UserCard;