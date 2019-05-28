import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, makeStyles, Paper } from '@material-ui/core';
import Results from './Results';
import { clearProperties } from '../redux/actions';
import { getAnswers } from '../services/answers';

const buttonStyle = {
  padding: '10px 80px',
  marginRight: '20px',
  width: '120px',
  backgroundColor: '#6a6f756b',
};

const useStyles = makeStyles(() => ({
  root: {
    padding: '20px',
    position: 'sticky',
    bottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  SubmitButton: {
    ...buttonStyle,
  },
  CancelButton: {
    ...buttonStyle,
  },
}));

const SubmitBar = ({ properties, clearProperties: resetProperties }) => {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  const onSubmit = () => {
    setResults(getAnswers(properties));
  };

  const onCancel = () => {
    resetProperties();
    setResults(getAnswers({}));
  };

  return (
    <Paper className={classes.root}>
      <Results results={results} />
      <div className={classes.buttonContainer}>
        <Button onClick={onSubmit} className={classes.SubmitButton}>
          Submit
        </Button>
        <Button onClick={onCancel} className={classes.CancelButton}>
          Cancel
        </Button>
      </div>
    </Paper>
  );
};

SubmitBar.propTypes = {
  properties: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.any,
  }).isRequired,
  clearProperties: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  properties: state.properties,
});

export default connect(
  mapStateToProps,
  { clearProperties },
)(SubmitBar);
