import React, { useEffect, useState } from 'react';
import getAllUsers from '../../services/getUsersFromServer/getAllUsers';
import deleteRegister from '../../services/adminRegister/deleteRegister';
import styles from './styles.module.css';

export default function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => setUsers(data));
    // const userList = await getAllUsers();
    // setUsers(userList);
  }, []);

  const handleDelete = async (id) => {
    await deleteRegister(id);
  };

  // console.log('users', users);

  return (
    <table className={ styles.table__container }>
      <caption>Lista de usuários</caption>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody className={ styles.users__list }>
        { users && users.map((user, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `admin_manage__element-user-table-item-number-${index + 1}`
              }
            >
              { index }
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-name-${index + 1}` }
            >
              { user.name }
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-email-${index + 1}` }
            >
              { user.email }
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-role-${index + 1}` }
            >
              { user.role }
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-remove-${index + 1}` }
            >
              <button
                type="button"
                onClick={ () => handleDelete(user.id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}
