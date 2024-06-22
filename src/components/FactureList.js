import React from 'react';
import AjouterDetailsFacture from './AjouterDetailsFacture';
import ArticleList from './ArticleList';
import Banner from './Banner';
import {BtnCreerFacture} from "./Buttons";

const FactureList = (props) => {
  return (
    <>
      <Banner />
      <div className="container">
        <table className="table table-bordered table-darck mb-0" style={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
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
                  <button type="button" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', padding: '0' }}>
                    <strong>+</strong>
                  </button>
                </div>
                <div>
                  <button type="button" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', padding: '0' }}>
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
        <BtnCreerFacture showAjouterFacture={props.showAjouterFacture} />
      </div>
    </>
  );
};

export default FactureList;
