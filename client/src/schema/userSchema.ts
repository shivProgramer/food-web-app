import { z } from "zod";
// for signup ------------------------------------------------------------------------
export const userSignupSchema = z.object({
  fullName: z.string().min(1, "full name is required !"),
  email: z.string().email("Invalid email address !"),
  password: z.string().min(6, "password must be at least 6 chracter !"),
  contact: z.string().min(10, "contact number must be 10 digit!"),
});

// for login -----------------------------------------------------------------------
export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address !"),
  password: z.string().min(6, "password must be at least 6 chracter !"),
});

// for Forget Password ---------------------------------------------------------
export const forgetPasswordSchema = z.object({
    email:z.string().email("invalid email address !"),
})

// for Forget Password ---------------------------------------------------------
export const ResetPasswordSchema = z.object({
  newPassword:z.string().min(6,"password must be at least 6 chracter"),
})

export type SignupInputValType = z.infer<typeof userSignupSchema>;
export type loginInputValType = z.infer<typeof userLoginSchema>;
export type forgetInputValType = z.infer<typeof forgetPasswordSchema>;
export type ResetInputValType = z.infer<typeof ResetPasswordSchema>;
