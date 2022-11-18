import React from "react";
import tablet from "../assets/Tablet.svg";
import dairy from "../assets/Diary.svg";
import mobile from "../assets/Mobile.svg";
import laptop from "../assets/Laptop.svg";
import laptop_1366 from "../assets/laptop_1366.png";
import laptop_125 from "../assets/laptop_big_125.png";
import laptop_prev_big from "../assets/laptop_big.png";
import laptop_prev_1440 from "../assets/laptop_prev_1440.png";
import glass from "../assets/Magnifying_glass.svg";
import gear from "../assets/Gear.svg";
import stats from "../assets/Stats.svg";
import groupTwo from "../assets/group_2.png";
import group_2_1440 from "../assets/group_2_1440.png";
import group_2_125 from "../assets/group_2_125.png";
import group_3_larger from "../assets/group_3_larger.png";

import mobile_big from "../assets/mobile_big.png";
import mobile_big_125 from "../assets/mobile_big_125.png";
import mobile_1440 from "../assets/mobile_1440.png";
import mobile_1366 from "../assets/mobile_1366.png";


const OurServices = ({ updateServices }) => {

  let sections = document.getElementsByTagName("section");
  let currentSectionIndex = React.useRef(0);
  let timeoutRef = React.useRef(null)


  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const tabletImg = windowWidth >= 1800 && windowWidth <= 2800 ? group_3_larger : windowWidth >= 1500 && windowWidth <= 1799 ? group_2_125 : windowWidth >= 1400 && windowWidth <= 1499 ? group_2_1440 : groupTwo;
  const mobileImg = windowWidth >= 1800 && windowWidth <= 2800 ? mobile_big : windowWidth >= 1500 && windowWidth <= 1799 ? mobile_big_125 : windowWidth >= 1400 && windowWidth <= 1499 ? mobile_1440 : mobile_1366;
  const laptopImg = windowWidth >= 1800 && windowWidth <= 2800 ? laptop_prev_big : windowWidth >= 1500 && windowWidth <= 1799 ? laptop_125 : windowWidth >= 1400 && windowWidth <= 1499 ? laptop_prev_1440 : laptop_1366;
  const tabletImgClass = windowWidth >= 1800 ? "tabletimg_prev_big" : windowWidth >= 1500 && windowWidth <= 1799 ? "tabletimg_prev_medium" : windowWidth >= 1400 && windowWidth <= 1499 ? "tabletimg_prev_1440" : "tabletimg_prev";
  const mobileImgClass = windowWidth >= 1800 ? "mobileImg_prev_big" : windowWidth >= 1500 && windowWidth <= 1799 ? "mobileImg_prev_medium" : windowWidth >= 1400 && windowWidth <= 1499 ? "mobileImg_prev_1440" : "mobileImg_prev";
  const laptopImgClass = windowWidth >= 1800 ? "laptop_prev_big" : windowWidth >= 1500 && windowWidth <= 1799 ? "laptop_prev_medium" : windowWidth >= 1400 && windowWidth <= 1499 ? "laptop_prev_1440" : "laptop_prev";
  const mobileClass = windowWidth >= 1800 ? "mobileClass_big" : windowWidth >= 1500 && windowWidth <= 1799 ? "mobileClass_medium" : "mobileImg";

  React.useEffect(() => {
    document.addEventListener("wheel", (e) => {
      var isTrackpad = false;
      if (e.wheelDeltaY) {
        if (Math.abs(e.wheelDeltaY) !== 150 && Math.abs(e.wheelDeltaY) !== 120) {
          isTrackpad = true;
        }
      }
      else if (e.deltaMode === 0) {
        isTrackpad = true;
      }
      if (isTrackpad === false) {
        if (e.wheelDeltaY > 0 && currentSectionIndex.current - 1 >= 0) {
          // wheel up
          currentSectionIndex.current -= 1;
          for (let i = 0; i < sections.length; i++) {
            if (i === currentSectionIndex.current) {
              sections[i].classList.add("active");
            } else {
              sections[i].classList.remove("active");
            }
          }
          updateServices(currentSectionIndex.current)
        } else if (e.wheelDeltaY < 0 && currentSectionIndex.current + 1 < sections.length) {
          // wheel down
          currentSectionIndex.current += 1;
          for (let i = 0; i < sections.length; i++) {
            if (i === currentSectionIndex.current) {
              sections[i].classList.add("active");
            } else {
              sections[i].classList.remove("active");
            }
          }
          updateServices(currentSectionIndex.current)
        }
      } else {
        if (timeoutRef.current) {
          // scrollY.current += 0.5 * e.deltaY
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        else if (e.deltaY < 0 && currentSectionIndex.current - 1 >= 0) {
          // console.log("negative", e.deltaY);
          currentSectionIndex.current -= 1;
          for (let i = 0; i < sections.length; i++) {
            if (i === currentSectionIndex.current) {
              sections[i].classList.add("active");
            } else {
              sections[i].classList.remove("active");
            }
          }
          updateServices(currentSectionIndex.current)
        }
        else if (e.deltaY > 0 && currentSectionIndex.current + 1 < sections.length) {
          // console.log("positive", e.deltaY);
          currentSectionIndex.current += 1;
          for (let i = 0; i < sections.length; i++) {
            if (i === currentSectionIndex.current) {
              sections[i].classList.add("active");
            } else {
              sections[i].classList.remove("active");
            }
          }
          updateServices(currentSectionIndex.current)
        }
        timeoutRef.current = setTimeout(() => {
          // console.log("scroll stopped", e.deltaY);
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }, 300);
      }
    });
  }, [sections, updateServices])

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);



  return (
    <div className="ourServices">
      <div className="content">
        <section className="blocksection page1 active" data-section="0">
          <div className="sections">
            <div className="animate__animated animate__fadeInUp">
              <h1 className="maintitle">Our Services</h1>
            </div>
          </div>
        </section>

        <section className="blocksection page2" data-section="1">
          <div className="container">
            <div className="sections">
              <div id="imgFirst">
                <img
                  alt=""
                  className="animate__animated animate__zoomIn tabletimg"
                  src={tablet}
                />
                <img
                  alt=""
                  className="animate__animated animate__zoomIn dairyimg"
                  src={dairy}
                />
              </div>

              <div className="animate__animated animate__zoomIn title1">
                <h1>Services</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="blocksection page3" data-section="2">
          <div className="container">
            <div className="sections" >
              <img
                alt=""
                className={tabletImgClass}
                src={tabletImg}
                style={{}}
              />

              <img
                alt=""
                className={`${mobileClass}`}
                src={mobile}
              />

            </div>
          </div>
        </section>

        <section className="blocksection page4" data-section="3">
          <div className="container">
            <div className="sections" >
              <img
                alt=""
                className={mobileImgClass}
                src={mobileImg}
                style={{}}
              />
              <img
                alt=""
                className="laptopImg"
                src={laptop}
              />

              <div className="fade-in-image">
                <h1>Develop</h1>
                <p>
                  From Web Apps to Mobile, we develop what your business needs
                  to run better.
                </p>
              </div>


            </div>
          </div>
        </section>

        <section className="blocksection page5" data-section="4">
          <div className="container">
            <div className="sections" >
              <div className="optimize" >
                <img
                  alt=""
                  className={laptopImgClass}
                  src={laptopImg}
                />


                <div className="animate__animated animate__zoomIn opt_laptopimg_inner">


                </div>

                <img
                  alt=""
                  className="animate__animated animate__zoomIn opt_glass"
                  src={glass}
                />

                <img
                  alt=""
                  className="animate__animated animate__zoomIn grea_a"
                  src={gear}
                />

                <img
                  alt=""
                  className="animate__animated animate__zoomIn grea_b"
                  src={gear}
                />

                <img
                  alt=""
                  className="animate__animated animate__zoomIn opt_status"
                  src={stats}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurServices;
