import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";

const Clients = () => {
    return (
        <div className="py-20" id="about"> 
        <h1 className="heading">
              About  {""}
          <span className="text-purple"> Me</span>
        </h1>
        <div className="flex flex-col items-center">
            <div className="h-[50vh] md:h-[30rem]">
              <div className="flex flex-col h-[50vh] md:h-[30rem] rounded-md antialiased items-start relative">
              <InfiniteMovingCards
                 items={testimonials}
                   direction="right"
                   speed="slow"          
                 />
              </div>
            </div>
        </div>
        </div>
      );
}
 
export default Clients;