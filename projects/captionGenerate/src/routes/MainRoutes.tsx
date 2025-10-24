import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "@/pages/Home";
import LoginForm from "@/components/login-form-demo";
import SignupForm from "@/components/signup-form-demo";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { User } from "@/App";
import LandingPage from "@/pages/LandingPage";

type ProtectedRouteProps = {
  user: User | null;
  loading: boolean;
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  loading,
  children,
}) => {
  if (loading) {
    return <div>Loading session...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

type MainRoutesProps = {
  user: User | null;
  loading: boolean;
  setUser: (user: User) => void;
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
  isSignupOpen: boolean;
  setIsSignupOpen: (open: boolean) => void;
};

const MainRoutes: React.FC<MainRoutesProps> = ({
  user,
  loading,
  setUser,
  isLoginOpen,
  setIsLoginOpen,
  isSignupOpen,
  setIsSignupOpen,
}) => {
  const navigate = useNavigate();

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
    navigate(-1);
  };

  const handleCloseSignup = () => {
    setIsSignupOpen(false);
    navigate(-1);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              openSignup={() => {
                setIsSignupOpen(true);
                navigate("/signup");
              }}
            />
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute user={user} loading={loading}>
              <Home />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/login"
          element={
            <Dialog open={isLoginOpen} onOpenChange={handleCloseLogin}>
              <DialogContent>
                <LoginForm
                  onLoginSuccess={(userData) => {
                    setUser(userData);
                    setIsLoginOpen(false);
                    navigate("/");
                  }}
                  closeLogin={handleCloseLogin}
                  openSignup={() => {
                    setIsLoginOpen(false);
                    setIsSignupOpen(true);
                    navigate("/signup");
                  }}
                />
              </DialogContent>
            </Dialog>
          }
        />
        <Route
          path="/signup"
          element={
            <Dialog open={isSignupOpen} onOpenChange={handleCloseSignup}>
              <DialogContent>
                <SignupForm
                  onSignupSuccess={(userData) => {
                    setUser(userData);
                    setIsSignupOpen(false);
                    navigate("/");
                  }}
                  closeSignup={handleCloseSignup}
                  openLogin={() => {
                    setIsSignupOpen(false);
                    setIsLoginOpen(true);
                    navigate("/login");
                  }}
                />
              </DialogContent>
            </Dialog>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
