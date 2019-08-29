export const viderPanier = () => (
  {
    type: "VIDER_PANIER",// pas de convention de nom

  }
);

export const ajoutPanier = ({id, nom, prix}) => (
  {
    type: "AJOUT_PANIER",// pas de convention de nom
    id: id,
    nom: nom,
    prix: prix
  }
);