import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterValue = e.currentTarget.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <form className={css.form}>
      <div className={css.inputGroup}>
        <label className={css.filterLabel}>
          Find contacts by name
          <input
            className={css.filterInput}
            type="text"
            name="filter"
            placeholder="Enter name"
            value={filter}
            onChange={handleFilterChange}
            autoComplete="true"
          />
        </label>
      </div>
    </form>
  );
};
