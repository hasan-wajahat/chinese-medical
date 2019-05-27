import React from 'react';
import PropTypes from 'prop-types';
import { Select, makeStyles, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  baseRoot: {
    width: '100%',
  },
}));

const SelectInput = ({
  value,
  onChange,
  fieldKey,
  options,
  maxWidth,
  ...remainingProps
}) => {
  const classes = useStyles();
  return (
    <div style={maxWidth && { maxWidth: `${maxWidth}px` }}>
      <Select
        value={value}
        onChange={event => onChange(fieldKey, event.target.value)}
        className={classes.baseRoot}
        {...remainingProps}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

SelectInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  fieldKey: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  })).isRequired,
  maxWidth: PropTypes.number,
};

SelectInput.defaultProps = {
  value: '',
  maxWidth: null,
};

export default SelectInput;
