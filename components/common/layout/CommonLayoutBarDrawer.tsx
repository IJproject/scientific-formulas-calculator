'use client'

import React from 'react'
import { AppBarProps } from '@mui/material';
import { CommonLayoutBar } from '@/components/common/layout/CommonLayoutBar';
import { CommonLayoutDrawer } from '@/components/common/layout/CommonLayoutDrawer';

interface CommonLayoutBarDrawerProps {
  /**
   * AppBarの色
   */
  color: AppBarProps["color"]
  /**
   * ジャンル名(数学や物理など)が入る
   */
  title: string
}

export const CommonLayoutBarDrawer = (props: CommonLayoutBarDrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  return (
    <>
      <CommonLayoutBar color={props.color} title={props.title} handleOpen={() => setIsDrawerOpen(true)} />
      <CommonLayoutDrawer isOpen={isDrawerOpen} handleClose={() => setIsDrawerOpen(false)} />
    </>
  )
}