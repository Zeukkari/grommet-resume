import React from 'react'

import { formatDate } from '../common'
import { SectionTitle } from '../SectionTitle'
import { SecondaryTitle } from '../SecondaryTitle'
import { Description } from '../Description'
import { Highlights } from '../Highlights'
import { DateSection } from '../DateSection'

const Award = ({ item }) => (
  <Highlights>
    <SectionTitle>{item.title}</SectionTitle>
    <SecondaryTitle>{item.awarder}</SecondaryTitle>
    <DateSection>{formatDate(item.date)}</DateSection>
    <Description>{item.summary}</Description>
  </Highlights>
)

export { Award }
