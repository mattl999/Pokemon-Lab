import React, { Component } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon/Pokemon";

class App extends Component {
  state = {
    P1HP: 100,
    P2HP: 100,
    status: "Fighters are Ready"
  };
  attack = (id) => {
    console.log(id)
    
   
    if (id) {
      console.log("hey")
      this.setState((state) => {
      

      return { ...state, P2HP: state.P2HP -5, status:"Chimchar is attacking"}
    })
    ;
     
    } else {
      // let newHP = this.state.P2HP - 5

      console.log("hey2")
      
      this.setState((state) => {
        
      return { ...state, P1HP:state.P1HP -5, status:"Piplup is attacking" }
    })
      // this.setState({ P2HP: 95 });
    }
  } 
  
  render() {
    return (
      <div className="App">
        <div className="pkmnContainer">
          <Pokemon
            name={"Chimchar"}
            id ={1}
            img={
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png"
            }
            hp={this.state.P1HP}
            attack={this.attack}
          />
          <Pokemon
            name={"Piplup"}
            img={
              "https://static.pokemonpets.com/images/monsters-images-800-800/393-Piplup.webp"
            }
            hp={this.state.P2HP}
            attack={this.attack}
          />
        </div>
        <h2 className="status">Status: {this.state.status}</h2>

      </div>
    );
  }
}

export default App;
