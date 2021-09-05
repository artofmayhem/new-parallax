import { Parallax } from "react-parallax";
import { Moswa } from "../assets";

export default function MoswaSection() {

    return (
        <Parallax
        blur={{ min: -10, max: 10 }}
        bgImage={Moswa}
        bgImageAlt="sketch"
        strength={-200}
      >
        <div style={{ height: "100vh", width: "100vw" }} />
      </Parallax>
    )
}