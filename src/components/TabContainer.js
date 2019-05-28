import React from 'react';
import PropTypes from 'prop-types';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: 'white',
    flexGrow: 1,
    padding: '0 20px',
    overflowY: 'auto',
  },
}));

/**
 * Creates reusable tab container component for
 * different tabs
 */
export default function TabContainer({ children }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {children}
    </Paper>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
