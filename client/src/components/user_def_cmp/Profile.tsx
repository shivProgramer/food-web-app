import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Loader2,
  LocateIcon,
  Mail,
  MapPin,
  MapPinnedIcon,
  Plus,
} from "lucide-react";

import { FormEvent, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";

const Profile = () => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "Shiva@nowgray.live",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedProfilePicture, setSelectedProfilePicture] =
    useState<string>("");

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prev) => ({
          ...prev,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("profileData ---", profileData);
  };

  return (
    <form className="max-w-7xl mx-auto my-10" onSubmit={updateProfileHandler}>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
            <AvatarImage
              src={selectedProfilePicture}
              alt="User Avatar"
              className="object-cover w-full h-full rounded-full"
            />

            <AvatarFallback className="w-full h-full rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
              SP
            </AvatarFallback>

            <input
              type="file"
              ref={imgRef}
              accept="image/*"
              className="hidden"
              id="avatarUpload"
              onChange={fileChangeHandler}
            />
            {/* Hover Overlay with Plus Icon */}
            <label
              htmlFor="avatarUpload"
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
            >
              <Plus className="text-white w-8 h-8" />
            </label>
          </Avatar>
        </div>
        <div>
          <Input
            type="text"
            name="fullname"
            value={profileData?.fullname}
            placeholder="Full Name"
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label>Email</Label>
            <input
              disabled
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <LocateIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Address</Label>
            <input
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label>City</Label>
            <input
              name="city"
              value={profileData.city}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinnedIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Country</Label>
            <input
              name="country"
              value={profileData.country}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        {isLoading ? (
          <Button disabled className="bg-orange hover:bg-hoverOrange">
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="bg-orange hover:bg-hoverOrange">
            Update
          </Button>
        )}
      </div>
    </form>
  );
};

export default Profile;
