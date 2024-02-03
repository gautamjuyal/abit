import ReleasedVideo from "./ReleasedVideo";

const Releases = ()=>{
  const stats = {
    sharedVideos : 1,
    fundsRaised : 9510,
    coOwners : 317,
    coOwnersEarning : 3804
  }
  const releasedVideos = [
    {
      id: "123",
      name : 'The Sound of Silence',
      shares : 317,
      percentShareOffered : 75,
      raisedAmount : 9510,
      thumbnail : "thumbnail.png"
    }
  ]

  return(
    <div className="pt-[123px] px-[96px]">
      <div className="flex justify-between">
        <div className="font-serif">
          <div className="text-[28px]">Releases</div>
          <div className="mt-[14px] italic text-[#565656]">Videos that you upload in collaboration with aBit appear here.</div>
        </div>
        <div className="flex font-inter">
          <div className="border-l border-[##7A7A7A] px-[17px] min-w-[145px]">
            <span className="font-bold text-[#565656]">{stats.sharedVideos}</span><br /> <span className=" text-[14px] font-[400] text-[#696969]">Shared<br /> Videos</span> 
          </div>
          <div className="border-l border-[##7A7A7A] px-[17px] min-w-[145px]">
            <span className="font-bold text-[#565656]">${stats.fundsRaised}</span><br /> <span className=" text-[14px] font-[400] text-[#696969]">Funds<br /> Raised</span> 
          </div>
          <div className="border-l border-[##7A7A7A] px-[17px] min-w-[145px]">
            <span className="font-bold text-[#565656]">{stats.coOwners}</span><br /><span className=" text-[14px] font-[400] text-[#696969]">Co-owner<br /> community</span> 
          </div>
          <div className="border-l border-[##7A7A7A] px-[17px] min-w-[145px]">
            <span className="font-bold text-[#565656]">${stats.coOwnersEarning}</span><br /><span className=" text-[14px] font-[400] text-[#696969]">Co-owner<br /> Earnings</span> 
          </div>
        </div>
      </div>

      <div className="my-[68px] flex gap-[42px]">
        <div className="bg-[#EDEDED] w-[283px] h-[312px] p-8 rounded-[24px] items-center  justify-end text-center text-[#A0A0A0] flex flex-col">
          <img src="plus.png" alt="add" className="w-8" />
          <div className="mt-[62px] font-[400] font-inter">You haven’t uploaded any videos with aBit yet. Add now!</div>
        </div>
        {releasedVideos.map(video => {
          return(
            <ReleasedVideo details={video} key={video.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Releases;