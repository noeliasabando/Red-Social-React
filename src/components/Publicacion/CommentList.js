import React, { Component } from "react";
import Comentarios from './Comentarios';


class CommentList extends Component{

    render(){
        return(
            <ul>
                {this.props.items.map(u  => {
                    return(
                        <Comentarios
                            key={Date.now(u)}
                            text={u.text}
                        />
                    );
                })}
            </ul>
        )
    }
}

export default CommentList;