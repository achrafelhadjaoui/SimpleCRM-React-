import React from "react";
import FactureList from "./FactureList";
import CreerFacture from "./CreerFacture";

import FactureDetails from "./FactureDetails";
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facturesList: JSON.parse(localStorage.getItem("facturesList")) || [],
      currentComponent: "FactureList", // Initial state to show 'FactureList' component
      creeFacture: {
        idFacture: "",
        dateFacture: "",
        factureA: "",
        articles: [],
      },
      creeArticle: {
        Article: "",
        Quantite: "",
        Prix: "",
        Remise: "",
        Montant: "",
      },

      selectedFacture: null, // To store the facture to be viewed
    };

    this.showAjouterFacture = this.showAjouterFacture.bind(this);
    this.BackToLisit = this.BackToLisit.bind(this);
    this.FactureInputChange = this.FactureInputChange.bind(this);
    this.AddFacture = this.AddFacture.bind(this);
    this.AddArticle = this.AddArticle.bind(this);
    this.ShowFacturesList = this.ShowFacturesList.bind(this);
    this.ArticleInputChange = this.ArticleInputChange.bind(this);
    this.viewFacture = this.viewFacture.bind(this); // Bind the new method
    this.MontanCount = this.MontanCount.bind(this);
    this.calculateTotalAmount = this.calculateTotalAmount.bind(this);
    this.calculateTVA = this.calculateTVA.bind(this);
    this.calculateTotalTTC = this.calculateTotalTTC.bind(this);
  }

  showAjouterFacture() {
    this.setState({ currentComponent: "CreerFacture" });
  }

  ShowFacturesList() {
    this.setState({ currentComponent: "FactureList" });
  }

   // View facture details
   viewFacture(facture) {
    this.setState({ selectedFacture: facture, currentComponent: "FactureDetails" });
  }

  // Monatant count
  MontanCount(Quantite, Prix, Remise) {
    let res = Prix * Quantite;
    let toDecemal = Remise / 100;

    return (res = res * (1 - toDecemal))
  }

  // Montant H_T
  calculateTotalAmount(articles) {
    return articles.reduce((total, article) => {
      const { Quantite, Prix, Remise } = article;
      return total + this.MontanCount(Quantite, Prix, Remise);
    }, 0);
  }

  // Calculate TVA
  calculateTVA(totalAmount, tvaRate = 20) { // Assuming 20% TVA rate
    return (totalAmount * tvaRate) / 100;
  }

  // Calculate Total TTC
  calculateTotalTTC(totalAmount, tva) {
    return totalAmount + tva;
  }

  // back to facture list
  BackToLisit() {
    this.setState({ currentComponent: "FactureList" });
  }
  // handle  facture input changes
  FactureInputChange(event) {
    const { name, value } = event.target;
    const updatedCreeFacture = this.state.creeFacture;
    updatedCreeFacture[name] = value;
    this.setState({ creeFacture: updatedCreeFacture });
  }

  // handle  Article input changes
  ArticleInputChange(event) {
    const { name, value } = event.target;
    const updatedCreeArticle = this.state.creeArticle;
    updatedCreeArticle[name] = value;
    this.setState({ creeArticle: updatedCreeArticle });
  }

  // add Facture
  AddFacture() {
    const { idFacture, dateFacture, factureA, articles } = this.state.creeFacture;
    const { Article, Quantite, Prix, Remise, Montant } = this.state.creeArticle;

    if (!dateFacture || !factureA || !articles.length) {
      alert("fill all the data!!!!!!!!!!");
    } 
    // else if (!Article || !Quantite || !Prix || !Remise || !Montant) {
    //   alert("fill all the data!!!!!!!!!!");}
      else {
      //facture list
      const updatedFacturesList = this.state.facturesList;
      updatedFacturesList.push(this.state.creeFacture);
      localStorage.setItem("facturesList", JSON.stringify(updatedFacturesList));

      this.setState({
        creeFacture: { idFacture: "", dateFacture: "", factureA: "", articles: []},
        facturesList: updatedFacturesList,
      });

      this.ShowFacturesList(); // Show the updated factures list
    }
  }

  // add article
  AddArticle() {
    const { Article, Quantite, Prix, Remise, Montant } = this.state.creeArticle;
    const { idFacture, dateFacture, factureA, articles } = this.state.creeFacture;
  
    if (!dateFacture || !factureA) {
      alert("Fill all the data!");
    } 
    else if (!Article || !Quantite || !Prix || !Remise) {
      alert("Fill all the data!");
    } 
    else {
      // Add article
      const updatedArticleList = articles;
      updatedArticleList.push(this.state.creeArticle);
  
      this.setState({
        creeFacture: {
          idFacture: uuidv4(),
          dateFacture: dateFacture,
          factureA: factureA,
          articles: updatedArticleList,
        },
        creeArticle: {
          Article: "",
          Quantite: "",
          Prix: "",
          Remise: "",
          Montant: "",
        },
      });
    }
  }
  
  // Ajouter nom de client

  render() {
    const { currentComponent, facturesList, selectedFacture } = this.state;

    return (
      <>
        {currentComponent === "FactureList" && (
          <FactureList
            showAjouterFacture={this.showAjouterFacture}
            factures={facturesList} 
            viewFacture={this.viewFacture} // Pass the view method
            calculateTotalAmount={this.calculateTotalAmount}
            calculateTVA={this.calculateTVA} // Pass the calculateTVA function
            calculateTotalTTC={this.calculateTotalTTC} // Pass the calculateTotalTTC function
          />
        )}
        {currentComponent === "CreerFacture" && (
          <CreerFacture
            BackToLisit={this.BackToLisit}
            FactureInputChange={this.FactureInputChange}
            ArticleInputChange={this.ArticleInputChange}
            creeFacture={this.state.creeFacture}
            creeArticle={this.state.creeArticle}
            AddFacture={this.AddFacture}
            AddArticle={this.AddArticle}
            MontanCount={this.MontanCount}
          />
        )}
        {currentComponent === "FactureDetails" && (
          <FactureDetails
            facture={selectedFacture}
            BackToLisit={this.BackToLisit} // Pass the method to go back to the list
          />
        )}
      </>
    );
  }
}

export default App;
