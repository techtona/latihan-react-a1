import React, {Component} from 'react';
// import './App.css';
import Product from './Product';

class App extends Component {
    constructor(){
        super();
        this.state = {
            products : [
                {judul : 'Charger HP',keterangan : 'Lorem ipsum sit dolor amet 1'},
                {judul : 'Charger Laptop',keterangan : 'Lorem ipsum sit dolor amet 1'},
                {judul : 'Charger Powerbank',keterangan : 'Lorem ipsum sit dolor amet 1'},
                {judul : 'Charger Mobil',keterangan : 'Lorem ipsum sit dolor amet 1'},
            ]
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let judul = this.refs.judul.value;
        let keterangan = this.refs.keterangan.value;

        // console.log("keterangan = "+keterangan + " judul = " + judul);
        this.state.products.push({judul,keterangan});
        this.setState({products: this.state.products});

        this.refs.form.reset();
    }

    handleDelete = (key) => {
        // console.log(key);
        this.state.products.splice(key,1);
        this.setState({products: this.state.products});
    }

    render() {
        return (
            <div className="row">
                <div className="col m4">
                    <h3 className="grey-text">Tambah Produk</h3>
                    <div className="card">
                        <form ref="form" onSubmit={this.handleSubmit}>
                            <div className="card-content">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Judul" id="judul" ref="judul" type="text"/>
                                        <label htmlFor="judul">Judul</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="keterangan" placeholder="Keterangan" ref="keterangan" type="text"/>
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
                        {this.state.products.map((data,key) => {
                            return (
                                <Product hapusKartu={()=>this.handleDelete(key)} key={key} judul={data.judul} keterangan={data.keterangan} />
                            )
                        })}
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
