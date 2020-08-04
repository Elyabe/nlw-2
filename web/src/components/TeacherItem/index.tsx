import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/27822179?s=460&u=483e56790d8c4e50e0f960205e7abe11a21f3631&v=4" alt="Elyabsson"/>
            <div>
                <strong>Elyabsson</strong>
                <span>Programação Orientada a Opressão</span>
            </div>
        </header>
        <p>
            "Faaaala, Dev!" (Sacou essa ref?) <br/> <br/>
             Quem sou eu? O que como? Onde (e se) durmo? Quando fiz o primeiro commit no branch errado? Hoje no Glo.. Não pera.

            Apenas um jovem testando uma nova feature. musical_note Vou ali, volto já, volto pra atualizaaar. musical_note 
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 40,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;