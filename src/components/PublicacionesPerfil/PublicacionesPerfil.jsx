import React, { Component } from 'react'
import PublicacionPerfil from '../PublicacionPerfil/PublicacionPerfil';

class PublicacionesPerfil extends Component {

  renderMensajes(){
    const mensajes = JSON.parse(localStorage.getItem('items'));
    return mensajes.map((mensaje)=>{
      return <PublicacionPerfil /* author={mensaje.key} */ text={mensaje.text} />
    })
  }

  render(){
    return(
      <div className='PublicacionesPerfil'>
        {this.renderMensajes()}
      </div>
    )
  }
}

export default PublicacionesPerfil