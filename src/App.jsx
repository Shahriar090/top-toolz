import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />

      <Banner />
      <Features />
    </div>
  );
};

export default App;
