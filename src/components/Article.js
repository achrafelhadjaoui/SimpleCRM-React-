import React from 'react';

const Article = () => {
  return (
    <div>
      <input type="text" placeholder="Article" />
      <input type="number" placeholder="Quantité" />
      <input type="number" placeholder="Prix" />
      <input type="number" placeholder="Remise" />
      <input type="number" placeholder="Montant" readOnly />
    </div>
  );
};

export default Article;
