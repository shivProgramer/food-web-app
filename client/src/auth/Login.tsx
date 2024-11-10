import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginInputValType, userLoginSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// define type of value
// type loginInputValType = {
//   email: string;
//   password: string;
// };

const Login = () => {
  const [input, setInput] = useState<loginInputValType>({
    email: "",
    password: "",
  });
  const loading = false;
  const [error, setError] = useState<Partial<loginInputValType>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    // check validation
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldsError = result.error.formErrors.fieldErrors;
      setError(fieldsError as Partial<loginInputValType>);
      return;
    }
    // start api implementations 
    console.log("input ----", input);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="p-2 md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 shadow-xl"
        onSubmit={loginSubmitHandler}
      >
        <div className="mb-4 text-center">
          <h1 className="font-bold text-2xl text-orange"> Login Page </h1>
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
          <Mail className="absolute inset-y-10 left-2 text-gray-500 " />
          {error && (
            <span className="text-sm text-red-600"> {error.email}</span>
          )}
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
          <LockKeyhole className="absolute inset-y-10 left-2 text-gray-500 " />
          {error && (
            <span className="text-sm text-red-600"> {error.password}</span>
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
              LOGIN{" "}
            </Button>
          )}
        </div>
        <hr className=" bg-gray-800 my-2" />
        <div className="flex justify-evenly items-center ">
        <div className=" text-gray-600">
          <p>
            <Link to={"/forget-password"} className="text-blue-700">
              {" "}
              Forget Password 
            </Link>{" "}
          </p>
        </div>

        <div className=" text-gray-600">
          <p>
            <Link to={"/reset-password"} className="text-blue-700">
              {" "}
              Reset Password 
            </Link>{" "}
          </p>
        </div>
        </div>
        <hr className=" bg-gray-800 my-2" />
        <div className="text-center text-gray-600">
          <p>
            {" "}
            don't have an account ?{" "}
            <Link to={"/signup"} className="text-blue-700">
              {" "}
              Signup
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
