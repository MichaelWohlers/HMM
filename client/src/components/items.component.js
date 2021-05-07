import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './itemData-table';

export default class Items extends Component {

    constructor(props) {
        super(props);
        this.state = { itemsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items')
            .then(res => {
                this.setState({ itemsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    dataTable() {
        return this.state.itemsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
            
        });
    }


    render() {
        return (
            <div className="wrapper-items">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>itemNumber</td>
                                <td>tradeName</td>
                                <td>supplier</td>
                                <td>supplierPartNumber</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}