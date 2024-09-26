import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/authContext";

const Login: React.FC = () => {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    // Assume login logic here (API call)
    localStorage.setItem("authToken", "your-token-here");
    login(); // Update authentication state
    router.push("/dashboard"); // Redirect after login
  };

  return (
    <div>
      <h1 className="text-3xl">Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
