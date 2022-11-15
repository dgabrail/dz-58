import React, {useState} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";


function App() {

    const [showModal , setShowModal] = useState(false)
    const onClose = () => setShowModal(false)
    const onDismiss = () => {}

  return (
    <div className="App">
        <Alert onDismiss={onDismiss} type="danger"/>
        <Alert type="success"/>
        <Modal show={showModal} onClose={onClose}/>
      <button className="btn btn-primary mt-5" onClick={() => setShowModal(true)}>
        Launch demo modal
      </button>
    </div>
  );
}

export default App;
