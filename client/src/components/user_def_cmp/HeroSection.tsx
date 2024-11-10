import { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import hero_pizza from "@/assets/hero_pizza.png";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const nevigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto rounded-lg items-center justify-center gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-4xl  text-4xl text-shadow">
            Order Food Anytime && Anywhere
          </h1>

          <p className="text-gray-500">
            Hey ! Our delicios food is waiting for you , we are always neart to
            you .{" "}
          </p>
        </div>
        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            placeholder="Search  restaurants by name , city & country "
            className="pl-10 shadow-lg"

            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2  " />

          <Button onClick={()=> nevigate(`/search/${searchText}`)} className="bg-orange hover:bg-hoverOrange"> Search </Button>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:w-[40%]">
        <img
          src={hero_pizza}
          alt=""
          className="object-cover w-full max-h-[500px] max-w-[90%]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
