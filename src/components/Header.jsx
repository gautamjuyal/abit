const Header = ()=>{
  return(
    <div className="w-full h-[110px] flex items-center bg-paper bg-[#f7f7f7] bg-center">
      <div className="pl-[123px]">
        <img src="aBit.png" alt="logo" className="w-[46px]" />
      </div>
      <div className="pr-[54px] flex justify-end w-full items-center">
        <button className="px-[22px] py-[12px] mr-[22px] border-2 border-[#764CC2] text-[#764CC2] font-bold rounded-full font-raleway">Share new video</button>
        <button className="mr-[15px]"><img src="wallet.png" alt="wallet" className="w-[28px]" /></button>
        <button className="mr-[15px]"><img src="notification.png" alt="notification" className="w-[36px]" /></button>
        <button className="border-2 border-[#000] w-[32px] h-[32px mr-[15px] rounded-full overflow-hidden"><img src="creator.png" alt="user" className="w-[32px]" /></button>
        <button><img src="arrow.png" alt="arrow" className="w-[24px]" /></button>
      </div>
    </div>
  )
}

export default Header;