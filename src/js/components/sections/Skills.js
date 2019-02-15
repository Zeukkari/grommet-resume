import React from 'react'
import { Box } from 'grommet'

import { SecondaryTitle } from '../SecondaryTitle'
import { SectionTitle } from '../SectionTitle'
import { Highlights } from '../Highlights'
import { TagSection } from '../TagSection'

const Skill = ({ item }) => (
  <Highlights>
    <SectionTitle>{item.name}</SectionTitle>
    <Box>
      <SecondaryTitle>{`Level: ${item.level}`}</SecondaryTitle>
      <TagSection tags={item.keywords}>Keywords</TagSection>
    </Box>
  </Highlights>
)

export { Skill }
