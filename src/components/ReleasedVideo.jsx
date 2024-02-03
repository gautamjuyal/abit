const ReleasedVideo = ({details})=>{
  return(
    <div className={`w-[283px] h-[312px] relative flex rounded-[24px] overflow-hidden`}>
      <img src={`${details.thumbnail}`} alt="thumbnail"  className="absolute object-cover w-full h-full z-[-1]"/>
      <div className="w-full h-full text-[#fff] p-4 flex flex-col justify-between">
        <div className="font-bold text-[20px]">{details.name}</div>
        <div className="bg-[#FFFFFF20] flex items-center justify-between rounded-[12px] px-5 py-2">
          <div className="text-center">
            <span className="text-[12px] font-[500]">Shares</span><br /><span className="text-[14px] font-[700]">{details.shares}</span> 
          </div>
          <div className="text-center">
            <span className="text-[12px] font-[500]">Offered</span><br /><span className="text-[14px] font-[700]">{details.percentShareOffered}%</span>
          </div>
          <div className="text-center">
            <span className="text-[12px] font-[500]">Raised</span><br /><span className="text-[14px] font-[700]">${details.raisedAmount}</span> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReleasedVideo;