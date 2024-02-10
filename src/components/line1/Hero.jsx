import Asset from "./asset/Asset.jpg";
import "./Hero.css";
import Star from "./asset/Star.svg";
function Hero() {
  return (
    <>
      <div className="Hero">
        <div className="content">
          <div className="flex justify-center">
            <img src={Asset} alt="" className=" rounded-tl-3xl rounded-tr-3xl" width={300} />
          </div>
          <div className="desk-content px-4 py-4 relative bg-[#171717] h-20 -mt-20">
            <div>
              <h3 className="text-lg text-gray-400 font-semibold">Zeeta</h3>
              <p className="text-[10px] mt-1 text-gray-500">I am Zeeta Frontend Website Developer</p>
            </div>
            <div className="ratting">
              <p className="text-sm mt-10 text-gray-400">Ratting 3.90</p>
              <div className="flex items-center mt-1">
                <img src={Star} alt="Star" width={30} />
                <img src={Star} alt="Star" width={30} />
                <img src={Star} alt="Star" width={30} />
                <img src={Star} alt="Star" width={30} />
                <img src={Star} alt="Star" width={30} />
              </div>
            </div>
            <div className="for-button mt-10 flex gap-3">
              <button className="px-12 hover:scale-95 duration-300 py-2 rounded-full bg-gradient-to-r from-[#ffbb1d] to-[#ff8d91]">
                <a className="text-sm text-gray-100 foont-medium" href="#">Here Now</a>
              </button>
              <div className="p-2 rounded-full h-10 w-10 text-center text-gray-200 bg-gray-700">❤</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
