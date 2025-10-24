import { Images } from "lucide-react";
import { Button } from "./ui/button";
import type { User } from "@/App"; 
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


type NavbarProps = {
  user: User | null;
  handleLogout: () => void;
  openLogin: () => void;
  openSignup: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  user,
  handleLogout,
  openLogin,
  openSignup,
}) => {
  const navigate = useNavigate();
  const move_to_home = ()=>{
    handleLogout();
    navigate('/');
    toast.success("Logout successfully!");
  }
  return (
    <div>
      <div className="py-6 w-full px-4 flex justify-between">
        <div className="left_side flex items-center gap-2">
          <div>
            <Images size={30} />
          </div>
          <div className=" font-[font1] font-extrabold md:text-5xl lg:text-2xl ">CaptionAI</div>
        </div>
        <div className="right_side flex gap-5">
          {!user ? (
            <>
              <Button
                variant="ghost"
                className="cursor-pointer"
                onClick={openLogin} 
              >
                Login
              </Button>
              <Button
                variant="default"
                className="cursor-pointer"
                onClick={openSignup} 
              >
                Sign Up
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-5">
              <span className="font-semibold">{user.username}</span>
              <Button
                variant="secondary"
                className="cursor-pointer"
                onClick={move_to_home} 
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;