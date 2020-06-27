import React, {useState, useEffect}from 'react';
import movies from './urls/getMovies';

import axios from 'axios';

import logomarvel from './assets/img/icons/marvel.svg';

import person1 from './assets/img/icons/alien.svg';
import person2 from './assets/img/icons/age.svg';
import person3 from './assets/img/icons/antihero.svg';
import person4 from './assets/img/icons/hero.svg';
import person5 from './assets/img/icons/human.svg';


import movie1 from './assets/img/movies/black-panther.png'

import './assets/css/App.css';
import './assets/css/sectionHeroes.css'
import './assets/css/responsividade.css'

const App = () => {
  return (
    <div className="app">
      <img src={logomarvel}></img>

      <div className="line-title"></div>
      <span>Bem vindo ao Marvel Heroes</span>
      <h1>Escolha o seu personagem</h1>

      <div className="section-favorites">
        <img src={person1} title="Alien" alt="Alien"></img>
        <img src={person2} title="Age" alt="Age"></img>
        <img src={person3} title="Anti-hero" alt="Anti-hero"></img>
        <img src={person4} title="Hero" alt="Hero"></img>
        <img src={person5} title="Human" alt="Human"></img>
      </div>

      <section id="movies-hero">

      <div className="line-info-hero">
        <h2>Heróis</h2>
        <h4>Ver tudo</h4>
      </div>
      

      <div className="movies-options">
        <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>
      </div>




      <div className="line-info-hero">
        <h2>Vilões</h2>
        <h4>Ver tudo</h4>
      </div>
      

      <div className="movies-options">
        <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>
      </div>




      <div className="line-info-hero">
        <h2>Anti-Heróis</h2>
        <h4>Ver tudo</h4>
      </div>
      

      <div className="movies-options">
        <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>
      </div>







      <div className="line-info-hero">
        <h2>Alienígenas</h2>
        <h4>Ver tudo</h4>
      </div>
      

      <div className="movies-options">
        <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>
      </div>




      <div className="line-info-hero">
        <h2>Humanos</h2>
        <h4>Ver tudo</h4>
      </div>
      

      <div className="movies-options">
        <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>

          <div className="movies-panel">
          <img src={movie1} />

            <span>Ator Principal</span>
            <strong>
              Description filme legal
            </strong>
          </div>
      </div>
        
        
      
      </section>
    </div>
  );
}

export default App;
