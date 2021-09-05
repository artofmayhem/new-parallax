import { AD, ArchitecturalDigest } from "../assets/index";
import { Parallax } from "react-parallax";

export default function CardSpaceTwo() {
  //instantiate variables for intro and splash

  return (
    <div className="hover02 column  flex flex-row flex-wrap items-center text-white bg-white">
      {" "}
      <div
        className={"text-black content-center text-center text-2xl"}
        style={{ width: "50vw" }}
      >
        <img src={ArchitecturalDigest} alt="Architectural Digest" />
        <h3 style={{fontWeight: '400'}} className={'mt-20'}>Cross platform performance to capture your wide ranging audience</h3>
      </div>
      <div
        className="flex flex-row flex-wrap items-start py-1 text-center"
        style={{ width: "50vw" }}
      >
        <Parallax bgImage={AD} blur={{ min: -1, max: 2.5 }} strength={100}>
          <div style={{ height: 800 }}></div>
        </Parallax>
      </div>{" "}
    </div>
  );
}
