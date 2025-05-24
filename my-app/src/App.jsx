import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="top">
        <div className="header">
          <header><h2>Justin Tran Portfolio</h2></header>

        </div>
        <div className="body">
          <div className="bodyTitle">
            <div className="bodyTitleLeft">

              <h1>Welcome to my personal website!</h1>
            </div>
            <img src='./public/portfolio_picture.JPG' height={200} width={500} style={{ borderRadius: 2000 }}></img>
          </div>
          <div className="bodyContent">
            <h3>My name is Justin Tran. I recently graduated from the University of Cincinnati with a Bachelor of Science in Computer Science.
              My skillset includes Frontend, Backend, and Full Stack capabilities, but my passion is in Web Development!
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
