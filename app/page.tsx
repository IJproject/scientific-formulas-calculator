import { CommonLayout } from "@/components/common/CommonLayout"

import { Button, Box } from "@mui/material";

export default function Page() {
  return (
    <>
      <CommonLayout>
        <Box component="main">
          <Button variant="contained">Hello World</Button>
        </Box>
      </CommonLayout>
    </>  
  )
}
