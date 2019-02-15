import React from 'react'
import renderer from 'react-test-renderer'

import { Section } from '../Section'

test('renders section element', () => {
  const component = renderer.create(<Section>test</Section>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
