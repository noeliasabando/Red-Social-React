import React, {Component} from 'react';
import "./Publicacion.css";
import UserImg2 from "../../img/usuaria2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class FormsPublicacion extends Component {
    render(){
        return(

            <main>
            {/*-----------contenido Principal---------*/}
            <div className="col-12 col-md-12 text-center contenido-principal">
                <div className="publicar">
                    <div className="row">
                        <div className="col-auto foto">
                            <a href="">
                                <img id="userImg2" src={UserImg2} alt="UserImg2" />
                            </a>
                        </div>
                        <div className="col">
                            <form onSubmit={this.props.onAddComent}>
                                <textarea name="mensaje" cols="30" rows="10" placeholder="Comparte tu Sabiduria vegana" ref={(textarea) => this.textarea = textarea}></textarea>
                                <div className="contenedor-botones d-flex justify-content-between">
                                    <div className="media">
                                        <a href=""><FontAwesomeIcon icon="file-image" /></a>
                                        <a href=""><FontAwesomeIcon icon="play" /></a>
                                        <a href=""><FontAwesomeIcon icon="music" /></a>
                                    </div>
                                    <div>
                                        <button type="submit">Publicar</button>
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
}

export default FormsPublicacion;