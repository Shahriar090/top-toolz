import { useEffect, useState } from "react";
import Container from "../../shared/Container";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("featuresData.json");
        if (!res.ok) {
          throw new Error("Failed To Fetch Features");
        }
        const data = await res.json();
        setFeatures(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <div className="relative">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Features
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 tracking-wide mt-3">
            Explore{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Top Toolz
            </span>
          </h1>
        </div>
        {/* rendering features */}
        <div className="features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 md:mt-16">
          {loading ? (
            <div>
              {" "}
              <h1 className="text-center text-gray-200 animate-pulse">
                Loading...
              </h1>
            </div>
          ) : (
            features.map((feature) => (
              <div
                className="border-2 border-neutral-900 p-5 rounded-sm shadow-sm cursor-pointer hover:border-orange-600 transition-all duration-300"
                key={feature.id}
              >
                <div className="relative text-gray-200 space-y-3">
                  <h1 className="text-xl font-bold text-orange-600">
                    {feature.featureHead}
                  </h1>

                  <p className="text-gray-400 h-24 md:h-32">
                    {feature.featureDes}
                  </p>
                  <a href="#">
                    <button className="mt-8 sm:mt-0 px-8 py-2 rounded-md text-gray-200 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-800">
                      See Docs
                    </button>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default Features;
