import React from "react";
import AjouterDetailsFacture from "./AjouterDetailsFacture";
import ArticleList from "./ArticleList";
import Banner from "./Banner";
import { BtnCreerFacture } from "./Buttons";

const FactureList = (props) => {
  return (
    <>
      <Banner />
      <div className="container">
        <table
          className="table table-bordered table-darck mb-0"
          style={{
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
          }}
        >
          <thead>
            <tr>
              <th scope="col">idFacture</th>
              <th scope="col">client</th>
              <th scope="col">MontantH.T</th>
              <th scope="col">TVA</th>
              <th scope="col">MonatantTTC</th>
              <th scope="col">DeatailFacture</th>
            </tr>
          </thead>
          <tbody>
            {props.factures.map((facture, index) => (
              <tr key={index}>
                <th>16466485434165</th>
                <td>{facture.idFacture}</td>
                <td>{facture.dateFacture}</td>
                <td>{facture.factureA}</td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <BtnCreerFacture showAjouterFacture={props.showAjouterFacture} />
      </div>
    </>
  );
};

export default FactureList;
