import { Parallax} from "react-parallax";
import { LV2, LV } from '../assets/index'


export default function LouisVuitton() {
  return (
    <Parallax
    blur={{ min: -25, max: 25 }}
    bgImage={LV2}
    bgImageAlt="airpods"
    strength={-100}
  >
    <h3 className={'text-white mx-32 my-72 text-5xl'}>On brand representation</h3>
    <div className={'flex justify-end'} style={{ height: "100vh", width: "100vw" }}>
        <img src={LV} alt={"Louis Vuitton "} className={'mr-32 mt-24'} style={{ width: "300px", height: "375px" }} />
    </div>
  </Parallax>
  );
}