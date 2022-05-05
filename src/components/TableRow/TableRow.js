import React from 'react';

const TableRow = ({product, handleDeleteItem, handleUpdateItem, handleSelectedItem}) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.supplier}</td>
            <td><button onClick={()=>handleDeleteItem(product._id)} className='btn btn-danger w-100'>Delete</button></td>
            <td><button onClick={()=>handleUpdateItem(product._id)} className='btn btn-success w-100'>Update</button></td>
            <td><button onClick={()=>handleSelectedItem(product._id)} className='btn btn-info w-100'>Select</button></td>
        </tr>
    );
};

export default TableRow;