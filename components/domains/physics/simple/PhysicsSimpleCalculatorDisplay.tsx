'use client';

import React from "react";
import { DisplayResult } from "@/components/common/displays/DisplayResult";

interface PhysicsSimpleCalculatorDisplayProps {
  formule: string
}

export const PhysicsSimpleCalculatorDisplay = (props: PhysicsSimpleCalculatorDisplayProps) => {
  return (
    <DisplayResult bgColor="success.lightpale" title="計算式">
      {props.formule}
    </DisplayResult>
  )
}