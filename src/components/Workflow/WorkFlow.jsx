import Container from "../../shared/Container";
import { FaRegCircleCheck } from "react-icons/fa6";
import codingImg from "../../assets/images/coding-image.avif";
import { workflowItems } from "./Items";
const WorkFlow = () => {
  return (
    <Container>
      <section>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-center">
          Streamline Your Workflow
        </h1>
      </section>

      <section className="flex flex-col md:flex-row justify-between gap-10 items-center mt-10 lg:mt-20">
        <div className="img w-full lg:w-1/2">
          <img src={codingImg} alt="Coding Image" className="rounded-sm" />
        </div>
        <div className="texts w-full lg:w-1/2 ">
          {workflowItems.map((item, index) => (
            <div key={index} className="flex items-center  gap-5 space-y-6">
              {/* check icon for every single item */}
              <div className="text-orange-500  bg-neutral-900 h-10 w-10 p-2 flex items-center justify-center rounded-full">
                <FaRegCircleCheck />
              </div>
              <div className="item">
                <h2 className="text-lg font-semibold text-orange-500">
                  {item.title}
                </h2>
                <p className="max-w-[40ch] text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default WorkFlow;
