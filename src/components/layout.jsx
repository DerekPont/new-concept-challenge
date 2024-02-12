import HeroSection from "./line1/Hero";
import SocialMediaSection from "./line1/SocialMedia";
import GlassmorpishmSection from "./line1/Glassmorpishm";
import BoxSearch from "./line1/BoxSeach";
import TaskSection from "./line2/Task";
import HistorySection from "./line2/HistoryProfile";
import CookiesSection from "./line2/Cookies";
import CardTimelineSection from "./line3/Cardtimeline";
import GitHubProfileSection from "./line4/GitHubProfile";

function layout() {
  return (
    <coloums-content>
      {/* // Header */}
      <div className="header flex justify-center mt-16">
        <h3 className="text-3xl tracking-tight text-gray-400 font-bold">ZEETA PORTFOLIO</h3>
      </div>
      {/* // Line 1 */}
      <div className="grid gap-5 mt-20">
        <div className="flex justify-center gap-5">
          <div className=" shadow-sm w-[250px] h-[430px] hover:scale-105 duration-500  bg-[#171717] rounded-3xl">
            <HeroSection></HeroSection>
          </div>
          <div className="card-grid">
            <div className="w-[250px] h-[250px] hover:scale-105 duration-500 shadow-sm bg-[#171717] rounded-3xl">
              <SocialMediaSection></SocialMediaSection>
            </div>
            <div className="w-[250px] mt-5 h-[90px] hover:scale-105 duration-500 shadow-sm bg-[#171717] rounded-2xl">
              <BoxSearch></BoxSearch>
            </div>
          </div>
          <div className="w-[250px] h-[360px] hover:scale-105 duration-500 rounded-3xl bg-[#171717]">
            <GlassmorpishmSection></GlassmorpishmSection>
          </div>
        </div>
        {/* // line 2 */}
        <div className="flex justify-center gap-5">
          <div className="shadow-sm w-[250px] h-[430px] hover:scale-105 duration-500 bg-[#171717] rounded-3xl"></div>
          <div className="flex gap-5 -mt-[70px]">
            <div className="card-grid">
              <div className="h-[250px] w-[250px] hover:scale-105 duration-500 bg-[#171717] rounded-3xl">
                <TaskSection></TaskSection>
              </div>
              <div className="h-[50px] mt-5 w-[250px] hover:scale-105 duration-500 bg-[#171717] rounded-xl">
                <CookiesSection></CookiesSection>
              </div>
            </div>
            <div className="h-[320px] w-[250px] hover:scale-105 duration-500 bg-[#171717] rounded-3xl">
              <HistorySection></HistorySection>
            </div>
          </div>
        </div>
        {/* // line 3 */}
        <div className="flex justify-center gap-5">
          <div className="w-[250px] h-[300px] bg-[#171717] hover:scale-105 duration-300 rounded-3xl">
            <GitHubProfileSection></GitHubProfileSection>
          </div>
          <div className="-mt-44">
            <div className="w-[520px] bg-[#171717] rounded-3xl h-[300px]">
              <CardTimelineSection></CardTimelineSection>
            </div>
          </div>
        </div>
        {/* // line 4 */}
        <div className="flex justify-center gap-5">
          <div className="w-[250px] h-[250px] bg-[#171717] rounded-3xl"></div>
          <div className="flex gap-5 -mt-44">
            <div className="grid gap-5">
              <div className="w-[250px] h-[300px] bg-[#171717] rounded-3xl"></div>
              <div className="w-[250px] h-[100px] bg-[#171717] rounded-2xl"></div>
            </div>
            <div className="w-[250px] h-[365px] bg-[#171717] rounded-3xl"></div>
          </div>
        </div>
        {/* // line 5 */}
        <div className="flex gap-5 justify-center">
          <div className="w-[250px] h-[280px] bg-[#171717] rounded-3xl"></div>
          <div className="w-[250px] h-[280px] bg-[#171717] rounded-3xl"></div>
          <div className="grid gap-5 -mt-14">
            <div className="w-[250px] h-[130px] bg-[#171717] rounded-3xl"></div>
            <div className="w-[250px] h-[185px] bg-[#171717] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </coloums-content>
  );
}
export default layout;
