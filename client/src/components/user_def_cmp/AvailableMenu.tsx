import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const img =
  "https://imgs.search.brave.com/sDn47VHb6YY42wY6vU-Hm03w4XYRFflLpXc8_fOMf_o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MC8wOS8xOS8yOS9l/YXQtMjgzNDU0OV82/NDAuanBn";
const AvailableMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menus
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        {[1,2,4].map((menu:number , idx:number) => (
        <Card  key={idx} className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img src={img} alt="" className="w-full h-40 object-cover" />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              pizza corn
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              This is very testy you can should try once
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-[#D19254]">₹ 500</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button
              onClick={() => {
                navigate("/cart");
              }}
              className="w-full bg-orange hover:bg-hoverOrange"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
         ))}
      </div>
    </div>
  );
};

export default AvailableMenu;
