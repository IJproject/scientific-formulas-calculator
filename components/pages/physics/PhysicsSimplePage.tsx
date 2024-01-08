import React from "react";
import { PhysicsSimpleInstructions } from "@/components/domains/physics/simple/PhysicsSimpleInstructions";
import { PhysicsSimpleCalculator } from "@/components/domains/physics/simple/PhysicsSimpleCalculator";

export const PhysicsSimplePage = () => {
  return (
    <>
      <PhysicsSimpleInstructions />
      <PhysicsSimpleCalculator />
    </>
  )
}