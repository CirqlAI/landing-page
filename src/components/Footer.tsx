import { Link } from "react-router-dom";
import { socialMediaLinks } from "../constants";
import Logo from "./Logo";
import NavMenuItems from "./NavMenuItems";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="wrapper py-20 ">
      <div className="flex max-md:flex-col max-md:items-start items-center gap-6 max-md:gap-4 justify-between">
        <Logo />
        <nav className=" max-md:hidden">
          <NavMenuItems isFooterMenu={true} />
        </nav>

        {/* Social links */}
        <div className="flex items-center justify-end gap-6">
          {socialMediaLinks.map((item) => (
            <Link key={item.name} to={item.link}>
              <img
                src={item.src}
                alt={item.name}
                className="hover:scale-110 transition w-7 h-7"
              />
            </Link>
          ))}
        </div>

        <nav className="w-full md:hidden mt-4">
          <NavMenuItems isFooterMenu={true} />
        </nav>
      </div>
      <Separator className="bg-[#d8d8d8] mt-14 h-[1.5px] " />

      <div className="w-full flex max-md:flex-col items-center justify-center gap-8 max-md:gap-6 pt-8 text-body">
        <div className="w-full flex items-center justify-center gap-8 max-sm:gap-5">
          <span className="max-md:hidden">
            {" "}
            &copy; {new Date().getFullYear()} Cirql. All rights reserved{" "}
          </span>
          <a
              href="/privacyPolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition ease-in-out max-sm:text-sm text-nowrap"
          >
            Privacy Policy
          </a>
          <Link
              to="/termsOfService"
              className="hover:underline transition ease-in-out max-sm:text-sm text-nowrap"
          >
            Terms of Service
          </Link>
          <Link
              to="#"
              className="hover:underline transition ease-in-out max-sm:text-sm text-nowrap"
          >
            Cookie Settings
          </Link>
        </div>

        <div className="md:hidden w-full flex items-center justify-center ">
          <span className="text-sm">
            {" "}
            &copy; {new Date().getFullYear()} Cirql. All rights reserved{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
