import persolImg from "./img/person.jpg";
const PersonInfo = () => {
  return (
    <div className="flex flex-col p-4 sm:p-6  rounded-xl bg-white max-w-full xl:max-w-[413px] m-2 sm:m-4">
      <div className="flex mb-4 sm:mb-6 bg-slate-500 rounded-xl w-full lg:min-h-[359px]">
        <img
          src={persolImg}
          alt={"persolImg"}
          className="rounded-xl object-cover aspect-square sm:aspect-auto w-[100%] sm:w-auto"
        />
      </div>
      <div className="mb-4 lg:mb-8">
        <h2 className="gray-2 mb-1.5 font-semibold text-lg">Paul Larin</h2>
        <p className="gray-3 text-md font-medium">Front-end developer</p>
      </div>
      <div className="mb-4 lg:mb-9">
        <a
          className="inline-flex items-center gray-2"
          href="mailto:paullarinweb@gmail.com"
        >
          <span className="material-icons outlined mr-4">mail</span>
          <p>paullarinweb@gmail.com</p>
        </a>
      </div>
      <article className="gray-3 text-md font-medium">
        <p className="lg:max-w-[333px]">
          Self-motivated developer, who is willing to learn and create
          outstanding UI applications.
        </p>
      </article>
    </div>
  );
};
export default PersonInfo;
