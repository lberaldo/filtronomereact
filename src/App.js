import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      items:[{
        id: 2,
        nome: 'ronaldo',
        funcao: 'goleiro',
      },{
        id: 3,
        nome: 'cassio',
        funcao: 'goleiro',
      },{id: 2,
        nome: 'menino neymar',
        funcao: 'mito',
      },],
      search: '',
      cSelect: 'Funcao'
    }
  }
    alterou = (digitou) =>{
      this.setState({
        search: digitou.target.value
      })
    };

    alterarFuncao = (event) =>{
      this.setState({
        cSelect: event.target.value
      })
    };

  render() {
    let ar= [];
    debugger;
    let filtrado = this.state.items.filter(item =>{
      if(this.state.cSelect == "Funcao"){
      return item.funcao.includes(this.state.search);
      }
      return item.nome.includes(this.state.search);
    });
    let funca = this.state.items.filter(ne => {
      if(!ar.includes(ne.funcao)){
        return ar.push(ne.funcao)
      }
        return ar
      });
    return (
      <div className="App">
      <ul>
        {
          this.state.cSelect == "Funcao" ?
          ar.map(item =>{
            return <li>{item}</li>            
          })
          :
          filtrado.map(item =>{
            return <li>{item.nome}</li>            
          })
        }
        </ul>
        <select onChange={this.alterarFuncao}>
          <option value={'Funcao'}>Funcao</option>
          <option value={'Nome'}>Nome</option>
          <option> </option>
          </select>
        <input type="text" value={this.state.search} onChange={this.alterou}/>
      </div>
    );
  }
}

export default App;
