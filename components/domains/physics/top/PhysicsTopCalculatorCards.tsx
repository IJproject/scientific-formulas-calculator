import React from 'react'
import { PHYSICS_CALCULATOR_LIST } from '@/constants/domains/physics'
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material'


export const PhysicsTopCalculatorCards = () => {
  return (
    <Stack gap={1}>
      {PHYSICS_CALCULATOR_LIST.map((calculator) => (
        <Card key={calculator.id}>
          <CardActionArea href={calculator.href}>
            <CardContent>
              <Typography component="h4" variant="h5">{calculator.title}</Typography>
              <Typography component="span">{calculator.content}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  )
}
