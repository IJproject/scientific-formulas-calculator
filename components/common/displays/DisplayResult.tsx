import React from 'react'
import { Box, Typography } from '@mui/material'

interface DisplayResultProps {
  /**
   * 背景色(success.paleなど)
   */
  bgColor?: string,
  /**
   * タイトル
   */
  title?: string,
  /**
   * 中身
   */
  children: React.ReactNode
}

export const DisplayResult = (props: DisplayResultProps) => {
  return (
    <Box p={1} sx={{ bgcolor: props.bgColor }}>
      <Typography variant='body2'>{props.title}</Typography>
      <Box p={1}>
        {props.children}
      </Box>
    </Box>
  )
}
