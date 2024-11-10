import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgetInputValType, forgetPasswordSchema } from "@/schema/userSchema";
import { Loader2, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [input, setInput] = useState<forgetInputValType>({
    email: "",
  });
  const [error, setError] = useState<Partial<forgetInputValType>>()
  const loading = true;
  const handleforgetPassword = (e: FormEvent) => {
    e.preventDefault();
    const result = forgetPasswordSchema.safeParse(input);
    if(!result.success){
     const fieldsError = result.error.formErrors.fieldErrors;
     setError(fieldsError as Partial<forgetInputValType>);
     return;
    }
    console.log("input --", input);
  };

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen ">
        <form
          onSubmit={handleforgetPassword}
          className="p-2 md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 shadow-xl "
        >
          <div>
            <h1 className="text-2xl  text-center text-orange font-bold">
              {" "}
              Forget Password{" "}
            </h1>
            <p className="mt-4 text-sm text-center">
              {" "}
              Enter your email address to reset your password{" "}
            </p>
          </div>
          <div className="mt-4 relative">
            <Label> Email </Label>
            <Input
              type="text"
              name="email"
              value={input.email}
              placeholder="enter your email"
              onChange={changeEventHandler}
              className="inset-y-0 mt-1 focus-visible:ring-0 pl-8"
            />
            <Mail className="absolute inset-y-10 size-5 left-2 text-gray-500 " />
            {error && <span className="text-sm text-red-600" > {error.email}</span>}
          </div>

          <div className="mt-4">
            {!loading ? (
              <Button
                disabled
                className="w-full bg-orange hover:bg-hoverOrange"
              >
                {" "}
                <Loader2 className="animate-spin h-4 w-4" /> please wait{" "}
              </Button>
            ) : (
              <Button className="w-full bg-orange hover:bg-hoverOrange">
                {" "}
                Send Reset Link
              </Button>
            )}
          </div>
          <hr className="mt-4" />
          <p className="text-center">
            {" "}
            Back to{" "}
            <Link to={"/login"} className="text-blue-700">
              {" "}
              Login{" "}
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
