import React from 'react';
import "./Publicacion.css";
import UserImg2 from "../../img/usuaria2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Comentario = (props) => {
    return (
    <main>
        {/*-----------contenido Principal---------*/}
        <div className="col contenido-principal">
            <div className="publicar">
                <div className="row">
                    <div className="col-auto foto">
                        <a href="">
                            <img id="userImg2" src={UserImg2} alt="UserImg2" />
                        </a>
                    </div>
                    <div className="col">
                        <form action="">
                            <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Comparte tu Sabiduria vegana"></textarea>
                            <div className="contenedor-botones d-flex justify-content-between">
                              <div className="media">
                                <a href=""><FontAwesomeIcon icon="file-image"/></a>
                                <a href=""><FontAwesomeIcon icon="play"/></a>
                                <a href=""><FontAwesomeIcon icon="music"/></a>
                              </div>
                              <div>
                                  <button>Publicar</button>
                              </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
export default Comentario;