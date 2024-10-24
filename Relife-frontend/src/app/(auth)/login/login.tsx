"use client";

import ReForm from "@/components/form/ReForm";
import ReInput from "@/components/form/ReInput";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-wide">
        Login to Your Account
      </h1>
      <div className="mt-10">
        <ReForm
          onSubmit={handleSubmit}
          resolver={zodResolver(loginSchema)}
          defaultValues={defaultValues}
        >
          <div className="max-w-sm space-y-6">
            <ReInput
              label="Email"
              type="email"
              name="email"
              placeholder="Type your email"
            />
            <ReInput
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <p className="text-end">
              <Link
                href="/"
                className="text-sm font-bold text-r-primary underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </p>
          </div>

          <Button
            type="submit"
            className="mt-4 px-8 text-base font-bold uppercase text-gray-800 hover:bg-r-primary hover:text-white"
          >
            Login
          </Button>
        </ReForm>
        <p className="mt-5 text-xs">
          Privacy Policy, Terms of Service and Test and Placement Terms.
        </p>
      </div>
    </div>
  );
};

export default Login;
