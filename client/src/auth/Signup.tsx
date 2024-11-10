import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignupInputValType, userSignupSchema } from "@/schema/userSchema";
import { Contact, Loader2, LockKeyhole, Mail, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// define type of value
// type SignupInputValType = {
//   fullName: string;
//   email: string;
//   password: string;
//   contact:string
// };

const Signup = () => {
  const [input, setInput] = useState<SignupInputValType>({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });
  const loading = false;
  const [error, setError] = useState<Partial<SignupInputValType>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    // check validation
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldsError = result.error.formErrors.fieldErrors;
      setError(fieldsError as Partial<SignupInputValType>);
      return;
    }
    //  api implementation
    console.log(input);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className=" p-2 md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 shadow-xl"
        onSubmit={loginSubmitHandler}
      >
        <div className="mb-4 text-center">
          <h1 className="font-bold text-2xl text-orange"> Signup Page </h1>
        </div>
        <div className="relative my-2">
          <Label htmlFor="email" className="mb-7">
            Full Name
          </Label>
          <Input
            name="fullName"
            type="text"
            value={input.fullName}
            onChange={changeEventHandler}
            placeholder="fullName"
            className="pl-9 focus-visible:ring-0 mt-2 "
          />
          <User className="absolute inset-y-11 size-5  left-2 text-gray-500 " />
          {error && (
            <span className="text-sm text-red-700">{error.fullName}</span>
          )}
        </div>
        <div className="relative my-2">
          <Label htmlFor="email" className="mb-7">
            Email
          </Label>
          <Input
            name="email"
            type="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="Email"
            className="pl-9 focus-visible:ring-0 mt-2 "
          />
          <Mail className="absolute inset-y-11 size-5 left-2 text-gray-500 " />
          {error && <span className="text-sm text-red-700">{error.email}</span>}
        </div>
        <div className="relative my-2">
          <Label htmlFor="password" className="mb-7">
            Password
          </Label>
          <Input
            name="password"
            type="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="password"
            className="pl-9 focus-visible:ring-0 mt-2"
          />
          <LockKeyhole className="absolute inset-y-11 size-5  left-2 text-gray-500 " />
          {error && (
            <span className="text-sm text-red-700">{error.password}</span>
          )}
        </div>
        <div className="relative my-2">
          <Label htmlFor="password" className="mb-7">
            Contact
          </Label>
          <Input
            name="contact"
            type="text"
            value={input.contact}
            onChange={changeEventHandler}
            placeholder="contact"
            className="pl-9 focus-visible:ring-0 mt-2"
          />
          <Contact className="absolute inset-y-11 size-5 left-2 text-gray-500  " />
          {error && (
            <span className="text-sm text-red-700">{error.contact}</span>
          )}
        </div>
        <div className="text-center mt-4">
          {loading ? (
            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
              {" "}
              <Loader2 className="animate-spin h-4 w-4" /> please wait{" "}
            </Button>
          ) : (
            <Button
              className="w-full bg-orange hover:bg-hoverOrange"
              type="submit"
            >
              {" "}
              Signup{" "}
            </Button>
          )}
        </div>
        <hr className=" bg-gray-800 my-2" />
        <div className="text-center text-gray-600">
          <p>
            {" "}
            Already have an account ?{" "}
            <Link to={"/login"} className="text-blue-700">
              {" "}
              login
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
