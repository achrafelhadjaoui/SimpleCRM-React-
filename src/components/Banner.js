import React from "react";

const Banner = (props) => {
    return (
        <div className="d-flex" style={{ backgroundColor: '#5D9C59' }}>
            <h2 className="ml-auto p-1" style={{ color: 'white' }}>Ajouter Facture</h2>
            <div className="ml-auto p-3" style={{ backgroundColor: 'red', color: 'white' }} onClick={props.BackToLisit}>
                X
            </div>
        </div>
    )
}

export default Banner;