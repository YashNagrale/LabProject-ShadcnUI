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
      title: "3D Printing",
      imgUrl:
        "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/01/_Different%20Types%20Of%203D%20Printing%20Technologies_1_1673449314.png",
    },
    {
      title: "Laser cutting",
      imgUrl:
        "https://www.americanmicroinc.com/wp-content/uploads/2021/07/blog-featured.jpg",
    },
    {
      title: "PCB Design",
      imgUrl:
        "https://etteplan.b-cdn.net/2024/01/PCB-scaled-aspect-ratio-5-3-2048x1229.jpg?width=2048&quality=60",
    },
    {
      title: "More",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg",
    },
        {
      title: "Roshesh",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center overflow-x-clip">
      <div className="relative w-full max-w-7xl">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
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
