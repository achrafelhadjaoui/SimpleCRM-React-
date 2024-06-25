import React from "react";

const Article = (props) => {
  const { Article, Quantite, Prix, Remise, Montant } = props.creeArticle;
  const { ArticleInputChange } = props;
  const { articles } = props.creeFacture;

  return (
    <tbody>
      {articles.map((article, index) => (
        <tr key={index}>
          <th scope="row">{article.Article}</th>
          <td>{article.Quantite}</td>
          <td>{article.Prix}</td>
          <td>{article.Remise}</td>
          <td>{article.Montant}</td>
        </tr>
      ))}
      <tr>
        <th scope="row">
          <select
            className="selectpicker"
            data-style="btn-success"
            id="Article"
            name="Article"
            value={Article}
            onChange={ArticleInputChange}
            style={{ border: "none" }}
          >
            <option value="">Select an option</option>
            <option value="Pizzas">Pizzas</option>
            <option value="Burger">Burger</option>
            <option value="Ice Cream">Ice Cream</option>
            <option value="Fried Potatoes">Fried Potatoes</option>
          </select>
        </th>
        <td>
          <input
            type="number"
            className="form-control"
            id="Quantite"
            name="Quantite"
            value={Quantite}
            onChange={ArticleInputChange}
            style={{ border: "none" }}
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            id="Prix"
            name="Prix"
            value={Prix}
            onChange={ArticleInputChange}
            style={{ border: "none" }}
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            id="Remise"
            name="Remise"
            value={Remise}
            onChange={ArticleInputChange}
            style={{ border: "none" }}
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            id="Montant"
            name="Montant"
            value={Montant}
            onChange={ArticleInputChange}
            style={{ border: "none" }}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default Article;
