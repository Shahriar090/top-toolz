import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Navbar from "./components/Navbar/Navbar";
import WorkFlow from "./components/Workflow/WorkFlow";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />

      <Banner />
      <Features />
      <WorkFlow />
    </div>
  );
};

export default App;
