import { Timer } from "lucide-react";

import { Badge } from "../ui/badge";
import AvailableMenu from "./AvailableMenu";

const img =
  "https://imgs.search.brave.com/OuADT7qysh-vyndliuGIJXlEKSMyJ0xy8Sdue1-DZpo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/NjY0MjEzMy9waG90/by92YXJpZXR5LW9m/LWdvdXJtZXQtZGlz/aGVzLWRpc3BsYXll/ZC1vbi1hLXRhYmxl/LXNob3djYXNpbmct/YW4tYXJyYXktb2Yt/Y29sb3JzLWFuZC10/ZXh0dXJlcy53ZWJw/P2E9MSZiPTEmcz02/MTJ4NjEyJnc9MCZr/PTIwJmM9OFNvNnRX/SU01LWhKM2xsQ3d4/Y0ZjVVVBbWZMX3hu/TDZwU0FxQ1ZHR0ZZ/ND0";
const RestaurantDetails = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        <div className="relative w-full h-32 md:h-64 lg:h-72">
          <img
            src={ img  || "Loading..."}
            alt="res_image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl"> Corn Pizza </h1>
            <div className="flex gap-2 my-2">
              {["pizza", "momos", "jalebi"].map(
                (cuisine: string, idx: number) => (
                  <Badge key={idx}>{cuisine}</Badge>
                )
              )}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time: <span className="text-[#D19254]">5 mins</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <AvailableMenu />

      </div>
    </div>
  );
};

export default RestaurantDetails;
