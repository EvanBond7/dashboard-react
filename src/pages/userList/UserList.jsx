import './user-list.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../db';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'Пользователь',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='user-list-user'>
            <img className='user-list-img' src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Почта', width: 200 },
    {
      field: 'status',
      headerName: 'Статус',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Сумма',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Действие',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='user-list-edit'>Изменить</button>
            </Link>
            <DeleteOutline
              className='user-list-delete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='user-list'>
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
