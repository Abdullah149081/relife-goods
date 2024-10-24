"use client";

import ReForm from "@/components/form/ReForm";
import ReInput from "@/components/form/ReInput";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

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
            <ReInput
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <ReInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
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
