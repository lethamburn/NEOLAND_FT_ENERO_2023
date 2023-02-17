import { useAuth } from "../context/authContext";

const Profile = () => {
  const { user, logout } = useAuth();
  return (
    <main>
      <h2>Welcome {user}</h2>
      <button onClick={() => logout()}>Logout</button>
    </main>
  );
};

export default Profile;
