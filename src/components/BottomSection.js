import { Parallax } from "react-parallax";
import { BubbleBear } from "../assets";

const inlineStyle = {
  background: "transparent",
  left: "50%",
  top: "45%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
  fontWeight: 600,
  fontSize: "0.65rem",
  color: "white",
  textShadow: "0 0 1rem black",
  textAlign: "center",
};

export default function BottomSection() {
  return (
    <Parallax
      style={{ paddingBottom: "20vh" }}
      bgImage={BubbleBear}
      strength={100}
      renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: `rgba(255, 193, 204, ${percentage * 1})`,
            left: "46%",
            top: "85%",
            transform: `translate(-50%, -50%) scale(${percentage * 7})`,
          }}
        >
          <div style={inlineStyle}>
            <h2>SONVR Design</h2>
            <h3 className={'text-white'} style={{fontSize: '3px'}}>HONOLULU. HI. 96822</h3>
          </div>
        </div>
      )}
    >
      <div style={{ height: "100vh" }}></div>
    </Parallax>
  );
}
