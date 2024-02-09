import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../UI/Dropdown";

export default function LogedHeader() {
  return (
    <header className="w-full p-[32px] bg-transparent absolute top-0  z-10 text-gray-300 text-[17px]">
      <div className="max-w-[1392px] mx-auto">
        <div className="flex justify-between items-center">
          <img
            className="max-w-[120px] w-full h-full"
            src="/HeaderLeft.png"
            alt="logo"
          />
          <nav>
            <ul className="flex gap-10 ">
              <li>
                <Link to={"{#}"} className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"{#}"}
                  className="hover:text-white transition duration-400"
                >
                  Discover
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-white duration-400">
                  Movie Release
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-white duration-400">
                  Forum
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-white duration-400">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-center gap-4">
            <IoSearchSharp className="text-[20px] cursor-pointer" />
            <div className="flex gap-0.5 items-center group relative">
              <CgProfile className="text-[22px] cursor-pointer group" />
              <IoIosArrowDown className="text-[14px] cursor-pointer group" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button>Open</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>
                      Billing
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Keyboard shortcuts
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Email</DropdownMenuItem>
                          <DropdownMenuItem>Message</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>More...</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      New Team
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem disabled>API</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
