
import './App.css';
import { Parallax, Background } from 'react-parallax';
import AirPods from './assets/Apple-AirPods.jpg'
import Grace from './assets/grace.jpg'
import Purple from './assets/purple.jpg'
import Sketch from './assets/sketch.jpg'

const inlineStyle = {
    background: 'transparent',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
    fontWeight: 600,
    fontSize: '5rem',
    color: 'white',
    textShadow: "0 0 1rem black",
    textAlign: 'center'
}

function App() {

  return (
      <div className="container">
          <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={Grace}
              bgImageAlt="grace"
              strength={-200}
          >
              <div style={{ height: '100vh', width: '100vw' }} />
          </Parallax>
          <Parallax
              blur={{ min: -25, max: 25 }}
              bgImage={AirPods}
              bgImageAlt="airpods"
              strength={-200}
          >
              <div style={{ height: '100vh', width: '100vw' }} />
          </Parallax>
          <Parallax
              blur={{ min: -25, max: 25 }}
              bgImage={Purple}
              bgImageAlt="airpods"
              strength={-200}
          >
              <Background strength={400}>
                  <img src={Purple} alt={" "} style={{width: '110vw', backgroundRepeat: 'no-repeat'}}/>
              </Background>
              <div style={{ height: '100vh', width: '100vw' }} />
          </Parallax>
          <Parallax
              blur={{ min: -25, max: 25 }}
              bgImage={Sketch}
              bgImageAlt="sketch"
              strength={-200}
          >
              <div style={{ height: '100vh', width: '100vw' }} />
          </Parallax>
          <Parallax bgImage={ AirPods } strength={500}>
              <div style={{ height: 800 }}>
                  <div style={inlineStyle}>HTML inside the parallax</div>
              </div>
          </Parallax>
          <Parallax bgImage={ Grace } blur={{ min: -1, max: 5 }}>
              <div style={{ height: 800 }}>
                  <div style={inlineStyle}>Dynamic blur</div>
              </div>
          </Parallax>
          <Parallax bgImage={ Sketch } strength={-200} >
              <div style={{ height: 800 }}>
                  <div style={inlineStyle}>Reverse direction</div>
              </div>
          </Parallax>
          <Parallax
              bgImage={ Purple }
              strength={300}
              renderLayer={percentage => (
                  <div
                      style={{
                          position: 'absolute',
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          background: `rgba(255, 123, 23, ${percentage * 1})`,
                          left: '50%',
                          top: '50%',
                          transform: `translate(-50%, -50%) scale(${percentage * 5})`,
                      }}
                  >
                  </div>
              )}
          >
              <div style={{ height: '100vh' }}>
                  <div style={inlineStyle}>Pop!</div>
              </div>
          </Parallax>
      </div>
  );
}

export default App;
