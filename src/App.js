import React, {Component} from 'react';
// import './App.css';
import Product from './Product';

class App extends Component {
    render() {
        return (
            <div className="row">
                <div className="col m4">
                    <h3 className="grey-text">Tambah Produk</h3>
                    <div className="card">
                        <form action="#" ref="form">
                            <div className="card-content">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Judul" id="judul" type="text"/>
                                        <label htmlFor="judul">Judul</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="keterangan" placeholder="Keterangan" type="text"/>
                                        <label htmlFor="keterangan">Keterangan</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons left">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col m8">
                    <div className="row">
                        <Product judul="Charger HP" keterangan="Lorem ipsum sit dolor amet"/>
                        <Product judul="Charger HP" keterangan="Lorem ipsum sit dolor amet"/>
                        <Product judul="Charger Laptop" keterangan="Lorem ipsum sit dolor amet"/>
                        <Product judul="Charger Motor" keterangan="Lorem ipsum sit dolor amet"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
