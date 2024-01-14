'use client';

import React from "react";
import { DisplayResult } from "@/components/common/displays/DisplayResult";

interface PhysicsSimpleCalculatorResultProps {
  result: string
}

export const PhysicsSimpleCalculatorResult = (props: PhysicsSimpleCalculatorResultProps) => {
  return (
    <DisplayResult bgColor="success.pale" title="結果">
      {props.result}
    </DisplayResult>
  )
}