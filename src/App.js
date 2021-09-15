import "./App.css";
import { evaluate } from "./utils/utils";
import {
  makeStyles,
  createStyles,
  Box,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

import { useState, useEffect } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 0,
      fontFamily: [
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
      ],
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
    color: {
      color: "black",
    },
  })
);

function App() {
  const classes = useStyles();
  const [isZeroChecked, setIsZeroChecked] = useState("");
  const [isOneChecked, setIsOneChecked] = useState("");
  const [arrayCheck, setArrayCheck] = useState([]);

  const [neuronResult, setNeuronResult] = useState(0);
  const changeZero = (val) => {
    setIsZeroChecked(val);
  };

  const changeOne = (val) => {
    setIsOneChecked(val);
  };

  const handleApply = () => {
    setArrayCheck([isZeroChecked, isOneChecked]);
  };

  useEffect(() => {
    const result = evaluate(arrayCheck);
    setNeuronResult(result);
  }, [arrayCheck]);

  return (
    <Box className={classes.root}>
      <header className="App-header">
        <TextField
          id="filled-basic"
          label="Primer valor"
          type="number"
          variant="filled"
          className={classes.color}
          onChange={(event) => changeZero(event.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Segundo valor"
          type="number"
          variant="filled"
          className={classes.color}
          onChange={(event) => changeOne(event.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleApply}>
          <Typography variant="h5">Enviar</Typography>
        </Button>
        <Typography variant="h5" className={classes.color}>
          {neuronResult}
        </Typography>
      </header>
    </Box>
  );
}

export default App;
