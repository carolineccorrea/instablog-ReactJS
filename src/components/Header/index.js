import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header container">
          <h1 className="header-logo">

          </h1>

          <form className="header-busca">
            <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo"/><input type="submit" value="Buscar" className="header-busca-submit"/>
          </form>


          <nav>
            <ul className="header-nav">
              <li className="header-nav-item">
                <a href="/#">
                  ♡
                  {/*                 ♥*/}
                  {/*Quem deu like nas minhas fotos?*/}
                </a>
              </li>
            </ul>
          </nav>
        </header>
            </div>
        );
    }
}



export default Header;