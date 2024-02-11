import Asset from "./asset/Asset.jpg";
import basket from "./asset/Basket.svg";

function HistoryProfile() {
  return (
    <>
      <div className="history-container p-4">
        <div className="flex items-center gap-3">
          <img src={Asset} alt="" width={50} className="rounded-full" />
          <div>
            <h3 className="text-gray-200 font-medium">Zeeta FrontDev</h3>
            <p className="text-[10px] text-gray-400">Designer Coder Digital</p>
          </div>
        </div>
        <div className="desk-history-content">
          <p className="text-[11px] text-gray-300 mt-5 leading-5">
            Lorem ipsum dolor sit amet consectetur <span className="text-yellow-400">adipisicing</span> elit. Molestiae aut alias ratione blanditiis optio <span className="text-yellow-400"> laboriosam</span> molestias recusandae quasi numquam repellat.
          </p>
        </div>
        <div className="mt-20">
          <button className="for-button hover:scale-95 duration-300 bg-gradient-to-r px-24 py-2 from-yellow-200 to-yellow-400 rounded-full">
            <a href="#">
              <img src={basket} alt=".." width={20} />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default HistoryProfile;
