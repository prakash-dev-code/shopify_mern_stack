"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/authContext";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if isAuthenticated is determined
    if (isAuthenticated === false) {
      router.push("/login");
    }
  }, [isAuthenticated, router]); // Runs when isAuthenticated changes

  // If isAuthenticated is undefined, you can render a loading state here
  if (isAuthenticated === undefined) {
    return <div>Loading...</div>; // or return null
  }

  return <>{children}</>; // Render children if authenticated
};

export default PrivateRoute;
