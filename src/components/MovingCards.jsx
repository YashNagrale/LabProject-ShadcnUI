import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
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
      title: "Accessories",
      imgUrl:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/arduino-board-types.jpg",
    },
    {
      title: "Consulting",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg",
    },
    {
      title: "Extra",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg",
    },
    {
      title: "More",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg",
    },
  ];

  return (
    <div className="w-full flex justify-center overflow-x-clip">
      <div className="relative w-full max-w-7xl">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          {/* ✅ Buttons inside and slightly offset */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />

          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-2">
                  <CardInfo
                    title={card.title}
                    description=""
                    imgUrl={card.imgUrl}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default MovingCards;
