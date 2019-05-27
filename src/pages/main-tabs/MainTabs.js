import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Complexion from './Complexion';

const MainTabs = ({ selectedTab }) => (
  <Fragment>
    {selectedTab === 0 && (
      <Complexion />
    )}
    {selectedTab === 1 && (
    <h1>bye</h1>
    )}
    {selectedTab === 2 && (
    <h1>no</h1>
    )}
  </Fragment>
);

MainTabs.propTypes = {
  selectedTab: PropTypes.number.isRequired,
};

export default MainTabs;
