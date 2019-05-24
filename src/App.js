import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import './App.css';
import TopBar from './components/TopBar';
import MainTabs from './pages/main-tabs/MainTabs';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    margin: '20px auto',
  },
}));

function App() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <TopBar
        selected={value}
        onChange={setValue}
        position="static"
      />
      <MainTabs selectedTab={value} />
    </Container>
  );
}

export default App;
