import NavMenuItems from "./NavMenuItems";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="wrapper py-6 max-sm:py-4 flex items-center justify-between ">
      <Logo />

      <nav className="max-md:hidden">
        <NavMenuItems />
      </nav>

      <a href="https://platform.cirql.ai" target="_blank" rel="noopener noreferrer">
        <Button className="mt-8 max-md:mt-6" size="lg">
          <span>Start Your Free Trial</span>
        </Button>
      </a>


      <MobileNav/>
    </header>
  );
};

export default Header;
