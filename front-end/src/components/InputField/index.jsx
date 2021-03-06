import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function InputField({
  labelName, type, name, id, value, onChange, dataTestId }) {
  return (
    <div className={ styles.inputContainer }>
      <label className={ styles.label } htmlFor={ id }>
        {labelName}
      </label>
      <input
        className={ styles.input }
        type={ type }
        name={ name }
        id={ id }
        value={ value }
        onChange={ onChange }
        data-testid={ dataTestId }
      />
    </div>
  );
}

InputField.propTypes = {
  labelName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataTestId: PropTypes.string,
}.isRequired;
