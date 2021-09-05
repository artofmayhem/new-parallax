import { Parallax } from "react-parallax";
import { AirPods, AppleLogo } from "../assets";

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

export default function Apple(props) {
  return (
    <Parallax bgImage={AirPods} strength={500}>
      <div style={{ height: 800 }}>
        <div className={'flex flex-row justify-center'} style={inlineStyle}>
          <img
            className={'mt-6 mr-2'}
            style={{ width: "55px", height: "65px" }}
            src={AppleLogo}
            alt="Apple Logo"
          />

          <h1 style={{fontWeight: '500'}}>Apple</h1>
          
        </div>
      </div>
    </Parallax>
  );
}
