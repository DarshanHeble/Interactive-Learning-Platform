import { useAuth } from "../context/AuthContext";

export const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>welcome, {user?.username} </h1>
      <button onClick={logout}></button>
    </div>
  );
};
