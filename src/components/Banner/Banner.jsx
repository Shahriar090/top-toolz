import Container from "../../shared/Container";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <Container>
      <div className="h-screen">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-gray-200 text-center tracking-wide">
          Empower Your Projects With{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Top Toolz
          </span>
        </h1>
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
