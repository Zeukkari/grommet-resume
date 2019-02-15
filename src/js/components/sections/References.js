import React from 'react'

import { Description } from '../Description'
import { Highlights } from '../Highlights'
import { SectionTitle } from '../SectionTitle'

const Reference = ({ item }) => (
  <Highlights>
    <SectionTitle>{item.name}</SectionTitle>
    <Description>{item.reference}</Description>
  </Highlights>
)

export { Reference }
