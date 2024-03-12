import React, { Component } from "react";
import './style.css';

class App extends (Component) {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao : 'Iniciar'
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.clear = this.clear.bind(this);
  }
  vai() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "Iniciar"
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
        state.botao = "Pausar"
      }, 100);
    }
    this.setState(state);
  }
  clear() {
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'Iniciar';
    this.setState(state);
  }
  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="botoes">
          <a className="botao" onClick={this.vai}>{this.state.botao}</a>
          <a className="botao" onClick={this.clear}>Limpar</a>
        </div>
      </div>
    );
  }
}

export default App;