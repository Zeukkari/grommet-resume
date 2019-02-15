import React from 'react'
import renderer from 'react-test-renderer'

import { TagSection } from '../TagSection'

test('renders tag heading element', () => {
  const component = renderer.create(<TagSection>test</TagSection>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
