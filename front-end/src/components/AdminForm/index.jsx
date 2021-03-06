import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import adminRegister from '../../services/adminRegister/adminRegister';
import {
  nameVerification,
  emailVerification,
  passwordVerification } from '../../services/loginAndRegister/validations';

import { CREATED_STATUS, CONFLICT_STATUS } from '../../utils/statusCodes';

export default function AdminForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/');
    }
  });

  useEffect(() => {
    if (
      nameVerification(name)
      && emailVerification(email)
      && passwordVerification(password, true)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password, role]);

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    document.getElementById('name').focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    await adminRegister({ name, email, password, role }, setStatus);

    clearForm();
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            value={ name }
            type="text"
            data-testid="admin_manage__input-name"
            placeholder="Nome e sobrenome"
            onChange={ (e) => setName(e.target.value) }
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            name="email"
            value={ email }
            type="email"
            data-testid="admin_manage__input-email"
            placeholder="seu-email@site.com.br"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            name="password"
            value={ password }
            type="password"
            data-testid="admin_manage__input-password"
            placeholder="********"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>

        <label htmlFor="userRole">
          Tipo:
          <select
            value={ role }
            name="userRole"
            data-testid="admin_manage__select-role"
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="admin">Administrador</option>
            <option value="customer">Consumidor</option>
            <option value="seller">Vendedor</option>
          </select>
        </label>

        <button
          disabled={ disabled }
          data-testid="admin_manage__button-register"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
      { status === CREATED_STATUS && <span>Usuario criado com sucesso</span> }
      { status === CONFLICT_STATUS && (
        <span
          data-testid="admin_manage__element-invalid-register"
        >
          Usuario ja existente
        </span>) }
    </div>
  );
}
