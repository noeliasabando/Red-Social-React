import React from 'react';
import "./CommentPost.css";
import UserImg3 from "../../img/usuaria3.png"


const CommentPost = (props) => {
    return (
        <main>
            <div className="col-10 offset-2">
                <div className="post">
                    <div className="comentarios">
                        <div className="row no-gutters comentario">
                            <div className="col-auto foto">
                                <a href="">
                                    <img id="userImg2" src={UserImg3} alt="UserImg3" />
                                </a>
                            </div>
                            <div className="col" >
                                <form action="">
                                    <textarea name="" placeholder="comentario"></textarea>
                                    <div className="botonesme d-flex justify-content-between align-items-center">
                                      <a href=""className="eliminar">Eliminar</a>
                                      <a href=""className="me-gusta">Comentar</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
export default CommentPost;