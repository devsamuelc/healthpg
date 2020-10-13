import React from 'react';

import '../styles/pages/about.css';
import '../styles/global.css'

import { Link } from 'react-router-dom';

function AboutPage(){
    return (
        <div id="page-about">
            <nav>
                <div className="nav-content">
                    <h1>E-Pastore</h1>
                    <div className="buttons">
                        <Link to="/main" style={{ textDecoration: 'none' }}><p>Categorias</p></Link>
                        <Link to="/about" style={{ textDecoration: 'none' }}><p className="selected">Sobre</p></Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}><p>Contato</p></Link>
                        <div className="dropdown">
                            <p>Produtos</p>
                                <div className="dropdown-content">
                                    <Link to="" style={{ textDecoration: 'none' }}><p>Fitness</p></Link>
                                    <Link to="" style={{ textDecoration: 'none' }}><p>Nutrição</p></Link>
                                    <Link to="" style={{ textDecoration: 'none' }}><p>Ervas Medicinais</p></Link>
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AboutPage;