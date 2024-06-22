// import React, { Component } from 'react'
// import Test from './test';
// import Ingridients from './Ingridients';

// export class App extends Component {
//     constructor() {
//         super()
//         this.state = {count: 0,  ingredients : [
//           'ingredient1',
//           'ingredient2',
//           'ingredient3',
//           'ingredient4',
//           'ingredient5',
//           ]} ;
//         this.increment = this.increment.bind(this)

//     }

//     increment(){

//         this.setState({count: this.state.count + 1})
//     }
//     decrement = () => {
//         this.setState({count: this.state.count-1})
//     }
//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <Test increment={this.increment} decrement={this.decrement} count={this.state.count}/>
//         <Ingridients Ingridient={this.state.ingredients}/>
//       </div>
//     )
//   }
// }

// export default App

// import React, { Component } from "react";
// import Header from "./Header";
// import './Style.css'
// import CreeFacture from "./CreeFacture";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       creeFacture : {idFacture: '', dateFacture: '', factureA: ''},
//       factureList: {idFacture: '', client: '', montant_H_T: '', tva: '', montant_TTC: '', detailsFacture: ''}
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <CreeFacture />
//       </div>

//     )
//   }
// }

// export default App

// import React from 'react';
// import CreerFacture from './CreerFacture';
// import FactureList from './FactureList';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Application de Facturation</h1>
//         <CreerFacture />
//         <FactureList />
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import FactureList from "./FactureList";
import CreerFacture from "./CreerFacture";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "FactureList", // Initial state to show 'FactureList' component
    };

    this.showAjouterFacture = this.showAjouterFacture.bind(this);
    this.BackToLisit = this.BackToLisit.bind(this);
  }

  showAjouterFacture() {
    this.setState({ currentComponent: "CreerFacture" });
  }

  // back to facture list
  BackToLisit() {
    this.setState({currentComponent: "FactureList"})
  }
  // add Facture
  
  // add article

  // Ajouter nom de client

  render() {
    const { currentComponent } = this.state;

    return (
      <>
        {currentComponent === "FactureList" && <FactureList showAjouterFacture={this.showAjouterFacture} />}
        {currentComponent === "CreerFacture" && <CreerFacture BackToLisit={this.BackToLisit}/>}
      </>
    );
  }
}

export default App;

