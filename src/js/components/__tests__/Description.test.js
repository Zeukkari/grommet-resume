import React from 'react'
import renderer from 'react-test-renderer'

import { Description } from '../Description'

test('renders description', () => {
  const component = renderer.create(<Description>test</Description>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
