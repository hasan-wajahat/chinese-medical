import React from 'react';
// import PropTypes from 'prop-types';
import { Button, makeStyles, Paper } from '@material-ui/core';

const buttonStyle = {
  padding: '10px 80px',
  marginRight: '20px',
  width: '120px',
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
    backgroundColor: '#28bf4c',
  },
  CancelButton: {
    ...buttonStyle,
    backgroundColor: '#f97447',
  },
}));

const SubmitBar = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.buttonContainer}>
        <Button className={classes.SubmitButton}>
          Submit
        </Button>
        <Button className={classes.CancelButton}>
          Cancel
        </Button>
      </div>
    </Paper>
  );
};

SubmitBar.propTypes = {

};

export default SubmitBar;
