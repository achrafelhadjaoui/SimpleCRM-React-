import React from "react";

const Article = () => {
  return (
    // <div>
    //   <input type="text" placeholder="Article" />
    //   <input type="number" placeholder="Quantité" />
    //   <input type="number" placeholder="Prix" />
    //   <input type="number" placeholder="Remise" />
    //   <input type="number" placeholder="Montant" readOnly />
    // </div>

    <tbody>
      <tr>
        <th scope="row">
          <select
            className="selectpicker"
            data-style="btn-success"
            style={{ border: "none" }}
          >
            <option>Pizzas</option>
            <option>Burger</option>
            <option>Ice Cream</option>
            <option>Fried Potatoes</option>
          </select>
        </th>
        <td>
          <input
            type="text"
            className="form-control"
            id="factureA"
            name="factureA"
            // value={creeFacture.factureA}
            // onChange={handleInputChange}
            style={{ border: "none" }}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            id="factureA"
            name="factureA"
            // value={creeFacture.factureA}
            // onChange={handleInputChange}
            style={{ border: "none" }}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            id="factureA"
            name="factureA"
            // value={creeFacture.factureA}
            // onChange={handleInputChange}
            style={{ border: "none" }}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            id="factureA"
            name="factureA"
            // value={creeFacture.factureA}
            // onChange={handleInputChange}
            style={{ border: "none" }}
          />
        </td>
        {/* <td className="d-flex">
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
            </td> */}
      </tr>
    </tbody>
  );
};

export default Article;
