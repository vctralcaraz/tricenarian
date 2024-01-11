
import { useState } from 'react';
import './App.css';
import { Clock } from './components/Clock';
import { Countdown } from './components/Countdown';
// import Countdown from 'react-countdown';

function App() {

  const [message, setMessage] = useState(null);

  return (
    <>
      {/* <Clock /> */}
      <Countdown event={e=>setMessage("Karly is a Tricarian!!!")}/>
      {/* <Countdown date='02/20/2024' /> */}
      {
        message && (
          <div className='message'>
            {message}
          </div>
        )
      }

      <div className='gif'>
        <iframe src="https://giphy.com/embed/l0IyajjbNiRvCr7RC" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      {/* <a href="https://github.com/sergiss/react-clock" target="_blank"><i className="fa">&#xf09b;</i> Source Code </a> */}
    </>
  );
}

export default App;
