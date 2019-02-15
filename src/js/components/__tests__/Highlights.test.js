import React from 'react'
import renderer from 'react-test-renderer'

import { Highlights } from '../Highlights'

test('renders description', () => {
  const component = renderer.create(<Highlights>test</Highlights>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
