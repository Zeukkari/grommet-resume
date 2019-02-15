import React from 'react'
import { Box } from 'grommet'

import { formatDate } from '../common'
import { Description } from '../Description'
import { Highlights } from '../Highlights'
import { SectionTitle } from '../SectionTitle'
import { DateSection } from '../DateSection'
import { TagSection } from '../TagSection'

const WorkItem = ({ item }) => {
  const startDate = formatDate(item.startDate)
  const endDate = formatDate(item.endDate)

  console.log('Highlights: ', Highlights)
  console.log('SectionTitle: ', SectionTitle)
  console.log('Box: ', Box)
  console.log('DateSection: ', DateSection)
  console.log('Description: ', Description)
  console.log('TagSection: ', TagSection)

  return (
    <Highlights>
      <SectionTitle>{item.company}</SectionTitle>
      <Box direction="row">
        <DateSection>{`${startDate} - ${endDate}`}</DateSection>
      </Box>
      <Description>{item.summary}</Description>
      <TagSection tags={item.highlights}>Highlights</TagSection>
    </Highlights>
  )
}

export { WorkItem }
