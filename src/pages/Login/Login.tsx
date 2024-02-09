import React, { useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useToken } from "./useToken";
import { loginApi } from "../../utils/apis/login";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();
  const { saveToken } = useToken();
  return (
    <React.Fragment>
      <Header />
      {/* First Section */}
      <section className="first-section mt-32 text-white mb-5">
        <div className="ml-[60px] max-w-[1392px] mx-auto flex justify-between items-center">
          <h2 className="text-[28px]">Create Profile</h2>
          <Link
            className="border border-gray-600 rounded-[10px] px-6 py-2 text-[14px]"
            to={"#"}
          >
            Cancel
          </Link>
        </div>
      </section>
      {/* First Section */}

      {/* Main Section */}
      <section className="mt-8">
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.icon-icons.com/icons2/2429/PNG/512/netflix_logo_icon_147259.png"
            alt="netflix-logo"
            className="w-20 h-20 mb-5"
          />
          <h2 className="text-[52px] text-white">Welcome to Netflix</h2>
        </div>
        <div className="ml-[60px] pl-[32px] pr-[32px] max-w-[1392px] mx-auto bg-black">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const token = await loginApi("/login", {
                username: name,
                email: mail,
                password: pass,
              });
              saveToken(token);
              setName("");
              setPass("");
              setMail("");
              toast.success("Your account has been created succesfully");
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }}
            action="# "
            className=" flex flex-col gap-10   items-center   "
          >
            <div className="text-white flex flex-col  max-w-[532px] w-full">
              <label htmlFor="name" className="text-[18px] mb-1 ">
                Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                className="outline-none   border border-gray-400 p-1 bg-transparent pt-2 pb-2 rounded pl-2 text-[14px]"
                placeholder="Irvan Wobo"
                required
              />
            </div>
            <div className="text-white flex flex-col  max-w-[532px] w-full">
              <label htmlFor="name" className="text-[18px] mb-1 ">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                type="password"
                value={pass}
                className="outline-none  border border-gray-400 p-1 bg-transparent pt-2 pb-2 rounded pl-2 text-[14px]"
                placeholder="Password"
              />
            </div>
            <div className="text-white flex flex-col  max-w-[532px] w-full">
              <label htmlFor="name" className="text-[18px] mb-1 ">
                Email
              </label>
              <input
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                value={mail}
                type="email"
                className="outline-none  border border-gray-400 p-1 bg-transparent pt-2 pb-2 rounded pl-2 text-[14px]"
                placeholder="example@example.com "
                required
              />
            </div>
            <div className="max-w-[120px] w-full">
              <button
                className="text-white
               py-2 px-4   bg-red-500 w-full rounded flex items-center justify-center gap-2  z-10
              "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Main Section */}
    </React.Fragment>
  );
}
