import React from 'react'
import { Box } from 'grommet'

import { formatDate } from '../common'
import { SecondaryTitle } from '../SecondaryTitle'
import { Description } from '../Description'
import { Highlights } from '../Highlights'
import { SectionTitle } from '../SectionTitle'
import { DateSection } from '../DateSection'
import { TagSection } from '../TagSection'

const VolunteerItem = ({ item }) => {
  const startDate = formatDate(item.startDate)
  const endDate = formatDate(item.endDate)

  return (
    <Highlights>
      <SectionTitle>{item.organization}</SectionTitle>
      <SecondaryTitle>{item.position}</SecondaryTitle>
      <Box direction="row">
        <DateSection>{`${startDate} - ${endDate}`}</DateSection>
      </Box>
      <Description>{item.summary}</Description>
      <TagSection tags={item.highlights}>Highlights</TagSection>
    </Highlights>
  )
}

export { VolunteerItem }
