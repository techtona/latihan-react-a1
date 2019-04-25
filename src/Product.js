import React from 'react';
import logo from './logo.svg';

class Product extends React.Component {
    render() {
        return (
            <div className="col m4 s6">
                <div className="card">
                    <div className="card-image">
                        <img src={logo}/>
                        <br/><br/><br/><br/>
                        <span className="card-title grey-text"><b>{this.props.judul}</b></span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.keterangan}</p>
                    </div>
                    <div className="card-action">
                        <a onClick={this.props.hapusKartu} className="waves-effect waves-light red btn">Hapus
                            <i className="material-icons left">delete</i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;