import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const GRID_WIDTH = { xs: 12, md: 6 };

/**
 * used in memoization, we only render component
 * if the passed value to the selectInput changes.
 * guarantees that only the changed question is re-rendered
 */
const isEqual = (previousProps, nextProps) => (
  previousProps.children.props.value === nextProps.children.props.value
);

// abstracts out grid container
const QuestionRow = memo(({ question, children }) => (
  <Grid container>
    <Grid item {...GRID_WIDTH}>
      {question}
    </Grid>
    <Grid item {...GRID_WIDTH}>
      {children}
    </Grid>
  </Grid>
), isEqual);

QuestionRow.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default QuestionRow;
