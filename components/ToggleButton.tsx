import { useTheme } from "next-themes";
import NavButton from "./NavButton";
import { useEffect } from "react";
import Layout from "./Layout";

export default function ToggleButton() {
    const {theme, setTheme} = useTheme();
    return (
        <button id='toggle' onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }} className="nav-button hover:rotate-45">
          &#127772; 
          {/* &#127774; */}
        </button>
    )
}