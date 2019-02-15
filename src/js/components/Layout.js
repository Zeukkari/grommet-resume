import React from 'react'

import { Grid, Box } from 'grommet'

export const TopLayout = ({ children }) => {
  return (
    <Grid
      fill
      areas={[
        { name: 'main', start: [0, 0], end: [1, 0] },
        { name: 'footer', start: [0, 1], end: [1, 1] },
      ]}
      columns={['flex']}
      rows={['flex', 'auto']}
      pad="none"
      margin="none"
      gap="none"
    >
      <Box gridArea="main">{children[0]}</Box>
      <Box gridArea="footer">{children[1]}</Box>
    </Grid>
  )
}

export const ContentColumn = ({ children }) => {
  return (
    <Box direction="column" pad="none" margin="none" gap="none">
      {children}
    </Box>
  )
}

const multiplier = 1.0
const pageSizeA4 = {
  height: `calc(${multiplier}*297mm)`,
  width: `calc(${multiplier}*210mm)`,
}

export const ResumeLayout = ({ children }) => {
  if (children && children.length && children.length != 2) {
    throw 'Invalid layout children'
  }

  return (
    <Box
      width={pageSizeA4.width}
      // height={pageSizeA4.height}
    >
      <Grid
        fill
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'content', start: [0, 1], end: [1, 1] },
        ]}
        rows={['auto', 'flex']}
        columns={['flex']}
        pad="none"
        margin="none"
        gap="none"
      >
        <Box gridArea="header">{children[0]}</Box>

        <Box gridArea="content">{children[1]}</Box>
      </Grid>
    </Box>
  )
}
