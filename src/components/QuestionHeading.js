import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  heading: {
    display: 'inline-block',
    position: 'relative',

    // for underline bar
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '3px',
      background: 'black',
      bottom: '-4px',
      left: '0',
    },
  },
}));

const QuestionHeading = ({ heading }) => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.heading}>
        {heading}
      </h2>
    </div>
  );
};

QuestionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default QuestionHeading;
