import React from 'react'
import renderer from 'react-test-renderer'

import { TagHeading } from '../TagHeading'

test('renders tag heading element', () => {
  const component = renderer.create(<TagHeading>test</TagHeading>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
