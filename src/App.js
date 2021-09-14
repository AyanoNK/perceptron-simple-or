import logo from './logo.svg';
import './App.css';
import {evaluate} from './utils/utils';
import { makeStyles, createStyles, Box, FormControlLabel, Checkbox, Button, Typography } from '@material-ui/core';

import {useState, useEffect} from 'react'

const useStyles = makeStyles(() => createStyles({
  root: {
    margin: 0,
    fontFamily: ['Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',],
    '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale'
  },
}));

function App() {

  const styles = useStyles();
  const [isZeroChecked, setIsZeroChecked] = useState(false);
  const [isOneChecked, setIsOneChecked] = useState(false);
  const [arrayCheck, setArrayCheck] = useState([]);

  const [neuronResult, setNeuronResult] = useState(0);

  const changeZero = () => {
    setIsZeroChecked(!isZeroChecked)
  }

  const changeOne = () => {
    setIsOneChecked(!isOneChecked)
  }

  const handleApply = () => {
    setArrayCheck([isZeroChecked, isOneChecked])
  }

  useEffect(() => {
    const result = evaluate(arrayCheck);
    setNeuronResult(result);
  }, [arrayCheck]);


  return (
    <Box className={styles.root}>
      <header className="App-header">
        <FormControlLabel
        control={
          <Checkbox
            checked={isZeroChecked}
            onChange={changeZero}
            name="checked_zero"
            color="primary"
          />
        }
        label="Zero"
      />
        <FormControlLabel
        control={
          <Checkbox
            checked={isOneChecked}
            onChange={changeOne}
            name="checked_one"
            color="secondary"
          />
        }
        label="Uno"
      />
      <Button variant="contained" color="primary" onClick={handleApply}>
        <Typography variant="h5">Enviar</Typography>
      </Button>
        <Typography variant="h5">
          {neuronResult}
        </Typography>
      </header>
    </Box>
  );
}

export default App;
