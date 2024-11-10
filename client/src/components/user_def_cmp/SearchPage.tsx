import { useParams } from "react-router-dom";
import FilterPage from "./FilterPage";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Globe, MapPin, X } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import cardimg from "@/assets/hero_pizza.png";
const SearchPage = () => {
  const { text } = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <FilterPage />
          <div className="flex-1 ">
            {/* search input fields */}
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder=" Search by restourent & cuisines "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="bg-orange hover:bg-hoverOrange ">
                {" "}
                Search{" "}
              </Button>
            </div>
            {/* search items display here  */}
            <div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
                <h1 className="font-medium text-lg">
                  (2) Search result found{" "}
                </h1>
                <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                  {["Biryani", "momos", "nodules"].map(
                    (seletedFilter: string, idx: number) => (
                      <div
                        key={idx}
                        className="relative inline-flex items-center max-w-full "
                      >
                        <Badge
                          className="text-[#D19254] rounded-md cursor-pointer mr-2 whitespace-nowrap pr-6 "
                          variant={"outline"}
                        >
                          {seletedFilter}
                        </Badge>
                        <X
                          className="absolute text-[#D19254] right-3 hover:cursor-pointer text-center"
                          size={16}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* restoruent cards  */}
            <div className="gird  md:grid-cols-3 gap-4">
              <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <AspectRatio ratio={16 / 6} className="bg-muted">
                    <img
                      src={cardimg}
                      alt="something went worng "
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-md py-1 px-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {" "}
                      Featured{" "}
                    </span>
                  </div>
                  <CardContent className="p-4">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      restourent name
                    </h1>
                    <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <p className="text-sm">City: Lucknow </p>
                    </div>
                    <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                      <Globe size={16} />
                      <p className="text-sm">
                        Country: <span className="font-medium"> India</span>
                      </p>
                    </div>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      <Badge className="font-medium px-2 py-1 rounded-full shadow-sm">
                        cusine :
                      </Badge>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchPage;
