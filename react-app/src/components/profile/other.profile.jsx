import React from "react";
// import { Link } from "react-router-dom";
import "./otheProfile.css";


const otherProfile = (props) => {
  return (
    <div className='friendProfile'>
    <div className="image">
    <img src={props.friend.image} alt =''/>
    </div>
    <div className="about">

      <h1>My name is {props.friend.name} </h1>
      <h3>Email</h3>
      <p>{props.friend.email}</p>

      <h3>Cidade</h3>
      {<p>{props.friend.city} </p> && props.friend.city}
      <h3>Sobre mim</h3>

      <p>{props.friend.about}}</p>

      <div className="about-info">
        <h3>Meu filme favorito é</h3>
      {<p>{props.friend.favoriteMovie}</p> && props.friend.favoriteMovie} 
        <h3>Hobbies</h3>
      {<p>{props.friend.hobbies}</p> && props.friend.hobbies}
        <h3>Lugar favorito</h3>
      {<p>{props.friend.favoritePlace}</p> && props.friend.favoritePlace}

      </div>

      <div class="my-events">
      <h1>Eventos Ativos</h1>
        <h3>tipo de atividade</h3>
        <h3>dia/mês</h3>
        <h3>título do evento</h3>
        <h4>local</h4>
        <button>Saiba Mais</button>

      </div>
    </div>
    </div>
  );
}
