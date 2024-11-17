import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import img from "@/assets/hero_pizza.png";
import { IndianRupee } from "lucide-react";
import { Separator } from "../ui/separator";
const Success = () => {
    const orders = [1];

    if (orders.length === 0)
        return (
          <div className="flex items-center justify-center max-h-screen mt-20">
            <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-300">
              Order not found!
            </h1>
          </div>
        );

  return (
    <div className="flex items-center justify-center max-h-screen bg-gray-50 dark:bg-gray-900 px-4 mt-20">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Order Status:{" "}
            <span className="text-[#FF5A5A]">{"confirm".toUpperCase()}</span>
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Order Summary
          </h2>
          {/* Your Ordered Item Display here  */}

          <div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={img}
                    alt=""
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                    item name
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-gray-800 dark:text-gray-200 flex items-center">
                    <IndianRupee />
                    <span className="text-lg font-medium">500</span>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
            </div>
          </div>
        </div>
        <Link to="/cart">
          <Button className="bg-orange hover:bg-hoverOrange w-full py-3 rounded-md shadow-lg">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
