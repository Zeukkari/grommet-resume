import React from 'react'

import { formatDate } from '../common'
import { SecondaryTitle } from '../SecondaryTitle'
import { Description } from '../Description'
import { Highlights } from '../Highlights'
import { SectionTitle } from '../SectionTitle'
import { DateSection } from '../DateSection'

const Publication = ({ item }) => (
  <Highlights>
    <SectionTitle>{item.name}</SectionTitle>
    <SecondaryTitle>{item.publisher}</SecondaryTitle>
    <DateSection>{formatDate(item.releaseDate)}</DateSection>
    <Description>{item.summary}</Description>
  </Highlights>
)

export { Publication }
