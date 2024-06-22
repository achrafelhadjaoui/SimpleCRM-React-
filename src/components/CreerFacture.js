import React from "react";
import Banner from "./Banner";
import { BtnCreerArticle } from "./Buttons";

const CreerFacture = (props) => {
  return (
    <>
      <Banner BackToLisit={props.BackToLisit}/>
      <div className="mb-3">
        <div
          className="row p-5 justify-content-center align-items-center"
          style={{ backgroundColor: "white" }}
        >
          <div className="col-12 col-md-3 mb-3">
            <label htmlFor="firstName" className="form-label">
              First and last name
            </label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label htmlFor="secondName" className="form-label">
              First and last name
            </label>
            <input type="text" className="form-control" id="secondName" />
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label htmlFor="thirdName" className="form-label">
              First and last name
            </label>
            <input type="text" className="form-control" id="thirdName" />
          </div>
          <div className="col-12 col-md-3 mb-3 d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-success mt-2 mt-md-4"
              style={{ backgroundColor: "#5D9C59" }}
            >
              Success
            </button>
          </div>
        </div>
      </div>
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
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">16466485434165</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td className="d-flex">
                <div>
                  <button
                    type="button"
                    className="btn btn-success rounded-circle"
                    style={{ width: "40px", height: "40px", padding: "0" }}
                  >
                    <strong>+</strong>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-success rounded-circle"
                    style={{ width: "40px", height: "40px", padding: "0" }}
                  >
                    <strong>+</strong>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <BtnCreerArticle />
      </div>
    </>
  );
};

export default CreerFacture;
