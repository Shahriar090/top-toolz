import Container from "../../shared/Container";
import { FaRegCircleCheck } from "react-icons/fa6";
import { pricingOptions } from "./PricingOptions";
const Pricing = () => {
  return (
    <Container>
      <section>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-center tracking-wide">
          Pricing
        </h1>
      </section>
      {/* pricing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 lg:mt-20">
        {pricingOptions.map((item, index) => (
          <div key={index} className="cursor-pointer">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <h1 className="text-3xl text-gray-200">
                {item.title}
                {item.title === "Pro" && (
                  <span className="text-3xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ml-3">
                    Most Popular
                  </span>
                )}
              </h1>
              <p className="text-gray-200 text-2xl mt-3">
                {item.price}

                <span className="text-sm ml-2 text-gray-300 tracking-tight">
                  /Month
                </span>
              </p>
              <ul>
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className=" flex items-center space-x-3 mb-3 mt-10"
                  >
                    <FaRegCircleCheck className="text-orange-500" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center justify-center text-gray-300 text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gradient-to-r from-orange-500 to-orange-700 border border-orange-800 rounded-lg transition-all duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Pricing;
