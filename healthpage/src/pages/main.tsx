import React from 'react';
import '../styles/global.css'
import '../styles/pages/main.css';

import { Link } from 'react-router-dom';

function Main(){
    return(
        <div id="main-page">
            <nav>
                <div className="nav-content">
                    <h1>E-Pastore</h1>
                    <div className="buttons">
                        <Link to="/main" style={{ textDecoration: 'none' }}><p className="selected">Categorias</p></Link>
                        <Link to="/about" style={{ textDecoration: 'none' }}><p>Sobre</p></Link>
                        {/*<Link to="/contact" style={{ textDecoration: 'none' }}><p>Contato</p></Link>*/}
                        <div className="dropdown">
                            <p>Produtos</p>
                            <div className="dropdown-content">
                                    <Link to="/fitness" style={{ textDecoration: 'none' }}><p>Fitness</p></Link>
                                    <Link to="/nutrition" style={{ textDecoration: 'none' }}><p>Nutrição</p></Link>
                                    <Link to="/herbs" style={{ textDecoration: 'none' }}><p>Ervas Medicinais</p></Link>
                                    <Link to="/beauty" style={{ textDecoration: 'none' }}><p>Beleza e Estética</p></Link>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </nav>
            <div id="cover">
                <div className="cover-content">
                    <h1>A SAÚDE AGRADECE</h1>
                    <h5>O seu blog de dicas, informações e conhecimento geral sobre saúde e qualidade de vida.</h5>
                    <h5>Confira nossos artigos e produtos.</h5>
                    <Link to="/about" style={{ textDecoration: 'none' }}><p>Ver mais</p></Link>
                </div>
            </div>

            <div id="categories">
                <h1>CATEGORIAS</h1>
                <div id="category" className="fitness-cat">
                    <Link to="/fitness" style={{ textDecoration: 'none' }}><p>Quero dicas, artigos e produtos sobre <span>Fitness</span></p></Link>
                </div>
                <div id="category" className="nutrition-cat">
                    <Link to="/nutrition" style={{ textDecoration: 'none' }}><p>Quero dicas, artigos e produtos sobre <span>Nutrição</span></p></Link>
                </div>
                <div id="category" className="herbs-cat">
                    <Link to="/herbs" style={{ textDecoration: 'none' }}><p>Quero dicas, artigos e produtos sobre <span>Ervas Medicinais</span></p></Link>
                </div>
                <div id="category" className="beauty-cat">
                    <Link to="/beauty" style={{ textDecoration: 'none' }}><p>Quero dicas, artigos e produtos sobre <span>Beleza e Estética</span></p></Link>
                </div>
            </div>

            <footer>

            </footer>
        </div>
    )
}

export default Main;