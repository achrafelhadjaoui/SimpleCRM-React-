import React from "react";
import Article from "./Article";
import { BtnCreerArticle } from "./Buttons";

const ArticleList = () => {
  return (
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
            <th scope="col">Article</th>
            <th scope="col">Quantite</th>
            <th scope="col">Prix</th>
            <th scope="col">Remise</th>
            <th scope="col">Montant</th>
          </tr>
        </thead>
        <Article />
      </table>
      <BtnCreerArticle />
    </div>
  );
};

export default ArticleList;
