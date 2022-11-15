import React, {useState} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";


function App() {

    const [showModal , setShowModal] = useState(false)
    const onClose = () => setShowModal(false)

  return (
    <div className="App">
        <Modal show={showModal} onClose={onClose}/>
      <button className="btn btn-primary mt-5" onClick={() => setShowModal(true)}>
        Launch demo modal
      </button>
    </div>
  );
}

export default App;
