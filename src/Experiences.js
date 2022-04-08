import fiverr_logo from "./img/logos/fiverr.jpg";
import github_logo from "./img/logos/github_logo.png";
const Experiences = () => {
  return (
    <div className=" experiences flex flex-colflex flex-col p-4 sm:p-6 rounded-xl bg-white max-w-full xl:max-w-[413px] mx-2 my-4 sm:m-4">
      <div className="mb-4 lg:mb-4">
        <h2 className="gray-2 mb-3 font-medium text-lg">Experiences</h2>
      </div>
      <div className="cards-items">
        <div className="card-item flex items-start justify-between mt-4 mb-6">
          <div className="card-img mr-4 bg-green-200 rounded">
            <img
              src={fiverr_logo}
              alt={"fiverr_logo"}
              className="max-w-[84px] rounded aspect-square object-cover"
            />
          </div>
          <div className="card-info">
            <span className="card-date gray-3 text-sl font-medium">
              Jule 2019 - Current
            </span>
            <article className="my-3">
              <h3 className="font-semibold gray-4 text-sm">
                Front-end developer
              </h3>
              <p className="mt-8 gray-3 font-medium text-sm">
                Donec aliquam est dui, vel vestibulum diam sollicitudin id.
                Quisque feugiat malesuada molestie.
              </p>
            </article>
          </div>
        </div>
        <div className="card-item flex items-start justify-between mt-4 mb-2">
          <div className="card-img mr-4 bg-green-200 rounded">
            <img
              src={github_logo}
              alt={"github_logo"}
              className="max-w-[84px] rounded aspect-square object-cover"
            />
          </div>
          <div className="card-info">
            <span className="card-date gray-3 text-sl font-medium">
              Jule 2019 - Current
            </span>
            <article className="my-3">
              <h3 className="font-semibold gray-4 text-sm">
                Front-end developer
              </h3>
              <p className="mt-8 gray-3 font-medium text-sm">
                Donec aliquam est dui, vel vestibulum diam sollicitudin id.
                Quisque feugiat malesuada molestie.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
