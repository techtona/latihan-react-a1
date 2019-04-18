import React from 'react';
import './Product.css';
import logo from './logo.svg';
import './App.css';

class Product extends React.Component {
    render() {
        return (
            <div className="box">
                <img src={logo} className="App-logo" alt="logo"/>
                <h3 className="ungu">{this.props.judul}</h3>
                <h5 className="orange">{this.props.harga}</h5>
                <button className="btn btn-blue">Tambah ke Keranjang</button>
            </div>
        );
    }
}

export default Product;