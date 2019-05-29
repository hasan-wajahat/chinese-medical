import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  AppBar, Tabs, Tab, makeStyles,
} from '@material-ui/core';
import { MdDone } from 'react-icons/md';

const useStyles = makeStyles(() => ({
  icon: {
    position: 'relative',
    top: '4px',
    marginLeft: '5px',
  },
}));

const TopBar = ({ selected, onChange, answeredTabs }) => {
  const classes = useStyles();

  function handleChange(event, newValue) {
    onChange(newValue);
  }

  const getLabel = (text, index) => (
    <span>
      {text}
      {!!answeredTabs.includes(index) && (
        <MdDone className={classes.icon} size={22} />
      )}
    </span>
  );

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
        <Tab label={getLabel('Complexion', 0)} />
        <Tab label={getLabel('Body Movements', 1)} />
        <Tab label={getLabel('Tongue', 2)} />
        <Tab label={getLabel('Pulse', 3)} />
        <Tab label={getLabel('Eyes', 4)} />
      </Tabs>
    </AppBar>
  );
};

TopBar.propTypes = {
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  answeredTabs: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
  answeredTabs: state.properties.answeredTabs,
});

export default connect(
  mapStateToProps,
)(TopBar);
