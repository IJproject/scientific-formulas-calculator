"use client";

import React from "react";
import { Box, Button, Divider, Grid, Paper, Table, TableBody, TableCell, TableRow, TextField } from "@mui/material";

const sampleData = [
  {
    name: "重力加速度",
    symbol: "g",
    value: 9.8,
  },
  {
    name: "円周率",
    symbol: "π",
    value: 3.14,
  },
]

export const PhysicsSimpleCalculatorConstants = () => {
  return (
    <Paper>
      <Box p={4}>
        {/* 追加するUI */}
        <Box mb={2}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <TextField label='定数名' color="success" />
            </Grid>
            <Grid item>:</Grid>
            <Grid item>
              <TextField label='文字' color="success" />
            </Grid>
            <Grid item>=</Grid>
            <Grid item>
              <TextField label='値' color="success" />
            </Grid>
            <Grid item>
              <Button variant="contained" color="success">追加</Button>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        {/* 追加された定数リスト */}
        <Box mt={2}>
          <Table>
            <TableBody>
              {sampleData.map((data) => (
                <TableRow key={data.symbol}>
                  <TableCell component="td" scope="row" align="center">
                    {data.name}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {data.symbol}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {data.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Paper>
  );
};
