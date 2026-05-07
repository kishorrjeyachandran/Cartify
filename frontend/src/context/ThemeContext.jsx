import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext =
  createContext();

export const ThemeProvider = ({
  children,
}) => {
  const [theme, setTheme] =
    useState(() => {
      return (
        localStorage.getItem(
          "theme"
        ) || "dark"
      );
    });

  /* SAVE THEME */
  useEffect(() => {
    localStorage.setItem(
      "theme",
      theme
    );

    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(
      theme
    );
  }, [theme]);

  /* TOGGLE */
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () =>
  useContext(ThemeContext);