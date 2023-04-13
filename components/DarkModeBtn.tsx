"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const DarkModeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(()=>{
    setTheme('dark')
  },[])

  return (
    <li className="mx-5">
      <input
        type="checkbox"
        id="toggle"
        value={theme}
        className="toggle"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      />
    </li>
  );
};

export default DarkModeBtn;
