"use client";

import GoogleSignButton from "@/components/UI/GoogleSignButton";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const SignupPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Convert FormData to plain object
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    // sign up
    const { data, error } = await authClient.signUp.email({
      ...userData,
      callbackURL: "/login",
    });
    console.log({ data, error });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Form
      className="flex mx-auto my-8 border p-8 shadow-sm border-black/10 w-96 flex-col gap-4"
      onSubmit={onSubmit}>
      {/* name */}
      <TextField isRequired name="name">
        <Label>Name</Label>
        <Input placeholder="John Doe" />
        <FieldError />
      </TextField>
      {/* email */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}>
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}>
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>

      <div className="flex gap-4 flex-col">
        <Button fullWidth type="submit">
          Sign Up
        </Button>
        <GoogleSignButton />
      </div>
    </Form>
  );
};
export default SignupPage;
