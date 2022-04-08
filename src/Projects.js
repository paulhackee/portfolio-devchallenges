import card_lemonwares from "./img/projects/lemonwares.jpg";
import card_boosted from "./img/projects/boosted.jpg";
import card_about from "./img/projects/business.webp";

const Projects = () => {
  return (
    <div className="projects flex flex-col">
      <div className="mb-2.5 bg-white p-4 sm:p-6 rounded-xl  max-w-full  mx-2 my-4 sm:m-4">
        <h2 id="cards" className="gray-2 font-medium text-md lg:text-lg">
          Projects <span>(3)</span>
        </h2>
      </div>
      <div className="cards-items">
        <div className="card-item flex flex-wrap lg:flex-nowrap items-center sm:items-start justify-center sm:justify-start mb-2.5 bg-white p-4 sm:p-6 rounded-xl  max-w-full  mx-2 my-4 sm:m-4">
          <div className="card-img bg-gray-200 rounded-xl w-full lg:w-auto lg:max-w-[322px] lg:mr-8 mb-4 lg:mb-0">
            <img
              src={card_lemonwares}
              alt={"lemonwares"}
              className="w-full rounded-xl object-cover aspect-square lg:max-h-[274px]"
            />
          </div>
          <div className="card-info flex-1 flex-col justify-between">
            <div className="card-hashtags inline-flex items-center mb-6 gray-2">
              <a className="inline-flex text-sm mr-2.5" href="articles/#html">
                #HTML
              </a>
              <a className="inline-flex text-sm mr-2.5" href="articles/#css">
                #CSS
              </a>
              <a
                className="inline-flex text-sm mr-2.5"
                href="articles/#responsive"
              >
                #responsive
              </a>
            </div>
            <article className="mb-12">
              <h3 className="font-medium gray-4 text-lg mb-[18px]">
                Lemonwares landing
              </h3>
              <p className="gray-3 font-medium text-sm">
                In this project, I work with HTML and CSS to create a responsive
                page.
              </p>
            </article>
            <div className="card-btns flex flex-wrap sm:flex-nowrap items-center">
              <button className="flex items-center justify-center mb-4 sm:mb-0 lg:max-w-[136px] text-center p-3 w-full blue text-white rounded-xl text-md font-medium mr-2">
                Demo
              </button>
              <button className="flex items-center justify-center mb-4 sm:mb-0 lg:max-w-[136px] text-center p-3 w-full blue-c rounded-xl text-md font-medium mr-2 blue-border ">
                Code
              </button>
            </div>
          </div>
        </div>
        <div className="card-item flex flex-wrap lg:flex-nowrap items-center sm:items-start justify-center sm:justify-start mb-2.5 bg-white p-4 sm:p-6 rounded-xl  max-w-full  mx-2 my-4 sm:m-4">
          <div className="card-img bg-gray-200 rounded-xl w-full lg:w-auto lg:max-w-[322px] lg:mr-8 mb-4 lg:mb-0">
            <img
              src={card_boosted}
              alt={"boosted"}
              className="w-full rounded-xl object-cover aspect-square lg:max-h-[274px]"
            />
          </div>
          <div className="card-info flex-1 flex-col justify-between">
            <div className="card-hashtags inline-flex items-center mb-6 gray-2">
              <a className="inline-flex text-sm mr-2.5" href="articles/#html">
                #HTML
              </a>
              <a className="inline-flex text-sm mr-2.5" href="articles/#css">
                #CSS
              </a>
              <a
                className="inline-flex text-sm mr-2.5"
                href="articles/#responsive"
              >
                #responsive
              </a>
            </div>
            <article className="mb-12">
              <h3 className="font-medium gray-4 text-lg mb-[18px]">
                Boosted landing
              </h3>
              <p className="gray-3 font-medium text-sm">
                In this project, I work with HTML and CSS to create a responsive
                page.
              </p>
            </article>
            <div className="card-btns flex flex-wrap sm:flex-nowrap items-center">
              <button className="flex items-center justify-center mb-4 sm:mb-0 lg:max-w-[136px] text-center p-3 w-full blue text-white rounded-xl text-md font-medium mr-2">
                Demo
              </button>
              <button className="flex items-center justify-center mb-4 sm:mb-0 lg:max-w-[136px] text-center p-3 w-full blue-c rounded-xl text-md font-medium mr-2 blue-border ">
                Code
              </button>
            </div>
          </div>
        </div>
        <div className="card-item flex flex-wrap lg:flex-nowrap items-center sm:items-start justify-center sm:justify-start mb-2.5 bg-white p-4 sm:p-6 rounded-xl  max-w-full  mx-2 my-4 sm:m-4">
          <div className="card-img bg-gray-200 rounded-xl w-full lg:w-auto lg:max-w-[322px] lg:mr-8 mb-4 lg:mb-0">
            <img
              src={card_about}
              alt={"about"}
              className="w-full rounded-xl object-cover aspect-square lg:max-h-[274px]"
            />
          </div>
          <div className="card-info flex-1 flex-col justify-between">
            <div className="card-hashtags inline-flex items-center mb-6 gray-2">
              <a className="inline-flex text-sm mr-2.5" href="articles/#html">
                #HTML
              </a>
              <a className="inline-flex text-sm mr-2.5" href="articles/#css">
                #CSS
              </a>
              <a
                className="inline-flex text-sm mr-2.5"
                href="articles/#responsive"
              >
                #responsive
              </a>
            </div>
            <article className="mb-12">
              <h3 className="font-medium gray-4 text-lg mb-[18px]">
                About landing
              </h3>
              <p className="gray-3 font-medium text-sm">
                In this project, I work with HTML and CSS to create a responsive
                page.
              </p>
            </article>
            <div className="card-btns flex flex-wrap sm:flex-nowrap items-center">
              <button className="flex items-center justify-center mb-4 sm:mb-0 lg:max-w-[136px] text-center p-3 w-full blue text-white rounded-xl text-md font-medium mr-2">
                Demo
              </button>
              <button className="flex items-center justify-center mb-4 sm:mb-0 lg:max-w-[136px] text-center p-3 w-full blue-c rounded-xl text-md font-medium mr-2 blue-border ">
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
