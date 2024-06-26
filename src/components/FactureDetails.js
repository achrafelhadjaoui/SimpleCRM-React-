import React from "react";

const FactureDetails = ({ facture, BackToLisit }) => (
  <div>
    <h2>Facture Details</h2>
    <button onClick={BackToLisit}>Back to List</button>
    <table>
      <thead>
        <tr>
          <th>Article</th>
          <th>Quantite</th>
          <th>Prix</th>
          <th>Remise</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody>
        {facture.articles.map((article, index) => (
          <tr key={index}>
            <td>{article.Article}</td>
            <td>{article.Quantite}</td>
            <td>{article.Prix}</td>
            <td>{article.Remise}</td>
            <td>{article.Montant}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default FactureDetails;
