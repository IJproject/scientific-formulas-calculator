import React from "react";
import { CommonLayoutBarDrawer } from "@/components/common/layout/CommonLayoutBarDrawer";
import { AppBarProps, Box, Container } from "@mui/material";

interface CommonLayoutProps {
  /**
   * AppBarの色
   */
  color: AppBarProps["color"]
  /**
   * ジャンル名(数学や物理など)が入る
   */
  title: string
  /**
   * ページのメインコンテンツ(page.tsxの記述が入る)
   */
  children: React.ReactNode
}

export const CommonLayout = (props: CommonLayoutProps) => {
  return (
    <>
      <CommonLayoutBarDrawer color={props.color} title={props.title} />
      <Box component="main">
        <Container maxWidth="xl">
          <Box mt={4}>
            {props.children}
          </Box>
        </Container>
      </Box>
    </>
  )
}