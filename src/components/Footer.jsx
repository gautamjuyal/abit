const Footer = ()=>{
  return(
    <div className="p-[135px] py- border-t flex justify-between">
      <div>
        <img src="aBit.png" alt="logo" className="w-[77px]" />
        <div className="mt-2 capitalize">
        Changing the way in which <br />creators and fans interact.
        </div>
      </div>
      <div className="border-l pl-6 flex flex-col justify-center gap-4">
        <a href="" alt="link" className="text-[#262626] text-[14px] font-bold">Home</a>
        <a href="" alt="link" className="text-[#262626] text-[14px] font-bold">Are you a Creator?</a>
        <a href="" alt="link" className="text-[#262626] text-[14px] font-bold">Support</a>
      </div>
    </div>
  )
}

export default Footer;