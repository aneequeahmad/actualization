import React, { useEffect, useState } from "react";
import "../styles/main.css";
import OurServices from "./OurServices";
import mouseImage from "../assets/Mouse.svg";
import logo from "../assets/logo.png";
import Info from "./Info";
import Contact from "./Contact";
import About from "./About";
import { LoaderData } from "./LoaderData";

const Main = () => {
  const [state, setState] = useState({
    scroll: true,
    activeMenu: "Info",
    isLoading: true,
    sliderCount: 0,
  });

  const setMenu = (value, index) => {
    setState((pre) => ({
      ...pre,
      activeMenu: value,
      sliderCount: index,
    }));
  };

  let servicesViewRef = React.useRef(0).current;
  const updateServices = (val = 0) => {
    servicesViewRef = val;
  };
  const activeComponent = {
    "Info": <Info />,
    "Our Services": <OurServices updateServices={updateServices} />,
    "About Us": <About />,
    "Contact": <Contact />,
  };
  let pageArray = ["Info", "Our Services", "About Us", "Contact"];

  const changeSlider = () => {
    let elementAll = document.querySelectorAll(".blocksection");
    const newCount = state.sliderCount + 1;
    if (newCount === pageArray.length) {
      setState((pre) => ({ ...pre, activeMenu: pageArray[0], sliderCount: 0 }));
    } else if (pageArray[state.sliderCount] === "Our Services") {
      if (elementAll.length - 1 === servicesViewRef) {
        elementAll[0].classList.add("active");
        setState((pre) => ({
          ...pre,
          activeMenu: pageArray[newCount],
          sliderCount: newCount,
        }));
        servicesViewRef = 1;
      } else {
        servicesViewRef = servicesViewRef + 1;
        for (var i = 0; i < elementAll.length; i++) {
          if (i === servicesViewRef) {
            elementAll[i].classList.add("active");
          } else {
            elementAll[i].classList.remove("active");
          }
        }
      }
    } else {
      setState((pre) => {
        return {
          ...pre,
          activeMenu: pageArray[newCount],
          sliderCount: newCount,
        }
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setState((pre) => ({
        ...pre,
        isLoading: false,
      }));
    }, 5000);
  }, []);


  return !state.isLoading ? (
    <>
      <header>
        <div className="logo">
          <img alt="" src={logo} />
        </div>

        {pageArray?.map((item, i) => {
          return (
            <span
              key={i}
              onClick={() => setMenu(item, i)}
              className={`${state.activeMenu === item ? "active" : ""}`}
            >
              {item}
            </span>
          );
        })}
      </header>

      <div className="mainContainer">
        {activeComponent[state.activeMenu]}
        <div onClick={changeSlider}>
          <img alt="" src={mouseImage} className="mousePointer" />
        </div>
      </div>
    </>
  ) : (
    <LoaderData />
  );
};

export default Main;
