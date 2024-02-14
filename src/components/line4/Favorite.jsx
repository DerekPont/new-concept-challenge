import Asset from "./asset/Asset.jpg";

function Favorite() {
  return (
    <>
      <div className="Favorite-entertaiment-container">
        <div className="asset">
          <img src={Asset} alt="" width={250} />
        </div>
        <div className="desk-entertaiment px-5 py-7">
          <h3 className="text-[12px] font-medium text-gray-300">
            <span className="text-yellow-400">Sound System </span>In Indonesia
          </h3>
          <div className="desk-analytic text-[11px] text-gray-600 mt-1 flex items-center gap-3">
            <p>Likes 1K</p>
            <p>Comments 221</p>
          </div>
          <div className="for-input">
            <input type="text" name="" className="text-[12px] border text-gray-200 border-gray-700 rounded-lg w-52 mt-6 p-3 bg-transparent" id="" placeholder="Leave a comment" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorite;
