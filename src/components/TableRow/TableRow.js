import React from 'react';

const TableRow = ({product, handleDeleteItem}) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.supplier}</td>
            <td><button onClick={()=>handleDeleteItem(product._id)} className='btn btn-danger w-100'>Delete</button></td>
        </tr>
    );
};

export default TableRow;