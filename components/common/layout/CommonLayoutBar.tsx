'use client'

import React from 'react'
import {
  AppBar,
  AppBarProps,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import { Menu } from "@mui/icons-material";

interface CommonLayoutBarProps {
  /**
   * AppBarの色
   */
  color: AppBarProps["color"]
  /**
   * ジャンル名(数学や物理など)が入る
   */
  title: string
  /**
   * drawerを開くための関数
   */
  handleOpen: () => void
}

export const CommonLayoutBar = (props: CommonLayoutBarProps) => {
  return (
    <AppBar position="static" color={props.color} elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={props.handleOpen}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}