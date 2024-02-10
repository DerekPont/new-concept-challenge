import Asset from "./asset/Asset.jpg";
function SocialMedia() {
  return (
    <>
      <div className="social-root-card px-5 py-5">
        <div className="profile flex items-center gap-3">
          <img src={Asset} className="rounded-full" alt="" width={50} />
          <div className="ClassName">
            <h3 className="text-lg text-gray-200 font-semibold">Zeeta Dev</h3>
            <p className="text-[10px] text-gray-400">Frontend Developer</p>
          </div>
        </div>
        <div className="status-social mt-10 flex gap-8">
          <div className="followers">
            <p className="text-gray-500 text-[12px] tracking-tight text-sm">Followers</p>
            <p className="text-gray-200 mt-1">355</p>
          </div>
          <div className="following">
            <p className="text-gray-500 text-[12px] tracking-tight text-sm">Following</p>
            <p className="text-gray-200 mt-1 text-sm">199</p>
          </div>
          <div className="post">
            <p className="text-gray-500 text-[12px] tracking-tight text-sm">Post</p>
            <p className="text-gray-200 mt-1 text-sm">4</p>
          </div>
        </div>
        <div className="for-button flex items-center mt-8 gap-2">
          <button className="w-44 rounded-full p-2 hover:scale-95 duration-300 bg-gradient-to-r from-[#84ffbc] to-[#537eef]">
            <a className="text-[12px] font-medium text-gray-200" href="#">
              Message
            </a>
          </button>
          <button className="w-44 rounded-full duration-300 p-2 bg-black">
            <a className="text-gray-200 font-medium text-[12px]" href="#">
              Follow
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
