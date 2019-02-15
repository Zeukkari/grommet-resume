import React from 'react'

import { Box } from 'grommet'

export const Highlights = ({ children }) => (
  <Box
    align="start"
    basis="auto"
    pad={{ left: '0px', right: '0px', top: '0px', bottom: '0px' }}
    margin={{ bottom: 'large', top: 'xsmall' }}
  >
    {children}
  </Box>
)
