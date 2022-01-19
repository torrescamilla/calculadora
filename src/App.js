import React, { Component } from 'react';
import './main.css';

//Teste
class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      valorTela:"",
      resultado: 0,
      acumulador: 0,
      operacao: false,
    }
  }

  Tela(valor, res){
    return(
      <div className='tela'>
        <span className='tela-operacao'>{valor}</span>
        <span className='tela-resultado'>{res}</span>
      </div>
    )
  }
  Botao(label,onClick){
    return(
      <button className='botao' onClick={onClick}>{label}</button>
    )
  
  }
  
  addDigitalTela(digito){
    if ((digito=='+' || digito=='-' || digito=='*' || digito=='/') && this.state.operacao) {
      this.setState({
        ...this.state,
        operacao:false,
        valorTela: this.state.resultado + digito
      })
      return
    }
    if (this.state.operacao) {
      this.setState({
        ...this.state,
        operacao:false,
        valorTela: digito
      })
      return
    }
    this.setState({
      ...this.state,
      valorTela: this.state.valorTela + digito
    })
    return
  }
  limparTela(){
    this.setState({
      operacao:false,
      valorTela:"",
      resultado:0,
      acumulador: 0,
      })
  }
  operar(oper){
    if (oper=='bs'){
      let verTela=this.state.valorTela
      verTela=verTela.substring(
        0,(verTela.length-1)
      )
      this.setState({
        ...this.state,
        valorTela: verTela,
        operacao: false,
        })
    return
    }
    try {
      const r=eval(this.state.valorTela)
      this.setState({
        ...this.state,
        acumulador:r,
        resultado:r,
        operacao:true,
        }
      )
    } catch (error) {
      this.setState({
        ...this.state,
        resultado:'ERROR'
      })
    
    }
  }
  render() {

    return (
      
      <div className="container">
       <h3>Calculadora</h3>
       {this.Tela(this.state.valorTela, this.state.resultado)}
       <div className='botoes'>
         {this.Botao('AC',()=>this.limparTela())}
         {this.Botao('(',()=>this.addDigitalTela('('))}
         {this.Botao(')',()=>this.addDigitalTela(')'))}
         {this.Botao('/',()=>this.addDigitalTela('/'))}
         {this.Botao('7',()=>this.addDigitalTela('7'))}
         {this.Botao('8',()=>this.addDigitalTela('8'))}
         {this.Botao('9',()=>this.addDigitalTela('9'))}
         {this.Botao('*',()=>this.addDigitalTela('*'))}
         {this.Botao('4',()=>this.addDigitalTela('4'))}
         {this.Botao('5',()=>this.addDigitalTela('5'))}
         {this.Botao('6',()=>this.addDigitalTela('6'))}
         {this.Botao('-',()=>this.addDigitalTela('-'))}
         {this.Botao('1',()=>this.addDigitalTela('1'))}
         {this.Botao('2',()=>this.addDigitalTela('2'))}
         {this.Botao('3',()=>this.addDigitalTela('3'))}
         {this.Botao('+',()=>this.addDigitalTela('+'))}
         {this.Botao('0',()=>this.addDigitalTela('0'))}
         {this.Botao('.',()=>this.addDigitalTela('.'))}
         {this.Botao('C',()=>this.operar('bs'))}
         {this.Botao('=',()=>this.operar('='))}

       </div>
      </div>
    );
  }
}

export default App;