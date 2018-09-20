import React from 'react';
import "./Comentarios.css";
import UserImg2 from "../../img/usuaria2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comentario = (props) => {
    return (
        <main>
            <div className="publicacion">
                <div className="row">
                    <div class="col-auto foto">
                        <a href="">
                            <img id="userImg2" src={UserImg2} alt="" />
                        </a>
                    </div>
                    <div className="col">
                        <div className="post">
                            <a href="" className="nombre">Adriana Perez</a>
                            <p className="texto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
export default Comentario;