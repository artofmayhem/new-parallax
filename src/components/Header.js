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
            background: `rgba(0, 0, 0, ${percentage * 1})`,
            left: "20%",
            top: "25%",
            transform: `translate(-50%, -50%) scale(${percentage * 5})`,
          }}
        />
      )}
  >
    <div className={'h-screen flex flex-column flex-wrap text-center mt-48'} style={{width: '450'}}>
        <h1 className={'fade-in-up text-5xl ml-24 font-medium'} style={{color: 'rgba(234, 68, 68, 1)'}}>
            SONVR Design
        </h1>
        <h2 className={'fade-in-up text-gray-400 font-medium'}>By Tony Miller</h2>
    </div>
  </Parallax>
    )
}