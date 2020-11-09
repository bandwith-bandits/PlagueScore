import React from 'react';
import './modal.css'
import Card from '../Card/Card.js'
import {useState, useEffect} from 'react';

// const findByType = (children, component) => {
//     const result = [];
//     /* This is the array of result since Article can have multiple times the same sub-component */
//     const type = [component.displayName] || [component.name];
//     /* We can store the actual name of the component through the displayName or name property of our sub-component */
//     React.Children.forEach(children, child => {
//       const childType =
//         child && child.type && (child.type.displayName || child.type.name);
//       if (type.includes(childType)) {
//         result.push(child);
//       }
//     });
//     /* Then we go through each React children, if one of matches the name of the sub-component we’re looking for we put it in the result array */
//     return result[0];
//   };

// const Header = (props) => {
//         return <div className="modal-header">
//         <span>{props.title}</span> <i onClick={() => null} class="fas fa-times modal-exit"></i>
//     </div>
// };

class Modal extends React.Component {
    // static Header;
    // renderTitle() {
    //     const {children} = this.props;
    //     const header = null || findByType(children, Header);
    // };
    // toggleModal(modalStatus) {
    //     this.setState({modalOpen: modalStatus});
    // }
    render(props) {
        // this.setState({modalOpen: false});
        return <div>
            {/* <button onClick={() => this.toggleModal(false)}>{props.buttonText}</button>
            <div className={!this.state.modalOpen ? "popup hidden" : "popup"}>
                //{null || this.Header()}
                <div className={!this.state.modalOpen ? "modal hidden is-blurred" : "modal"}>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div> */}
        </div>
    }
};

// Modal.Header = Header;

export default Modal;