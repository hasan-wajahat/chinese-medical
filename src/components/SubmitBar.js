import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, makeStyles, Paper } from '@material-ui/core';
import Results from './Results';
import { clearProperties } from '../redux/actions';
import { getAnswers } from '../services/answers';

const useStyles = makeStyles(() => ({
  root: {
    padding: '20px',
    position: 'sticky',
    bottom: '20px',
    boxShadow: '0px -2px 5px 0px rgba(0,0,0,0.4)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 80px',
    marginRight: '20px',
    width: '120px',
    backgroundColor: '#6a6f756b',
    '@media (max-width: 960px)': {
      width: 'unset',
      padding: '10px 40px',
    },
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
    setResults([]);
  };

  return (
    <Paper className={classes.root}>
      <Results results={results} />
      <div className={classes.buttonContainer}>
        <Button onClick={onSubmit} className={classes.button}>
          Submit
        </Button>
        <Button onClick={onCancel} className={classes.button}>
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
  properties: state.properties.answers,
});

export default connect(
  mapStateToProps,
  { clearProperties },
)(SubmitBar);
