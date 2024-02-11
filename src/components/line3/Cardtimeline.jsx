import Asset from "./asset/Asset.jpg";

function Cardtimeline() {
  return (
    <>
      <div className="timeline-container px-5 py-5">
        <div className="Header flex justify-between">
          <h3 className="font-medium text-sm text-gray-300">For you</h3>
          <h3 className="font-medium text-gray-300 text-[12px]">09.00 PM</h3>
        </div>
        <div className="for-card-bg-gradient mt-6 flex justify-between">
          <div className="p-4 rounded-xl bg-gradient-to-br w-[150px] from-[#78ffb2] to-[#557eea] hover:scale-105 duration-300">
            <div className="flex justify-center">
              <img src={Asset} alt="" className="rounded-full" width={80} />
            </div>
            <h3 className="text-[12px] font-medium mt-14 text-gray-300">
              Life is not meant <br />
              ot be plain
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-bl w-[150px] from-[#fa7d6b] to-[#ff5955] hover:scale-105 duration-300">
            <div className="flex justify-center">
              <img src={Asset} alt="" className="rounded-full" width={80} />
            </div>
            <h3 className="text-[12px] font-medium mt-14 text-gray-300">
              The Craziest Life <br />
              Hack Ever
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-tl w-[150px] from-[#7a53ed] to-[#ff83c5] hover:scale-105 duration-300">
            <div className="flex justify-center">
              <img src={Asset} alt="" className="rounded-full" width={80} />
            </div>
            <h3 className="text-[12px] font-medium mt-14 text-gray-300">
              Amazing <br />
              experiments
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardtimeline;
