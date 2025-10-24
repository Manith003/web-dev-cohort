import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "@/components/Navbar";
import MainRoutes from "@/routes/MainRoutes";

export type User = {
  username: string;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/auth/user", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3000/api/auth/logout",
      {},
      { withCredentials: true }
    );
    setUser(null);
  };

  const openLoginModal = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
    navigate("/login");
  };

  const openSignupModal = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
    navigate("/signup");
  };

  return (
    <div>

      <Navbar
        user={user}
        handleLogout={handleLogout}
        openLogin={openLoginModal}
        openSignup={openSignupModal}
      />
      <MainRoutes
        user={user}
        loading={loading}
        setUser={setUser}
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        isSignupOpen={isSignupOpen}
        setIsSignupOpen={setIsSignupOpen}
      />
    </div>
  );
}

export default App;