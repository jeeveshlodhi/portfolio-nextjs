import Link from "next/link";

type navItemProps = {
  title: string;
  url: string;
};

const NavigationItem = ({ title, url }: navItemProps) => {
  return (
    <li className="mr-4  rounded relative group lg:text-light lg:dark:text-dark">
      <Link
        href={url}
        className="mr-4  rounded relative text-lg group lg:text-light lg:dark:text-dark"
      >
        {title}
        <span className="inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light w-full lg:bg-light lg:dark:bg-dark">
          &nbsp;
        </span>
      </Link>
    </li>
  );
};

export default NavigationItem;
