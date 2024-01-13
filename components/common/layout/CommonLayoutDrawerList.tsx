import React from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home } from "@mui/icons-material";

interface DrawerListProps {
  id: number;
  name: string;
  icon: string;
}

export const CommonLayoutDrawerList = (props: {list: DrawerListProps[]}) => {
  return (
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
}