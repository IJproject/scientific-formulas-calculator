import React from 'react'
import { Box, Container, Typography } from '@mui/material';

interface PageContainerProps {
  /**
   * タイトル
   */
  title: string
  /**
   * タイトルしたの説明文
   */
  description?: string
  /**
   * wrapperの中身
   */
  children: React.ReactNode
}

export const PageContainer = (props: PageContainerProps) => {
  return (
    <Container maxWidth="xl">
      <Typography component="h3" variant="h4">{props.title}</Typography>
      <Typography component="span" ml={1} mt={1}>{props.description}</Typography>
      <Box px={2} py={3}>
        {props.children}
      </Box>
    </Container>
  )
}
