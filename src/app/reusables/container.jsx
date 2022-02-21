import React from "react";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    marginLeft: 72,
  },
  leftView: {
    boxShadow: "0px 0px 40px 0px rgba(204,204,204,0.50)",
    borderRadius: "5px",
    minHeight: "700px",
    height: "100%",
    marginLeft: "10px",
    position: "relative",
  },
  rightView: {
    boxShadow: "0px 0px 40px 0px rgba(204,204,204,0.50)",
    borderRadius: "5px",
    minHeight: "700px",
    height: "100%",
    marginRight: "10px",
  },
}));

export default function Container({ leftView, rightView }) {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item xs={7}>
        <Paper className={classes.leftView}>{leftView}</Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper className={classes.rightView}>{rightView}</Paper>
      </Grid>
    </Grid>
  );
}
