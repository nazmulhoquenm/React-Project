import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './component/List'
import Home from './component/Home'
import Stat from './component/Stat'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
      
<h1>Hello I am Nazmul!</h1>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello! How are you?</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
<List/>
<Stat/>
<Footer/>


    </>
  )
}

export default App
