import React from 'react'
import renderer from 'react-test-renderer'

import { SectionTitle } from '../SectionTitle'

test('renders section title element', () => {
  const component = renderer.create(<SectionTitle>test</SectionTitle>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
