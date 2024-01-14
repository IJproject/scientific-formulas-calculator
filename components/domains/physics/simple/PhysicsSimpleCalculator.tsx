'use client';

import React from "react";
import { AccordionBlock } from "@/components/common/feedbacks/AccordionBlock";
import { PhysicsSimpleCalculatorConstants } from "@/components/domains/physics/simple/PhysicsSimpleCalculatorConstants";
import { PhysicsSimpleCalculatorForm } from "@/components/domains/physics/simple/PhysicsSimpleCalculatorForm";
import { PhysicsSimpleCalculatorDisplay } from "@/components/domains/physics/simple/PhysicsSimpleCalculatorDisplay";
import { PhysicsSimpleCalculatorResult } from "@/components/domains/physics/simple/PhysicsSimpleCalculatorResult";
import { Stack, Paper } from "@mui/material";

export const PhysicsSimpleCalculator = () => {
  const [constants, setConstants] = React.useState([])
  const [formula, setFormula] = React.useState("")
  const [result, setResult] = React.useState("")
  const isCalculating = React.useState(false)
  const isFormatting = React.useState(false)

    setInterval(() => {
      setFormula('計算式')
      setResult('結果')
    }, 2000)

  return (
    <>
      <AccordionBlock
        name="constants"
        title="定数定義"
        defaultExpanded
        content={<PhysicsSimpleCalculatorConstants />}
      />
      <Paper>
        <Stack p={2} spacing={2}>
          <PhysicsSimpleCalculatorForm />
          <PhysicsSimpleCalculatorDisplay formule={formula} />
          <PhysicsSimpleCalculatorResult result={result} />
        </Stack>
      </Paper>
      
      
    </>
  )
}