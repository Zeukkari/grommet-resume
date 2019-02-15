import React from 'react'

import { Box } from 'grommet'

import { SectionTitle } from './SectionTitle'
import { SectionContent } from './SectionContent'

export const Section = ({ title, content }) => (
  <Box
    flex
    basis="auto"
    pad={{ left: '0px', right: '0px', top: '0px', bottom: '0px' }}
    margin={{ left: '0px', right: '0px', top: 'small', bottom: 'medium' }}
  >
    <Box
      fill={true}
      align="baseline"
      overflow="hidden"
      elevation="none"
      round="none"
      gap="small"
      pad={{ left: 'xlarge', bottom: 'small' }}
      border={{}}
      margin={{}}
    >
      <Box fill={true} flex={true}>
        <Box margin={{ left: '35%' }}>
          <SectionTitle>{title}</SectionTitle>
          <SectionContent>{content}</SectionContent>
        </Box>
      </Box>
    </Box>
  </Box>
)
