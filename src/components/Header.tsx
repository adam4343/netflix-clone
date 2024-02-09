import { Link } from "react-router-dom";
export default function Header() {
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
          <div className="flex items-center justify-center gap-5">
            <Link
              to={"#"}
              className="border rounded py-[7px] px-[15px] border-white  hover:text-white transition duration-400"
            >
              Sign up
            </Link>
            <Link
              to={"#"}
              className="rounded py-[8px] px-[20px] bg-red-500 hover:text-white transition duration-400"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
