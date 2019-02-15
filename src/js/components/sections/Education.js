import React from 'react'
import { Box } from 'grommet'

import { formatDate } from '../common'
import { SectionTitle } from '../SectionTitle'
import { SecondaryTitle } from '../SecondaryTitle'
import { Highlights } from '../Highlights'
import { DateSection } from '../DateSection'
import { TagSection } from '../TagSection'
import { TagHeading } from '../TagHeading'

const EducationItem = ({ item }) => {
  const startDate = formatDate(item.startDate)
  const endDate = formatDate(item.endDate)
  return (
    <Highlights>
      <SectionTitle>{item.institution}</SectionTitle>
      <SecondaryTitle>
        {`
    ${item.studyType} / ${item.area}`}
      </SecondaryTitle>
      <Box direction="row">
        <DateSection>{`${startDate} - ${endDate}`}</DateSection>
      </Box>
      <TagHeading>{`gpa: ${item.gpa}`}</TagHeading>

      <TagSection tags={item.courses}> Courses </TagSection>
    </Highlights>
  )
}

export { EducationItem }
