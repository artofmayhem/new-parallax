import { Parallax } from "react-parallax";
import { Black, Bose } from "../assets";

export default function HeroOne() {
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
    textShadow: "0 0 2rem white",
    textAlign: "center",
  };

  return (
    <Parallax bgImage={Black} strength={500}>
      <div style={{ height: 800 }}>
        <div
          className={"flex flex-column flex-wrap justify-center"}
          style={inlineStyle}
        >
          <h2>Sensory Experiences</h2>
          <img
            src={Bose}
            alt="Bose"
            className={"mt-20"}
            style={{ width: "50%", minWidth: "350px" }}
          />
        </div>
      </div>
    </Parallax>
  );
}
