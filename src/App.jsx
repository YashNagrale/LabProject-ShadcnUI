import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import CardInfo from "./components/CardInfo";
import MovingCards from "./components/MovingCards";

function App() {
  return (
    <>
      <Navbar />
      <MovingCards />
      <div className="flex justify-center gap-8 flex-wrap my-10 ">
        <CardInfo
          title="Buy Electronics"
          description=""
          imgUrl="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/arduino-board-types.jpg"
        />

        <CardInfo
          title="Services"
          description=""
          imgUrl="https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg"
        />

        <CardInfo
          title="Buy Electronics"
          description=""
          imgUrl="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/arduino-board-types.jpg"
        />

        <CardInfo
          title="Services"
          description=""
          imgUrl="https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg"
        />

        <CardInfo
          title="Services"
          description=""
          imgUrl="https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg"
        />

        <CardInfo
          title="Services"
          description=""
          imgUrl="https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg"
        />

                <CardInfo
          title="Laser Cutting"
          description=""
          imgUrl="https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg"
        />
      </div>
      {/* </div> */}
      <Toaster
        position="top-center"
        swipeDirections={["top", "left", "right"]}
      />
    </>
  );
}

export default App;
