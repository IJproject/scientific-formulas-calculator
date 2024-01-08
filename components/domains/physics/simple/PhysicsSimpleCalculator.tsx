'use client';

import React from "react";
import { PhysicsSimpleCalculatorConstants } from "@/components/domains/physics/simple/PhysicsSimpleCalculatorConstants";
import { PhysicsSimpleCalculatorForm } from "@/components/domains/physics/simple/PhysicsSimpleCalculatorForm";
import { PhysicsSimpleCalculatorDisplay } from "@/components/domains/physics/simple/PhysicsSimpleCalculatorDisplay";
import { PhysicsSimpleCalculatorResult } from "@/components/domains/physics/simple/PhysicsSimpleCalculatorResult";

export const PhysicsSimpleCalculator = () => {
  const [constants, setConstants] = React.useState([])

  return (
    <>
      <PhysicsSimpleCalculatorConstants />
      <PhysicsSimpleCalculatorForm />
      <PhysicsSimpleCalculatorDisplay />
      <PhysicsSimpleCalculatorResult />
    </>
  )
}