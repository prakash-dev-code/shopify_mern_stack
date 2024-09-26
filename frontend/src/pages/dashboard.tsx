import PrivateRoute from "@/components/privateRoutes";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <PrivateRoute>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to the protected dashboard!</p>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
