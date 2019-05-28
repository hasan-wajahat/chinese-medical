import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => (
  <div>
    {results.map(result => (
      <p key={result}>{result}</p>
    ))}
  </div>
);

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Results;
