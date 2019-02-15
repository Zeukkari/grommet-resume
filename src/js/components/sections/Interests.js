import React from 'react'
import { Box } from 'grommet'

import { SectionTitle } from '../SectionTitle'
import { Highlights } from '../Highlights'
import { TagSection } from '../TagSection'

const Interest = ({ item }) => (
  <Highlights>
    <SectionTitle>{item.name}</SectionTitle>
    <Box>
      <TagSection tags={item.keywords}>Keywords</TagSection>
    </Box>
  </Highlights>
)

export { Interest }
