import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";

export const Logout: React.FC = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Update authentication state
    router.push("/"); // Redirect to home after logout
  };

  return <button onClick={handleLogout}>Log Out</button>;
};
