import React from "react";
import FactureList from "./FactureList";
import CreerFacture from "./CreerFacture";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "FactureList", // Initial state to show 'FactureList' component
      creeFacture: { idFacture: "", dateFacture: "", factureA: "" },
    };

    this.showAjouterFacture = this.showAjouterFacture.bind(this);
    this.BackToLisit = this.BackToLisit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.AddFacture = this.AddFacture.bind(this);
  }

  showAjouterFacture() {
    this.setState({ currentComponent: "CreerFacture" });
  }

  // back to facture list
  BackToLisit() {
    this.setState({ currentComponent: "FactureList" });
  }
  // handle input changes
  handleInputChange(event) {
    const { name, value } = event.target;
    const updatedCreeFacture = this.state.creeFacture;
    updatedCreeFacture[name] = value;
    this.setState({ creeFacture: updatedCreeFacture });
  }

  // add Facture
  AddFacture() {
    const { idFacture, dateFacture, factureA } = this.state.creeFacture;
    if(!idFacture || !dateFacture || !factureA)
      alert("fill all the data!!!!!!!!!!")
    else
      console.log(`Adding Facture: ${idFacture}, ${dateFacture}, ${factureA}`);
    // Add your logic to handle the facture creation
  }

  // add article

  // Ajouter nom de client

  render() {
    const { currentComponent } = this.state;

    return (
        <>
          {currentComponent === "FactureList" && <FactureList showAjouterFacture={this.showAjouterFacture} />}
          {currentComponent === "CreerFacture" && (<CreerFacture BackToLisit={this.BackToLisit} handleInputChange={this.handleInputChange} creeFacture={this.state.creeFacture} AddFacture={this.AddFacture}/> )}
        </>
    );
  }
}

export default App;
