import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Container from "../reusables/container";
import MapChart from "./Mapchart";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  tableCell: {
    borderBottom: "none",
  },
}));

export default function EqMap() {
  const classes = useStyles();

  const [info, setInfo] = useState([]);
  const leftViewContent = (
    <>
      <MapChart setInfo={setInfo} />
    </>
  );
  const rightViewContent = (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow key={"title"}>
            <TableCell
              align={"justifyContent"}
              colSpan={2}
              component="th"
              scope="row"
            >
              {Object.entries(info).length > 0 && (
                <Typography variant="h4" component="div">
                  {"Information"}
                </Typography>
              )}
              {Object.entries(info).length === 0 && (
                <Typography variant="h5" component="div">
                  {"please hover over a feature point for information"}
                </Typography>
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(info).map(([name, text]) => (
            <TableRow key={name}>
              <TableCell
                component="th"
                scope="row"
                className={classes.tableCell}
              >
                {name}
              </TableCell>
              <TableCell align="left">{text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  return <Container leftView={leftViewContent} rightView={rightViewContent} />;
}
