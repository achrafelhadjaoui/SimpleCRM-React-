import React from 'react';

const AjouterClient = () => {
  return (
    <div>
      <h3>Ajouter un Client</h3>
      <form>
        <input type="text" placeholder="Nom du client" />
        <input type="text" placeholder="Adresse" />
        <input type="tel" placeholder="Téléphone" />
        <input type="email" placeholder="Email" />
      </form>
    </div>
  );
};

export default AjouterClient;
