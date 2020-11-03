import React from 'react';
import './modal.css'
import Card from '../Card/Card.js'
import {useState, useEffect} from 'react';

const Modal = (props) => {
    const [modalToggle, setModalToggle] = useState(false);
    return <div>
        <button onClick={() => setModalToggle(true)}>{props.buttonText}</button>
        <div className={!modalToggle ? "popup hidden" : "popup"}>
            <div className={!modalToggle ? "modal hidden is-blurred" : "modal"}>
                <div className="modal-header">
                    <span>{props.title}</span> <i onClick={() => setModalToggle(!modalToggle)} class="fas fa-times modal-exit"></i>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
};

export default Modal;