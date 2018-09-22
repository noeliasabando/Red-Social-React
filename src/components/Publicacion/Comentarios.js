import React, { Component } from 'react';
import "./Comentarios.css";
import UserImg2 from "../../img/usuaria2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Comentarios extends Component {
    constructor(props){
        super(props)
        this.state={
            contador:0,
            modal: false
        }
        this.toggle = this.toggle.bind(this);
        let localItems = window.localStorage.getItem('items');
        let actualItems = (localItems!==null? JSON.parse(localItems):[])
        //console.log('comentarios',this.);
    }
     incremetar(){
         this.setState({
             contador:this.state.contador + 1
          })
     }  

     toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        return (
            <main>
                <div className="publicacion">
                    <div className="row">
                        <div className="col-auto foto">
                            <a href="">
                                <img id="userImg2" src={UserImg2} alt="" />
                            </a>
                        </div>
                        <div className="col">
                            <div className="post">
                                <a href="" className="nombre">Adriana Perez</a>
                                <p className="texto">{this.props.text}</p>
                                <div className="caja-botones d-flex justify-content-between align-items-center">
                                    <button onClick={this.incremetar.bind(this)}><FontAwesomeIcon icon="heart" /></button>
                                    <button onClick={this.toggle}><FontAwesomeIcon icon="trash-alt" /></button>
                                    <p>{this.state.contador}<FontAwesomeIcon icon="heart" /></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}></ModalHeader>
          <ModalBody>
             Desea Eliminar este Mensaje.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Eliminar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
            </main>

        )
    }
}
export default Comentarios;