import laptop from "./img/blog/laptop.jpeg";

const Blog = () => {
  return (
    <div className="article flex flex-col">
      <div className="bg-white p-4 sm:p-6 rounded-xl  max-w-full  mx-2 my-4 sm:m-4">
        <h2 id="cards" className="gray-2 font-medium text-md lg:text-lg">
          Blog <span>(1)</span>
        </h2>
      </div>
      <div className="cards-items">
        <div className="card-item flex flex-wrap lg:flex-nowrap justify-between mb-2.5 bg-white pl-5 pt-9 pb-2.5 rounded-xl max-w-full m-4">
          <article className="card-info flex flex-col lg:max-w-xs order-2 lg:order-1 my-4 lg:m-0">
            <span className="card-category mb-[30px] white-1 text-sm font-medium">
              Blog
            </span>
            <h3 className="font-medium gray-4 text-lg lg:max-w-[178px] mb-7">
              How to organize your CSS
            </h3>
            <p className="gray-3 font-medium text-sm mb-5">
              In this article I tell the story about Proin eu justo sit amet
              lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
              Donec aliquam est dui, vel vestibulum diam sollicitudin id.
              Quisque feugiat malesuada molestie.
            </p>
            <a
              className="blue-c inline-block font-medium text-sm"
              href="https/dev.to"
            >
              dev.to
            </a>
          </article>
          <div className="card-img bg-gray-200 w-full lg:w-auto lg:max-w-[445px] lg:ml-4 order-1 lg:order-2">
            <img
              src={laptop}
              alt={"laptop"}
              className="w-full rounded-xl object-cover lg:aspect-auto h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
