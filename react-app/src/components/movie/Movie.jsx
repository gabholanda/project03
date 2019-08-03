import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=''>
        <div className=''>
          <img className='' src='' alt='' />
          <h1 className=''>Titulo do Filme</h1>
          <p className=''>Drama</p>
          <p className=''>01:12</p>
          <button className=''>
            <Link to='www.google.com.br'>Traler</Link>
          </button>
        </div>
        <hr className='' />
        <div className=''>
          <h2 className=''>Sinopse</h2>
          <p className=''>
            Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis,
            bibendum egestas augue arcu ut est. Detraxit consequat et quo num
            tendi nada. Praesent vel viverra nisi. Mauris aliquet nunc non
            turpis scelerisque, eget. Aenean aliquam molestie leo, vitae iaculis
            nisl. Nec orci ornare consequat. Praesent lacinia ultrices
            consectetur. Sed non ipsum felis. Sapien in monti palavris qui num
            significa nadis i pareci latim. Casamentiss faiz malandris se
            pirulitá. In elementis mé pra quem é amistosis quis leo. A ordem dos
            tratores não altera o pão duris. Atirei o pau no gatis, per gatis
            num morreus. Posuere libero varius. Nullam a nisl ut ante blandit
            hendrerit. Aenean sit amet nisi. Leite de capivaris, leite de mula
            manquis sem cabeça.
          </p>
        </div>
        <hr className='' />
        <div>
          <h2 className=''>Eventos</h2>
          <div>
            <h3 className=''>02 / Agosto</h3>
            <h4 className=''>Tipo de atividade</h4>
            <h3 className=''>Título do evento</h3>
            <h5 className=''>Shopping Ibirapuera</h5>
            <button className=''>
              <Link to='www.google.com.br'>Saiba Mais</Link>
            </button>
          </div>
          <button className=''>
            <Link to='www.google.com.br'>+ Criar um evento</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Movie;
