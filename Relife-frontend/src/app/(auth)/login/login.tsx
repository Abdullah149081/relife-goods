"use client";

import ReForm from "@/components/form/ReForm";
import ReInput from "@/components/form/ReInput";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FieldValues } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prev: boolean) => !prev);
  }, []);

  return (
    <div>
      <h1 className="py-6 text-3xl font-bold tracking-wide">
        Login to Your Account
      </h1>
      <div>
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
            <div className="relative">
              <ReInput
                label="Password"
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <Button
                type="button"
                onClick={togglePasswordVisibility}
                className="r-password"
              >
                {passwordVisible ? <Eye /> : <EyeOff />}
              </Button>
            </div>
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
