import React from 'react';

const TableRow = ({product}) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.supplier}</td>
            <td><button className='btn btn-danger w-100'>Delete</button></td>
        </tr>
    );
};

export default TableRow;