import Swal from "sweetalert2";
import useStore from "@/utils/store/store";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/utils/context/auth-context";
import dropdown from "@/assets/icon/DropDown.png";
import hamburgerIcon from "@/assets/logo/hamburger.svg";
import btnLogout from "@/assets/icon/btn-logout.svg"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function Navbar() {
  const navigate = useNavigate();
  const { toggleSidebar } = useStore();
  const {logout } = useAuth();


  return (
    <div className="sticky top-0 z-10 h-16 bg-[#293066] flex items-center justify-between shadow-md px-8">
      <img className="w-7 h-7 cursor-pointer" src={hamburgerIcon} onClick={toggleSidebar} />
      <DropdownMenu>
        <DropdownMenuTrigger
          id="toggling-profile-dropdown"
          className="text-white flex items-center gap-x-2 mr-10"
        >
          Hi, Admin
          <img src={dropdown} />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <div className="px-3 py-2 text-[#F64C4C] cursor-pointer flex gap-2">
            <img id="btn-logout" src={btnLogout}alt="btn-logout" className="w-5 h-5" />

              <p className="mt-[-0.125rem]" onClick={logout}>
                Keluar
              </p>
            
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Navbar;