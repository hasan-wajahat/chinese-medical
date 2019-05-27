import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const GRID_WIDTH = { xs: 12, md: 6 };

const QuestionRow = ({ question, children }) => (
  <Grid container>
    <Grid item {...GRID_WIDTH}>
      {question}
    </Grid>
    <Grid item {...GRID_WIDTH}>
      {children}
    </Grid>
  </Grid>
);

QuestionRow.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default QuestionRow;
