import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
 
export const PhysicsSimpleInstructions = () => {
  return (
    <Box mb={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="instructions"
          id="instructions"
        >
          <Typography>使い方ガイド</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            使用可能な物理定数と関数を列挙する
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}