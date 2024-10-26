"use client";

import ReForm from "@/components/form/ReForm";
import ReInput from "@/components/form/ReInput";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useCallback, useState } from "react";
import { FieldValues } from "react-hook-form";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const toggleVisibility = useCallback(
    (field: "password" | "confirmPassword") => {
      setVisibility((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    },
    [],
  );

  const handleSubmit = useCallback((values: FieldValues) => {
    console.log(values);
  }, []);

  return (
    <div>
      <h1 className="py-6 text-3xl font-bold tracking-wide">
        Register to Your Account
      </h1>
      <div>
        <ReForm
          onSubmit={handleSubmit}
          defaultValues={defaultValues}
          resolver={zodResolver(registerSchema)}
        >
          <div className="max-w-sm space-y-6">
            <ReInput
              label="Name"
              type="text"
              name="name"
              placeholder="Type your name"
            />
            <ReInput
              label="Email"
              type="email"
              name="email"
              placeholder="Type your email"
            />
            <div className="relative">
              <ReInput
                label="Password"
                type={visibility.password ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <Button
                type="button"
                onClick={() => toggleVisibility("password")}
                className="r-password"
              >
                {visibility.password ? <Eye /> : <EyeOff />}
              </Button>
            </div>
            <div className="relative">
              <ReInput
                label="Confirm Password"
                type={visibility.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <Button
                type="button"
                onClick={() => toggleVisibility("confirmPassword")}
                className="r-password"
              >
                {visibility.confirmPassword ? <Eye /> : <EyeOff />}
              </Button>
            </div>
          </div>
          <Button
            type="submit"
            className="mt-4 px-8 text-base font-bold uppercase"
          >
            Register
          </Button>
        </ReForm>
      </div>
    </div>
  );
};

export default Register;
