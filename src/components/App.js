import React from "react";
import FactureList from "./FactureList";
import CreerFacture from "./CreerFacture";

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
    };

    this.showAjouterFacture = this.showAjouterFacture.bind(this);
    this.BackToLisit = this.BackToLisit.bind(this);
    this.FactureInputChange = this.FactureInputChange.bind(this);
    this.AddFacture = this.AddFacture.bind(this);
    this.AddArticle = this.AddArticle.bind(this);
    this.ShowFacturesList = this.ShowFacturesList.bind(this);
    this.ArticleInputChange = this.ArticleInputChange.bind(this);
  }

  showAjouterFacture() {
    this.setState({ currentComponent: "CreerFacture" });
  }

  ShowFacturesList() {
    this.setState({ currentComponent: "FactureList" });
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

    if (!idFacture || !dateFacture || !factureA || !articles.length) {
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
        creeFacture: { idFacture: "", dateFacture: "", factureA: "",},
        facturesList: updatedFacturesList,
      });

      this.ShowFacturesList(); // Show the updated factures list
    }
  }

  // add article
  AddArticle() {
    const { Article, Quantite, Prix, Remise, Montant } = this.state.creeArticle;
    const { idFacture, dateFacture, factureA, articles } = this.state.creeFacture;
  
    if (!idFacture || !dateFacture || !factureA) {
      alert("Fill all the data!");
    } 
    else if (!Article || !Quantite || !Prix || !Remise || !Montant) {
      alert("Fill all the data!");
    } 
    else {
      // Add article
      const updatedArticleList = articles;
      updatedArticleList.push(this.state.creeArticle);
  
      this.setState({
        creeFacture: {
          idFacture: idFacture,
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
    const { currentComponent, facturesList } = this.state;

    return (
      <>
        {currentComponent === "FactureList" && (
          <FactureList
            showAjouterFacture={this.showAjouterFacture}
            factures={facturesList}
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
          />
        )}
      </>
    );
  }
}

export default App;
