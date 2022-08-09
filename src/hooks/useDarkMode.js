import React, { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  });

  return [colorTheme, setTheme];
}
export default useDarkMode;
/*

// detect-mode.js
    // set initial color scheme

    let explicitelyPreferScheme = "";
    if (window.localStorage) {
      if (localStorage.getItem("colorMode") === "dark") {
        document.documentElement.classList.add("dark");
        explicitelyPreferScheme = "dark";
        console.log("dark added");
      } else if (localStorage.getItem("colorMode") === "light") {
        document.documentElement.classList.remove("dark");
        explicitelyPreferScheme = "light";
        console.log("dark removed");
      }
    }

    if (
      explicitelyPreferScheme !== "light" &&
      window.matchMedia("(prefers-color-scheme:dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    }

*/
