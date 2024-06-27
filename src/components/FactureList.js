import React from "react";
import Banner from "./Banner";
import { BtnCreerFacture } from "./Buttons";

const FactureList = (props) => {
  return (
    <>
      <Banner />
      <div className="container">
        <table
          className="table table-bordered table-dark mb-0"
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
            {props.factures.map((facture, index) => {
              const totalHT = props.calculateTotalAmount(facture.articles);
              const tva = props.calculateTVA(totalHT);
              const totalTTC = props.calculateTotalTTC(totalHT, tva);

              return (
                <tr key={index}>
                  <th>{facture.idFacture}</th>
                  <td>{facture.factureA}</td>
                  <td>{totalHT.toFixed(2)}</td>
                  <td>{tva.toFixed(2)}</td>
                  <td>{totalTTC.toFixed(2)}</td>
                  <td onClick={() => props.viewFacture(facture)}>View</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <BtnCreerFacture showAjouterFacture={props.showAjouterFacture} />
      </div>
    </>
  );
};

export default FactureList;
