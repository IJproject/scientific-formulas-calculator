'use client'

import React from 'react'
import { firstDrawerList, secondDrawerList } from '@/constants/common';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home } from "@mui/icons-material";

interface CommonLayoutDrawerProps {
  /**
   * drawerを開くかどうかの真偽値
   */
  isOpen: boolean
  /**
   * drawerを閉じるための関数
   */
  handleClose: () => void
}

interface DrawerListProps {
  id: number;
  name: string;
  icon: string;
}

const DrawerList = (props: {list: DrawerListProps[]}) => (
  <List>
    {props.list.map(item => (
      <ListItem key={item.id} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
)

export const CommonLayoutDrawer = (props: CommonLayoutDrawerProps) => {
  return (
    <Drawer
      open={props.isOpen}
      onClose={props.handleClose}
    >
      <Box
        sx={{ width: 250 }}
      >
        <DrawerList list={firstDrawerList} />
        <Divider />
        <DrawerList list={secondDrawerList} />
      </Box>
    </Drawer>
  )
}