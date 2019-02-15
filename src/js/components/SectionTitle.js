import React from 'react'

import { Heading } from 'grommet'

export const SectionTitle = ({ children }) => (
  <Heading
    level={3}
    margin={{ top: 'xxsmall', bottom: 'xsmall', left: '1px' }}
    pad={{ top: 'xsmall', bottom: 'xsmall' }}
  >
    {children}
  </Heading>
)
