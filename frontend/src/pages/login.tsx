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
      <h1 className="text-3xl min-h-[60vh] text-center py-4">Login Page</h1>
      <div className="text-center mb-4">
        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 rounded ">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
