import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../db';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './product-list.css';

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Наименование',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'На складе', width: 200 },
    {
      field: 'status',
      headerName: 'Статус',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Цена',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Действия',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Изменить</button>
            </Link>
            <DeleteOutline
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
