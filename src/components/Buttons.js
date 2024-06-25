import React from 'react';

const BtnCreerFacture = (props) => {
  return (
    <div className="container d-flex justify-content-end mt-3">
          <button type="button" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', padding: '0' }} onClick={props.showAjouterFacture}>
            <strong>+</strong>
          </button>
    </div>
  );
};


const BtnCreerArticle = (props) => {
  const {AddArticle} = props
  return (
    <div className="container d-flex justify-content-end mt-3">
          <button type="button" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', padding: '0' }} onClick={AddArticle}>
            <strong>+</strong>
          </button>
    </div>
  );
};

export {BtnCreerFacture, BtnCreerArticle};
