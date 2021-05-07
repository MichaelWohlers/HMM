import React, { Component } from 'react';

/*const click = console.log("hello")

                   <td><button type="button" class="btn btn-light" onClick={click}>View</button>
                </td>*/
class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.itemNumber}
                </td>
                <td>
                    {this.props.obj.tradeName}
                </td>
                <td>
                    {this.props.obj.supplier}
                </td>
                <td>
                    {this.props.obj.supplierPartNumber}
                </td>
                
                
            </tr>
        );
    }
}

export default DataTable;