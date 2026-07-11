import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { LockKeyhole, Mail } from "lucide-react";


export default function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exiting, setExiting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log("Form valid:", { email, password });

    setExiting(true);
    setTimeout(() => {
      navigate({ to: "/dashboard" });
    }, 300);

    // later: auth logic here
  };

  const handleContinueWithGoogle = () => {
    alert("Google Sign-In - This feature is not implemented yet.");
  };

  return (

    
    <div className={`relative min-h-screen bg-[url('/desktop-auth.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center transition-opacity duration-300 ${  exiting ? "opacity-0" : "opacity-100 animate-fadeIn"}`}>

      <button
        onClick={() => {
          setExiting(true);

          setTimeout(() => {
            navigate({ to: "/" });
          }, 300);
        }}
        className="absolute left-6 top-6 p-2 rounded-full text-black/80 hover:bg-black/10 transition">
        <ArrowLeft size={20} />
      </button>

      <div className=" p-4 rounded-xl mt-6 ">
        <form className="w-full w-[90vw] min-w-md rounded-lg bg-card/80 p-12 shadow-md backdrop-blur-md border border-border animate-slideUp">
          
          <h2 className="mb-6 text-2xl font-bold text-text font-heading">
            {isSignIn ? "Create Account" : "Welcome back"}
          </h2>

          <p className="mb-6 text-sm text-muted-foreground">
            {isSignIn ? "Get started with your free account and manage your Faqts efficiently." :  "Pick up where you left off and keep your FAQs up to date in seconds."}
          </p>

          <button
            type="button"
            onClick={handleContinueWithGoogle}
            className="w-full flex items-center justify-center gap-3 border py-3 rounded-2xl bg-white hover:bg-gray-50 transition mb-4"
          >
            <FcGoogle size={20} />
            CONTINUE WITH GOOGLE
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="px-3 text-xs text-muted-foreground uppercase tracking-wider">
              OR 
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <Input
            label="Email"
            type="email"
            value={email}
            placeholder="Email"
            error={errors.email}
            onChange={setEmail}
            icon= {<Mail size={18} />}
            shadow = {true}
            onClearError={() =>
              setErrors((prev) => ({ ...prev, email: undefined }))
            }
          />

          <Input
            label="Password"
            type="password"
            value={password}
            placeholder="Password"
            error={errors.password}
            onChange={setPassword}
            icon= {<LockKeyhole size={18} />}
            shadow = {true}
            onClearError={() =>
              setErrors((prev) => ({ ...prev, password: undefined }))
            }
          />

          <div className="w-full flex justify-end">
            <button
              type="button"
              onClick={() => navigate({ to: "/forgot-password" })}
              className="text-sm font-bold text-muted-foreground italic hover:underline transition mb-6 font-unica " >
              Forgot password?
            </button>
          </div>

          <Button
            className="w-full mb-4"
            onClick={handleSubmit} >
            {isSignIn ? "Sign In" : "Create Account"}
          </Button>

          <p className="text-sm mt-4 text-center font-unica">
            {isSignIn ? "New to Faqt? " : "Already have an account? "}{" "}
            <button
              type="button"
              className="text-black hover:underline font-semibold"
              onClick={() => setIsSignIn(!isSignIn)} >
              {isSignIn ? "Create one" : "Sign In"}
            </button>
          </p>

        </form>
      </div>

    </div>  
  );
}