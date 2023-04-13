import Link from "next/link";
import React from "react";

type iconProps = {
  icon: React.ReactNode;
  size: number;
  color: string;
  url: string;
};

const NavigationIcon = ({ icon, size, color, url }: iconProps) => (
  <Link href={url} target="_blank" className="mx-5 cursor-pointer mr-3 hover:transform hover:-translate-y-0.5 ">
    {React.cloneElement(icon as React.ReactElement, { size, color })}
  </Link>
);

export default NavigationIcon;
