import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import NavigationItem from "./navigationItem";
import NavigationIcon from "./navigationIcon";
import DarkModeBtn from "./DarkModeBtn";

const Navigation = () => {
  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1    md:px-12 sm:px-8 ">
      <ul className="flex items-center justify-center">
        <NavigationItem title="Home" url="/" />
        <NavigationItem title="About" url="/about" />
        <NavigationItem title="Projects" url="/projects" />
      </ul>
      <ul className="flex">
        <NavigationIcon
          icon={<AiOutlineTwitter />}
          size={30}
          color={`#00ACEE`}
          url="https://twitter.com/jeevesh_lodhi"
        />
        <NavigationIcon
          icon={<AiOutlineGithub />}
          size={30}
          color={``}
          url="https://github.com/jeeveshlodhi"
        />
        <NavigationIcon
          icon={<AiFillLinkedin />}
          size={30}
          color={` #0A66C2 `}
          url="https://www.linkedin.com/in/jeeveshlodhi/"
        />
        <NavigationIcon
          icon={<BsPinterest />}
          size={30}
          color={`#E60023`}
          url="https://in.pinterest.com/jeevesh_art/"
        />
        <DarkModeBtn />
      </ul>
    </header>
  );
};

export default Navigation;
