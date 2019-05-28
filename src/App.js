import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TopBar from './components/TopBar';
import MainTabs from './pages/main-tabs/MainTabs';
import SubmitBar from './components/SubmitBar';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    maxHeight: '100vh',
    margin: '20px auto',
  },
}));

function App() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Container className={classes.root}>
        <TopBar
          selected={value}
          onChange={setValue}
          position="static"
        />
        <MainTabs selectedTab={value} />
        <SubmitBar />
      </Container>
    </Provider>
  );
}

export default App;
