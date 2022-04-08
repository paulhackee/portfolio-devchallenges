import video_editing from "./img/hobbies/videoediting.jpeg";
import cooking from "./img/hobbies/cooking.jpeg";

const Experiences = () => {
  return (
    <div className="hobbies flex flex-col p-4 sm:p-6 rounded-xl bg-white max-w-full xl:max-w-[413px] mx-2 my-4 sm:m-4">
      <div className="mb-2.5">
        <h2 className="gray-2 font-medium text-lg">Hobbies</h2>
      </div>
      <div className="cards-items">
        <div className="card-item flex flex-wrap items-start justify-between mt-4 mb-6">
          <div className="card-img w-full bg-gray-200 rounded-xl mb-3.5">
            <img
              src={video_editing}
              alt={"video_editing"}
              className="w-full rounded-xl aspect-ratio object-cover lg:max-h-[140px]"
            />
          </div>
          <div className="card-info">
            <article className="my-3">
              <h3 className="font-semibold gray-4 text-sm">Video Editing</h3>
              <p className="mt-2.5 gray-3 font-medium text-sm">
                Donec aliquam est dui
              </p>
            </article>
          </div>
        </div>
        <div className="card-item flex flex-wrap items-start justify-between mt-4">
          <div className="card-img w-full bg-gray-200 rounded-xl mb-3.5">
            <img
              src={cooking}
              alt={"cooking"}
              className="w-full rounded-xl aspect-ratio object-cover lg:max-h-[140px]"
            />
          </div>
          <div className="card-info">
            <article className="my-3">
              <h3 className="font-semibold gray-4 text-sm">Cooking</h3>
              <p className="mt-2.5 gray-3 font-medium text-sm">
                Donec aliquam est dui
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
