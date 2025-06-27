import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import CardInfo from "./CardInfo";

function MovingCards() {
  const cards = [
    {
      title: "Buy Electronics",
      imgUrl:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/arduino-board-types.jpg",
    },
    {
      title: "Services",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg",
    },
    {
      title: "Buy Electronics",
      imgUrl:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/arduino-board-types.jpg",
    },
    {
      title: "Services",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg",
    },
    {
      title: "Services",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg",
    },
    {
      title: "Services",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg",
    },
  ];

  // return (
  //   <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-8">
  //     <Carousel
  //       opts={{
  //         align: "start",
  //         slidesToScroll: 1,
  //         loop: true,
  //         skipSnaps: false,
  //       }}
  //       className="w-[95%] border-2 border-amber-400"
  //     >
  //       <CarouselContent className="-ml-1  border-2 border-red-400">
  //         {cards.map((card, index) => (
  //           <CarouselItem
  //             key={index}
  //             className="pl-1 basis-full lg:basis-1/3  border-2 border-blue-400"
  //           >
  //             <div className="p-1 w-[16rem]  border-2 border-green-400">
  //               <CardInfo title={card.title} description="" imgUrl={card.url} />
  //             </div>
  //           </CarouselItem>
  //         ))}
  //       </CarouselContent>
  //       <CarouselPrevious />
  //       <CarouselNext />
  //     </Carousel>
  //   </div>
  // );

  return (
    <div className="flex justify-center">
      <Carousel className="w-[75%]">
        <CarouselContent className="-ml-1">
          {cards.map((card, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <CardInfo title={card.title} description="" imgUrl={card.url} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MovingCards;
