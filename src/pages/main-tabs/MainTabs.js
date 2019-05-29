import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Complexion from './Complexion';

// shows selected tab, as set by top bar
const MainTabs = ({ selectedTab }) => (
  <Fragment>
    {selectedTab === 0 && (
      <Complexion tabValue={0} />
    )}
    {selectedTab === 1 && (
      <Complexion tabValue={1} />
    )}
    {selectedTab === 2 && (
      <Complexion tabValue={2} />
    )}
    {selectedTab === 3 && (
      <Complexion tabValue={3} />
    )}
    {selectedTab === 4 && (
      <Complexion tabValue={4} />
    )}
  </Fragment>
);

MainTabs.propTypes = {
  selectedTab: PropTypes.number.isRequired,
};

export default MainTabs;
