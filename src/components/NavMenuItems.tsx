import { headerLinks } from "../constants";

type Props = {
  isFooterMenu?: boolean;
};

const NavMenuItems = ({ isFooterMenu = false }: Props) => {
  return (
    <ul
      className={`flex max-md:${
        !isFooterMenu && "flex-col"
      } gap-12 lg:gap-16 max-md:gap-6 items-center
     ${isFooterMenu ? "justify-left" : "justify-center"} `}
    >
      {headerLinks.map((link) => (
        <li key={link.href}>
          <a
            href={`#${link.href}`}
            className={`text-lg max-sm:${
              isFooterMenu ? "font-medium" : ""
            } font-semibold hover:text-accent transition ease-in-out`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenuItems;
