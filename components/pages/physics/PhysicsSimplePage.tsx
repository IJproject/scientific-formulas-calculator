import React from "react";
import { PageContainer } from "@/components/common/wrappers/PageContainer";
import { AccordionBlock } from "@/components/common/feedbacks/AccordionBlock";
import { PhysicsSimpleInstructions } from "@/components/domains/physics/simple/PhysicsSimpleInstructions";
import { PhysicsSimpleCalculator } from "@/components/domains/physics/simple/PhysicsSimpleCalculator";

export const PhysicsSimplePage = () => {
  return (
    <PageContainer title="数値計算" description="式中の文字に数値を代入して計算をすることができます">
      <AccordionBlock
        name="instructions"
        title="使い方ガイド"
        content={<PhysicsSimpleInstructions />}
      />
      <PhysicsSimpleCalculator />
    </PageContainer>
  )
}