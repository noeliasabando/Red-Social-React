import React, { Component } from 'react';
import "./Comentarios.css";
import UserImg2 from "../../img/usuaria2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Comentarios extends Component {
    
    render() {
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
                                    <button><FontAwesomeIcon icon="heart" /></button>
                                    <button><FontAwesomeIcon icon="trash-alt" /></button>
                                    <p>15 <FontAwesomeIcon icon="heart" /></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>

        )
    }
}
export default Comentarios;