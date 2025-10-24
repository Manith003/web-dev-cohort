import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Images } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import type { User } from "@/App"; 

type SignupFormProps = {
  openLogin: () => void;
  closeSignup: () => void;
  onSignupSuccess: (user: User) => void; 
};

export default function SignupForm({
  openLogin,
  onSignupSuccess,
}: SignupFormProps) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData,
        {
          withCredentials: true,
        }
      );

      
      onSignupSuccess(response.data.user);
      toast.success("Account created successfully!");
      navigate("/home");
    } catch (error: any) {
      console.error("Signup failed:", error.response?.data || error.message);
      toast.error("Signup failed. That username might be taken.");
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white -mt-4 p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <div className="flex justify-center items-center gap-3">
        <div>
          <Images size={30} />
        </div>
        <div className="lg:text-[1.5vw] font-[font1] font-bold">
          Create Account
        </div>
      </div>
      <p className="mt-4 max-w-sm text-sm text-center text-neutral-600 dark:text-neutral-300">
        Sign up to start creating amazing captions with AI
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Manith" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Kumar" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="user123"
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] text-center cursor-pointer"
          type="submit"
        >
          Sign up
          <BottomGradient />
        </button>

        <p className="text-center mt-12">
          Already have an account?{" "}
          <span
            onClick={openLogin}
            className="cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};