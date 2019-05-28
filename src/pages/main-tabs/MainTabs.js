import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Complexion from './Complexion';

// shows selected tab, as set by top bar
const MainTabs = ({ selectedTab }) => (
  <Fragment>
    {selectedTab === 0 && (
      <Complexion />
    )}
    {selectedTab === 1 && (
      <Complexion />
    )}
    {selectedTab === 2 && (
      <Complexion />
    )}
    {selectedTab === 3 && (
      <Complexion />
    )}
    {selectedTab === 4 && (
      <Complexion />
    )}
  </Fragment>
);

MainTabs.propTypes = {
  selectedTab: PropTypes.number.isRequired,
};

export default MainTabs;
