import React from 'react';
import './EditProduct.css';
import CechyProduktu from './CechyProduktu';

function EditProduct() {
  const [productName, setProductName] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');

  return (
    <div>
      <input
        value={productName}
        placeholder="Product name"
        onChange={event => {
          setProductName(event.target.value);
        }}
      />

      <input
        value={productPrice}
        type="number"
        placeholder="Product price"
        onChange={event => {
          setProductPrice(event.target.value);
        }}
      />

      {productName && productName ? (
        <CechyProduktu name={productName} price={productPrice} />
      ) : null}
    </div>
  );
}
// class EditProduct extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { nazwa: '', cena: '' };

//     this.zmienNazwe = this.zmienNazwe.bind(this);
//     this.zmienCene = this.zmienCene.bind(this);
//   }

//   zmienNazwe(event) {
//     this.setState({ nazwa: event.target.value });
//   }
//   zmienCene(event) {
//     this.setState({ cena: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.nazwa}
//           onChange={this.zmienNazwe}
//           placeholder="Podaj nazwe"
//         />

//         <input
//           value={this.state.cena}
//           onChange={this.zmienCene}
//           placeholder="Podaj cene"
//         />
//         <CechyProduktu name={this.state.nazwa} price={this.state.cena} />
//       </div>
//     );
//   }
// }

export default EditProduct;
