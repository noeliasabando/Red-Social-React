import React, { Component } from 'react';
import "./Comentarios.css";
import UserImg2 from "../../img/usuaria2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Comentarios extends Component {

	constructor(props) {
		super(props)
		let localItems = window.localStorage.getItem('items');
		let actualItems = (localItems !== null ? JSON.parse(localItems) : [])
		this.state = {
			contador: 0,
			modal: false,
			items: actualItems
		}
		this.toggle = this.toggle.bind(this);


		console.log('comentarios', this.props.items);
	}
	
	incremetar() {
		this.setState({
			contador: this.state.contador + 1
		})
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	deleteCommentary() {

		let tempId = this.myId.props.id;
		this.setState((previousState) => {
			let resultTemp = previousState.items.filter(item => item.key !== tempId);
			window.localStorage.setItem('items', JSON.stringify(resultTemp));
			return {
				items: resultTemp
			}
		});
		this.toggle();

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
							  <a href="" className="nombre">{this.props.user}</a> 
								<p className="texto">{this.props.text}</p>
								<hr/>
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
						<Button color="primary" ref={(id) => { this.myId = id }} id={this.props.id} onClick={this.deleteCommentary.bind(this)}>Eliminar</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</main>

		)
	}
}
export default Comentarios;