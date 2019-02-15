import React from 'react'

import { Box } from 'grommet'

export const SectionContent = ({ children }) => (
  <Box
    align="start"
    pad={{ left: '0px', right: '0px', top: '0px', bottom: '0px' }}
    margin={{ left: '0px', right: '0px', top: '0px', bottom: 'medium' }}
  >
    <Box
      fill={true}
      align="start"
      overflow="hidden"
      border={{ side: 'left', color: 'brand' }}
      elevation="none"
      round="none"
      gap="small"
      pad={{ left: 'medium' }}
      margin={{}}
    >
      <Box fill={true} flex={true}>
        {children}
      </Box>
    </Box>
  </Box>
)
