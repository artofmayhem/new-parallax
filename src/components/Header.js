import {Parallax} from 'react-parallax';
import {AnimeHeader} from '../assets/index'

export default function Header() {
  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={AnimeHeader}
    bgImageAlt="grace"
    strength={-200}
    style={{height: '80vh'}}
    renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: `rgba(234, 68, 68, ${percentage * 1})`,
            left: "20%",
            top: "25%",
            transform: `translate(-50%, -50%) scale(${percentage * 5})`,
          }}
        />
      )}
  >
    <div className={'w-screen h-screen flex flex-row flex-wrap text-center'}>
        <h1 className={'text-5xl text-white ml-24 mt-48 font-medium'} >
            SONVR Design
        </h1>
        <h3 className={'mt-72 -ml-60 text-white'}>HONOLULU. HI. 96822</h3>
    </div>
  </Parallax>
    )
}