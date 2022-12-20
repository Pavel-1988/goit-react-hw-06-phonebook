import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
import { setFilter } from 'redux/FilterSlice';
import { nanoid } from 'nanoid';
import { FilterLabel } from './Filter.styled';



export const Filter = () => {

  const filter = useSelector(getStatusFilter)
  const dispatch = useDispatch();
  const filterId = nanoid();

  const changeFilter = (e) => {
    const event = e.currentTarget.value;
    dispatch(setFilter(event))
  }

  return (
    <FilterLabel htmlFor={filterId}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={changeFilter} />
    </FilterLabel>
  )
};
