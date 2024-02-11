function Task() {
  return (
    <>
      <div className="task-container p-5">
        <div>
          <h3 className="text-lg text-gray-200">Today's Tasks</h3>
          <p className="text-sm text-gray-500 text-[11px]">Design Coder</p>
        </div>
        <div>
          <div className="ClassName mt-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="line-gradient w-1 h-12 rounded-3xl bg-gradient-to-b from-sky-300 to-blue-500"></div>
              <div className="grid">
                <h3 className="font-medium text-sm text-gray-200">Eat Ayam</h3>
                <p className="text-[10px] mt-1 text-gray-400">home kitchen</p>
              </div>
            </div>
            <div className="time">
              <h4 className="text-[12px] text-gray-200">10.00 AM</h4>
            </div>
          </div>
          <div className="ClassName mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="line-gradient w-1 h-12 rounded-3xl bg-gradient-to-b from-purple-400 to-blue-500"></div>
              <div className="grid">
                <h3 className="font-medium text-sm text-gray-200">Eat Ayam</h3>
                <p className="text-[11px] mt-1 text-gray-400">home kitchen</p>
              </div>
            </div>
            <div className="time">
              <h4 className="text-[12px] text-gray-200">10.00 AM</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
