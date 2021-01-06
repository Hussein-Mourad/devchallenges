import "./App.css";
import { useState } from "react";
import StyleSelector from "./compontents/StyleSelector.js";
import Button from "./compontents/Button.js";
import SideBar from "./compontents/SideBar.js";
import PageContent from "./compontents/PageContent.js";
import ButtonVariants from "./compontents/ButtonVariants.js";
import Footer from "./compontents/Footer.js";

import downArrow from "./assests/icons/downArrow.svg";

function App() {
  const [size, setSize] = useState("md");
  const [color, setColor] = useState("default");
  const [variant, setVariant] = useState("regular");
  const [shadow, setShadow] = useState("");
  const [disabled, setDisabled] = useState('');
  const [startIcon, setStartIcon] = useState("");
  const [endIcon, setEndIcon] = useState("");
  return (
    <>
      <SideBar>
        <StyleSelector
          size={size}
          color={color}
          variant={variant}
          shadow={shadow}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          setSize={setSize}
          setColor={setColor}
          setVariant={setVariant}
          setShadow={setShadow}
          setDisabled={setDisabled}
          setStartIcon={setStartIcon}
          setEndIcon={setEndIcon}
        />
      </SideBar>

      <PageContent>
        <div className="h-screen flex justify-center items-center relative">
          <h1 className="absolute top-12 text-3xl text-gray-700 font-medium">Button Component Showcase</h1>
          <Button
            size={size}
            color={color}
            variant={variant}
            shadow ={shadow}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
          >
            Default
          </Button>
          <img
            src={downArrow}
            alt="Down arrow"
            className="w-7 opacity-90 mx-auto absolute bottom-5 animate-bounce"
          />
        </div>

        <ButtonVariants />
        <Footer />
      </PageContent>
    </>
  );
}

export default App;
