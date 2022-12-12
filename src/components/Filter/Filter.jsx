import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterLabel } from './Filter.styled';

const filterId = nanoid();

export const Filter = ({ value, onChange }) => {
  return (
  <FilterLabel htmlFor={filterId}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange} />
  </FilterLabel>)
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};