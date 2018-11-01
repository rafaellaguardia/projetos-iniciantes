import React from 'react'

export default class Formulario extends React.Component {

  state = {
    firstName: '',
    secondName: '',
  };

  // função para setar o nome
  onChangeFirstName = (event) => {

    // recebemos como parâmetro o evento e então pegamos o valor do campo
    // com o valor do campo em mãos (event.target.value) valor falar pro nosso estado
    // que firstName tera o valor que pegamos do campo
    this.setState({ firstName: event.target.value });

  };

  // função para setar o sobrenome
  onChangeSecondName = (event) => {

    this.setState({ secondName: event.target.value });

  };

  // função pra setar o valor
  toggleShowFullName = () => {

    //o valor atual é ?
    const currentValue = this.state.showFullName;

    // setar no estar que o nome valor é o valor contrário ao atual
    // ou seja se atualmente for true irá setar false, e se atualmente for false irá setar true
    // por isso o !currentValue, mas isso é ensinado em lógica
    this.setState({ showFullName: !currentValue });

  };

  render(){

    return (
      <div>
        <div>
          <p>Seu nome por favor</p>
          {
            // atributo type fala que o campo é de texto
            // atributo value fala qual vai ser o valor do campo, vai ser o valor que está no estado
            // attributo onChange fala qual função será executada qual acontecer "onChange" no campo, ou seja mudar algum valor
          }
          <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} />
        </div>
        <div>
          <p>Seu sobrenome por favor</p>
          <input type="text" value={this.state.secondName} onChange={this.onChangeSecondName} />
        </div>

        {
          // atributo onClick passamos uma função pra ele, que vai ser chamada quando acontecer o click
        }
        <button onClick={this.toggleShowFullName}>Click neste botão e eu mostro seu nome</button>

        {
          // aqui é um código javascript
          // estamos verificando se showFullName é verdadeiro e então mostramos uma tag html
          // esse tipo de comparador chama-se "comparador ternário" é coisa básica da lógica
          this.state.showFullName && (
            <h3>
              Olá, {this.state.firstName}.<br />
              seu nome completo é {this.state.firstName} {this.state.secondName}
            </h3>
          )
        }

      </div>
    );

  }

}

// TODO
/*
Baseado nos campos de texto que você viu, seja criativo consigo mesmo e comece a pedir mais campos pro usuário,
quem sabe contar uma breve história ? Pedir o nome da mãe, do pai, o número de irmãos.

E sair escrevendo na tela Olá, XXX, seu nome completo é XXX YYYY. Você é filho de AAAA e BBBB, obrigado por me contar que tem XX irmãos.

Pode parecer uma tarefa boba, mas vai fixar muita coisa.
 */
