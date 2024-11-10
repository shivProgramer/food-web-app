import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgetPasswordSchema, ResetInputValType } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [input, setInput] = useState<ResetInputValType>({
    newPassword: "",
  });
  const [error, setError] = useState<Partial<ResetInputValType>>()
  const loading = true;

  const handleResetPassword = (e: FormEvent) => {
    e.preventDefault();
    const result = forgetPasswordSchema.safeParse(input);
    if(!result.success){
     const fieldsError = result.error.formErrors.fieldErrors;
     setError(fieldsError as Partial<ResetInputValType>);
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
          onSubmit={handleResetPassword}
          className="p-2 md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 shadow-xl "
        >
          <div>
            <h1 className="text-2xl  text-center text-orange font-bold">
              {" "}
              Reset Password{" "}
            </h1>
            <p className="mt-4 text-sm text-center">
              {" "}
              Enter your new password to reset old one{" "}
            </p>
          </div>
          <div className="mt-4 relative">
            <Label> New Password </Label>
            <Input
              type="password"
              name="newPassword"
              value={input.newPassword}
              placeholder="enter your email"
              onChange={changeEventHandler}
              className="inset-y-0 mt-1 focus-visible:ring-0 pl-8"
            />
            <LockKeyhole className="absolute inset-y-10 size-5 left-2 text-gray-500 " />
            {error && <span className="text-sm text-red-600" > {error.newPassword}</span>}
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
                 Reset 
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

export default ResetPassword;
