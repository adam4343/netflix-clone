import Header from "../../components/Header";
import SliderPopularMovies from "../../components/SliderPopularMovies";
import SliderHeroSection from "../../components/SliderHeroSection";
import SliderPopularSerials from "../../components/SliderPopularSerials";
import LogedHeader from "../../components/LogedHeader";
import { useToken } from "../Login/useToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function HomePage() {
  const navigate = useNavigate();

  const logos = [
    {
      img: "../../../public/DISNEY-LOGO-WHITE-520x160.png",
    },
    {
      img: "../../../public/pixar_animation_studios_logo_white_by_sonicfan8635_dfoxeus-fullview.png",
    },
    {
      img: "../../../public/klipartz.com(2).png",
    },
    {
      img: "../../../public/image-removebg-preview(2).png",
    },
    {
      img: "../../../public/klipartz.com(6).png",
    },
    {
      img: "../../../public/klipartz.com(4).png",
    },
    {
      img: "../../../public/Star_Wars-logo-B06952A462-seeklogo.com-removebg-preview.png",
    },
  ];
  const { token } = useToken();
  return (
    <div className="bg-black">
      {token ? <LogedHeader /> : <Header />}

      {/* Hero Section */}
      <SliderHeroSection />
      {/* End Hero Section */}

      {/* Brands Section */}
      <section>
        <div className="ml-[60px] flex items-center gap-10  ">
          {logos.map((logo, id) => {
            return (
              <img
                className="max-w-[178px] w-full max-h-[90px] h-full"
                src={logo.img}
                key={id}
                alt={"brand-logo"}
              />
            );
          })}
        </div>
      </section>
      {/* End Brands Section */}

      {/* ---- */}
      <section>
        <div className="ml-[60px] ">
          <h2 className="text-4xl mt-[24px] mb-[24px] font-medium text-white ">
            Popular movies
          </h2>
          <SliderPopularMovies />
        </div>
      </section>
      {/* ---- */}

      {/* ---- */}
      <section>
        <div className="ml-[60px]">
          <h2 className="text-4xl mt-[24px] mb-[24px] font-medium text-white ">
            Popular Serials
          </h2>
          <SliderPopularSerials />
        </div>
      </section>
      {/* ---- */}

      {/* ---- */}
      <section className="text-white mt-10 text-center">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            setTimeout(() => {
              navigate("/");
              window.location.reload();
            }, 1000);
            toast.success("You have succesfully loged out from your profile");
          }}
        >
          Log out
        </button>
      </section>
      {/* ---- */}
    </div>
  );
}
