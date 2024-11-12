import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './Result'
const secretNum = Math.floor(Math.random()*10)+1  


function App() {

  
const [game,setGame] = useState();

function handleclick(e) {
  setGame(e.target.value)
}

  return (
    <>
      <div className="container d-flex justify-content-center align-item-center">
        <div className="row">
          <div className="col-md-12 box text-center mt-5">
            <h3 className='mt-3'>Guess the number between 1 to 10 </h3>
            <div className="d-flex justify-content-center align-item-center">
              <input type="text"  className='form-control w-50 mb-3 mt-3' onChange={handleclick}/>
            </div>
            <Result secretNum={secretNum} game={game}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
