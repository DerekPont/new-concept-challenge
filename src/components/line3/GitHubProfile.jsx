import Asset from "./asset/zet.jpg";
import CommitGit from "./asset/CommitGit.svg";
import Light from "./asset/Light.svg";
import Toogle from "./asset/Toggle.svg";

function GitHubProfile() {
  return (
    <>
      <div className="github-profile-container p-5">
        <div className="profile flex items-center gap-3">
          <div className="p-1 w-14 rounded-full bg-gradient-to-r flex from-yellow-500 to-orange-500">
            <img src={Asset} alt="" width={50} className="rounded-full hover:scale-110 duration-300" />
          </div>
          <div className="grid">
            <h3 className="font-medium text-gray-200">Zeeta:)</h3>
            <h3 className="text-gray-400 text-[11px]">@z3t444</h3>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-10">
          <div className="grid">
            <p className="text-[12px] text-gray-400">Reposit</p>
            <p className="text-[15px] mt-1 text-gray-200 font-medium">14</p>
          </div>
          <div className="grid">
            <p className="text-[12px] text-gray-400">Followers</p>
            <p className="text-[15px] mt-1 text-gray-200 font-medium">6</p>
          </div>
          <div className="grid">
            <p className="text-[12px] text-gray-400">Following</p>
            <p className="text-[15px] mt-1 text-gray-200 font-medium">6</p>
          </div>
        </div>
        <div className="ClassName-box flex gap-4 items-center mt-10">
          <div className="bg-gradient-to-tl px-4 py-4 rounded-xl hover:scale-105 duration-300 from-[#efc15d] to-[#f89784]">
            <img src={CommitGit} alt="" width={30} />
          </div>
          <div className="bg-gradient-to-tl px-4 py-4 rounded-xl hover:scale-105 duration-300 from-[#93fdc8] to-[#537de6]">
            <img src={Light} alt="" width={30} />
          </div>
          <div className="bg-gradient-to-tl px-4 py-4 rounded-xl hover:scale-105 duration-300 from-[#f192c5] to-[#7e5bec]">
            <img src={Toogle} alt="" width={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GitHubProfile;
