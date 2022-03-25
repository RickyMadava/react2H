import "./styles.css";
import ReactDOM from "react-dom";
import React from "react";

class App extends React.Component {
  //clientInput = React.createRef();

  state = {
    clients: [
      { id: 1, nom: "Ricky Bertrand" },
      { id: 2, nom: "Monica Rafaratiana" },
      { id: 3, nom: "Kiady Ranaivoarimanana" }
    ],
    compteur: 0,
    nouveauClient: "aaaa"
  };

  handleClick = () => {
    const clients = this.state.clients.slice();
    clients.push({ id: 4, nom: "TEST TEST" });

    this.setState({ clients: clients });
  };

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => {
      return client.id === id;
    });

    clients.splice(index, 1);
    this.setState({ clients: clients });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.clientInput.current.value);
  };

  handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ nouveauClient: value });
    console.log(event.currentTarget.value);
  };

  render() {
    const title = "Liste des clients";

    const elements = this.state.clients.map((client) => {
      return (
        <li>
          {client.nom}
          <button
            onClick={() => {
              this.handleDelete(client.id);
            }}
          >
            X
          </button>
        </li>
      );
    });

    return (
      <div>
        <h1>{title}</h1>
        {this.state.compteur}
        <button onClick={this.handleClick}>Click me</button>
        <ul>{elements}</ul>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.nouveauClient}
            //ref={this.clientInput}
            type="text"
            placeholder="Ajouter un client"
          />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}
export default App;
