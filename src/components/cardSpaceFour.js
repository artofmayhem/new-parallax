import {DirectionOne, DirectionThree, Lost, HurleyLogoWhite } from "../assets/index";
import { Parallax } from "react-parallax";


export default function CardSpaceFour() {
  //instantiate variables for intro and splash

  return (
    <div className="justify-center flex flex-row flex-wrap items-center text-white py-32 bg-white">
      {" "}
      <div
        className="flex flex-row flex-wrap items-start py-1 text-center"
        style={{ maxWidth: "50vw", minWidth: '375px' }}
      >
        <Parallax
          bgImage={DirectionOne}
          style={{ width: "100%", boxShadow: "0 1rem 2rem black" }}
          strength={-200}
        >
          <div style={{ height: 900 }}>
          <div><img src={HurleyLogoWhite} className={'w-72'} style={{position: 'absolute', top: '15%', left: '3%'}} alt={"lost"}/></div>
          </div>
        </Parallax>
      </div>{" "}
      <div
        className="flex flex-row flex-wrap items-start py-1 text-center"
        style={{ maxWidth: "50vw", minWidth: '375px' }}
      >
        <Parallax
          bgImage={DirectionThree}
          style={{ width: "100%", boxShadow: "0 1rem 2rem black" }}
          strength={200}
        >
          <div style={{ height: 900 }}>
            <div><img src={Lost} className={'w-72'} style={{position: 'absolute', top: '70%', right: '55%'}} alt={"lost"}/></div>
          </div>
        </Parallax>
      </div>{" "}
    </div>
  );
}
