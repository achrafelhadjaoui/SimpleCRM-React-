import React from 'react';

const AjouterDetailsFacture = () => {
  return (
    <div>
      <h3>Ajouter les Détails de la Facture</h3>
      <form>
        <input type="text" placeholder="Nom du client" />
        <input type="date" placeholder="Date de la facture" />
        <button>Ajouter un article</button>
        <button disabled>Créer la facture</button>
      </form>
    </div>
  );
};

export default AjouterDetailsFacture;
