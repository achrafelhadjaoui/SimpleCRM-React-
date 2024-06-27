import React from "react";
import Banner from "./Banner";
import ArticleList from "./ArticleList";
import { v4 as uuidv4 } from 'uuid';

const CreerFacture = (props) => {
  const { idFacture, dateFacture, factureA } = props.creeFacture;
  console.log(idFacture)
  const { AddArticle } = props;
  return (
    <>
      <Banner BackToLisit={props.BackToLisit} />
      <div className="mb-3">
        <div
          className="row p-5 justify-content-center align-items-center"
          style={{ backgroundColor: "white" }}
        >
          <div className="col-12 col-md-3 mb-3">
            <label htmlFor="firstName" className="form-label">
              idFacture
            </label>
            <input
              type="text"
              className="form-control"
              id="idFacture"
              name="idFacture"
              value={uuidv4()}
              onChange={props.FactureInputChange}
            />
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label htmlFor="secondName" className="form-label">
              dateFacture
            </label>
            <input
              type="date"
              className="form-control"
              id="dateFacture"
              name="dateFacture"
              value={dateFacture}
              onChange={props.FactureInputChange}
            />
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label htmlFor="thirdName" className="form-label">
              factureA
            </label>
            <input
              type="text"
              className="form-control"
              id="factureA"
              name="factureA"
              value={factureA}
              onChange={props.FactureInputChange}
            />
          </div>
          <div className="col-12 col-md-3 mb-3 d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-success mt-2 mt-md-4"
              style={{ backgroundColor: "#5D9C59" }}
              onClick={props.AddFacture}
            >
              New
            </button>
          </div>
        </div>
      </div>
      <ArticleList
        AddArticle={AddArticle}
        creeArticle={props.creeArticle}
        ArticleInputChange={props.ArticleInputChange}
        creeFacture={props.creeFacture}
        MontanCount={props.MontanCount}
      />
    </>
  );
};

export default CreerFacture;
