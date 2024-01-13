'use client'

import React from 'react'
import { CommonLayoutDrawerList } from '@/components/common/layout/CommonLayoutDrawerList';
import { FIRST_DRAWER_LIST, SECOND_DRAWER_LIST } from '@/constants/common';
import {
  Box,
  Divider,
  Drawer,
} from "@mui/material";

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

export const CommonLayoutDrawer = (props: CommonLayoutDrawerProps) => {
  return (
    <Drawer
      open={props.isOpen}
      onClose={props.handleClose}
    >
      <Box
        sx={{ width: 250 }}
      >
        <CommonLayoutDrawerList list={FIRST_DRAWER_LIST} />
        <Divider />
        <CommonLayoutDrawerList list={SECOND_DRAWER_LIST} />
      </Box>
    </Drawer>
  )
}