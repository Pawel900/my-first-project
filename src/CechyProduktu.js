import React from 'react';
import './CechyProduktu.css';

function CechyProduktu(props) {
  return (
    <div className="kontener">
      <h2 className="produkt">NazwaProduktu: {props.name} </h2>

      <h2 className={props.price < 100 ? 'cena' : 'cena2'}>
        CenaProduktu: {props.price} $
      </h2>
    </div>
  );
}

export default CechyProduktu;
