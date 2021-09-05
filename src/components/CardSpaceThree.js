import { Ikea } from "../assets/index";
import { Parallax } from "react-parallax";

export default function CardSpaceTwo() {
  //instantiate variables for intro and splash

  return (
    <Parallax
    className={'flex justify-center items-center content-center ml-96 pt-48' }
    blur={{ min: -15, max: 15 }}
    strength={-200}
    style={{height: '80vh'}}
    renderLayer={(percentage) => (
        <div
          style={{
            margin: '10vh auto',
            position: "absolute",
            width: "200px",
            height: "100px",
            background: `rgba(255, 235,30, ${percentage * 1})`,
            left: "15%",
            top: "15%",
            transform: `translate(-50%, -50%) scale(${percentage * 5})`,
          }}
        >
        
        </div>
      )}
  >
    <h2 className={'text-white text-5xl mt-96 ml-6'} style={{textShadow: '0 0 1rem white', fontWeight: 400}}>Unique Perspectives</h2>
    <div className={'w-screen h-screen flex flex-row flex-wrap text-center'}>
        <img className={'w-1/2 h-1/2  ml-48'} src={Ikea} alt={'Ikea'}/>
    </div>
  </Parallax>
  );
}
