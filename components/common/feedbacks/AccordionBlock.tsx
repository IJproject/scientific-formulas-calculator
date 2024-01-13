import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"

interface AccordionBlockProps {
  /**
   * アコーディオンの名前(一応付けとくだけ)
   */
  name: string
  /**
   * タイトルしたの説明文
   */
  title: string
  /**
   * wrapperの中身
   */
  content: React.ReactNode
}
 
export const AccordionBlock = (props: AccordionBlockProps) => {
  return (
    <Box mb={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls={props.name}
          id={props.name}
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props.content}
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}