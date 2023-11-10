import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const NotFound = () => (
    <main className='principal not-found-container'>
        <div style={{ textAlign: 'center' }}>
            <img src="../imagens/images.jpg" alt="Error 404" className="not-found-image" />
            <h2>Erro 404 - Página não encontrada</h2>
            <p>
                A página que você está procurando não foi encontrada ou pode ter sido removida.
            </p>
            <Link to='/' style={{ display: 'block', marginTop: '20px', fontSize: '18px', textDecoration: 'none', color: 'blue' }}>
                Voltar para a Página Inicial
            </Link>
        </div>
    </main>
);

export default NotFound;
