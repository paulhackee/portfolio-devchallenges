const CardsSkills = () => {
  return (
    <div className="cards flex flex-wrap md:flex-nowrap w-full max-h-fit">
      <div className="w-full flex-initial p-4 sm:p-6 rounded-xl bg-white min-w-auto xl:min-w-[415px] m-2 sm:m-4 h-max ">
        <h3 className="gray-2 text-md font-bold mb-4">Front end</h3>
        <div className="cards-items">
          <div className="cards-item flex items-center justify-between my-4">
            <p className="mr-4">React</p>
            <div className="progress-bg rounded max-w-[40%] xl:max-w-[237px] w-full h-[10px]">
              <div
                className="blue rounded w-[65%] h-full"
                value={65}
                max={100}
              ></div>
            </div>
          </div>
          <div className="cards-item flex items-center justify-between my-4">
            <p className="mr-4">Javascript</p>
            <div className="progress-bg rounded-xl max-w-[40%] xl:max-w-[237px] w-full h-[10px]">
              <div
                className="blue rounded-xl w-[75%] h-full"
                value={75}
                max={100}
              ></div>
            </div>
          </div>
          <div className="cards-item flex items-center justify-between my-4">
            <p className="mr-4">CSS</p>
            <div className="progress-bg rounded-xl max-w-[40%] xl:max-w-[237px] w-full h-[10px]">
              <div
                className="blue rounded-xl w-[90%] h-full"
                value={90}
                max={100}
              ></div>
            </div>
          </div>
          <div className="cards-item flex items-center justify-between my-4">
            <p className="mr-4">Tailwind</p>
            <div className="progress-bg rounded-xl max-w-[40%] xl:max-w-[237px] w-full h-[10px]">
              <div
                className="blue rounded-xl w-[45%] h-full"
                value={45}
                max={100}
              ></div>
            </div>
          </div>
          <div className="cards-item flex items-center justify-between mt-4">
            <p className="mr-4">Boostrap</p>
            <div className="progress-bg rounded-xl max-w-[40%] xl:max-w-[237px] w-full h-[10px]">
              <div
                className="blue rounded-xl w-[85%] h-full"
                value={85}
                max={100}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 sm:p-6  rounded-xl bg-white min-w-auto xl:min-w-[415px] m-2 sm:m-4 h-max">
        <h3 className="gray-2 text-md font-bold mb-4">Design</h3>
        <div className="cards-items">
          <div className="cards-item flex items-center justify-between my-4">
            <p className="mr-4">Figma</p>
            <div className="progress-bg rounded max-w-[40%] xl:max-w-[237px] w-full h-[10px]">
              <div
                className="blue rounded w-[75%] h-full"
                value={75}
                max={100}
              ></div>
            </div>
          </div>
          <div className="cards-item flex items-center justify-between mt-4">
            <p className="mr-4">Photoshop (2015)</p>
            <div className="progress-bg rounded-xl max-w-[40%] xl:max-w-[237px] w-full h-[10px]">
              <div
                className="blue rounded-xl w-[45%] h-full"
                value={45}
                max={100}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardsSkills;
