import Container from "../../shared/Container";

import vid1 from "../../assets/Video/vid-1.mp4";
import vid2 from "../../assets/Video/vid-2.mp4";

const Banner = () => {
  return (
    <Container>
      <div className="h-screen">
        <div className="banner-texts space-y-7">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl text-gray-200 text-center tracking-wide font-bold">
            Empower Your Projects With{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Top Toolz
            </span>
          </h1>
          <p className="text-gray-300 max-w-[50ch] mx-auto text-center font-semibold ">
            Welcome to Top Toolz! Discover curated tools and resources to boost
            your projects. Join us and unlock your projects potential today.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <button className="px-8 py-2 rounded-md text-gray-200 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-700">
              Start For Free
            </button>
            <button className="px-8 py-2 rounded-md text-gray-200 cursor-pointer border-2 border-gray-200 hover:bg-gradient-to-r from-orange-500 to-orange-700">
              Documentation
            </button>
          </div>
        </div>
        <div className="videos flex justify-center flex-col md:flex-row gap-5 mt-16">
          <video
            autoPlay
            muted
            loop
            className="rounded-lg w-full md:w-2/5 border border-orange-700  "
          >
            <source src={vid1} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            className="rounded-lg w-full md:w-2/5 border border-orange-700 shadow shadow-orange-400 "
          >
            <source src={vid2} type="video/mp4" />
          </video>
        </div>
      </div>
    </Container>
  );
};

export default Banner;

/* <div className="relative h-screen">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        ></div>
        <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      </div> */
