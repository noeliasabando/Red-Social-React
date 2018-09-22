import React, { Component } from "react";
import Comentarios from './Comentarios';


class CommentList extends Component{

    render(){
        return(
            <ul>
                {this.props.items.map(u  => {
                    return(
                        <Comentarios
                            key={u.key}
                            text={u.text}
                            like={u.like}
                        />
                    );
                })}
            </ul>
        )
    }
}

export default CommentList;