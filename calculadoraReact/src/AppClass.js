// COMPONENTE DE CLASSE (não é mais utilizado, pois é muito verboso)

import React, { Component } from "react";

export default class AppClass extends Component { // criar uma classe extendendo o component do react
    constructor(props) {
        // caso quisessemos passar propriedade para o nosso componente
        super(props);
        this.state = { counter: 0 }; // o estado inicial do componente, que sofre alteraçõe conforme açoes do usuário
        this.handleClick = this.handleClick.bind(this); // fazer um bind em todas as funções para o componente conhecer a funcao
    }

    handleClick() {
        // TODO
    }

    render() { // AQUI VAI RETORNAR O JSX
        return <div>Olá React!</div>;
    }
}