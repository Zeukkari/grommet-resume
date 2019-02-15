import React from 'react'

import { SectionTitle } from '../SectionTitle'
import { Highlights } from '../Highlights'

const Language = ({ item }) => (
  <Highlights>
    <SectionTitle>{`${item.language}: ${item.fluency}`}</SectionTitle>
  </Highlights>
)

export { Language }
