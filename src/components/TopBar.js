import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab } from '@material-ui/core';

export default function TopBar({ selected, onChange }) {
  function handleChange(event, newValue) {
    onChange(newValue);
  }
  return (
    <AppBar style={{ marginTop: '20px' }} position="sticky" color="default">
      <Tabs
        value={selected}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
      >
        <Tab label="Complexion" />
        <Tab label="Body Movements" />
        <Tab label="Tongue" />
        <Tab label="Pulse" />
        <Tab label="Eyes" />
      </Tabs>
    </AppBar>
  );
}

TopBar.propTypes = {
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
