import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import CardInfo from "./components/CardInfo";
import MovingCards from "./components/MovingCards";

function App() {
  return (
    <>
      <Navbar />
      <MovingCards />
      <Toaster
        position="top-center"
        swipeDirections={["top", "left", "right"]}
      />
    </>
  );
}

export default App;
