import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    marginTop: "20px"
  },
  container: {
    width: "100%"
  }
}));

export default function Template({children}) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
        <span className={classes.container}>{children}</span>
    </Grid>
  );
}
