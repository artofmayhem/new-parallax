import { Parallax } from "react-parallax";
import { Dynamic as DynamicBG, TheGap } from "../assets";

const inlineStyle = {
    background: "transparent",
    left: "25%",
    top: "30%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-50%, -50%)",
    fontWeight: 300,
    fontSize: "3rem",
    color: "white",
    textShadow: "0 0 1rem black",
    textAlign: "center",
  };


export default function Dynamic(props) {


    return (
        <Parallax bgImage={DynamicBG} blur={{ min: -1, max: 5 }}>
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>Dynamic Presentations</div>
        </div>
        <div className={'flex w-screen'}><img className={'w-60'} style={{left: "80%", top: "60%", position: 'absolute'}}src={TheGap} alt={'the gap'}/></div>
      </Parallax>
    )

}