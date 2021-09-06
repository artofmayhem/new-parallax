import React, { useEffect, useRef } from "react";
import { TimelineLite } from "gsap/gsap-core";
import { BW1, BW2, BW3 } from "../assets/index";
import { Parallax } from "react-parallax";

const inlineStyle = {
  background: "transparent",
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
  fontWeight: 600,
  fontSize: "5rem",
  color: "white",
  textShadow: "0 0 1rem black",
  textAlign: "center",
};

export default function CardSpace() {
  //instantiate variables for intro and splash
  let splash = useRef(null);
  //instantiate timeline
  const timeline = new TimelineLite();

  useEffect(() => {
    // getting all elements in splash for animation
    const firstImage = splash.firstElementChild;
    const secondImage = splash.firstElementChild.nextElementSibling;
    const lastImage = splash.lastElementChild;

    //console logs to ensure all elements needed are present
    console.log(
      "1. splash",
      splash,
      "2. firstImage",
      firstImage,
      "3. secondImage",
      secondImage,
      "4. lastImage",
      lastImage
    );
    // getPinkImage.addEventListener("wheel", () => {
    //     timeline.to(getPinkImage, 2, animationOptions.pinkImage);
    //   });
    // adds animations to the timeline

    // timeline.to('.pink-image', 1, animationOptions.pinkImage);

    timeline.from(firstImage, 1.2, {
      opacity: 0,
      y: 100,
      onComplete: () => {
        timeline.to(firstImage, 1.2, {
          opacity: 1,
          y: 0,
        });
      },
    });
    timeline.from(secondImage, 1.2, {
      opacity: 0,
      y: 100,
      onComplete: () => {
        timeline.to(secondImage, 1.2, {
          opacity: 1,
          y: 0,
        });
      },
    });
    timeline.from(lastImage, 1.2, {
      opacity: 0,
      y: 100,
      onComplete: () => {
        timeline.to(lastImage, 1.2, {
          opacity: 1,
          y: 0,
        });
      },
    });
  }, []); // eslint-disable-line

  return (
    <div className="flex flex-row flex-wrap justify-evenly items-center py-1 bg-black h-auto">
      {/* Copy Container */}
      <div className={"text-center flex-column justify-evenly text-white text-4xl"} style={{width: '50vw', minWidth: '375px'}}>
        <h3 className={"pb-96"}>The art...</h3>
        <h3 className={"pt-96 text-5xl"}>of evocation</h3>
      </div>
      {/* Photo Container */}
      <div
        className={"flex flex-col flex-wrap justify-evenly items-center py-3  h-auto"}
        style={{width: '50vw', minWidth: '375px'}}
        ref={(el) => (splash = el)}
      >
        <div
          className="flex flex-col justify-center my-20 text-center"
          style={{ width: '30vw', minWidth: 375, boxShadow: "0 0 8rem white" }}
        >
          <Parallax
            bgImage={BW1}
            style={{ width: "auto", boxShadow: "0 1rem 2rem black" }}
            strength={-200}
          >
            <div style={{ height: 800 }}>
              <div style={inlineStyle}></div>
            </div>
          </Parallax>
        </div>
        
        <div
          className="flex flex-column justify-center my-20 text-center"
          style={{ width: '30vw', minWidth: 375, }}
        >
          <Parallax
            bgImage={BW2}
            style={{ boxShadow: "0 1rem 2rem black" }}
            strength={-300}
          >
            <div style={{ height: 800 }}></div>
          </Parallax>
        </div>
        <div
          className="flex flex-row flex-wrap justify-center my-20 text-center"
          style={{ width: '30vw', minWidth: 375, boxShadow: "0 0 8rem white" }}
        >
          <Parallax
            bgImage={BW3}
            style={{ boxShadow: "0 1rem 2rem black" }}
            strength={-200}
          >
            <div style={{ height: 800 }}></div>
          </Parallax>
        </div>
      </div>
    </div>
  );
}
