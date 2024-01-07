import React from "react";
import { Box } from "@mui/material";

export const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <div>
            {children}
            <Box>csacsa</Box>
        </div>
    </>
  )
}