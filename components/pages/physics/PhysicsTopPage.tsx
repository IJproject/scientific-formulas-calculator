import React from "react";
import { PageContainer } from "@/components/common/wrappers/PageContainer";
import { AccordionBlock } from "@/components/common/feedbacks/AccordionBlock";
import { PhysicsTopInstructions } from "@/components/domains/physics/top/PhysicsTopInstructions";
import { PhysicsTopCalculatorCards } from "@/components/domains/physics/top/PhysicsTopCalculatorCards";

export const PhysicsTopPage = () => {
  return (
    <PageContainer title="物理" description="物理に関する計算を行うことができます">
      <AccordionBlock
        name="instructions"
        title="使い方ガイド"
        content={<PhysicsTopInstructions />}
      />
      <PhysicsTopCalculatorCards />
    </PageContainer>
  )
}